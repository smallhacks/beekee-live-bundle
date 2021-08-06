(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var Accounts = Package['accounts-base'].Accounts;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var StatusInternals;

var require = meteorInstall({"node_modules":{"meteor":{"mizzao:user-status":{"server":{"status.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/mizzao_user-status/server/status.js                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
module.export({
  UserStatus: () => UserStatus,
  StatusInternals: () => StatusInternals
});
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 0);
let check, Match;
module.link("meteor/check", {
  check(v) {
    check = v;
  },

  Match(v) {
    Match = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 3);

let _;

module.link("meteor/underscore", {
  _(v) {
    _ = v;
  }

}, 4);
let EventEmitter;
module.link("events", {
  EventEmitter(v) {
    EventEmitter = v;
  }

}, 5);
const UserConnections = new Mongo.Collection('user_status_sessions', {
  connection: null
});
const statusEvents = new EventEmitter();
/*
  Multiplex login/logout events to status.online

  'online' field is "true" if user is online, and "false" otherwise

  'idle' field is tri-stated:
  - "true" if user is online and not idle
  - "false" if user is online and idle
  - null if user is offline
*/

statusEvents.on('connectionLogin', advice => {
  const update = {
    $set: {
      'status.online': true,
      'status.lastLogin': {
        date: advice.loginTime,
        ipAddr: advice.ipAddr,
        userAgent: advice.userAgent
      }
    }
  }; // unless ALL existing connections are idle (including this new one),
  // the user connection becomes active.

  const conns = UserConnections.find({
    userId: advice.userId
  }).fetch();

  if (!_.every(conns, c => c.idle)) {
    update.$set['status.idle'] = false;
    update.$unset = {
      'status.lastActivity': null
    };
  } // in other case, idle field remains true and no update to lastActivity.


  Meteor.users.update(advice.userId, update);
});
statusEvents.on('connectionLogout', advice => {
  const conns = UserConnections.find({
    userId: advice.userId
  }).fetch();

  if (conns.length === 0) {
    // Go offline if we are the last connection for this user
    // This includes removing all idle information
    Meteor.users.update(advice.userId, {
      $set: {
        'status.online': false
      },
      $unset: {
        'status.idle': null,
        'status.lastActivity': null
      }
    });
  } else if (_.every(conns, c => c.idle)) {
    /*
      All remaining connections are idle:
      - If the last active connection quit, then we should go idle with the most recent activity
       - If an idle connection quit, nothing should happen; specifically, if the
        most recently active idle connection quit, we shouldn't tick the value backwards.
        This may result in a no-op so we can be smart and skip the update.
    */
    if (advice.lastActivity != null) {
      return;
    } // The dropped connection was already idle


    Meteor.users.update(advice.userId, {
      $set: {
        'status.idle': true,
        'status.lastActivity': _.max(_.pluck(conns, 'lastActivity'))
      }
    });
  }
});
/*
  Multiplex idle/active events to status.idle
  TODO: Hopefully this is quick because it's all in memory, but we can use indices if it turns out to be slow

  TODO: There is a race condition when switching between tabs, leaving the user inactive while idle goes from one tab to the other.
  It can probably be smoothed out.
*/

statusEvents.on('connectionIdle', advice => {
  const conns = UserConnections.find({
    userId: advice.userId
  }).fetch();

  if (!_.every(conns, c => c.idle)) {
    return;
  } // Set user to idle if all the connections are idle
  // This will not be the most recent idle across a disconnection, so we use max
  // TODO: the race happens here where everyone was idle when we looked for them but now one of them isn't.


  Meteor.users.update(advice.userId, {
    $set: {
      'status.idle': true,
      'status.lastActivity': _.max(_.pluck(conns, 'lastActivity'))
    }
  });
});
statusEvents.on('connectionActive', advice => {
  Meteor.users.update(advice.userId, {
    $set: {
      'status.idle': false
    },
    $unset: {
      'status.lastActivity': null
    }
  });
}); // Reset online status on startup (users will reconnect)

const onStartup = selector => {
  if (selector == null) {
    selector = {};
  }

  return Meteor.users.update(selector, {
    $set: {
      'status.online': false
    },
    $unset: {
      'status.idle': null,
      'status.lastActivity': null
    }
  }, {
    multi: true
  });
};
/*
  Local session modification functions - also used in testing
*/


const addSession = connection => {
  UserConnections.upsert(connection.id, {
    $set: {
      ipAddr: connection.clientAddress,
      userAgent: connection.httpHeaders['user-agent']
    }
  });
};

const loginSession = (connection, date, userId) => {
  UserConnections.upsert(connection.id, {
    $set: {
      userId,
      loginTime: date
    }
  });
  statusEvents.emit('connectionLogin', {
    userId,
    connectionId: connection.id,
    ipAddr: connection.clientAddress,
    userAgent: connection.httpHeaders['user-agent'],
    loginTime: date
  });
}; // Possibly trigger a logout event if this connection was previously associated with a user ID


const tryLogoutSession = (connection, date) => {
  let conn;

  if ((conn = UserConnections.findOne({
    _id: connection.id,
    userId: {
      $exists: true
    }
  })) == null) {
    return false;
  } // Yes, this is actually a user logging out.


  UserConnections.upsert(connection.id, {
    $unset: {
      userId: null,
      loginTime: null
    }
  });
  return statusEvents.emit('connectionLogout', {
    userId: conn.userId,
    connectionId: connection.id,
    lastActivity: conn.lastActivity,
    // If this connection was idle, pass the last activity we saw
    logoutTime: date
  });
};

const removeSession = (connection, date) => {
  tryLogoutSession(connection, date);
  UserConnections.remove(connection.id);
};

const idleSession = (connection, date, userId) => {
  UserConnections.update(connection.id, {
    $set: {
      idle: true,
      lastActivity: date
    }
  });
  statusEvents.emit('connectionIdle', {
    userId,
    connectionId: connection.id,
    lastActivity: date
  });
};

const activeSession = (connection, date, userId) => {
  UserConnections.update(connection.id, {
    $set: {
      idle: false
    },
    $unset: {
      lastActivity: null
    }
  });
  statusEvents.emit('connectionActive', {
    userId,
    connectionId: connection.id,
    lastActivity: date
  });
};
/*
  Handlers for various client-side events
*/


Meteor.startup(onStartup); // Opening and closing of DDP connections

Meteor.onConnection(connection => {
  addSession(connection);
  return connection.onClose(() => removeSession(connection, new Date()));
}); // Authentication of a DDP connection

Accounts.onLogin(info => loginSession(info.connection, new Date(), info.user._id)); // pub/sub trick as referenced in http://stackoverflow.com/q/10257958/586086
// We used this in the past, but still need this to detect logouts on the same connection.

Meteor.publish(null, function () {
  // Return null explicitly if this._session is not available, i.e.:
  // https://github.com/arunoda/meteor-fast-render/issues/41
  if (this._session == null) {
    return [];
  } // We're interested in logout events - re-publishes for which a past connection exists


  if (this.userId == null) {
    tryLogoutSession(this._session.connectionHandle, new Date());
  }

  return [];
}); // We can use the client's timestamp here because it was sent from a TimeSync
// value, however we should never trust it for something security dependent.
// If timestamp is not provided (probably due to a desync), use server time.

Meteor.methods({
  'user-status-idle'(timestamp) {
    check(timestamp, Match.OneOf(null, undefined, Date, Number));
    const date = timestamp != null ? new Date(timestamp) : new Date();
    idleSession(this.connection, date, this.userId);
  },

  'user-status-active'(timestamp) {
    check(timestamp, Match.OneOf(null, undefined, Date, Number)); // We only use timestamp because it's when we saw activity *on the client*
    // as opposed to just being notified it. It is probably more accurate even if
    // a dozen ms off due to the latency of sending it to the server.

    const date = timestamp != null ? new Date(timestamp) : new Date();
    activeSession(this.connection, date, this.userId);
  }

}); // Exported variable

const UserStatus = {
  connections: UserConnections,
  events: statusEvents
};
const StatusInternals = {
  onStartup,
  addSession,
  removeSession,
  loginSession,
  tryLogoutSession,
  idleSession,
  activeSession
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/mizzao:user-status/server/status.js");

/* Exports */
Package._define("mizzao:user-status", exports, {
  StatusInternals: StatusInternals
});

})();

//# sourceURL=meteor://💻app/packages/mizzao_user-status.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvbWl6emFvOnVzZXItc3RhdHVzL3NlcnZlci9zdGF0dXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0IiwiVXNlclN0YXR1cyIsIlN0YXR1c0ludGVybmFscyIsIkFjY291bnRzIiwibGluayIsInYiLCJjaGVjayIsIk1hdGNoIiwiTWV0ZW9yIiwiTW9uZ28iLCJfIiwiRXZlbnRFbWl0dGVyIiwiVXNlckNvbm5lY3Rpb25zIiwiQ29sbGVjdGlvbiIsImNvbm5lY3Rpb24iLCJzdGF0dXNFdmVudHMiLCJvbiIsImFkdmljZSIsInVwZGF0ZSIsIiRzZXQiLCJkYXRlIiwibG9naW5UaW1lIiwiaXBBZGRyIiwidXNlckFnZW50IiwiY29ubnMiLCJmaW5kIiwidXNlcklkIiwiZmV0Y2giLCJldmVyeSIsImMiLCJpZGxlIiwiJHVuc2V0IiwidXNlcnMiLCJsZW5ndGgiLCJsYXN0QWN0aXZpdHkiLCJtYXgiLCJwbHVjayIsIm9uU3RhcnR1cCIsInNlbGVjdG9yIiwibXVsdGkiLCJhZGRTZXNzaW9uIiwidXBzZXJ0IiwiaWQiLCJjbGllbnRBZGRyZXNzIiwiaHR0cEhlYWRlcnMiLCJsb2dpblNlc3Npb24iLCJlbWl0IiwiY29ubmVjdGlvbklkIiwidHJ5TG9nb3V0U2Vzc2lvbiIsImNvbm4iLCJmaW5kT25lIiwiX2lkIiwiJGV4aXN0cyIsImxvZ291dFRpbWUiLCJyZW1vdmVTZXNzaW9uIiwicmVtb3ZlIiwiaWRsZVNlc3Npb24iLCJhY3RpdmVTZXNzaW9uIiwic3RhcnR1cCIsIm9uQ29ubmVjdGlvbiIsIm9uQ2xvc2UiLCJEYXRlIiwib25Mb2dpbiIsImluZm8iLCJ1c2VyIiwicHVibGlzaCIsIl9zZXNzaW9uIiwiY29ubmVjdGlvbkhhbmRsZSIsIm1ldGhvZHMiLCJ0aW1lc3RhbXAiLCJPbmVPZiIsInVuZGVmaW5lZCIsIk51bWJlciIsImNvbm5lY3Rpb25zIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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RyxrQkFMNkI7QUFNN0JRLGFBTjZCO0FBTzdCQztBQVA2QixDQUF4QixDIiwiZmlsZSI6Ii9wYWNrYWdlcy9taXp6YW9fdXNlci1zdGF0dXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBBcHBhcmVudGx5LCB0aGUgbmV3IGFwaS5leHBvcnQgdGFrZXMgY2FyZSBvZiBpc3N1ZXMgaGVyZS4gTm8gbmVlZCB0byBhdHRhY2ggdG8gZ2xvYmFsIG5hbWVzcGFjZS5cbiAgU2VlIGh0dHA6Ly9zaGlnZ3llbnRlcnByaXNlcy53b3JkcHJlc3MuY29tLzIwMTMvMDkvMDkvbWV0ZW9yLXBhY2thZ2VzLWluLWNvZmZlZXNjcmlwdC0wLTYtNS9cblxuICBXZSBtYXkgd2FudCB0byBtYWtlIFVzZXJTZXNzaW9ucyBhIHNlcnZlciBjb2xsZWN0aW9uIHRvIHRha2UgYWR2YW50YWdlIG9mIGluZGljZXMuXG4gIFdpbGwgaW1wbGVtZW50IGlmIHNvbWVvbmUgaGFzIGVub3VnaCBvbmxpbmUgdXNlcnMgdG8gd2FycmFudCBpdC5cbiovXG5pbXBvcnQgeyBBY2NvdW50cyB9IGZyb20gJ21ldGVvci9hY2NvdW50cy1iYXNlJztcbmltcG9ydCB7IGNoZWNrLCBNYXRjaCB9IGZyb20gJ21ldGVvci9jaGVjayc7XG5pbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCB7IF8gfSBmcm9tICdtZXRlb3IvdW5kZXJzY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuXG5jb25zdCBVc2VyQ29ubmVjdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigndXNlcl9zdGF0dXNfc2Vzc2lvbnMnLCB7XG4gIGNvbm5lY3Rpb246IG51bGxcbn0pO1xuXG5jb25zdCBzdGF0dXNFdmVudHMgPSBuZXcoRXZlbnRFbWl0dGVyKSgpO1xuXG4vKlxuICBNdWx0aXBsZXggbG9naW4vbG9nb3V0IGV2ZW50cyB0byBzdGF0dXMub25saW5lXG5cbiAgJ29ubGluZScgZmllbGQgaXMgXCJ0cnVlXCIgaWYgdXNlciBpcyBvbmxpbmUsIGFuZCBcImZhbHNlXCIgb3RoZXJ3aXNlXG5cbiAgJ2lkbGUnIGZpZWxkIGlzIHRyaS1zdGF0ZWQ6XG4gIC0gXCJ0cnVlXCIgaWYgdXNlciBpcyBvbmxpbmUgYW5kIG5vdCBpZGxlXG4gIC0gXCJmYWxzZVwiIGlmIHVzZXIgaXMgb25saW5lIGFuZCBpZGxlXG4gIC0gbnVsbCBpZiB1c2VyIGlzIG9mZmxpbmVcbiovXG5zdGF0dXNFdmVudHMub24oJ2Nvbm5lY3Rpb25Mb2dpbicsIChhZHZpY2UpID0+IHtcbiAgY29uc3QgdXBkYXRlID0ge1xuICAgICRzZXQ6IHtcbiAgICAgICdzdGF0dXMub25saW5lJzogdHJ1ZSxcbiAgICAgICdzdGF0dXMubGFzdExvZ2luJzoge1xuICAgICAgICBkYXRlOiBhZHZpY2UubG9naW5UaW1lLFxuICAgICAgICBpcEFkZHI6IGFkdmljZS5pcEFkZHIsXG4gICAgICAgIHVzZXJBZ2VudDogYWR2aWNlLnVzZXJBZ2VudFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyB1bmxlc3MgQUxMIGV4aXN0aW5nIGNvbm5lY3Rpb25zIGFyZSBpZGxlIChpbmNsdWRpbmcgdGhpcyBuZXcgb25lKSxcbiAgLy8gdGhlIHVzZXIgY29ubmVjdGlvbiBiZWNvbWVzIGFjdGl2ZS5cbiAgY29uc3QgY29ubnMgPSBVc2VyQ29ubmVjdGlvbnMuZmluZCh7XG4gICAgdXNlcklkOiBhZHZpY2UudXNlcklkXG4gIH0pLmZldGNoKCk7XG4gIGlmICghXy5ldmVyeShjb25ucywgYyA9PiBjLmlkbGUpKSB7XG4gICAgdXBkYXRlLiRzZXRbJ3N0YXR1cy5pZGxlJ10gPSBmYWxzZTtcbiAgICB1cGRhdGUuJHVuc2V0ID0ge1xuICAgICAgJ3N0YXR1cy5sYXN0QWN0aXZpdHknOiBudWxsXG4gICAgfTtcbiAgfVxuICAvLyBpbiBvdGhlciBjYXNlLCBpZGxlIGZpZWxkIHJlbWFpbnMgdHJ1ZSBhbmQgbm8gdXBkYXRlIHRvIGxhc3RBY3Rpdml0eS5cblxuICBNZXRlb3IudXNlcnMudXBkYXRlKGFkdmljZS51c2VySWQsIHVwZGF0ZSk7XG59KTtcblxuc3RhdHVzRXZlbnRzLm9uKCdjb25uZWN0aW9uTG9nb3V0JywgKGFkdmljZSkgPT4ge1xuICBjb25zdCBjb25ucyA9IFVzZXJDb25uZWN0aW9ucy5maW5kKHtcbiAgICB1c2VySWQ6IGFkdmljZS51c2VySWRcbiAgfSkuZmV0Y2goKTtcbiAgaWYgKGNvbm5zLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIEdvIG9mZmxpbmUgaWYgd2UgYXJlIHRoZSBsYXN0IGNvbm5lY3Rpb24gZm9yIHRoaXMgdXNlclxuICAgIC8vIFRoaXMgaW5jbHVkZXMgcmVtb3ZpbmcgYWxsIGlkbGUgaW5mb3JtYXRpb25cbiAgICBNZXRlb3IudXNlcnMudXBkYXRlKGFkdmljZS51c2VySWQsIHtcbiAgICAgICRzZXQ6IHtcbiAgICAgICAgJ3N0YXR1cy5vbmxpbmUnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICR1bnNldDoge1xuICAgICAgICAnc3RhdHVzLmlkbGUnOiBudWxsLFxuICAgICAgICAnc3RhdHVzLmxhc3RBY3Rpdml0eSc6IG51bGxcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChfLmV2ZXJ5KGNvbm5zLCBjID0+IGMuaWRsZSkpIHtcbiAgICAvKlxuICAgICAgQWxsIHJlbWFpbmluZyBjb25uZWN0aW9ucyBhcmUgaWRsZTpcbiAgICAgIC0gSWYgdGhlIGxhc3QgYWN0aXZlIGNvbm5lY3Rpb24gcXVpdCwgdGhlbiB3ZSBzaG91bGQgZ28gaWRsZSB3aXRoIHRoZSBtb3N0IHJlY2VudCBhY3Rpdml0eVxuXG4gICAgICAtIElmIGFuIGlkbGUgY29ubmVjdGlvbiBxdWl0LCBub3RoaW5nIHNob3VsZCBoYXBwZW47IHNwZWNpZmljYWxseSwgaWYgdGhlXG4gICAgICAgIG1vc3QgcmVjZW50bHkgYWN0aXZlIGlkbGUgY29ubmVjdGlvbiBxdWl0LCB3ZSBzaG91bGRuJ3QgdGljayB0aGUgdmFsdWUgYmFja3dhcmRzLlxuICAgICAgICBUaGlzIG1heSByZXN1bHQgaW4gYSBuby1vcCBzbyB3ZSBjYW4gYmUgc21hcnQgYW5kIHNraXAgdGhlIHVwZGF0ZS5cbiAgICAqL1xuICAgIGlmIChhZHZpY2UubGFzdEFjdGl2aXR5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFRoZSBkcm9wcGVkIGNvbm5lY3Rpb24gd2FzIGFscmVhZHkgaWRsZVxuXG4gICAgTWV0ZW9yLnVzZXJzLnVwZGF0ZShhZHZpY2UudXNlcklkLCB7XG4gICAgICAkc2V0OiB7XG4gICAgICAgICdzdGF0dXMuaWRsZSc6IHRydWUsXG4gICAgICAgICdzdGF0dXMubGFzdEFjdGl2aXR5JzogXy5tYXgoXy5wbHVjayhjb25ucywgJ2xhc3RBY3Rpdml0eScpKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcblxuLypcbiAgTXVsdGlwbGV4IGlkbGUvYWN0aXZlIGV2ZW50cyB0byBzdGF0dXMuaWRsZVxuICBUT0RPOiBIb3BlZnVsbHkgdGhpcyBpcyBxdWljayBiZWNhdXNlIGl0J3MgYWxsIGluIG1lbW9yeSwgYnV0IHdlIGNhbiB1c2UgaW5kaWNlcyBpZiBpdCB0dXJucyBvdXQgdG8gYmUgc2xvd1xuXG4gIFRPRE86IFRoZXJlIGlzIGEgcmFjZSBjb25kaXRpb24gd2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiB0YWJzLCBsZWF2aW5nIHRoZSB1c2VyIGluYWN0aXZlIHdoaWxlIGlkbGUgZ29lcyBmcm9tIG9uZSB0YWIgdG8gdGhlIG90aGVyLlxuICBJdCBjYW4gcHJvYmFibHkgYmUgc21vb3RoZWQgb3V0LlxuKi9cbnN0YXR1c0V2ZW50cy5vbignY29ubmVjdGlvbklkbGUnLCAoYWR2aWNlKSA9PiB7XG4gIGNvbnN0IGNvbm5zID0gVXNlckNvbm5lY3Rpb25zLmZpbmQoe1xuICAgIHVzZXJJZDogYWR2aWNlLnVzZXJJZFxuICB9KS5mZXRjaCgpO1xuICBpZiAoIV8uZXZlcnkoY29ubnMsIGMgPT4gYy5pZGxlKSkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBTZXQgdXNlciB0byBpZGxlIGlmIGFsbCB0aGUgY29ubmVjdGlvbnMgYXJlIGlkbGVcbiAgLy8gVGhpcyB3aWxsIG5vdCBiZSB0aGUgbW9zdCByZWNlbnQgaWRsZSBhY3Jvc3MgYSBkaXNjb25uZWN0aW9uLCBzbyB3ZSB1c2UgbWF4XG5cbiAgLy8gVE9ETzogdGhlIHJhY2UgaGFwcGVucyBoZXJlIHdoZXJlIGV2ZXJ5b25lIHdhcyBpZGxlIHdoZW4gd2UgbG9va2VkIGZvciB0aGVtIGJ1dCBub3cgb25lIG9mIHRoZW0gaXNuJ3QuXG4gIE1ldGVvci51c2Vycy51cGRhdGUoYWR2aWNlLnVzZXJJZCwge1xuICAgICRzZXQ6IHtcbiAgICAgICdzdGF0dXMuaWRsZSc6IHRydWUsXG4gICAgICAnc3RhdHVzLmxhc3RBY3Rpdml0eSc6IF8ubWF4KF8ucGx1Y2soY29ubnMsICdsYXN0QWN0aXZpdHknKSlcbiAgICB9XG4gIH0pO1xufSk7XG5cbnN0YXR1c0V2ZW50cy5vbignY29ubmVjdGlvbkFjdGl2ZScsIChhZHZpY2UpID0+IHtcbiAgTWV0ZW9yLnVzZXJzLnVwZGF0ZShhZHZpY2UudXNlcklkLCB7XG4gICAgJHNldDoge1xuICAgICAgJ3N0YXR1cy5pZGxlJzogZmFsc2VcbiAgICB9LFxuICAgICR1bnNldDoge1xuICAgICAgJ3N0YXR1cy5sYXN0QWN0aXZpdHknOiBudWxsXG4gICAgfVxuICB9KTtcbn0pO1xuXG4vLyBSZXNldCBvbmxpbmUgc3RhdHVzIG9uIHN0YXJ0dXAgKHVzZXJzIHdpbGwgcmVjb25uZWN0KVxuY29uc3Qgb25TdGFydHVwID0gKHNlbGVjdG9yKSA9PiB7XG4gIGlmIChzZWxlY3RvciA9PSBudWxsKSB7XG4gICAgc2VsZWN0b3IgPSB7fTtcbiAgfVxuICByZXR1cm4gTWV0ZW9yLnVzZXJzLnVwZGF0ZShzZWxlY3Rvciwge1xuICAgICRzZXQ6IHtcbiAgICAgICdzdGF0dXMub25saW5lJzogZmFsc2VcbiAgICB9LFxuICAgICR1bnNldDoge1xuICAgICAgJ3N0YXR1cy5pZGxlJzogbnVsbCxcbiAgICAgICdzdGF0dXMubGFzdEFjdGl2aXR5JzogbnVsbFxuICAgIH1cbiAgfSwge1xuICAgIG11bHRpOiB0cnVlXG4gIH0pO1xufTtcblxuLypcbiAgTG9jYWwgc2Vzc2lvbiBtb2RpZmljYXRpb24gZnVuY3Rpb25zIC0gYWxzbyB1c2VkIGluIHRlc3RpbmdcbiovXG5cbmNvbnN0IGFkZFNlc3Npb24gPSAoY29ubmVjdGlvbikgPT4ge1xuICBVc2VyQ29ubmVjdGlvbnMudXBzZXJ0KGNvbm5lY3Rpb24uaWQsIHtcbiAgICAkc2V0OiB7XG4gICAgICBpcEFkZHI6IGNvbm5lY3Rpb24uY2xpZW50QWRkcmVzcyxcbiAgICAgIHVzZXJBZ2VudDogY29ubmVjdGlvbi5odHRwSGVhZGVyc1sndXNlci1hZ2VudCddXG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGxvZ2luU2Vzc2lvbiA9IChjb25uZWN0aW9uLCBkYXRlLCB1c2VySWQpID0+IHtcbiAgVXNlckNvbm5lY3Rpb25zLnVwc2VydChjb25uZWN0aW9uLmlkLCB7XG4gICAgJHNldDoge1xuICAgICAgdXNlcklkLFxuICAgICAgbG9naW5UaW1lOiBkYXRlXG4gICAgfVxuICB9KTtcblxuICBzdGF0dXNFdmVudHMuZW1pdCgnY29ubmVjdGlvbkxvZ2luJywge1xuICAgIHVzZXJJZCxcbiAgICBjb25uZWN0aW9uSWQ6IGNvbm5lY3Rpb24uaWQsXG4gICAgaXBBZGRyOiBjb25uZWN0aW9uLmNsaWVudEFkZHJlc3MsXG4gICAgdXNlckFnZW50OiBjb25uZWN0aW9uLmh0dHBIZWFkZXJzWyd1c2VyLWFnZW50J10sXG4gICAgbG9naW5UaW1lOiBkYXRlXG4gIH0pO1xufTtcblxuLy8gUG9zc2libHkgdHJpZ2dlciBhIGxvZ291dCBldmVudCBpZiB0aGlzIGNvbm5lY3Rpb24gd2FzIHByZXZpb3VzbHkgYXNzb2NpYXRlZCB3aXRoIGEgdXNlciBJRFxuY29uc3QgdHJ5TG9nb3V0U2Vzc2lvbiA9IChjb25uZWN0aW9uLCBkYXRlKSA9PiB7XG4gIGxldCBjb25uO1xuICBpZiAoKGNvbm4gPSBVc2VyQ29ubmVjdGlvbnMuZmluZE9uZSh7XG4gICAgICBfaWQ6IGNvbm5lY3Rpb24uaWQsXG4gICAgICB1c2VySWQ6IHtcbiAgICAgICAgJGV4aXN0czogdHJ1ZVxuICAgICAgfVxuICAgIH0pKSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gWWVzLCB0aGlzIGlzIGFjdHVhbGx5IGEgdXNlciBsb2dnaW5nIG91dC5cbiAgVXNlckNvbm5lY3Rpb25zLnVwc2VydChjb25uZWN0aW9uLmlkLCB7XG4gICAgJHVuc2V0OiB7XG4gICAgICB1c2VySWQ6IG51bGwsXG4gICAgICBsb2dpblRpbWU6IG51bGxcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdGF0dXNFdmVudHMuZW1pdCgnY29ubmVjdGlvbkxvZ291dCcsIHtcbiAgICB1c2VySWQ6IGNvbm4udXNlcklkLFxuICAgIGNvbm5lY3Rpb25JZDogY29ubmVjdGlvbi5pZCxcbiAgICBsYXN0QWN0aXZpdHk6IGNvbm4ubGFzdEFjdGl2aXR5LCAvLyBJZiB0aGlzIGNvbm5lY3Rpb24gd2FzIGlkbGUsIHBhc3MgdGhlIGxhc3QgYWN0aXZpdHkgd2Ugc2F3XG4gICAgbG9nb3V0VGltZTogZGF0ZVxuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVNlc3Npb24gPSAoY29ubmVjdGlvbiwgZGF0ZSkgPT4ge1xuICB0cnlMb2dvdXRTZXNzaW9uKGNvbm5lY3Rpb24sIGRhdGUpO1xuICBVc2VyQ29ubmVjdGlvbnMucmVtb3ZlKGNvbm5lY3Rpb24uaWQpO1xufTtcblxuY29uc3QgaWRsZVNlc3Npb24gPSAoY29ubmVjdGlvbiwgZGF0ZSwgdXNlcklkKSA9PiB7XG4gIFVzZXJDb25uZWN0aW9ucy51cGRhdGUoY29ubmVjdGlvbi5pZCwge1xuICAgICRzZXQ6IHtcbiAgICAgIGlkbGU6IHRydWUsXG4gICAgICBsYXN0QWN0aXZpdHk6IGRhdGVcbiAgICB9XG4gIH0pO1xuXG4gIHN0YXR1c0V2ZW50cy5lbWl0KCdjb25uZWN0aW9uSWRsZScsIHtcbiAgICB1c2VySWQsXG4gICAgY29ubmVjdGlvbklkOiBjb25uZWN0aW9uLmlkLFxuICAgIGxhc3RBY3Rpdml0eTogZGF0ZVxuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2ZVNlc3Npb24gPSAoY29ubmVjdGlvbiwgZGF0ZSwgdXNlcklkKSA9PiB7XG4gIFVzZXJDb25uZWN0aW9ucy51cGRhdGUoY29ubmVjdGlvbi5pZCwge1xuICAgICRzZXQ6IHtcbiAgICAgIGlkbGU6IGZhbHNlXG4gICAgfSxcbiAgICAkdW5zZXQ6IHtcbiAgICAgIGxhc3RBY3Rpdml0eTogbnVsbFxuICAgIH1cbiAgfSk7XG5cbiAgc3RhdHVzRXZlbnRzLmVtaXQoJ2Nvbm5lY3Rpb25BY3RpdmUnLCB7XG4gICAgdXNlcklkLFxuICAgIGNvbm5lY3Rpb25JZDogY29ubmVjdGlvbi5pZCxcbiAgICBsYXN0QWN0aXZpdHk6IGRhdGVcbiAgfSk7XG59O1xuXG4vKlxuICBIYW5kbGVycyBmb3IgdmFyaW91cyBjbGllbnQtc2lkZSBldmVudHNcbiovXG5NZXRlb3Iuc3RhcnR1cChvblN0YXJ0dXApO1xuXG4vLyBPcGVuaW5nIGFuZCBjbG9zaW5nIG9mIEREUCBjb25uZWN0aW9uc1xuTWV0ZW9yLm9uQ29ubmVjdGlvbigoY29ubmVjdGlvbikgPT4ge1xuICBhZGRTZXNzaW9uKGNvbm5lY3Rpb24pO1xuXG4gIHJldHVybiBjb25uZWN0aW9uLm9uQ2xvc2UoKCkgPT4gcmVtb3ZlU2Vzc2lvbihjb25uZWN0aW9uLCBuZXcgRGF0ZSgpKSk7XG59KTtcblxuLy8gQXV0aGVudGljYXRpb24gb2YgYSBERFAgY29ubmVjdGlvblxuQWNjb3VudHMub25Mb2dpbihpbmZvID0+IGxvZ2luU2Vzc2lvbihpbmZvLmNvbm5lY3Rpb24sIG5ldyBEYXRlKCksIGluZm8udXNlci5faWQpKTtcblxuLy8gcHViL3N1YiB0cmljayBhcyByZWZlcmVuY2VkIGluIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzEwMjU3OTU4LzU4NjA4NlxuLy8gV2UgdXNlZCB0aGlzIGluIHRoZSBwYXN0LCBidXQgc3RpbGwgbmVlZCB0aGlzIHRvIGRldGVjdCBsb2dvdXRzIG9uIHRoZSBzYW1lIGNvbm5lY3Rpb24uXG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG4gIC8vIFJldHVybiBudWxsIGV4cGxpY2l0bHkgaWYgdGhpcy5fc2Vzc2lvbiBpcyBub3QgYXZhaWxhYmxlLCBpLmUuOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXJ1bm9kYS9tZXRlb3ItZmFzdC1yZW5kZXIvaXNzdWVzLzQxXG4gIGlmICh0aGlzLl9zZXNzaW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvLyBXZSdyZSBpbnRlcmVzdGVkIGluIGxvZ291dCBldmVudHMgLSByZS1wdWJsaXNoZXMgZm9yIHdoaWNoIGEgcGFzdCBjb25uZWN0aW9uIGV4aXN0c1xuICBpZiAodGhpcy51c2VySWQgPT0gbnVsbCkge1xuICAgIHRyeUxvZ291dFNlc3Npb24odGhpcy5fc2Vzc2lvbi5jb25uZWN0aW9uSGFuZGxlLCBuZXcgRGF0ZSgpKTtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn0pO1xuXG4vLyBXZSBjYW4gdXNlIHRoZSBjbGllbnQncyB0aW1lc3RhbXAgaGVyZSBiZWNhdXNlIGl0IHdhcyBzZW50IGZyb20gYSBUaW1lU3luY1xuLy8gdmFsdWUsIGhvd2V2ZXIgd2Ugc2hvdWxkIG5ldmVyIHRydXN0IGl0IGZvciBzb21ldGhpbmcgc2VjdXJpdHkgZGVwZW5kZW50LlxuLy8gSWYgdGltZXN0YW1wIGlzIG5vdCBwcm92aWRlZCAocHJvYmFibHkgZHVlIHRvIGEgZGVzeW5jKSwgdXNlIHNlcnZlciB0aW1lLlxuTWV0ZW9yLm1ldGhvZHMoe1xuICAndXNlci1zdGF0dXMtaWRsZScodGltZXN0YW1wKSB7XG4gICAgY2hlY2sodGltZXN0YW1wLCBNYXRjaC5PbmVPZihudWxsLCB1bmRlZmluZWQsIERhdGUsIE51bWJlcikpO1xuXG4gICAgY29uc3QgZGF0ZSA9ICh0aW1lc3RhbXAgIT0gbnVsbCkgPyBuZXcgRGF0ZSh0aW1lc3RhbXApIDogbmV3IERhdGUoKTtcbiAgICBpZGxlU2Vzc2lvbih0aGlzLmNvbm5lY3Rpb24sIGRhdGUsIHRoaXMudXNlcklkKTtcbiAgfSxcblxuICAndXNlci1zdGF0dXMtYWN0aXZlJyh0aW1lc3RhbXApIHtcbiAgICBjaGVjayh0aW1lc3RhbXAsIE1hdGNoLk9uZU9mKG51bGwsIHVuZGVmaW5lZCwgRGF0ZSwgTnVtYmVyKSk7XG5cbiAgICAvLyBXZSBvbmx5IHVzZSB0aW1lc3RhbXAgYmVjYXVzZSBpdCdzIHdoZW4gd2Ugc2F3IGFjdGl2aXR5ICpvbiB0aGUgY2xpZW50KlxuICAgIC8vIGFzIG9wcG9zZWQgdG8ganVzdCBiZWluZyBub3RpZmllZCBpdC4gSXQgaXMgcHJvYmFibHkgbW9yZSBhY2N1cmF0ZSBldmVuIGlmXG4gICAgLy8gYSBkb3plbiBtcyBvZmYgZHVlIHRvIHRoZSBsYXRlbmN5IG9mIHNlbmRpbmcgaXQgdG8gdGhlIHNlcnZlci5cbiAgICBjb25zdCBkYXRlID0gKHRpbWVzdGFtcCAhPSBudWxsKSA/IG5ldyBEYXRlKHRpbWVzdGFtcCkgOiBuZXcgRGF0ZSgpO1xuICAgIGFjdGl2ZVNlc3Npb24odGhpcy5jb25uZWN0aW9uLCBkYXRlLCB0aGlzLnVzZXJJZCk7XG4gIH1cbn0pO1xuXG4vLyBFeHBvcnRlZCB2YXJpYWJsZVxuZXhwb3J0IGNvbnN0IFVzZXJTdGF0dXMgPSB7XG4gIGNvbm5lY3Rpb25zOiBVc2VyQ29ubmVjdGlvbnMsXG4gIGV2ZW50czogc3RhdHVzRXZlbnRzXG59O1xuXG4vLyBJbnRlcm5hbCBmdW5jdGlvbnMsIGV4cG9ydGVkIGZvciB0ZXN0aW5nXG5leHBvcnQgY29uc3QgU3RhdHVzSW50ZXJuYWxzID0ge1xuICBvblN0YXJ0dXAsXG4gIGFkZFNlc3Npb24sXG4gIHJlbW92ZVNlc3Npb24sXG4gIGxvZ2luU2Vzc2lvbixcbiAgdHJ5TG9nb3V0U2Vzc2lvbixcbiAgaWRsZVNlc3Npb24sXG4gIGFjdGl2ZVNlc3Npb24sXG59O1xuIl19
