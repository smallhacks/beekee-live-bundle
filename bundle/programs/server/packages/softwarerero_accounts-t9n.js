(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var language, prefix, str, T9n;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/softwarerero_accounts-t9n/build/t9n.js                                       //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
// Generated by CoffeeScript 2.4.1
(function() {
  var T9n;

  if (typeof Meteor !== "undefined" && Meteor !== null) {
    Meteor.startup(function() {
      if (Meteor.isClient) {
        return typeof Template !== "undefined" && Template !== null ? Template.registerHelper('t9n', function(x, params) {
          return T9n.get(x, true, params.hash);
        }) : void 0;
      }
    });
  }

  T9n = (function() {
    class T9n {
      static setTracker(tracker) {
        this.tracker = tracker;
        this.dep = new tracker.Tracker.Dependency();
        return this.depLanguage = new this.tracker.Tracker.Dependency();
      }

      static map(language, map) {
        var ref;
        if (!this.maps[language]) {
          this.maps[language] = {};
        }
        this.registerItem(language, '', false, map);
        return (ref = this.dep) != null ? ref.changed() : void 0;
      }

      static get(label, markIfMissing = true, args = {}, language) {
        var index, parent, ref, ref1, ref2, ref3, ret;
        if ((ref = this.dep) != null) {
          ref.depend();
        }
        if ((ref1 = this.depLanguage) != null) {
          ref1.depend();
        }
        if (typeof label !== 'string') {
          return '';
        }
        if (language == null) {
          language = this.language;
        }
        ret = (ref2 = this.maps[language]) != null ? ref2[label] : void 0;
        if (!ret) {
          index = language.lastIndexOf('_');
          if (index) {
            parent = language.substring(0, index);
            if (parent) {
              return this.get(label, markIfMissing, args, parent);
            }
          }
        }
        if (!ret) {
          ret = (ref3 = this.maps[this.defaultLanguage]) != null ? ref3[label] : void 0;
        }
        if (!ret) {
          if (markIfMissing) {
            return this.missingPrefix + label + this.missingPostfix;
          } else {
            return label;
          }
        }
        if (Object.keys(args).length === 0) {
          return ret;
        } else {
          return this.replaceParams(ret, args);
        }
      }

      static registerItem(language, prefix, dot, item) {
        var key, results, value;
        if (typeof item === 'string') {
          return this.maps[language][prefix] = item;
        } else if (typeof item === 'object') {
          if (dot) {
            prefix = prefix + '.';
          }
          results = [];
          for (key in item) {
            value = item[key];
            results.push(this.registerItem(language, prefix + key, true, value));
          }
          return results;
        }
      }

      static getLanguage() {
        var ref;
        if ((ref = this.depLanguage) != null) {
          ref.depend();
        }
        return this.language;
      }

      static getLanguages() {
        var ref;
        if ((ref = this.dep) != null) {
          ref.depend();
        }
        return Object.keys(this.maps).sort();
      }

      static getLanguageInfo() {
        var i, k, keys, len, ref, results;
        if ((ref = this.dep) != null) {
          ref.depend();
        }
        keys = Object.keys(this.maps).sort();
        results = [];
        for (i = 0, len = keys.length; i < len; i++) {
          k = keys[i];
          results.push({
            name: this.maps[k]['t9Name'],
            code: k
          });
        }
        return results;
      }

      static setLanguage(language) {
        var ref;
        if (this.language === language) { // silent
          return;
        }
        language = language.replace(new RegExp('-', 'g'), '_');
        if (!this.maps[language]) {
          if (language.indexOf('_') > 1) {
            return this.setLanguage(language.substring(0, language.lastIndexOf('_')));
          } else {
            throw Error(`language ${language} does not exist`);
          }
        }
        this.language = language;
        return (ref = this.depLanguage) != null ? ref.changed() : void 0;
      }

      static replaceParams(str, args) {
        var index1, index2, strCopy, token, tokenName, value;
        index1 = 0;
        strCopy = str;
        while (index1 > -1) {
          index1 = strCopy.indexOf('@{');
          if (index1 > -1) {
            index2 = strCopy.indexOf('}'); // no nested tokens
            token = strCopy.substring(index1, index2 + 1);
            if (token.indexOf('->') > -1) {
              value = this.handleSelector(strCopy, args, token);
              str = str.replace(token, value); // no selector, simply replace the token
            } else {
              tokenName = token.substring(2, token.indexOf('}'));
              str = str.replace(new RegExp(token, 'g'), args[tokenName]);
              str = str.replace(new RegExp(`\\$${tokenName}`, 'g'), args[tokenName]);
            }
            strCopy = strCopy.substring(index2 + 2).trim();
          }
        }
        return str;
      }

      static handleSelector(str, args, token) {
        var foundLine, lineMap, tokenName;
        tokenName = token.substring(2, token.indexOf(' '));
        lineMap = str.split(/\n/).slice(1).map(function(line) {
          var regexString;
          regexString = line.trim().split(/\s/)[0];
          return {
            regexString,
            line: line.substring(line.indexOf(regexString) + regexString.length)
          };
        });
        foundLine = lineMap.find(function(map) {
          return new RegExp(map.regexString).test(args[tokenName]);
        });
        if (foundLine) {
          return foundLine.line.substring(foundLine.line.lastIndexOf(']') + 1).trim().replace(new RegExp(`\\$${tokenName}`), args[tokenName]);
        }
      }

    };

    T9n.maps = {};

    T9n.defaultLanguage = 'en';

    T9n.language = '';

    T9n.dep = void 0;

    T9n.depLanguage = void 0;

    T9n.missingPrefix = ">";

    T9n.missingPostfix = "<";

    return T9n;

  }).call(this);

  this.T9n = T9n;

  this.t9n = function(x, includePrefix, params) {
    return T9n.get(x);
  };

  if (typeof module !== "undefined" && module !== null) {
    module.exports.T9n = T9n;
  }

}).call(this);

///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("softwarerero:accounts-t9n", {
  T9n: T9n
});

})();
