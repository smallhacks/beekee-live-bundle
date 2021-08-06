var require = meteorInstall({"lib":{"i18n":{"en.i18n.json":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/i18n/en.i18n.json                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"error-message":"An error occurred : ","access-denied--page-title":"Access denied !","access-denied--login-needed":"You need to login first.","access-denied--login":"Log in","admin--page-title":"Administration","admin--system":"Système","admin--spaces-list":"Spaces","admin--spaces-title":"Title","admin--spaces-creation":"Date of creation","admin--spaces-owner":"Owner","admin--spaces-actions":"Actions","admin--spaces-open":"Open","admin--spaces-delete":"Delete","admin--spaces-author":"Author","admin--spaces-space":"Space","admin--spaces-submission":"Date","admin--posts-list":"Posts","admin--users-list":"Accounts","admin--users-logins":"Login","admin--users-creation":"Date of creation","admin--users-last-connexion":"Last connection","admin--users-actions":"Actions","admin--users-change-password":"Change password","admin--users-delete":"Delete","admin--user-delete-message":"Permanently delete this user and its spaces ?","admin--user-delete-confirm-message":"The user has been deleted.","admin--change-password-message":"Enter a new password for the user:","admin--change-password-confirm-message":"The password has been changed.","admin--spaces-change-owner":"Change owner","admin--change-owner-message":"Enter the mail of the new owner:","admin--change-owner-confirm-message":"The owner has been changed.","layout--connection-status":"Disconnected","login--page-title":"Login","login--mail":"E-mail","login--password":"Password","login--ask-mail-forgot-password":"Enter your e-mail","login--send-mail-forgot-password-link":"Reset my password","login--button-submit":"Log in","login--register":"You do not have an account yet ?","login--register-contact-admin":"Please contact your Beekee Box administrator.","login--register-link":"Create an account","login--user-not-found":"Username does not exist.","login--incorrect-password":"Password does not match.","login--send-mail-forgot-password":"An email has been sent to % s with a link to reset your password.","login--send-mail-forgot-password-error":"An error has occurred. Please contact the administrator at : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Error sending an email to recover password : %s","logout--page-title":"Sign out","not-found--page-title":"Page not found","not-found--page-description":"Sorry, we can not find a page at this address.","not-found--go-back":"Return to home","privacy--page-title":"Privacy policy","register--page-title":"Create an account","register--mail":"E-mail","register--email-description":"We'll never share your email with anyone else.","register--name":"Name","register--password":"Password","register--password-description":"Please choose a password with at least 5 characters.","register--password-confirm":"Confirm password","register--password-dont-match":"Confirm password doesn't match.","register--terms":"By registering, you accept our <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">terms and conditions</a>.<br>Your e-mail address will not be disclosed to third parties.","register--button-submit":"Sign up","register--mail-exist":"There already exists a user account with this email address.","register--mail-no-valid-message":"Please enter a valid email address.","register--mail-subject":"Your registration on Beekee Live","register--mail-content":"<h2>Welcome to <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h2><h3>We’re glad you’re here. Start teaching today by creating your first Beekee Live space!</h3><p><b>Tip</b> : Did you know that you can use Beekee Live on computer, smartphone or tablet without the need of installing an app?</p><p>The <a href=\"https://www.beekee.ch\">Beekee Team</a></p>","register--accept-policy":"I accept the <a href=\"privacy\" target=\"_blank\">Privacy Statement</a>","register--subscribe-newsletter":"Subscribe to our newsletter","reset-password--page-title":"Reset your password","reset-password--new-password":"New password","reset-password--button-submit":"Save","register--password-changed-message":"The password has been changed.","space--update":"Beekee Live has been updated, <a href=\"https://www.beekee.ch/beekeelive/updates_en.html\">discover the changes</a>!","space--hide-update":"Hide this message","space--sort-date":"Sort by date","space--sort-likes":"Sort by Likes","space--resource-more":"More","space--space-archived":"This space is archived and is not accessible to others.","space--last-seen":"Last seen:","space-edit-categories--page-title":"Manage categories","space-edit-categories--page-description":"The categories are used to classify posts.<br />Unlike tags, categories are defined in advance by the teacher.","space-edit-categories--confirm-delete":"Delete category","space-edit--button-submit-add-category":"Add","space-edit-categories--edit-category":"Edit category","space-edit--page-title":"Space settings","space-edit--subtitle-general":"General","space-edit--subtitle-notifications":"Notifications","space-edit--enable-notifications":"Receive an e-mail when a new post is added","space-edit--enable-comment-notifications":"Receive an e-mail when a new comment is added","space-edit--list-title-change-code":"Change the access code","space-edit--description-change-code":"Share this code with your participants so they can join this space.","space-edit--list-title-rename-space":"Rename this space","space-edit--list-title-delete-space":"Delete this space","space-edit--list-title-content":"Content","space-edit--list-title-flow":"Continuous Flow","space-edit--description-flow":"By enabling Continuous Flow, new publications are displayed in real time.","space-edit--list-title-categories":"Manage categories","space-edit--list-title-comments":"Allow comments","space-edit--subtitle-users":"Users","space-edit--list-title-users":"Manage participants","space-edit--list-title-free-users":"Free participants","space-edit--description-free-users":"By activating \"Free participants\", participants are able to enter their username when they first log in. Otherwise, they will choose from an editable list under \"Manage participants\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Participants can edit their own publications","space-edit--select-permissions-all":"Participants can edit all publications","space-edit--select-permissions-none":"Nobody can add or edit publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Update the Box","space-edit--list-title-ip":"IP address :","space-edit--list-title-sync":"Synchronize with the cloud","space-edit--description-sync":"Connect the beekee box using an ethernet cable to sync its content with the cloud (www.beekee.ch). This may take several minutes.","space-edit--subtitle-account":"Your account","space-edit--description-change-password":"Change your account password.","space-edit--change-code-message":"Change the access code","space-edit--change-code-confirm-message":"The access code has been changed.","space-edit--change-code-already-used-message":"This code is already assigned to another space.","space-edit--rename-space-message":"Rename this space","space-edit--rename-space-confirm-message":"This space is now called","space-edit--delete-space-message":"Permanently delete this space and its contents?","space-edit--archive-space":"Archive this space","space-edit--archive-space-message":"Archive this space?\nIt will always be available to you in the \"Archived spaces\" section, but not to other people.","space-edit--reactivate-space":"Reactivate this space","space-edit--reactivate-space-message":"Reactivate this space?","space-edit--delete-space-confirm-message":"The space has been removed.","space-edit--sync-login-message":"To synchronize this space with the cloud, you must have an account on www.beekee.ch.\nIf this is the case, enter the username linked to your account :","space-edit--sync-error-message":"A problem has occurred. Check that the box is connected to the internet and try again.","space-edit--update-message":"Updating of the box may make the platform inaccessible for several minutes.\nDo you want to continue ?","space-edit--update-waiting-message":"The box will be updated, please wait...","space-edit--no-ip":"No IP address","space-edit--not-connected":"Not connected","space-edit--module-resources":"Distribute files to your learners","space-edit--manage-users":"Manage participants","space-edit--permissions-enable-author-list":"Participants connect using the participants list","space-edit--permissions-avatar-enabled":"Enable participants' avatars","space-edit--permissions-author-list":"Edit the user list","space-edit--permissions-public-space":"Allows anyone to access the contents and interact within this Space without needing an Access Code","space-edit--permissions-add-categories":"Participants can add categories","space-edit--permissions-change-name":"Participants can change their name","space-edit--permissions-add-posts":"Participants can add posts","space-edit--permissions-add-posts-home":"Participants can add posts in the home section","space-edit--permissions-add-resources":"Participants can add resources","space-edit--permissions-messages-enabled":"Participants can send private messages","space-edit-authors---page-title":"Manage participants","space-edit-authors---page-description":"Participant names are used to identify publications.<br>For example, add the name of your participants or the name of a group.","space-edit-authors---submit-button":"Add","space-edit-authors--delete-author-message":"Delete the participant %s ?","space-edit-authors--edit-author-message":"Modify the participant :","space-edit-authors--add-author-error-message":"There is already an participant with this name.","users-settings--page-title":"Manage participants","space-edit--manage-owners":"Manage owners","users-settings--page-subtitle":"Participants' list","users-settings--add-user":"Add participant","users-settings--change-user-password":"Edit participant's password:","users-settings--change-user-name":"Edit participant's name:","users-settings--enable-password":"Ask a password at login","users-settings--user-name":"Student's name:","index-student--title":"The platform to promote real-time collaboration","index-student--wrapper-text":"A private space to share photos and messages <br> with your participants, colleagues or friends.","index-student--code":"Private space","index-student--code-input-placeholder":"Enter an access code","index-student--visited-title":"Recently visited :","index-student--delete-recent":"(delete)","index-student--public-spaces-title":"Public spaces","index-student--button-code-link":"Validate","index-student--space-doesnt-exist-message":"This space does not exist.\nMake sure to respect the upper and lower case.","index-student--create-your-space-1":"Create","index-student--create-your-space-2":" your space in seconds for free!","index-student--privacy":"Privacy","index-student--about-us":"About us","index-teacher--archived-spaces-title":"Archived spaces","index-teacher--spaces-title":"Your spaces","index-teacher--no-space":"You have not created a space yet.","index-teacher--button-submit-space":"Create a new space","index-teacher--shutdown":"Shutdown","index-teacher--shutdown-message":"Do you really want to shutdown the box ?","index-teacher--shutdown-confirm":"The box will shutdown in a few seconds...","index-teacher--space-settings":"Settings","index-teacher--archive-space":"Archive","index-teacher--reactivate-space":"Reactivate","index-teacher--delete-space":"Delete","index-teacher--duplicate-space":"Duplicate","update--reboot-confirm":"The box will reboot in a few seconds...","space-page--hide-panel":"Hide","space-page--code-panel-title":"Space's access code :","space-page--code-panel-description":"Spread this code:","space-page--pinned-title":"Pinned","space-page--post-order":"Sort","space-page--post-order-asc":"Newest first","space-page--post-order-desc":"Older first","space-page--no-post":"There are no posts to display yet.","space-submit--page-title":"Create a space","space-submit--space-name":"Name of the space","space-submit--button-submit":"Create","space-submit--button-cancel":"Cancel","space-users--page-title":"Want to change your name ?","space-users-first-connection--page-title":"What is your name ?","space-users--page-description":"It will be used to identify your contributions","space-users--input-choose-author-placeholder":"Type a name...","space-users--submit-author":"Validate","space-users--user-exist":"The user %s already exists. Connect with this name ?","space-users--list-page-title":"Who are you ?","space-users--list-page-description":"Select your name in the list.","space-users--list-password":"Password","space-users--list-password-help":"Enter the password your teacher gave you.","space-users--avoid-space-code":"Please enter your name, not the space code.","space-sidebar--home":"Home","space-sidebar--filters":"Filters","space-sidebar--feed":"Feed","space-sidebar--discussions":"Discussions","space-sidebar--live-feed":"Live feed","space-sidebar--categories":"Categories","space-sidebar--add-category":"Add","space-sidebar--authors":"Participants","space-sidebar--lessons":"Lessons","space-sidebar--resources":"Resources","space-sidebar--assignments":"Assignments","space-sidebar--apps":"Links","space-sidebar--activities":"Activities","space-sidebar--settings":"Settings","space-sidebar--notifications":"Notifications","space-sidebar--me":"me","space-header--new-post-comment-notification":"commented a post","space-header--new-resource-comment-notification":"commented a resource","space-header--new-tag-notification":"tagged you","space-header--no-notification":"No new notification","space-header--clear-notification":"Clear all","space-header--confirm-copy-code":"The code has been copied.","space-header--confirm-copy-link":"The link has been copied.","space-header--notifications":"Notifications","space-header--share":"Share","space-header--space-code":"Space code","space-header--copy-code":"Copy the space code","space-header--copy-link":"Copy the space link","space-header--send-email":"Send the link by e-mail","space-header--qr-code":"Show the QR code","space-sidebar--user-settings":"User account","space-submit--create-space":"Create a new space","space-submit--create-space-placeholer":"Space name","space-sidebar--create-own-space-1":"Create your own space","space-sidebar--create-own-space-2":"for free!","space-sidebar--contact-us":"Contact us","space-sidebar--privacy":"Privacy","space-sidebar--about-beekee-live-1":"https://www.beekee.ch/beekeelive","space-sidebar--about-beekee-live-2":"More information about Beekee Live","space-sidebar--about-us":"About us","space-sidebar--delete-author-confirm":"Delete this participant?","space-sidebar--edit-categories":"Manage","space-sidebar--edit-users":"Manage","space-sidebar--bug":"Report a bug","space-sidebar--bug-link":"https://forms.clickup.com/f/4bkdp-778/06FRJBAB5BWAWKDYPC","space-sidebar--swiss-hosted":"Swiss hosted","header--back":"Back","header--admin-access":"Teacher Access","header--register":"Create an account","header--login":"Log in","header--exit-message":"Leave this space ?","menu--show-all":"Show all","menu--favorites":"My favorites","menu--files":"Files","menu--images":"Images","menu--categories":"Categories","menu--authors":"Participants","menu--tags":"Keywords","menu--code":"Access code","post-edit--submit-button":"Edit","post-item--remove-favorites":"Remove from my favorites","post-item--add-favorites":"Add to my favorites","post-item--delete-post-confirm":"Delete the post ?","post-item--delete-comment-confirm":"Delete the comment ?","post-submit--body-placeholder":"Say something...","post-submit--tags-placeholder":"Add Keywords...","post-submit--select-category":"Category","post-submit--no-category":"No category","post-submit--rotate-image":"Rotate","post-submit--delete-image":"Delete","post-submit--confirm-delete-image":"Delete the image ?\nThis action is irreversible.","post-submit--confirm-delete-file":"Delete the file ?\nThis action is irreversible.","post-submit--submit-button":"Send","post-submit--mail-notification-subject":"New post on Beekee Live","post-submit--mail-comment-notification-subject":"New comment on Beekee Live","post-submit--mail-notification-body":"A new post has been posted on Beekee Live.","post-submit--mail-comment-notification-body":"A new comment has been posted on Beekee Live.","post-submit--mail-notification-link":"See the post","user-settings--page-title":"User settings","user-settings--confirm-logout":"Are you sure you want to sign out ?","user-settings--change-name":"Change name","user-settings--change-password":"Change password","user-settings--logout":"Sign out","user-settings--change-name-message":"New name :","user-settings--change-password-old-message":"Current Password :","user-settings--change-password-new-message":"New Password :","user-settings--change-password-confirm-message":"Your Password has been changed.","user-settings--change-email":"Change e-mail","user-settings--change-email-message":"New e-mail address :","user-settings--change-email-confirm-message":"Your e-mail address has been changed.","user-settings--change-email-incorrect":"Not an e-mail address","space-header--leave":"Leave this space","space-header--settings":"Space settings","post--edit":"Edit","post--show":"Show","post--hide":"Hide","post--delete":"Delete","home--pinned":"Pinned","home--all":"All","home--title":"Home","home--space-code-message":"<strong>Bzz!</strong> Spread this code for others to join you:","home--submit-button":"Add an description","home-post--order-up":"Up","home-post--order-down":"Down","home-post-delete--title":"Delete this description","home-post-delete--confirm":"Delete this description ?","home-post-edit--title":"Edit description","home-post-submit--title":"Add a description","home-post-submit--placeholder":"description","home-post-submit--confirm-toast":"The new description has been added.","modal--close":"Close","modal--cancel":"Cancel","modal--delete":"Delete","modal--submit":"Submit","modal--add":"Add","modal--save":"Save changes","lessons--title":"Lessons","lessons--subtitle":"Articulate Storyline materials","lessons--submit-button":"Add a lesson","lessons-post--start-lesson":"Start this lesson","lessons-post-submit--title":"Add a lesson","lessons-post-submit--title-placeholder":"Title of the lesson","lessons-post-submit--description-placeholder":"Description of the lesson","lessons-post-submit--help":"Lessons must be exported in HTML5 format within Storyline.<br>The resulting folder must be zipped before being uploaded, and the .zip file must have the same name as the zipped folder it contains.","lessons-post-submit--confirm-toast":"The new lesson has been added.","lessons-post-delete--confirm":"Do you want to delete this lesson ?","lessons-post-delete--title":"Delete this lesson","lessons-post-edit--title":"Edit lesson","lessons-upload--button":"Upload a Storyline lesson","resources--empty":"There are no resources at this time","resources--title":"Resources","resources--add-document":"File","resources--add-text":"Text","resources--add-video":"YouTube Video","resources--add-link":"Link","resources--add-label":"Title","resources-edit--title":"Edit","resources-edit--document-title":"the file","resources-edit--document-text":"the text","resources-edit--video-title":"the video","resources-edit--link-title":"the link","resources-edit--label-title":"the title","resources-edit--html-title":"the HTML","resources-post-edit--title":"Edit resource","resources-post-submit--title":"Add a resource","resources-post-submit--title-placeholder":"Title","resources-post-submit--description-placeholder":"Description","resources-post-submit--confirm-toast":"The new resource has been added.","resources-submit--text-title":"Add text","resources-submit--document-title":"Add a file","resources-submit--video-title":"Add a video","resources-submit--link-title":"Add a link","resource-submit--link-title":"Add a resource","resource-submit--title":"Add a resource","resources-submit--label-title":"Add a title","resource-submit--vimeo-placeholder":"Vimeo video URL link","resource-submit--youtube-placeholder":"YouTube video URL link","resource-delete--title":"Delete this resource","resource-delete--confirm":"Delete this resource?","resource-delete--delete-confirm":"Do you want to delete this resource ?","resources--submit-button":"Add a resource","resources-category-edit--title":"Edit a category","resources-category-submit--title":"Add a category","resources-category-submit--placeholder":"Category name","resource--show-more":"Show more...","live-feed--empty":"There's no post to show here at this time","live-feed--notification-panel":"new messages","live-feed--load-more":"Load more...","live-feed-category-edit--title":"Edit a category","live-feed-category-submit--title":"Add a category","live-feed-category-submit--placeholder":"Category name","live-feed-subcategory-submit--title":"Add a subcategory","live-feed-subcategory-submit--placeholder":"Subcategory name","live-feed-post--remove-pin":"Remove pin","live-feed-post--add-pin":"Pin on top","live-feed-post-delete--delete-confirm":"Do you want to delete this post ?","live-feed-post-delete--title":"Delete this post","live-feed-post--add-comment":"Comment","live-feed-post--like":"Like","live-feed-post--nb-likes-with-me":"You and %s people","live-feed-post--i-like":"You like","live-feed-post--nb-likes":"people","live-feed-post--comments":"comment(s)","live-feed-post--hide-on-feed":"Hide of the feed","live-feed-post-submit--title":"Add a post","live-feed-post-submit--add-category":"+ Add a category...","live-feed-post-submit--post-in":"Post in","live-feed-post-submit--in":"in","live-feed-post-submit--home":"Home","live-feed-post-edit--title":"Edit post","live-feed-delete-comment--title":"Delete comment","live-feed-delete-comment--subtitle":"Delete this comment?","app-submit--title":"Add a link","app-submit--title-placeholder":"Title","app-submit--url-placeholder":"URL address","app--submit-button":"Add a link","app-submit--description-placeholder":"Link description","app-submit--confirm-toast":"The link has been added","app-edit--title":"Edit the link","activity--empty":"There are no activities at this time","activity-edit--title":"Edit activity","activity--add-padlet":"Padlet","activity--add-mentimeter":"Mentimeter","activity--add-quizlet":"Quizlet","activity--add-other":"Other","activity--submit-button":"Add an activity","activity-submit--title":"Add an activity","activity-submit--title-placeholder":"Title","activity-submit--description-placeholder":"Description","activity-submit--iframe-placeholder":"HTML iFrame code","activity-submit--padlet-placeholder":"URL link to the Padlet","activity-submit--padlet-instructions":"Instructions:<br>1. Open your Padlet<br>2. Find the embed option in the Share menu<br>3. Copy the embed code and paste into this field","activity-submit--quizlet-placeholder":"Quizlet embed code","activity-submit--quizlet-instructions":"Instructions:<br>1. Open your Quizlet<br>2. Find the embed option in the three dots menu<br>3. Copy the embed code and paste into this field","activity-submit--mentimeter-placeholder":"Mentimeter link","activity-submit--mentimeter-questions-instructions":"Instructions:<br>1. Connect to Mentimeter<br>2. Open your presentation<br>3. Click on the \"Share\" button on the top right<br>4. Copy the \"Direct access link\"<br>5. Paste the link into this field","activity-submit--mentimeter-results-instructions":"Instructions:<br>1. Connect to Mentimeter<br>2. Open your presentation<br>3. Click on the \"Share\" button on the top right<br>4. Click on \"Results sharing\"<br>5. Copy the \"Link to the live results\"<br>6. Paste the link into this field","activity-submit--other-placeholder":"HTML code","activity-submit--other-instructions":"Instructions:<br>1. Paste HTML code (iFrame) in the field","activity-submit--collaborative-tools":"Collaborative tools","activity-submit--quizzes":"Quizzes","activity-submit--audience-feedback":"Audience feedback","activity-submit--others":"Others","activity-delete--title":"Delete this activity","activity-delete--confirm":"Delete this activiy?","resource-submit--iframe-placeholder":"HTML iFrame code","resource-submit--padlet-placeholder":"URL link to the Padlet","resource-submit--padlet-instructions":"Instructions:<br>1. Open your Padlet<br>2. Find the embed option in the Share menu<br>3. Copy the embed code and paste into this field","resource-submit--kahoot-placeholder":"URL link to the Padlet","resource-submit--quizlet-placeholder":"Quizlet embed code","resource-submit--quizlet-instructions":"Instructions:<br>1. Open your Quizlet<br>2. Find the embed option in the three dots menu<br>3. Copy the embed code and paste into this field","resource-submit--mentimeter-placeholder":"Mentimeter link","resource-submit--mentimeter-questions-instructions":"Instructions:<br>1. Connect to Mentimeter<br>2. Open your presentation<br>3. Click on the \"Share\" button on the top right<br>4. Copy the \"Direct access link\"<br>5. Paste the link into this field","resource-submit--mentimeter-results-instructions":"Instructions:<br>1. Connect to Mentimeter<br>2. Open your presentation<br>3. Click on the \"Share\" button on the top right<br>4. Click on \"Results sharing\"<br>5. Copy the \"Link to the live results\"<br>6. Paste the link into this field","resource-submit--other-placeholder":"HTML code","resource-submit--other-instructions":"Instructions:<br>1. Paste HTML code (iFrame) in the field","resource-submit--collaborative-tools":"Collaborative tools","resource-submit--quizzes":"Quizzes","resource-submit--audience-feedback":"Audience feedback","resource-submit--others":"Others","file-upload--photo":"Photo","file-upload--file":"File","categories-settings--page-title":"Manage categories","categories-settings--add-category":"Add a category","categories-settings--add-subcategory":"Add subcategory","categories-settings--delete-category-confirm":"Delete this category?","feed-item--item-added-post-1":"added a Post","feed-item--item-added-resource-1":"added a Resource","feed-item--item-added-activity-1":"added an Activity","feed-item--item-added-2":"in","qr-code--title":"Scan the QR code","file-upload--file-too-big":"This file is too big. Max size:","space-controller--space-archived":"This space has been archived and is no longer available.","owners-settings--page-title":"Manage owners","owners-settings--add-user":"Add owner","owners-settings--add-owner":"E-mail account of the Beekee Live user to add:","chat--start-new-chat":"Start a new chat","assignment--submit-file":"Submit a file","assignment-file-submit--title":"Submit a file","assignment-work--edit-feedback":"Edit feedback","assignment-work--show-feedback":"Add a feedback","assignment-work--submit-feedback":"Submit","assignment-work--delete-confirm":"Delete this work?","privacy--content":"<h4> Introduction </h4> <p> <ol> <li> The privacy of visitors to our website is very important to us, and we are committed to protecting it. This policy details what we do with your personal information. Our privacy policy complies with Swiss regulations and the General Data Protection Regulation (GDPR) issued by the European Parliament. </li> <li> All our data is stored on servers located in Switzerland. </li> <li> Consenting to our use of cookies in accordance with this policy on your first visit to our website allows us to use cookies each time you visit our site. </li> </ol> </p> <h4> Source </h4> <p> This document was created using a template from SEQ Legal (seqlegal.com). </p> <h4> Collection of personal information </h4> <p> The following types of personal information may be collected, stored and used: <ol> <li> Information about your computer, including including your IP address, geographic location, browser type and version, and operating system; </li> <li> Information about your visits and use of this website including the referring source, the duration of the visit, the pages viewed, and the navigation paths of websites; </li> <li> Information such as your e-mail address, which you provide to us when you register on the site; </li> <li> Information you enter when creating a profile on our website such as your name, profile picture, gender, date of birth; </li> <li> Information such as your name and e-mail address, which you enter to subscribe to our emails and / or newsletters; </li> <li> Information that you enter when using the services of our website; </li> <li> Information generated when using our site, including when, how often and under what circumstances you use it; </li> <li> Information relating to the purchases you make, the services you use or the transactions you carry out on our site, which includes your name, address, telephone number, e-mail address and banking information; </li> <li> Information contained in all communications that you send to us by e-mail or on our website, including their content and metadata; </li> <li> Any other personal information that you provide to us. </li> </ol> Before you disclose personal information about another person to us, you must obtain that person's consent to the disclosure and handling of that personal information under the terms of this policy. <br> The information contained in the Beekee Live spaces are the exclusive property and responsibility of the user who created the space. This data can be viewed by an employee of our company for the purpose of solving technical problems. Under no circumstances will we consult or use this data for any other purpose. </p> <h4> Use of your personal information </h4> <p> Personal information provided to us through our website will be used for the purposes described in this policy or in the relevant pages of the site. We may use your personal information to: <ol> <li> Administer our website and our business; </li> <li> Personalize our website for you; </li> <li> Enable your use of the services offered on our website; </li> <li> Provide you with the services purchased on our site; </li> <li> Send you statements, invoices and payment reminders, and collect your payments; </li> <li> Sending you non-marketing commercial communications; </li> <li> Sending you e-mail notifications that you have expressly requested; </li> <li> Sending you our newsletter by e-mail, if you wish to '' requested (you can inform us at any time of your wish to no longer receive our newsletter); </li> <li> Deal with requests and complaints relating to your website made by or concerning you; </li> <li> Maintain the security of our website and prevent fraud; </li> <li> Verify compliance with the general conditions governing t use of our website (including monitoring private messages sent through our website's private messaging service); and </li> <li> Other uses in accordance with Swiss and European regulations. </li> </ol> If you submit personal information to our website for the purpose of publishing it, we will publish it and may use that information in accordance with the permissions you grant us. <br> Without your explicit consent, we will not provide your personal information to third parties for their direct marketing, or that of other third parties. </p> <h4> Disclosureon your personal information </h4> <p> We may disclose your personal information to any of our employees to the extent that is reasonably necessary for the purposes set out in this policy. <br> We may also disclose your personal information: <ol> <li> Insofar as we are required to do so by law; </li> <li> In connection with any pending or future legal proceedings; </li> <li> To establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk); </li> <li> To the buyer (or potential buyer) of any business or asset in our possession that we wish (or plan to) sell; and </li> <li> To any person whom we reasonably believe to be an integral part of a court or other authority having jurisdiction over the disclosure of such personal information if, in our opinion, such court or authority would be likely to request disclosure of such personal information. </li> </ol> Unless otherwise provided in this policy, we will not transmit your personal information to third parties. </p> <h4> Retention of your personal information </h4> <p> <ol> <li> This section details our data retention policies and procedures, designed to help us comply with our legal obligations regarding the retention and deletion of personal information. </li> <li> Personal information that we process for any purpose is not kept longer than necessary for that purpose or for those purposes. </li> <li> Without prejudice to section 2, we will generally delete the data personal data from these categories at regular intervals. </li> <li> Notwithstanding the other provisions of this Section G, we will keep documents (including electronic documents) containing personal data: </li> <ol> <li> To the extent that we are required to do so by law; </li> <li> If we believe that the documents may be relevant to any ongoing or potential legal proceedings; and </li> <li> To establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk). </li> </ol> </ol> </p> <h4> Security of your personal information </h4> <p> <ol> <li> We will take reasonable technical and organizational precautions to prevent loss, misuse or alteration of your personal information. </li> <li> We will store any personal information you provide to us on secure servers (password and firewall protected). </li> <li> All electronic financial transactions performed through our website will be protected by encryption technologies. </li> <li> You acknowledge that the transmission of information over the internet is inherently insecure, and that we cannot guarantee the security of your data. sent by internet. </li> <li> You are responsible for the confidentiality of the password you use to access our website; we will not ask you for your password (except when you identify yourself on our website). </li> </ol> </p> <h4> Amendments </h4> <p> We may sometimes set this policy updated by posting a new version on our website. You should check this page regularly to ensure that you are aware of any changes to this policy. We may notify you of changes to this policy by email or through the private messaging service of our website. </p> <h4> Your rights </h4> <p> At any time, you can us ask to provide you with any personal information we hold about you. The transfer of such information will be subject to the presentation of sufficient proof of your identity. </p> <h4> Third party websites </h4> <p> Our website contains hypertext links to third party websites and information concerning them. We have no control over these sites, and are not responsible for their privacy policies or practices. </p> <h4> Updating information </h4> <p> At any time, you can ask us to correct, update or delete information about you by contacting us at info@beekee.ch. </p> <h4> Cookies </h4> <p> Our website uses cookies. A cookie is a file containing an identifier (a string of letters and numbers) sent by a web server to a web browser and stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server. <br> Beekee Live uses two types of persistent cookies: <ol> <li> Session cookies which allow you to be automatically connected to the platform when you get there again. </li> <li> Google Analytics cookies which allow us to study the way in which users use Beekee Live, in order to improve our service. </li> </ol> No information contained in the cookies mentioned is not used for any other purpose, advertising or otherwise. <br> <br> Most browsers allow you to refuse or accept cookies. For example: <ol> <li> Internet Explorer (version 10): you can block cookies using the replacement cookie management settings available by clicking on \"Tools\", \"Internet options\", \"Confidentiality\" then \" Advanced \"; </li> <li> Firefox (version 24): you can block all cookies by clicking on\" Tools \",\" Options \",\" Privacy \"then selecting\" Use custom settings for history \"from the drop-down menu and by unchecking \"Accept cookies from sites\"; and </li> <li> Chrome (version 29): you can block all cookies by accessing the \"Personalize and control\" menu then clicking on \"Settings\", \"Show advanced settings\" and \"Content settings\" then by selecting \"Prevent sites from setting data\" in the \"Cookies\" header. </li> </ol> Blocking all cookies will have a negative impact on the use of many websites. If you block cookies, you will not be able to use all the functionality of our website. <br> You can delete cookies already stored on your computer. For example: <ol> <li> Internet Explorer (version 10): you must delete the cookies file manually (you can find instructions to do so here http://support.microsoft.com/kb/278835);</li> <li> Firefox (version 24): you can delete cookies by clicking on \"Tools\", \"Options\", and \"Privacy\", then selecting \"Use custom settings for history\" and clicking \" Show cookies ”, then on“ Delete all cookies ”; and </li> <li> Chrome (version 29): you can delete all cookies by accessing the \"Personalize and control\" menu then clicking on \"Settings\", \"Show advanced settings\" and \"Delete browsing data \"Then\" Delete cookies and data from other sites' modules \"before clicking on\" Delete browsing data \". </li> </ol> Deleting cookies will have a negative impact on the use of many sites web. </p> "};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fr.i18n.json":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/i18n/fr.i18n.json                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["fr"] = ["French (France)","Français"];
if(_.isUndefined(TAPi18n.translations["fr"])) {
  TAPi18n.translations["fr"] = {};
}

if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {
  TAPi18n.translations["fr"][namespace] = {};
}

_.extend(TAPi18n.translations["fr"][namespace], {"error-message":"Une erreur est survenue : ","access-denied--page-title":"Accès refusé !","access-denied--login-needed":"Vous devez d'abord vous connecter","access-denied--login":"Se connecter","admin--page-title":"Administration","admin--system":"Système","admin--spaces-list":"Espaces","admin--spaces-title":"Titre","admin--spaces-creation":"Date de création","admin--spaces-owner":"Propriétaire","admin--spaces-actions":"Actions","admin--spaces-open":"Ouvrir","admin--spaces-delete":"Supprimer","admin--spaces-author":"Auteur","admin--spaces-space":"Espace","admin--spaces-submission":"Date","admin--posts-list":"Posts","admin--users-list":"Comptes enseignants","admin--users-logins":"Identifiant","admin--users-creation":"Date de création","admin--users-last-connexion":"Dernière connexion","admin--users-actions":"Actions","admin--users-change-password":"Changer le mot de passe","admin--users-delete":"Supprimer","admin--user-delete-message":"Supprimer cet auteur et tous ces espaces ?","admin--user-delete-confirm-message":"L'utilisateur a été supprimé","admin--change-password-message":"Entrez un nouveau mot de passe pour l'utilisateur :","admin--change-password-confirm-message":"Le mot de passe a bien été changé.","admin--spaces-change-owner":"Changer le propriétaire","admin--change-owner-message":"Entrez l'e-mail du nouveau propriétaire :","admin--change-owner-confirm-message":"Le propriétaire a bien été changé.","layout--connection-status":"Déconnecté","login--page-title":"Accès enseignant","login--mail":"E-mail","login--password":"Mot de passe","login--ask-mail-forgot-password":"Entrez votre e-mail","login--send-mail-forgot-password-link":"Réinitialiser mon mot de passe","login--button-submit":"S'identifier","login--register":"Vous n'avez pas encore de compte ?","login--register-contact-admin":"Contactez l'administrateur de la Beekee Box.","login--register-link":"Créez un compte","login--user-not-found":"L'utilisateur n'existe pas.","login--incorrect-password":"Le mot de passe n'est pas correct.","login--send-mail-forgot-password":"Un e-mail a été envoyé à l'adresse %s comprenant un lien pour réinitialiser votre mot de passe.","login--send-mail-forgot-password-error":"Une erreur est survenue. Merci de contacter l'administrateur à l'adresse : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Erreur lors de l'envoi d'un e-mail pour récupérer un mot de passe : %s","logout--page-title":"Se déconnecter","not-found--page-title":"Page introuvable","not-found--page-description":"Désolé, nous ne pouvons pas trouver une page à cette adresse.","not-found--go-back":"Revenir à l'accueil","privacy--page-title":"Politique de confidentialité","register--page-title":"Créer un compte","register--mail":"E-mail","register--email-description":"Nous ne partagerons jamais votre e-mail avec d'autres.","register--name":"Nom","register--password":"Mot de passe","register--password-description":"Veuillez choisir un mot de passe d'au moins 5 caractères.","register--password-confirm":"Confirmez le mot de passe","register--password-dont-match":"Les mots de passe de sont pas identiques.","register--terms":"En vous enregistrant, vous acceptez notre <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">politique de confidentialité</a>.<br>Votre adresse e-mail ne sera pas transmise à des tiers.","register--button-submit":"S'enregistrer","register--mail-exist":"Un compte lié à cet e-mail existe déjà.","register--mail-no-valid-message":"Merci d'entrer une adresse e-mail valide.","register--mail-subject":"Votre inscription sur Beekee Live","register--mail-content":"<h2>Bienvenue sur <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h1><h3>Nous sommes fiers de vous compter parmi nous. Commencez dès aujourd'hui à enseigner en créant votre premier espace Beekee Live !</h3><p><b>Astuce</b> : Savez-vous que vous pouvez utiliser Beekee Live sur ordinateur, smartphone ou tablette sans avoir besoin d'installer une app ?</p><p>L'<a href=\"https://www.beekee.ch\">équipe Beekee</a></p>","register--accept-policy":"J'accepte la <a href=\"privacy\" target=\"_blank\">politique de confidentialité</a>","register--subscribe-newsletter":"Souscrire à notre newsletter","reset-password--page-title":"Réinitialiser votre mot de passe","reset-password--new-password":"Nouveau mot de passe","reset-password--button-submit":"Enregistrer","register--password-changed-message":"Le mot de passe a été changé.","space--update":"Beekee Live a été mis à jour, <a href=\"https://www.beekee.ch/beekeelive/updates_fr.html\">découvrez les modifications</a> !","space--hide-update":"Cacher ce message","space--sort-date":"Trier par date","space--sort-likes":"Trier par J'aime","space--resource-more":"Autre","space--space-archived":"Cet espace est archivé et les autres ne peuvent plus y accéder.","space--last-seen":"Vu :","space-edit-categories--page-title":"Gérer les catégories","space-edit-categories--page-description":"Les catégories servent à classer les publications.<br />À la différence des tags, les catégories sont définies à l'avance par l'enseignant.","space-edit-categories--confirm-delete":"Supprimer la catégorie","space-edit--button-submit-add-category":"Ajouter","space-edit-categories--edit-category":"Modifier la catégorie","space-edit--page-title":"Paramètres de l'espace","space-edit--subtitle-general":"Général","space-edit--subtitle-notifications":"Notifications","space-edit--enable-notifications":"Recevoir un e-mail lorsqu'un post est publié","space-edit--enable-comment-notifications":"Recevoir un e-mail lorsqu'un commentaire est ajouté","space-edit--list-title-change-code":"Changer le code d'accès","space-edit--description-change-code":"Transmettez le code d'accès aux participants pour qu'ils  rejoignent cet espace.","space-edit--list-title-rename-space":"Renommer cet espace","space-edit--list-title-delete-space":"Supprimer cet espace","space-edit--list-title-content":"Contenu","space-edit--list-title-flow":"Flux continu","space-edit--description-flow":"En activant le flux continu, les nouvelles publications s'affichent en temps réel.","space-edit--list-title-categories":"Gérer les catégories","space-edit--list-title-comments":"Autoriser les commentaires","space-edit--subtitle-users":"Utilisateurs","space-edit--list-title-users":"Gérer les auteurs","space-edit--list-title-free-users":"Auteurs libres","space-edit--description-free-users":"En activant \"Auteurs libres\", les utilisateurs entrent eux-même leur nom d'utilisateur à la première connexion. Autrement, ils choisiront parmis une liste modifiable sous \"Gérer les auteurs\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Les auteurs peuvent modifier leurs propres publications","space-edit--select-permissions-all":"Les auteurs peuvent modifier toutes les publications","space-edit--select-permissions-none":"Personne ne peut ajouter ou modifier des publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Mettre à jour la box","space-edit--list-title-ip":"Adresse IP :","space-edit--list-title-sync":"Syncroniser avec le cloud","space-edit--description-sync":"Branchez la beekee box à l'aide d'un câble ethernet pour syncroniser son contenu avec le cloud (www.beekee.ch). Cela peut prendre plusieurs minutes.","space-edit--subtitle-account":"Votre compte","space-edit--description-change-password":"Modifier le mot de passe de votre compte.","space-edit--change-code-message":"Changer le code d'accès","space-edit--change-code-confirm-message":"Le code d'accès a été changé.","space-edit--change-code-already-used-message":"Ce code est déjà attribué à un autre espace.","space-edit--rename-space-message":"Renommer cet espace","space-edit--rename-space-confirm-message":"Cet espace s'appelle désormais","space-edit--delete-space-message":"Effacer définitivement cet espace et son contenu ?","space-edit--archive-space-message":"Archiver cet espace ?\nIl restera accessible pour vous dans la section \"Espaces archivés\", mais ne le sera plus pour les autres.","space-edit--archive-space":"Archiver cet espace","space-edit--reactivate-space":"Réactiver cet espace","space-edit--reactivate-space-message":"Réactiver cet espace ?","space-edit--delete-space-confirm-message":"L'espace a bien été supprimé.","space-edit--sync-login-message":"Pour synchroniser cet espace avec le cloud, vous devez posséder un compte sur www.beekee.ch.\nSi c'est le cas, entrez le nom d'utilisateur de votre compte :","space-edit--sync-error-message":"Un problème est survenu. Vérifiez que la box est bien connectée à internet et recommencez.","space-edit--update-message":"La mise à jour de la box peut rendre la plateforme inaccessible pendant plusieurs minutes.\nVoulez-vous continuer ?","space-edit--update-waiting-message":"La box va être mise à jour, merci de patienter...","space-edit--no-ip":"Pas d'adresse IP","space-edit--not-connected":"Non connecté","space-edit--module-resources":"Mettre à disposition des fichiers pour vos étudiants","space-edit--public-space":"Permet à n'importe qui de se connecter à cet espace sans nécessiter de code d'accès","space-edit--manage-users":"Gérer les participants","space-edit--manage-owners":"Gérer les propriétaires","space-edit--permissions-enable-author-list":"Les participants se connectent en choisissant leur nom dans la liste","space-edit--permissions-avatar-enabled":"Activer les avatars des participants","space-edit--permissions-author-list":"Modifier la liste des participants","space-edit--permissions-add-categories":"Les participants peuvent ajouter des catégories","space-edit--permissions-add-posts":"Les participants peuvent ajouter des posts","space-edit--permissions-add-posts-home":"Les participants peuvent ajouter des posts dans l'accueil","space-edit--permissions-change-name":"Les participants peuvent changer de nom","space-edit--permissions-add-resources":"Les participants peuvent ajouter des ressources","space-edit--permissions-messages-enabled":"Les participants peuvent envoyer des messages privés","space-edit-authors---page-title":"Gérer les participants","space-edit-authors---page-description":"Les participant servent à identifier les publications.<br>Ajoutez par exemple le nom de vos participants ou le nom d'un groupe.","space-edit-authors---submit-button":"Ajouter","space-edit-authors--delete-author-message":"Supprimer le participant %s ?","space-edit-authors--edit-author-message":"Modifier le participant :","space-edit-authors--add-author-error-message":"Il y a déjà un participant avec ce nom.","users-settings--page-title":"Gérer les participants","users-settings--page-subtitle":"Liste les participants","users-settings--add-user":"Ajouter un participant","users-settings--change-user-password":"Changer le mot de passe de le participant :","users-settings--change-user-name":"Changer le nom de le participant :","users-settings--enable-password":"Demander un mot de passe à la connexion","users-settings--user-name":"Nom de l'élève :","index-student--title":"La plateforme pour soutenir la collaboration en temps réel","index-student--wrapper-text":"Un espace privé pour partager photos et messages<br>avec vos étudiants, collègues ou amis.","index-student--code":"Espace privé","index-student--code-input-placeholder":"Entrez un code d'accès","index-student--visited-title":"Récemment visité :","index-student--delete-recent":"(effacer)","index-student--public-spaces-title":"Espaces publics","index-student--button-code-link":"Valider","index-student--space-doesnt-exist-message":"Cet espace n'existe pas.\nAssurez-vous de respecter les majuscules et les minuscules.","index-student--create-your-space-1":"Créez","index-student--create-your-space-2":" gratuitement votre propre espace en quelques secondes !","index-student--privacy":"Confidentialité","index-student--about-us":"À propos de nous","index-teacher--archived-spaces-title":"Espaces archivés","index-teacher--spaces-title":"Vos espaces","index-teacher--no-space":"Vous n'avez pas encore créé d'espace.","index-teacher--button-submit-space":"Créer un nouvel espace","index-teacher--shutdown":"Éteindre","index-teacher--shutdown-message":"Voulez-vous vraiment éteindre la box ?","index-teacher--shutdown-confirm":"La box va s'éteindre dans quelques secondes...","index-teacher--space-settings":"Paramètres","index-teacher--archive-space":"Archiver","index-teacher--reactivate-space":"Réactiver","index-teacher--delete-space":"Supprimer","index-teacher--duplicate-space":"Dupliquer","update--reboot-confirm":"La box va redémarrer dans quelques secondes...","space-page--hide-panel":"Cacher","space-page--code-panel-title":"Code d'accès de l'espace :","space-page--code-panel-description":"Transmettez ce code pour que d'autres vous rejoignent:","space-page--pinned-title":"Épinglés","space-page--post-order":"Tri","space-page--post-order-asc":"Plus récents d'abord","space-page--post-order-desc":"Plus anciens d'abord","space-page--no-post":"Il n'y pas encore de publication à afficher.","space-submit--page-title":"Créer un espace","space-submit--space-name":"Nom de l'espace","space-submit--button-submit":"Créer","space-submit--button-cancel":"Annuler","space-users-first-connection--page-title":"Quel est votre nom ?","space-users--page-title":"Vous voulez changer de nom d'utilisateur ?","space-users--page-description":"Il sera utilisé pour identifier vos contributions","space-users--input-choose-author-placeholder":"Entrez un nom...","space-users--submit-author":"Valider","space-users--user-exist":"L'utilisateur %s existe déjà. Se connecter avec ce nom ?","space-users--list-page-title":"Qui êtes-vous ?","space-users--list-page-description":"Choisissez votre nom dans la liste.","space-users--list-password":"Mot de passe","space-users--list-password-help":"Entrez le mot de passe que votre enseignant vous a transmis.","space-users--avoid-space-code":"Merci d'entrer votre nom, pas le code d'accès de l'espace.","space-sidebar--home":"Accueil","space-sidebar--filters":"Filtres","space-sidebar--feed":"Flux","space-sidebar--discussions":"Discussions","space-sidebar--live-feed":"Direct","space-sidebar--categories":"Catégories","space-sidebar--add-category":"Ajouter","space-sidebar--authors":"Participants","space-sidebar--lessons":"Leçons","space-sidebar--resources":"Ressources","space-sidebar--assignments":"Rendus","space-sidebar--apps":"Liens","space-sidebar--activities":"Activités","space-sidebar--settings":"Paramètres","space-sidebar--notifications":"Notifications","space-sidebar--me":"moi","space-header--new-post-comment-notification":"a commenté un post","space-header--new-resource-comment-notification":"a commenté une ressource","space-header--new-tag-notification":"vous a tagué","space-header--no-notification":"Pas de nouvelle notification","space-header--clear-notification":"Tout effacer","space-header--confirm-copy-code":"Le code a été copié.","space-header--confirm-copy-link":"Le lien a été copié.","space-header--notifications":"Notifications","space-header--share":"Partager","space-header--space-code":"Code de l'espace","space-header--copy-code":"Copier le code de l'espace","space-header--copy-link":"Copier le lien de l'espace","space-header--send-email":"Envoyer le lien par e-mail","space-header--qr-code":"Afficher le QR code","space-sidebar--user-settings":"Compte de l'utilisateur","space-sidebar--create-own-space-1":"Créé votre propre espace","space-sidebar--create-own-space-2":"gratuitement !","space-sidebar--contact-us":"Nous contacter","space-sidebar--privacy":"Confidentialité","space-sidebar--about-beekee-live-1":"https://www.beekee.ch/beekeelive","space-sidebar--about-beekee-live-2":"Plus d'informations sur Beekee Live","space-sidebar--about-us":"À propos de nous","space-sidebar--delete-author-confirm":"Supprimer cet auteur ?","space-sidebar--edit-categories":"Gérer","space-sidebar--edit-users":"Gérer","space-sidebar--bug":"Signaler un bug","space-sidebar--bug-link":"https://forms.clickup.com/f/4bkdp-792/G8NIK87E090NYDYFDP","space-sidebar--swiss-hosted":"Hébergé en Suisse","space-submit--create-space":"Créer un nouvel espace","space-submit--create-space-placeholer":"Nom de l'espace","header--back":"Retour","header--admin-access":"Accès enseignant","header--register":"Créer un comte","header--login":"S'identifier","header--exit-message":"Quitter cet espace ?","menu--show-all":"Tout afficher","menu--favorites":"Mes favoris","menu--files":"Fichiers","menu--images":"Images","menu--categories":"Catégories","menu--authors":"Auteurs","menu--tags":"Mots-clés","menu--code":"Code d'accès","post-edit--submit-button":"Modifier","post-item--remove-favorites":"Retirer de mes favoris","post-item--add-favorites":"Ajouter à mes favoris","post-item--delete-post-confirm":"Effacer la publication ?","post-item--delete-comment-confirm":"Effacer le commentaire ?","post-submit--body-placeholder":"Dites quelque chose...","post-submit--tags-placeholder":"Ajoutez des mots-clés...","post-submit--select-category":"Catégorie","post-submit--no-category":"Aucune catégorie","post-submit--rotate-image":"Tourner","post-submit--delete-image":"Supprimer","post-submit--confirm-delete-image":"Effacer l'image ?\nCette action est irréversible.","post-submit--confirm-delete-file":"Effacer le fichier ?\nCette action est irréversible.","post-submit--submit-button":"Envoyer","post-submit--mail-notification-subject":"Nouveau post sur Beekee Live","post-submit--mail-comment-notification-subject":"Nouveau commentaire sur Beekee Live","post-submit--mail-notification-body":"Un nouveau post a été posté sur Beekee Live.","post-submit--mail-comment-notification-body":"Un commentaire a été posté sur Beekee Live.","post-submit--mail-notification-link":"Voir le post","user-settings--page-title":"Paramètres de l'utilisateur","user-settings--confirm-logout":"Voulez-vous vraiment vous déconnecter ?","user-settings--change-name":"Changer de nom","user-settings--change-password":"Changer de mot de passe","user-settings--logout":"Se déconnecter","user-settings--change-name-message":"Nouveau nom :","user-settings--change-password-old-message":"Mot de passe actuel :","user-settings--change-password-new-message":"Nouveau mot de passe :","user-settings--change-password-confirm-message":"Votre mot de passe a été changé.","user-settings--change-email":"Changer l'adresse e-mail","user-settings--change-email-message":"Nouvel adresse e-mail :","user-settings--change-email-confirm-message":"Votre e-mail a été changé.","user-settings--change-email-incorrect":"Le format de l'adresse e-mail n'est pas correct","space-header--leave":"Quitter cet espace","space-header--settings":"Paramètres de l'espace","post--edit":"Éditer","post--show":"Afficher","post--hide":"Cacher","post--delete":"Supprimer","home--pinned":"Épinglé","home--all":"Tous","home--title":"Accueil","home--space-code-message":"<strong>Bzz!</strong> Partagez ce code pour que d'autres se joignent à vous:","home--submit-button":"Ajouter une description","home-post--order-up":"Monter","home-post--order-down":"Descendre","home-post-delete--title":"Supprimer cette description","home-post-delete--confirm":"Supprimer cette description ?","modal--close":"Fermer","modal--cancel":"Annuler","modal--delete":"Supprimer","modal--submit":"Envoyer","modal--add":"Ajouter","modal--save":"Sauver les changements","home-post-edit--title":"Modifier la description","home-post-submit--title":"Ajouter une description","home-post-submit--placeholder":"Informations","home-post-submit--confirm-toast":"La description a été ajoutée.","lessons--title":"Leçons","lessons--subtitle":"E-learning Articulate Storyline","lessons--submit-button":"Ajouter une leçon","lessons-post--start-lesson":"Lancer cette leçon","lessons-post-submit--title":"Ajouter une leçon","lessons-post-submit--title-placeholder":"Titre de la leçon","lessons-post-submit--description-placeholder":"Description de la leçon","lessons-post-submit--help":"Les leçons doivent être exportées au format HTML5 à partir du logiciel Storyline.<br>Le dossier résultant doit être zippé avant d'être uploadé, et le .zip doit avoir le même nom que le dossier qu'il contient.","lessons-post-submit--confirm-toast":"La leçon a été ajoutée.","lessons-post-delete--confirm":"Voulez-vous supprimer cette leçon ?","lessons-post-delete--title":"Supprimer cette leçon","lessons-post-edit--title":"Editer une leçon","lessons-upload--button":"Uploader une leçon Storyline","resources--empty":"Il n'y a pas encore de ressources pour le moment","resources--title":"Ressources","resources--add-document":"Fichier","resources--add-text":"Texte","resources--add-video":"Vidéo YouTube","resources--add-link":"Lien","resources--add-label":"Titre","resources-edit--title":"Modifier","resources-edit--document-title":"le fichier","resources-edit--document-text":"le texte","resources-edit--video-title":"la vidéo","resources-edit--link-title":"le lien","resources-edit--label-title":"le titre","resources-edit--html-title":"le HTML","resources-post-edit--title":"Editer une resource","resources-post-submit--title":"Ajouter une ressource","resources-post-submit--title-placeholder":"Titre","resources-post-submit--description-placeholder":"Description","resources-post-submit--confirm-toast":"La ressource a été ajoutée.","resources-submit--text-title":"Ajouter du texte","resources-submit--document-title":"Ajouter un fichier","resources-submit--video-title":"Ajouter une vidéo","resources-submit--link-title":"Ajouter un lien","resources-submit--label-title":"Ajouter un titre","resources--submit-button":"Ajouter une ressource","resource-submit--title":"Ajouter une ressource","resource-submit--vimeo-placeholder":"Lien URL de la vidéo Vimeo","resource-submit--youtube-placeholder":"Lien URL de la vidéo YouTube","resource-delete--title":"Supprimer la ressource","resource-delete--confirm":"Supprimer la ressource?","resource-delete---delete-confirm":"Voulez-vous réellement supprimer cette ressource ?","resources-category-edit--title":"Éditer une catégorie","resources-category-submit--title":"Ajouter une catégorie","resources-category-submit--placeholder":"Nom de la catégorie","resource--show-more":"Afficher plus...","live-feed--empty":"Il n'y a pas de post à afficher ici pour l'instant","live-feed--notification-panel":"nouveau(x) message(s)","live-feed--load-more":"Charger plus...","live-feed-category-edit--title":"Éditer une catégorie","live-feed-category-submit--title":"Ajouter une catégorie","live-feed-category-submit--placeholder":"Nom de la catégorie","live-feed-subcategory-submit--title":"Ajouter une sous-catégorie","live-feed-subcategory-submit--placeholder":"Nom de la sous-catégorie","live-feed-post--remove-pin":"Retirer l'épingle","live-feed-post--add-pin":"Épingler en haut","live-feed-post-delete--delete-confirm":"Voulez-vous supprimer ce post ?","live-feed-post-delete--title":"Supprimer ce post","live-feed-post--add-comment":"Commenter","live-feed-post--like":"J'aime","live-feed-post--nb-likes-with-me":"Vous et %s personne(s)","live-feed-post--i-like":"Vous aimez","live-feed-post--nb-likes":"personne(s)","live-feed-post--comments":"commentaire(s)","live-feed-post--hide-on-feed":"Masquer de l'accueil","live-feed-post-submit--title":"Ajouter une publication","live-feed-post-submit--add-category":"+ Ajouter une catégorie...","live-feed-post-submit--post-in":"Publier dans","live-feed-post-submit--in":"dans","live-feed-post-submit--home":"Accueil","live-feed-post-edit--title":"Éditer un post","live-feed-delete-comment--title":"Supprimer un commentaire","live-feed-delete-comment--subtitle":"Supprimer ce commentaire ?","app-submit--title":"Ajouter une activité","app-submit--title-placeholder":"Titre","app-submit--url-placeholder":"Lien URL","app--submit-button":"Ajouter une activité","app-submit--description-placeholder":"Description","app-submit--confirm-toast":"Le lien a été ajouté","app-edit--title":"Modifier le lien","activity--empty":"Il n'y a pas encore d'activité pour le moment","activity-edit--title":"Modifier l'activité","activity--add-padlet":"Padlet","activity--add-mentimeter":"Mentimeter","activity--add-quizlet":"Quizlet","activity--add-other":"Autre","activity--submit-button":"Ajouter une activité","activity-submit--title":"Ajouter une activité","activity-submit--title-placeholder":"Titre","activity-submit--description-placeholder":"Description","activity-submit--iframe-placeholder":"Code HTML de l'iFrame","activity-submit--padlet-placeholder":"Lien URL du Padlet","activity-submit--padlet-instructions":"Instructions:<br>1. Ouvrir votre Padlet<br>2. Trouver \"Intégrer dans votre blog ou votre site Web\" dans le menu \"Partager\"<br>3. Copiez le code et collez-le dans le champ ci-dessus","activity-submit--quizlet-placeholder":"Code d'intégration Quizlet","activity-submit--quizlet-instructions":"Instructions:<br>1. Ouvrir votre Quizlet<br>2. Cliquer sur les trois petits points, puis sur \"Intégrer\"<br>3. Copiez le code HTML et collez-le dans le champ ci-dessus","activity-submit--mentimeter-placeholder":"Lien Mentimeter","activity-submit--mentimeter-questions-instructions":"Instructions:<br>1. Connectez-vous à Mentimeter<br>2. Ouvrez votre présentation<br>3. Cliquez sur le bouton \"Share\" dans le menu en haut à droite<br>4. Copiez le \"Direct access link\"<br>5. Collez-le lien dans le champ ci-dessus","activity-submit--mentimeter-results-instructions":"Instructions:<br>1. Connectez-vous à Mentimeter<br>2. Ouvrez votre présentation<br>3. Cliquez sur le bouton \"Share\" dans le menu en haut à droite<br>4. Cliquez sur \"Share the results\"<br>5. Copiez le lien en cliquant sur \"Copy link\"<br>6. Collez-le lien dans le champ ci-dessus","activity-submit--other-placeholder":"Code HTML","activity-submit--other-instructions":"Instructions:<br>1. Collez du code HTML (iFrame) dans le champs ci-dessus","activity-submit--collaborative-tools":"Outils collaboratifs","activity-submit--quizzes":"Quiz","activity-submit--audience-feedback":"Réactions de l'audience","activity-submit--others":"Autres","activity-delete--title":"Supprimer cette activité","activity-delete--confirm":"Supprimer cette activité ?","resource-submit--iframe-placeholder":"Code HTML de l'iFrame","resource-submit--padlet-placeholder":"Lien URL du Padlet","resource-submit--padlet-instructions":"Instructions:<br>1. Ouvrir votre Padlet<br>2. Trouver \"Intégrer dans votre blog ou votre site Web\" dans le menu \"Partager\"<br>3. Copiez le code et collez-le dans le champ ci-dessus","resource-submit--kahoot-placeholder":"Lien URL du Kahoot","resource-submit--quizlet-placeholder":"Code d'intégration Quizlet","resource-submit--quizlet-instructions":"Instructions:<br>1. Ouvrir votre Quizlet<br>2. Cliquer sur les trois petits points, puis sur \"Intégrer\"<br>3. Copiez le code HTML et collez-le dans le champ ci-dessus","resource-submit--mentimeter-placeholder":"Lien Mentimeter","resource-submit--mentimeter-questions-instructions":"Instructions:<br>1. Connectez-vous à Mentimeter<br>2. Ouvrez votre présentation<br>3. Cliquez sur le bouton \"Share\" dans le menu en haut à droite<br>4. Copiez le \"Direct access link\"<br>5. Collez-le lien dans le champ ci-dessus","resource-submit--mentimeter-results-instructions":"Instructions:<br>1. Connectez-vous à Mentimeter<br>2. Ouvrez votre présentation<br>3. Cliquez sur le bouton \"Share\" dans le menu en haut à droite<br>4. Cliquez sur \"Share the results\"<br>5. Copiez le lien en cliquant sur \"Copy link\"<br>6. Collez-le lien dans le champ ci-dessus","resource-submit--other-placeholder":"Code HTML","resource-submit--other-instructions":"Instructions:<br>1. Collez du code HTML (iFrame) dans le champs ci-dessus","resource-submit--collaborative-tools":"Outils collaboratifs","resource-submit--quizzes":"Quiz","resource-submit--audience-feedback":"Réactions de l'audience","resource-submit--others":"Autres","file-upload--photo":"Photo","file-upload--file":"Fichier","file-upload--file-too-big":"Ce fichier est trop gros. Taille max. :","categories-settings--page-title":"Gérer les catégories","categories-settings--add-category":"Ajouter une catégorie","categories-settings--add-subcategory":"Ajouter sous-catégorie","categories-settings--delete-category-confirm":"Supprimer cette catégorie ?","feed-item--item-added-post-1":"a ajouté un Post","feed-item--item-added-resource-1":"a ajouté une Ressource","feed-item--item-added-activity-1":"a ajouté une Ressource","feed-item--item-added-2":"dans","qr-code--title":"Scannez le QR code","space-controller--space-archived":"Cet espace a été archivé et n'est plus disponible.","owners-settings--page-title":"Gérer les propriétaires","owners-settings--add-user":"Ajouter un propriétaire","owners-settings--add-owner":"Compte e-mail de l'utilisateur de Beekee Live à ajouter :","chat--start-new-chat":"Commencez un nouveau chat","assignment--submit-file":"Déposer un document","assignment-file-submit--title":"Déposer un document","assignment-work--edit-feedback":"Modifier le feedback","assignment-work--show-feedback":"Ajouter un feedback","assignment-work--submit-feedback":"Envoyer","assignment-work--delete-confirm":"Supprimer le rendu ?","privacy--content":"<h4>Introduction</h4><p><ol><li>La confidentialité des visiteurs de notre site web est très importante à nos yeux, et nous nous engageons à la protéger. Cette politique détaille ce que nous faisons de vos informations personnelles. Notre politique de confidentialité répond à la réglementation suisse et au Règlement Général sur la Protection des Données (RGPD) émis par le Parlement Européen.</li><li>Toutes nos données sont stockées sur des serveurs situés en Suisse.</li><li>Consentir à notre utilisation de cookies en accord avec cette politique lors de votre première visite de notre site web nous permet d’utiliser des cookies à chaque fois que vous consultez notre site.</li></ol></p><h4>Source</h4><p>Ce document a été créé grâce à un modèle de SEQ Legal (seqlegal.com).</p><h4>Collecte d'informations personnelles</h4><p>Les types d’informations personnelles suivants peuvent être collectés, stockés et utilisés :<ol><li>Des informations à propos de votre ordinateur, y compris votre adresse IP, votre localisation géographique, le type et la version de votre navigateur, et votre système d’exploitation ;</li><li>Des informations sur vos visites et votre utilisation de ce site web y compris la source référente, la durée de la visite, les pages vues, et les chemins de navigation de sites web ;</li><li>Des informations comme votre adresse e-mail, que vous nous fournissez lors de votre inscription au site ;</li><li>Des informations que vous saisissez quand vous créez un profil sur notre site web comme votre nom, votre photo de profil, votre genre, votre date de naissance ;</li><li>Des informations comme votre nom et votre adresse e-mail, que vous saisissez pour souscrire à nos e-mails et/ou newsletters ;</li><li>Des informations que vous saisissez quand vous utilisez les services de notre site web ;</li><li>Des informations générées lors de l’utilisation de notre site, y compris quand, à quelle fréquence et sous quelles circonstances vous l’utilisez ;</li><li>Des informations relatives aux achats que vous faites, aux services que vous utilisez ou aux transactions que vous effectuez sur notre site, qui incluent votre nom, adresse, numéro de téléphone, adresse e-mail et informations bancaires ;</li><li>Des informations contenues dans toutes les communications que vous nous envoyez par e-mail ou sur notre site web, y compris leurs contenus et leurs métadonnées ;</li><li>Toute autre information personnelle que vous nous communiquez.</li></ol>Avant de nous divulguer des informations personnelles concernant une autre personne, vous devez obtenir le consentement de ladite personne en ce qui concerne la divulgation et le traitement de ces informations personnelles selon les termes de cette politique.<br>Les informations contenues dans les espaces Beekee Live sont la propriété exclusive et de la responsabilité de l’utilisateur ayant créé l’espace. Ces données peuvent être consultée par un employé de notre entreprise dans le but de résoudre des problèmes techniques. En aucun cas nous ne consulterons ni n’utiliserons ces données dans un autre but.</p><h4>Utilisation de vos informations personnelles</h4><p>Les informations personnelles qui nous sont fournies par le biais de notre site web seront utilisées dans les objectifs décrits dans cette politique ou dans les pages du site pertinentes. Nous pouvons utiliser vos informations personnelles pour :<ol><li>Administrer notre site web et notre entreprise ;</li><li>Personnaliser notre site web pour vous ;</li><li>Permettre votre utilisation des services proposés sur notre site web ;</li><li>Vous fournir les services achetés sur notre site ;</li><li>Vous envoyer des relevés, des factures et des rappels de paiement, et collecter vos paiements ;</li><li>Vous envoyer des communications commerciales non relatives au marketing ;</li><li>Vous envoyer des notifications par e-mail que vous avez expressément demandées ;</li><li>Vous envoyer notre newsletter par mail, si vous l’avez demandé (vous pouvez nous informer à tout moment de votre volonté de ne plus recevoir notre newsletter) ;</li><li>Traiter les demandes et les réclamations relatives à votre site web effectuées par vous ou vous concernant ;</li><li>Maintenir la sécurité de notre site web et empêcher la fraude ;</li><li>Vérifier le respect des conditions générales qui régissent l’utilisation de notre site web (y compris surveiller les messages privés envoyés par le biais du service de messagerie privé de notre site web) ; et</li><li>D’autres utilisations dans le respect de la réglementation suisse et européenne.</li></ol>Si vous soumettez des informations personnelles sur notre site web dans le but de les publier, nous les publierons et pourrons utiliser ces informations conformément aux autorisations que vous nous accordez.<br>Sans votre consentement explicite, nous ne fournirons pas vos informations personnelles à des tierces parties pour leur marketing direct, ni celui d’autres tierces parties.</p><h4>Divulgation de vos informations personnelles</h4><p>Nous pouvons divulguer vos informations personnelles à un de nos employés dans la mesure où cela est raisonnablement nécessaire aux fins énoncées dans cette politique.<br>Nous pouvons également divulguer vos informations personnelles :<ol><li>Dans la mesure où nous sommes tenus de le faire par la loi ;</li><li>Dans le cadre de toute procédure judiciaire en cours ou à venir ;</li><li>Pour établir, exercer ou défendre nos droits légaux (y compris fournir des informations à d’autres à des fins de prévention des fraudes et de réduction des risques de crédit) ;</li><li>À l’acheteur (ou acheteur potentiel) de toute entreprise ou actif en notre possession que nous souhaitons (ou envisageons de) vendre ; et</li><li>À toute personne que nous estimons raisonnablement faire partie intégrante d’un tribunal ou autre autorité compétente pour la divulgation de ces informations personnelles si, selon notre opinion, un tel tribunal ou une telle autorité serait susceptible de demander la divulgation de ces informations personnelles.</li></ol>Sauf disposition contraire de la présente politique, nous ne transmettrons pas vos informations personnelles à des tierces parties.</p><h4>Conservation de vos informations personnelles</h4><p><ol><li>Cette section détaille nos politiques de conservation des données et nos procédures, conçues pour nous aider à nous conformer à nos obligations légales concernant la conservation et la suppression d’informations personnelles.</li><li>Les informations personnelles que nous traitons à quelque fin que ce soit ne sont pas conservées plus longtemps que nécessaire à cette fin ou à ces fins.</li><li>Sans préjudice à l’article 2, nous supprimerons généralement les données personnelles de ces catégories à intervalle régulier.</li><li>Nonobstant les autres dispositions de cette Section G, nous conserverons des documents (y compris des documents électroniques) contenant des données personnelles :</li><ol><li>Dans la mesure où nous sommes tenus de le faire par la loi ;</li><li>Si nous pensons que les documents peuvent être pertinents pour toute procédure judiciaire en cours ou potentielle ; et</li><li>Pour établir, exercer ou défendre nos droits légaux (y compris fournir des informations à d’autres à des fins de prévention des fraudes et de réduction des risques de crédit).</li></ol></ol></p><h4>Sécurité de vos informations personnelles</h4><p><ol><li>Nous prendrons des précautions techniques et organisationnelles raisonnables pour empêcher la perte, l’abus ou l’altération de vos informations personnelles.</li><li>Nous stockerons toutes les informations personnelles que vous nous fournissez sur des serveurs sécurisés (protégés par mot de passe et pare-feu).</li><li>Toutes les transactions financières électroniques effectuées par le biais de notre site web seront protégées par des technologies de cryptage.</li><li>Vous reconnaissez que la transmission d’informations par internet est intrinsèquement non sécurisée, et que nous ne pouvons pas garantir la sécurité de vos données envoyées par internet.</li><li>Vous êtes responsable de la confidentialité du mot de passe que vous utilisez pour accéder à notre site web ; nous ne vous demanderons pas votre mot de passe (sauf quand vous vous identifiez sur notre site web).</li></ol></p><h4>Amendements</h4><p>Nous pouvons parfois mettre cette politique à jour en publiant une nouvelle version sur notre site web. Vous devez vérifier cette page régulièrement pour vous assurer de prendre connaissance de tout changement effectué à cette politique. Nous pouvons vous informer des changements effectués à cette politique par courrier électronique ou par le biais du service de messagerie privée de notre site web.</p><h4>Vos droits</h4><p>À tout moment, vous pouvez nous demander de vous fournir toute information personnelle que nous détenons sur vous. Le transfert de telles informations sera conditionné à la présentation de preuves suffisantes de votre identité.</p><h4>Sites web tiers</h4><p>Notre site web contient des liens hypertextes menant vers des sites web tiers et des informations les concernant. Nous n’avons aucun contrôle sur ces sites, et ne sommes pas responsables de leurs politiques de confidentialité ni de leurs pratiques.</p><h4>Mise à jour des informations</h4><p>À tout moment, vous pouvez nous demander de corriger, mettre à jour ou supprimer des informations vous concernant en nous contactant à l’adresse info@beekee.ch.</p><h4>Cookies</h4><p>Notre site web utilise des cookies. Un cookie est un fichier contenant un identifiant (une chaîne de lettres et de chiffres) envoyé par un serveur web vers un navigateur web et stocké par le navigateur. L’identifiant est alors renvoyé au serveur à chaque fois que le navigateur demande une page au serveur.<br>Beekee Live utilise deux types cookies persistants :<ol><li>Les cookies de session qui vous permettent d’être automatiquement connectés sur la plateforme lorsque vous vous y rendez à nouveau.</li><li>Les cookies Google Analytics qui nous permettent d’étudier la manière dont les utilisateurs utilisent Beekee Live, dans le but d’améliorer notre service.</li></ol>Aucune information contenue dans les cookies mentionnés n’est utilisée dans un autre but, publicitaire ou autre.<br><br>La plupart des navigateurs vous permettent de refuser ou d’accepter les cookies. Par exemple :<ol><li>Internet Explorer (version 10) : vous pouvez bloquer les cookies en utilisant les paramètres de remplacement de la gestion des cookies disponibles en cliquant sur «Outils», «Options internet», «Confidentialité» puis «Avancé»;</li><li>Firefox (version 24) : vous pouvez bloquer tous les cookies en cliquant sur «Outils», «Options», «Confidentialité» puis en sélectionnant «Utiliser des paramètres personnalisés pour l’historique» depuis le menu déroulant et en décochant «Accepter les cookies provenant des sites»; et</li><li>Chrome (version 29) : vous pouvez bloquer tous les cookies en accédant au menu «Personnaliser et contrôler» puis en cliquant sur «Paramètres», «Montrer les paramètres avancés» et «Paramètres de contenu» puis en sélectionnant «Empêcher les sites de définir des données» dans l’en-tête «Cookies».</li></ol>Bloquer tous les cookies aura un impact négatif sur l’utilisation de nombreux sites web. Si vous bloquez les cookies, vous ne pourrez pas utiliser toutes les fonctionnalités de notre site web.<br>Vous pouvez supprimer les cookies déjà stockés sur votre ordinateur. Par exemple :<ol><li>Internet Explorer (version 10) : vous devez supprimer le fichier cookies manuellement (vous pourrez trouver des instructions pour le faire ici http://support.microsoft.com/kb/278835);</li><li>Firefox (version 24) : vous pouvez supprimer les cookies en cliquant sur «Outils», «Options», et «Confidentialité», puis en sélectionnant «Utiliser des paramètres personnalisés pour l’historique» et en cliquant sur «Montrer les cookies», puis sur «Supprimer tous les cookies»; et</li><li>Chrome (version 29) : vous pouvez supprimer tous les cookies en accédant au menu «Personnaliser et contrôler» puis en cliquant sur «Paramètres», « Montrer les paramètres avancés » et «Supprimer les données de navigation» puis «Supprimer les cookies et les données des modules d’autres sites» avant de cliquer sur «Supprimer les données de navigation».</li></ol>Supprimer les cookies aura un impact négatif sur l’utilisation de nombreux sites web.</p>"});
TAPi18n._registerServerTranslator("fr", namespace);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"app_loader.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/app_loader.js                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
if (Meteor.isServer) {
  Inject.rawHead("metaLoader", '<meta name="viewport" content="initial-scale=1.0, user-scalable=0, width=device-width, height=device-height"/><meta name="apple-mobile-web-app-capable" content="yes">	<meta name="mobile-web-app-capable" content="yes">');
  Inject.rawBody("htmlLoader", Assets.getText('app_loader.html'));
}

if (Meteor.isClient) {
  Meteor.startup(function () {
    setTimeout(function () {
      $("#inject-loader-wrapper").fadeOut(500, function () {
        $(this).remove();
      });
    }, 700);
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"activities.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/activities.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Activities: () => Activities
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Categories;
module.link("./categories.js", {
  Categories(v) {
    Categories = v;
  }

}, 1);
const Activities = new Mongo.Collection('activities');
Activities.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish('activity', function (activityId) {
    check(activityId, String);
    return Activities.find({
      _id: activityId
    });
  });
  Meteor.publish('activities', function (filters) {
    //return Activities.find({spaceId: spaceId},{sort: {submitted: 1}});
    return Activities.find(filters, {
      sort: {
        submitted: 1
      }
    });
  });
  Meteor.publish('allActivities', function (filters) {
    //return Activities.find({spaceId: spaceId},{sort: {submitted: 1}});
    return Activities.find(filters, {
      sort: {
        submitted: 1
      }
    });
  });
  Activities.after.remove(function (userId, doc) {
    if (doc.categoryId) {
      var category = Categories.findOne({
        _id: doc.categoryId
      });
      if (category) Categories.update(category._id, {
        $inc: {
          nRefs: -1
        }
      });
    }
  });
}

Meteor.methods({
  activityInsert: function (activityAttributes) {
    check(activityAttributes.spaceId, String); //if (Meteor.settings.public)
    //var postFromCloud = !(Meteor.settings.public.isBox === "true"); // Set where post is submitted (box or cloud)

    activity = _.extend(activityAttributes, {
      submitted: Date.now(),
      order: Activities.find({
        spaceId: activityAttributes.spaceId,
        categoryId: activityAttributes.categoryId
      }).count()
    });
    category = Categories.findOne({
      spaceId: activityAttributes.spaceId,
      _id: activityAttributes.categoryId
    }); // Increment category nRefs

    Categories.update(category, {
      $inc: {
        nRefs: 1
      }
    });
    var space = Activities.findOne(activityAttributes.spaceId);
    activity._id = Activities.insert(activity);
    return activity._id;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"assignments.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/assignments.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Assignments: () => Assignments
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Categories;
module.link("./categories.js", {
  Categories(v) {
    Categories = v;
  }

}, 1);
const Assignments = new Mongo.Collection('assignments');
Assignments.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish('assignment', function (assignmentId) {
    check(activityId, String);
    return Assignments.find({
      _id: activityId
    });
  });
  Meteor.publish('assignments', function (filters) {
    //return Activities.find({spaceId: spaceId},{sort: {submitted: 1}});
    return Assignments.find(filters, {
      sort: {
        submitted: 1
      }
    });
  });
  Meteor.publish('allAssignments', function (filters) {
    //return Activities.find({spaceId: spaceId},{sort: {submitted: 1}});
    return Assignments.find(filters, {
      sort: {
        submitted: 1
      }
    });
  });
  Assignments.after.remove(function (userId, doc) {
    if (doc.categoryId) {
      var category = Categories.findOne({
        _id: doc.categoryId
      });
      if (category) Categories.update(category._id, {
        $inc: {
          nRefs: -1
        }
      });
    }
  });
}

Meteor.methods({
  assignmentInsert: function (assignmentAttributes) {
    check(assignmentAttributes.spaceId, String); //if (Meteor.settings.public)
    //var postFromCloud = !(Meteor.settings.public.isBox === "true"); // Set where post is submitted (box or cloud)

    assignment = _.extend(assignmentAttributes, {
      submitted: Date.now(),
      type: "assignment",
      order: Assignments.find({
        spaceId: assignmentAttributes.spaceId,
        categoryId: assignmentAttributes.categoryId
      }).count()
    });
    category = Categories.findOne({
      spaceId: assignmentAttributes.spaceId,
      _id: assignmentAttributes.categoryId
    }); // Increment category nRefs

    Categories.update(category, {
      $inc: {
        nRefs: 1
      }
    });
    var space = Assignments.findOne(assignmentAttributes.spaceId);
    assignment._id = Assignments.insert(assignment);
    return assignment._id;
  },
  assignmentWorkInsert: function (assignmentAttributes) {
    check(assignmentAttributes.spaceId, String); //if (Meteor.settings.public)
    //var postFromCloud = !(Meteor.settings.public.isBox === "true"); // Set where post is submitted (box or cloud)

    assignmentWork = _.extend(assignmentAttributes, {
      submitted: Date.now(),
      type: "assignmentWork"
    });
    var space = Assignments.findOne(assignmentAttributes.spaceId);
    assignmentWork._id = Assignments.insert(assignmentWork);
    return assignmentWork._id;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"authors.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/authors.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Authors: () => Authors
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Posts;
module.link("./posts.js", {
  Posts(v) {
    Posts = v;
  }

}, 1);
const Authors = new Mongo.Collection('authors');
Authors.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish("authors", function (spaceId) {
    return Authors.find({
      spaceId: spaceId
    });
  });
}

Meteor.methods({
  authorInsert: function (name, spaceId) {
    let userId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (userId) {
      Authors.insert({
        name: name,
        spaceId: spaceId,
        userId: userId,
        color: Meteor.user().profile.color,
        avatar: Meteor.user().profile.avatar,
        nRefs: 0
      }, function (error) {
        if (error) {
          console.log("Error when inserting author  : " + error.message);
        } else {
          console.log("Author inserted");
        }
      });
    } else {
      colors = ["7d58bf", "a345b7", "e73f78", "ec5b51", "f86c41", "f8a126", "f7c42b", "f7e657", "ceda55", "97c561", "63b668", "27a498", "25c0d4", "27b0ee", "41a1ef", "5a66ba", "7d58bf", "a345b7", "e73f78", "ec5b51", "f86c41", "f8a126", "f7c42b", "f7e657", "ceda55", "97c561", "63b668"];
      var colorPicked = "#" + colors[Math.floor(Math.random() * colors.length)];
      avatars = ["avatar-1", "avatar-2", "avatar-3", "avatar-4", "avatar-5", "avatar-6", "avatar-7", "avatar-8", "avatar-9", "avatar-10", "avatar-11", "avatar-12", "avatar-13", "avatar-14", "avatar-15", "avatar-16", "avatar-17", "avatar-18", "avatar-19", "avatar-20", "avatar-21", "avatar-22", "avatar-23", "avatar-24", "avatar-25"];
      var avatarPicked = avatars[Math.floor(Math.random() * avatars.length)];
      Authors.insert({
        name: name,
        spaceId: spaceId,
        userId: userId,
        color: colorPicked,
        avatar: avatarPicked,
        nRefs: 0
      }, function (error) {
        if (error) {
          console.log("Error when inserting author  : " + error.message);
        } else {
          console.log("Author inserted B");
        }
      });
    }
  },
  authorEdit: function (spaceId, oldName, newName) {
    var author = Authors.findOne({
      name: oldName,
      spaceId: spaceId
    });
    Authors.update(author._id, {
      $set: {
        name: newName
      }
    }, function (error) {
      if (error) {
        console.log("Error when changing author name : " + error.message);
      } else {
        Posts.update({
          spaceId: spaceId,
          author: oldName
        }, {
          $set: {
            author: newName
          }
        }, {
          multi: true
        }); // Update all author posts with new name
      }
    });
  },
  authorDelete: function (name, spaceId) {
    Authors.remove({
      name: name,
      spaceId: spaceId
    }, function (error) {
      if (error) {
        console.log("Error when removing author  : " + error.message);
      } else {
        console.log("Author removed");
      }
    });
  },
  createPasswords: function (spaceId) {
    var allAuthors = Authors.find({
      spaceId: spaceId
    }).fetch();

    for (var i = 0; i < allAuthors.length; i++) {
      // Set a random password for students who don't have aleady one set
      Authors.update({
        _id: allAuthors[i]._id,
        password: null
      }, {
        $set: {
          password: makeCode(4)
        }
      });
    }
  }
});

function makeCode(length) {
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"categories.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/categories.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Categories: () => Categories
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Posts;
module.link("./posts.js", {
  Posts(v) {
    Posts = v;
  }

}, 1);
let Activities;
module.link("./activities.js", {
  Activities(v) {
    Activities = v;
  }

}, 2);
let Resources;
module.link("./resources.js", {
  Resources(v) {
    Resources = v;
  }

}, 3);
const Categories = new Mongo.Collection('categories');
Categories.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish("categories", function (spaceId) {
    return Categories.find({
      spaceId: spaceId
    });
  });
  Categories.after.update(function (userId, doc) {});
  Categories.after.remove(function (userId, doc) {
    // Decrease order number of others categories
    if (!doc.subcategoryId) Categories.update({
      spaceId: doc.spaceId,
      order: {
        $gt: doc.order
      }
    }, {
      $inc: {
        order: -1
      }
    }, {
      multi: true
    });else Categories.update({
      spaceId: doc.spaceId,
      subcategoryId: doc.subcategoryId,
      order: {
        $gt: doc.order
      }
    }, {
      $inc: {
        order: -1
      }
    }, {
      multi: true
    }); // Remove reference to the category in posts, activities and resources

    Posts.update({
      categoryId: doc._id
    }, {
      $set: {
        categoryId: null
      }
    }, {
      multi: true
    });
    Activities.update({
      categoryId: doc._id
    }, {
      $set: {
        categoryId: null
      }
    }, {
      multi: true
    });
    Resources.update({
      categoryId: doc._id
    }, {
      $set: {
        categoryId: null
      }
    }, {
      multi: true
    });
  });
}

Meteor.methods({
  categoryInsert: function (type, name, spaceId) {
    let subcategoryId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    colors = ["color-1", "color-2", "color-3", "color-4", "color-5", "color-6", "color-7", "color-8"]; //colors = ["cdfe96","afccf8","e5c9aa","fabb2d","fff37e","fcd0e8","d7b0f9"]
    //colors = ["7d58bf","a345b7","e73f78","ec5b51","f86c41","f8a126","f7c42b","f7e657","ceda55","97c561","63b668","27a498","25c0d4","27b0ee","41a1ef","5a66ba","7d58bf","a345b7","e73f78","ec5b51","f86c41","f8a126","f7c42b","f7e657","ceda55","97c561","63b668"];

    var colorPicked = colors[Math.floor(Math.random() * colors.length)];
    var order = null;
    if (subcategoryId != "") order = Categories.find({
      spaceId: spaceId,
      subcategoryId: subcategoryId
    }).count();else order = Categories.find({
      spaceId: spaceId,
      subcategoryId: null
    }).count();
    return Categories.insert({
      type: type,
      name: name,
      color: colorPicked,
      subcategoryId: subcategoryId,
      instruction: "",
      spaceId: spaceId,
      nRefs: 0,
      order: order
    });
  },
  categoryEdit: function (spaceId, type, id, newName) {
    let oldSubcategoryId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
    let newSubcategoryId = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
    var category = Categories.findOne({
      _id: id
    });
    Categories.update(category._id, {
      $set: {
        name: newName,
        subcategoryId: newSubcategoryId
      }
    }, function (error) {
      if (error) {
        console.log("Error when changing category name : " + error.message);
      } else {
        // Re-calculate order if category change
        if (oldSubcategoryId != newSubcategoryId) {
          console.log("on change ici ");
          Categories.update({
            subcategoryId: oldSubcategoryId,
            order: {
              $gt: category.order
            }
          }, {
            $inc: {
              order: -1
            }
          }, {
            multi: true
          }); // Decrease all subcategories order if higher than the category's order

          var nbNewCategories = Categories.find({
            spaceId: spaceId,
            subcategoryId: newSubcategoryId
          }).count();
          console.log("nbNewCategories : " + nbNewCategories);
          Categories.update(category._id, {
            $set: {
              order: nbNewCategories - 1
            }
          });
        }
      }
    });
  },
  categoryDelete: function (id, spaceId) {
    var category = Categories.findOne({
      _id: id
    });
    Categories.remove(category._id, function (error) {
      if (error) {
        console.log("Error when deleting category : " + error.message);
      } else {
        // Delete subcategories
        Categories.remove({
          subcategoryId: category._id
        });
      }
    });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"chats.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/chats.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Chats: () => Chats
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Authors;
module.link("./authors.js", {
  Authors(v) {
    Authors = v;
  }

}, 1);
let Spaces;
module.link("./spaces.js", {
  Spaces(v) {
    Spaces = v;
  }

}, 2);
let Categories;
module.link("./categories.js", {
  Categories(v) {
    Categories = v;
  }

}, 3);
let Files;
module.link("./files.js", {
  Files(v) {
    Files = v;
  }

}, 4);
const Chats = new Mongo.Collection('chats');
Chats.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish('ownChats', function (spaceId, userId) {
    // get all chats from a specific spaceId where the user is in
    return Chats.find({
      spaceId: spaceId,
      $or: [{
        sender: userId
      }, {
        receiver: userId
      }]
    });
  }); // Meteor.publish('ownChats', function(spaceId, userId) { // get all chats from a specific spaceId where the user is in
  // 	return Chats.find({spaceId:spaceId, $or:[{sender:userId},{receiver:userId}]});
  // });
}

Meteor.methods({
  markChatMessagesSeen: function (user, otherUser) {
    Chats.update({
      $and: [{
        sender: otherUser
      }, {
        receiver: user
      }]
    }, {
      $set: {
        isSeen: Date.now()
      }
    }, {
      multi: true
    });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"codes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/codes.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Codes: () => Codes
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Codes = new Mongo.Collection('codes');
Codes.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"files.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/files.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Files: () => Files
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Files = new Mongo.Collection('files');
Files.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish("file", function (fileId) {
    return Files.find({
      _id: fileId
    });
  });
  Meteor.publish("files", function (spaceId) {
    return Files.find({
      spaceId: spaceId
    });
  });
  Meteor.publish("allFiles", function () {
    return Files.find({});
  });

  var fs = Npm.require('fs');

  var rimraf = Npm.require('rimraf'); // Package to delete directories


  var uploadDir = Meteor.settings.uploadDir;
  Meteor.methods({
    deleteFile: function (post) {
      if (post.type == 'lesson') // Remove directory (each storline lesson is stored in is own directory)
        rimraf(uploadDir + "/" + post.spaceId + "/" + post.type + "/" + post.fileId, function (err) {
          console.log(err);
        });else // Remove the file
        fs.unlinkSync(uploadDir + "/" + post.filePath, function (err) {
          console.log(err);
        });
    }
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/notifications.js                                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Notifications: () => Notifications
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Spaces;
module.link("./spaces.js", {
  Spaces(v) {
    Spaces = v;
  }

}, 1);
let Posts;
module.link("./posts.js", {
  Posts(v) {
    Posts = v;
  }

}, 2);
const Notifications = new Mongo.Collection('notifications');
Notifications.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish("notifications", function (spaceId) {
    return Notifications.find({
      spaceId: spaceId
    });
  });
  Notifications.after.insert(function (userId, doc) {
    var space = Spaces.findOne(doc.spaceId);
    var post = Posts.findOne(doc.postId);

    if (space.mailCommentNotification == true) {
      console.log("userId : " + userId);

      if (space.userId != Meteor.userId()) {
        var spaceOwner = Meteor.users.findOne({
          _id: space.userId
        });
        console.log("space Id : " + spaceOwner);
        var ownerMail = spaceOwner.emails[0].address;
        var lastComment = post.comments[post.comments.length - 1];
        console.log("last comment : " + post.comments.length);
        console.log("on envoie un e-mail de notification à :" + ownerMail);
        var mailBody = null;

        if (post.filePath) {
          mailBody = '<h3>' + TAPi18n.__("post-submit--mail-comment-notification-body") + '</h3><p><b>' + lastComment.author + '</b></p><p>' + lastComment.text + '</p><p>----------</p><div style="padding:8px:border:solid 1px grey;"><p><b>' + post.author + '</b></p><p>' + post.body + '</p><img style="width:150px" src="https://live2.beekee.ch/upload' + post.filePath + '" /></div><a href="https://live2.beekee.ch/post/' + post._id + '">' + TAPi18n.__("post-submit--mail-notification-link") + '</a>';
        } else {
          mailBody = '<h3>' + TAPi18n.__("post-submit--mail-comment-notification-body") + '</h3><p><b>' + lastComment.author + '</b></p><p>' + lastComment.text + '</p><p>----------</p><div style="padding:8px:border:solid 1px grey;"><p><b>' + post.author + '</b></p><p>' + post.body + '</p></div><a href="https://live2.beekee.ch/post/' + post._id + '">' + TAPi18n.__("post-submit--mail-notification-link") + '</a>';
        }

        Meteor.defer(function () {
          // Avoid client to wait for callback
          Meteor.call('sendEmail', // Send an e-mail to user
          ownerMail, 'vincent.widmer@beekee.ch', TAPi18n.__("post-submit--mail-comment-notification-subject"), mailBody);
        });
      }
    }
  });
}

Meteor.methods({
  deletePostNotifications: function (spaceId, author, elementId) {
    console.log("spaceID : " + spaceId + " author: " + author + " elementID : " + elementId);
    Notifications.remove({
      spaceId: spaceId,
      receiver: author,
      postId: elementId
    });
    Notifications.remove({
      spaceId: spaceId,
      receiver: author,
      resourceId: elementId
    }); //Posts.update({_id:data.currentPostId,"comments.id":data.currentCommentId}, {$push: {"comments.$.likes": data.author}});
  },
  clearAllNotifications: function (spaceId, author) {
    Notifications.remove({
      spaceId: spaceId,
      receiver: author
    });
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"posts.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/posts.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Posts: () => Posts
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Authors;
module.link("./authors.js", {
  Authors(v) {
    Authors = v;
  }

}, 1);
let Spaces;
module.link("./spaces.js", {
  Spaces(v) {
    Spaces = v;
  }

}, 2);
let Categories;
module.link("./categories.js", {
  Categories(v) {
    Categories = v;
  }

}, 3);
let Files;
module.link("./files.js", {
  Files(v) {
    Files = v;
  }

}, 4);
let Resources;
module.link("./resources.js", {
  Resources(v) {
    Resources = v;
  }

}, 5);
let Notifications;
module.link("./notifications.js", {
  Notifications(v) {
    Notifications = v;
  }

}, 6);
const Posts = new Mongo.Collection('posts');
Posts.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

if (Meteor.isClient) {
  Counts = new Mongo.Collection("counts"); // Store post count of a space ; Allow to count them without subscribe to all posts (optimization)

  PinnedCounts = new Mongo.Collection("pinnedCounts");
  FilesCounts = new Mongo.Collection("filesCounts");
  ImagesCounts = new Mongo.Collection("imagesCounts");
  LiveFeedCounts = new Mongo.Collection("liveFeedCounts");
  ResourcesCounts = new Mongo.Collection("resourcesCounts");
  FeedCounts = new Mongo.Collection("feedCounts");
}

if (Meteor.isServer) {
  Meteor.publish('post', function (postId) {
    check(postId, String);
    return Posts.find({
      _id: postId
    });
  });
  Meteor.publish('homePosts', function (spaceId) {
    check(spaceId, String);
    return Posts.find({
      spaceId: spaceId,
      type: "home"
    }, {
      sort: {
        submitted: 1
      }
    });
  });
  Meteor.publish('liveFeedPosts', function (spaceId) {
    check(spaceId, String);
    return Posts.find({
      spaceId: spaceId,
      type: "liveFeed"
    }, {
      sort: {
        submitted: -1
      }
    });
  });
  Meteor.publish('resourcesPosts', function (spaceId) {
    check(spaceId, String);
    return Posts.find({
      spaceId: spaceId,
      type: "resource"
    });
  });
  Meteor.publish('posts', function (sorting, filters) {
    let skip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return Posts.find(filters, {
      sort: {
        submitted: -1
      },
      skip: skip,
      limit: limit
    }); //return Posts.find(filters, {sort: {submitted:1},skip:skip,limit:limit});
  });
  Meteor.publish('lastPosts', function () {
    return Posts.find({}, {
      sort: {
        submitted: -1
      },
      limit: 20
    });
  }); // Meteor.publish("count-all-feed", function (spaceId) {
  // 	var self = this;
  // 	var feedCounts = 0;
  // 	var initializing = true;
  // 	var handle = Posts.find({spaceId: spaceId, type:'liveFeed'}).observeChanges({
  // 		added: function (doc, idx) {
  // 			liveFeedCounts++;
  // 			if (!initializing) {
  // 				self.changed("liveFeedCounts", spaceId, {count: liveFeedCounts});  // "counts" is the published collection name
  // 			}
  // 		},
  // 		removed: function (doc, idx) {
  // 			liveFeedCounts--;
  // 			self.changed("liveFeedCounts", spaceId, {count: liveFeedCounts});  // Same published collection, "counts"
  // 		}
  // 	});
  // 	initializing = false;
  // 	// publish the initial count. `observeChanges` guaranteed not to return
  // 	// until the initial set of `added` callbacks have run, so the `count`
  // 	// variable is up to date.
  // 	self.added("liveFeedCounts", spaceId, {count: liveFeedCounts});
  // 	// and signal that the initial document set is now available on the client
  // 	self.ready();
  // 	// turn off observe when client unsubscribes
  // 	self.onStop(function () {
  // 		handle.stop();
  // 	});
  // });

  Meteor.publish("count-all-live-feed", function (spaceId) {
    var self = this;
    var liveFeedCounts = 0;
    var initializing = true;
    var handle = Posts.find({
      spaceId: spaceId,
      type: 'liveFeed'
    }).observeChanges({
      added: function (doc, idx) {
        liveFeedCounts++;

        if (!initializing) {
          self.changed("liveFeedCounts", spaceId, {
            count: liveFeedCounts
          }); // "counts" is the published collection name
        }
      },
      removed: function (doc, idx) {
        liveFeedCounts--;
        self.changed("liveFeedCounts", spaceId, {
          count: liveFeedCounts
        }); // Same published collection, "counts"
      }
    });
    initializing = false; // publish the initial count. `observeChanges` guaranteed not to return
    // until the initial set of `added` callbacks have run, so the `count`
    // variable is up to date.

    self.added("liveFeedCounts", spaceId, {
      count: liveFeedCounts
    }); // and signal that the initial document set is now available on the client

    self.ready(); // turn off observe when client unsubscribes

    self.onStop(function () {
      handle.stop();
    });
  });
  Meteor.publish("count-all-resources", function (spaceId) {
    var self = this;
    var resourcesCounts = 0;
    var initializing = true;
    var handle = Posts.find({
      spaceId: spaceId,
      type: 'resource'
    }).observeChanges({
      added: function (doc, idx) {
        resourcesCounts++;

        if (!initializing) {
          self.changed("resourcesCounts", spaceId, {
            count: resourcesCounts
          }); // "counts" is the published collection name
        }
      },
      removed: function (doc, idx) {
        resourcesCounts--;
        self.changed("resourcesCounts", spaceId, {
          count: resourcesCounts
        }); // Same published collection, "counts"
      }
    });
    initializing = false; // publish the initial count. `observeChanges` guaranteed not to return
    // until the initial set of `added` callbacks have run, so the `count`
    // variable is up to date.

    self.added("resourcesCounts", spaceId, {
      count: resourcesCounts
    }); // and signal that the initial document set is now available on the client

    self.ready(); // turn off observe when client unsubscribes

    self.onStop(function () {
      handle.stop();
    });
  });
} // if(Meteor.isServer) {
// 	Posts.before.insert(function (userId, doc) {
// 		// change modified date
// 		Spaces.update(doc.spaceId, {$set: {modified: Date.now()}});
// 		doc.version =  1;
// 		//doc.modified = Date.now();
// 		/*
// 		var versionning = {};
// 		_.extend(versionning, doc, {modifiedBy: userId});
// 		Meteor.call('addPostVersion', versionning);
// 		*/
// 	});
// 	// Copy post in postVersion before updated
// 	// TODO : refactoring
// 	Posts.before.update(function (userId, doc, fieldNames, modifier, options) {
// 		// var versionning = {};
// 		// _.extend(versionning, doc, {modifiedBy: userId});
// 		// Meteor.call('addPostVersion', versionning);
// 		// var newInc = doc.version+1;
// 		// if (!modifier.$set) modifier.$set = {};
// 		// modifier.$set.version = newInc;
// 		// modifier.$set.modified = Date.now();
// 	});
// 	Posts.before.remove(function (userId, doc) { 
// 		// var deletionTime = Date.now();
// 		// Meteor.call('tagsEdit', {spaceId: doc.spaceId, newTags: [], oldTags: doc.tags}, function(error) { // Decrement tags nRefs
// 		// 	if (error) {
// 		// 		throwError(error.reason);
// 		// 	}
//  	// 	});
// 		// var file = Files.findOne({'metadata.postId': doc.fileId}); // Remove file
// 		// if (file){
// 		// 	 // TODO : remove file (not only from collection)
// 		// 	Files.remove(file._id);
// 		// }
// 		// Delete the file if exists
// 		var fileId = doc.fileId;
// 		var fileExt = doc.fileExt;
// 		if (fileId) {
// 			Files.remove({fileId:fileId});
// 			Meteor.call('deleteFile',doc);
// 		}
// 		if (doc.type == 'home') { // Update post order
// 			var post = doc;
// 			var postsDown = Posts.find({spaceId:doc.spaceId, type:'home', order:{$gt:post.order}}).fetch();
// 			for (var i=0; i<postsDown.length; i++) {
// 				console.log("id : "+postsDown[i]._id);
// 				var currentPost = postsDown[i];
// 				Posts.update({_id:currentPost._id},{$set:{order:currentPost.order-1}});
// 			}
// 		}
// 		if (doc.type == 'liveFeed') {
// 			var author = Authors.findOne({spaceId: doc.spaceId, name: doc.author});
// 			Authors.update(author._id, {$inc: {nRefs: -1}}); // Decrement author nRefs
// 			if (doc.category) {
// 				var category = Categories.findOne({spaceId: doc.spaceId, type:"liveFeed", name: doc.category});
// 				if (category)
// 					Categories.update(category._id, {$inc: {nRefs: -1}}); // Decrement category nRefs
// 			}
// 		}
// 		if (doc.type == 'resource') {
// 			if (doc.category) {
// 				var category = Categories.findOne({spaceId: doc.spaceId, type:"resource", name: doc.category});
// 				if (category)
// 					Categories.update(category._id, {$inc: {nRefs: -1}}); // Decrement category nRefs
// 			}
// 		}
// 		// // Add post to posts versions
// 		// // TODO : refactoring
// 		// var space = Spaces.findOne(doc.spaceId);
// 		// // var oldPosts = [];
// 		// // if (space.oldPosts !== undefined) {
// 		// // 	oldPosts = space.oldPosts;
// 		// // }
// 		// // oldPosts.push(doc._id);
// 		// //Spaces.update(doc.spaceId, {$set: {oldPosts: oldPosts, modified: Date.now()}});
// 		// Spaces.update(doc.spaceId, {$set: {modified: Date.now()}});
// 		// doc.version =  doc.version++;
// 		// doc.modified = Date.now();
// 		// var versionning = {};
// 		// _.extend(versionning, doc, {modifiedBy: userId, last: true});
// 		// Meteor.call('addPostVersion', versionning);
// 	});
// }


if (Meteor.isServer) {
  // Posts.after.insert(function (userId, doc) {
  // 	Notifications.insert({spaceId:doc.spaceId, author:doc.author, postId: doc._id});
  // });
  Posts.after.remove(function (userId, doc) {
    // Delete the file if exists
    var fileId = doc.fileId;
    var fileExt = doc.fileExt;

    if (fileId) {
      Files.remove({
        fileId: fileId
      });
      Meteor.call('deleteFile', doc);
    } // Decrease author count


    if (doc.type == 'liveFeed') {
      var author = Authors.findOne({
        spaceId: doc.spaceId,
        name: doc.author
      });
      Authors.update(author._id, {
        $inc: {
          nRefs: -1
        }
      }); // Decrement author nRefs
      // Decrease category count

      if (doc.categoryId) {
        var category = Categories.findOne({
          _id: doc.categoryId
        });
        if (category) Categories.update(category._id, {
          $inc: {
            nRefs: -1
          }
        });
      }
    } // Decrease category count


    if (doc.type == 'resource') {
      if (doc.categoryId) {
        var category = Categories.findOne({
          _id: doc.categoryId
        });
        if (category) Categories.update(category._id, {
          $inc: {
            nRefs: -1
          }
        });
      }
    }
  });
  Posts.after.insert(function (userId, doc) {
    var space = Spaces.findOne(doc.spaceId); // Send a notification if an author is tagged

    var taggedAuthors = doc.body.match(/<{{"value":"(.*?)","prefix":"@"}}>/g);

    if (taggedAuthors) {
      for (let i = 0; i < taggedAuthors.length; i++) {
        var taggedAuthor = taggedAuthors[i].replace(/<{{"value":"(.+)","prefix":"@"}}>/, '$1');
        console.log("author tagged : " + taggedAuthor);
        Notifications.insert({
          spaceId: space._id,
          sender: doc.author,
          receiver: taggedAuthor,
          type: 'tag',
          submitted: Date.now(),
          postId: doc._id
        });
      }
    }

    console.log("space : " + space.mailPostNotification);

    if (space.mailPostNotification == true) {
      console.log("userId : " + userId);

      if (space.userId != Meteor.userId()) {
        var spaceOwner = Meteor.users.findOne({
          _id: space.userId
        });
        console.log("space Id : " + spaceOwner);
        var ownerMail = spaceOwner.emails[0].address;
        console.log("on envoie un e-mail de notification à :" + ownerMail);
        var mailBody = null;

        if (post.filePath) {
          mailBody = '<h3>' + TAPi18n.__("post-submit--mail-notification-body") + '</h3><div style="padding:8px:border:solid 1px grey;"><p><b>' + doc.author + '</b></p><p>' + doc.body + '</p><img style="width:150px" src="https://live.beekee.ch/upload' + doc.filePath + '" /></div><a href="https://live.beekee.ch/post/' + doc._id + '">' + TAPi18n.__("post-submit--mail-notification-link") + '</a>';
        } else {
          mailBody = '<h3>' + TAPi18n.__("post-submit--mail-notification-body") + '</h3><div style="padding:8px:border:solid 1px grey;"><p><b>' + doc.author + '</b></p><p>' + doc.body + '</p></div><a href="https://live.beekee.ch/post/' + doc._id + '">' + TAPi18n.__("post-submit--mail-notification-link") + '</a>';
        }

        Meteor.defer(function () {
          // Avoid client to wait for callback
          Meteor.call('sendEmail', // Send an e-mail to user
          ownerMail, 'vincent.widmer@beekee.ch', TAPi18n.__("post-submit--mail-notification-subject"), mailBody);
        });
      }
    }
  });
}

Meteor.methods({
  addLikeComment: function (data) {
    Posts.update({
      _id: data.currentPostId,
      "comments.id": data.currentCommentId
    }, {
      $push: {
        "comments.$.likes": data.author
      }
    });
  },
  removeLikeComment: function (data) {
    Posts.update({
      _id: data.currentPostId,
      "comments.id": data.currentCommentId
    }, {
      $pull: {
        "comments.$.likes": data.author
      }
    });
  },
  addResourceLikeComment: function (data) {
    Resources.update({
      _id: data.currentPostId,
      "comments.id": data.currentCommentId
    }, {
      $push: {
        "comments.$.likes": data.author
      }
    });
  },
  removeResourceLikeComment: function (data) {
    Resources.update({
      _id: data.currentPostId,
      "comments.id": data.currentCommentId
    }, {
      $pull: {
        "comments.$.likes": data.author
      }
    });
  },
  homePostInsert: function (postAttributes) {
    check(postAttributes.spaceId, String); //if (Meteor.settings.public)
    //var postFromCloud = !(Meteor.settings.public.isBox === "true"); // Set where post is submitted (box or cloud)

    post = _.extend(postAttributes, {
      submitted: Date.now(),
      order: Posts.find({
        spaceId: postAttributes.spaceId,
        type: postAttributes.type
      }).count() //nb: Posts.find({spaceId: postAttributes.spaceId}).count() + 1,
      //pinned : false,

    });
    var space = Spaces.findOne(postAttributes.spaceId);
    post._id = Posts.insert(post);
    return post._id;
  },
  postInsert: function (postAttributes) {
    check(postAttributes.spaceId, String); //if (Meteor.settings.public)
    //var postFromCloud = !(Meteor.settings.public.isBox === "true"); // Set where post is submitted (box or cloud)

    item = Authors.findOne({
      spaceId: postAttributes.spaceId,
      name: postAttributes.author
    });
    Authors.update(item, {
      $inc: {
        nRefs: 1
      }
    });
    post = _.extend(postAttributes, {
      authorId: Authors.findOne({
        spaceId: postAttributes.spaceId,
        name: postAttributes.author
      })._id,
      submitted: Date.now(),
      nb: Posts.find({
        spaceId: postAttributes.spaceId
      }).count() + 1,
      order: Posts.find({
        spaceId: postAttributes.spaceId,
        type: postAttributes.type
      }).count(),
      likes: [],
      nbLikes: 0 // postFromCloud: postFromCloud // Workaround bug sync

    }); // Get client IP address

    if (Meteor.isServer) post = _.extend(postAttributes, {
      clientIP: this.connection.clientAddress
    });
    var space = Spaces.findOne(postAttributes.spaceId);
    category = Categories.findOne({
      spaceId: postAttributes.spaceId,
      _id: postAttributes.categoryId
    }); // Increment category nRefs

    Categories.update(category, {
      $inc: {
        nRefs: 1
      }
    });
    post._id = Posts.insert(post);
    return post._id;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"resources.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/resources.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Resources: () => Resources
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Categories;
module.link("./categories.js", {
  Categories(v) {
    Categories = v;
  }

}, 1);
const Resources = new Mongo.Collection('resources');
Resources.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish('resource', function (resourceId) {
    check(resourceId, String);
    return Resources.find({
      _id: resourceId
    });
  });
  Meteor.publish('resources', function (filters) {
    //return Resources.find({spaceId: spaceId},{sort: {submitted: 1}});
    //console.log("filters : "+filters.categoryId);
    return Resources.find(filters, {
      sort: {
        submitted: 1
      }
    });
  });
  Meteor.publish('allResources', function (filters) {
    //return Resources.find({spaceId: spaceId},{sort: {submitted: 1}});
    //console.log("filters : "+filters.categoryId);
    return Resources.find(filters, {
      sort: {
        submitted: 1
      }
    });
  });
  Resources.after.remove(function (userId, doc) {
    if (doc.categoryId) {
      var category = Categories.findOne({
        _id: doc.categoryId
      });
      if (category) Categories.update(category._id, {
        $inc: {
          nRefs: -1
        }
      });
    }
  });
}

Meteor.methods({
  resourceInsert: function (resourceAttributes) {
    check(resourceAttributes.spaceId, String); //if (Meteor.settings.public)
    //var postFromCloud = !(Meteor.settings.public.isBox === "true"); // Set where post is submitted (box or cloud)

    resource = _.extend(resourceAttributes, {
      submitted: Date.now(),
      order: Resources.find({
        spaceId: resourceAttributes.spaceId,
        categoryId: resourceAttributes.categoryId
      }).count()
    });
    category = Categories.findOne({
      spaceId: resourceAttributes.spaceId,
      _id: resourceAttributes.categoryId
    }); // Increment category nRefs

    Categories.update(category, {
      $inc: {
        nRefs: 1
      }
    });
    var space = Resources.findOne(resourceAttributes.spaceId);
    resource._id = Resources.insert(resource);
    return resource._id;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"spaces.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/spaces.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Spaces: () => Spaces
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Authors;
module.link("./authors.js", {
  Authors(v) {
    Authors = v;
  }

}, 1);
let Codes;
module.link("./codes.js", {
  Codes(v) {
    Codes = v;
  }

}, 2);
let Posts;
module.link("./posts.js", {
  Posts(v) {
    Posts = v;
  }

}, 3);
let Categories;
module.link("./categories.js", {
  Categories(v) {
    Categories = v;
  }

}, 4);
let Resources;
module.link("./resources.js", {
  Resources(v) {
    Resources = v;
  }

}, 5);
const Spaces = new Mongo.Collection('spaces');
Spaces.allow({
  //update: function(userId, space) { return true},
  //remove: function(userId, space) { return true},
  insert: function (userId, space) {
    return ownsDocument(userId, space) || isAdmin(userId);
  },
  update: function (userId, space) {
    return ownsDocument(userId, space) || isAdmin(userId);
  },
  remove: function (userId, space) {
    return ownsDocument(userId, space) || isAdmin(userId);
  }
});

if (Meteor.isServer) {
  Meteor.publish('space', function (spaceId) {
    check(spaceId, String);
    return Spaces.find({
      _id: spaceId
    });
  });
  Meteor.publish('allSpaces', function () {
    return Spaces.find({});
  });
  Meteor.publish('allUsers', function () {
    return Meteor.users.find();
  });
  Meteor.publish('publicSpaces', function (userId) {
    return Spaces.find({
      "permissions.public": true
    });
  });
  Meteor.publish('ownSpaces', function (userId) {
    //return Spaces.find({userId:userId});
    return Spaces.find({
      $or: [{
        userId: Meteor.userId()
      }, {
        ownersId: {
          $in: [Meteor.userId()]
        }
      }]
    });
  });
  Meteor.publish('spacesVisited', function (spacesId) {
    return Spaces.find({
      "_id": {
        "$in": spacesId
      }
    });
  }); // Spaces.before.update(function (userId, doc, fieldNames, modifier, options) {
  // 	modifier.$set = modifier.$set || {};
  // 	modifier.$set.modified = Date.now();
  // 	// change modified date
  // 	doc.version =  doc.version++;
  // 	doc.modified = Date.now();
  // });
  // Spaces.before.insert(function (userId, doc) {
  // 	// change modified date
  // 	doc.submitted =  Date.now();
  // });

  if (Meteor.isServer) {
    // Remove every posts when a space is deleted
    Spaces.before.remove(function (userId, doc) {
      var spaceId = doc._id;
      Posts.remove({
        spaceId: spaceId
      });
    });
    Meteor.methods({
      getSpaceId: function (spaceCode) {
        if (Spaces.findOne({
          spaceCode: spaceCode
        })) return Spaces.findOne({
          spaceCode: spaceCode
        })._id;else return null;
      },
      updateCode: function (oldCode, newCode) {
        var codeId = Codes.findOne({
          code: oldCode
        })._id;

        Codes.update(codeId, {
          code: newCode
        }, function (error) {
          if (error) {
            console.log("Error when changing code : " + error.message);
          } else {
            console.log("Code has been changed.");
          }
        });
      },
      changeOwner: function (spaceId, newUserId) {
        Spaces.update(spaceId, {
          $set: {
            userId: newUserId
          }
        }, function (error) {
          if (error) {
            console.log("Error when changing owner : " + error.message);
          } else {
            console.log("Owner has been changed.");
          }
        });
      },
      addOwner: function (newUserMail, spaceId) {
        var newUser = Meteor.users.findOne({
          "emails.address": newUserMail
        });

        if (newUser) {
          var newUserId = newUser._id;

          if (newUserId) {
            Spaces.update(spaceId, {
              $addToSet: {
                ownersId: newUserId
              }
            }, function (error) {
              if (error) {
                console.log("Error when adding new owner : " + error.message);
              } else {
                console.log("Owner has been added.");
              }
            });
          }
        }
      },
      deleteSpace: function (spaceId) {
        Spaces.remove(spaceId); //Posts.remove({spaceId:spaceId},{multi:true});
      },
      deleteSpaces: function (userId) {
        Spaces.remove({
          userId: userId
        });
      },
      duplicateSpace: function (originSpaceId, duplicaName, lang) {
        // var newSpace = {
        // 	title: duplicaName,
        // 	lang: lang,
        // 	lessons: true
        // };
        var prefix = Meteor.settings.public.prefix;
        var codeLength = 4; // if (nbOfCodes <= 1000)
        // 	codeLength = 2;
        // else if (nbOfCodes > 1000 && nbOfCodes <= 100000)
        // 	codeLength = 3;
        // else if (nbOfCodes > 100000 && nbOfCodes <= 10000000)
        // 	codeLength = 4;

        var code = prefix + makeCode(codeLength);

        while (typeof Codes.findOne({
          code: code
        }) != 'undefined') code = prefix + makeCode(codeLength);

        colors = ["color-1", "color-2", "color-3", "color-4", "color-5", "color-6", "color-7", "color-8"]; //colors = ["cdfe96","afccf8","e5c9aa","fabb2d","fff37e","fcd0e8","d7b0f9"]

        var colorPicked = colors[Math.floor(Math.random() * colors.length)];
        Codes.insert({
          code: code,
          userId: Meteor.userId()
        });
        var userId = Meteor.userId();
        var spaceToCopy = Spaces.findOne(originSpaceId);
        var space = {
          title: duplicaName,
          lang: lang,
          userId: userId,
          ownersId: ownersId,
          spaceCode: code,
          submitted: new Date(),
          visible: spaceToCopy.visible,
          codePanel: spaceToCopy.codePanel,
          createUserAllowed: spaceToCopy.createUserAllowed,
          instruction: spaceToCopy.instruction,
          liveFeed: spaceToCopy.liveFeed,
          lessons: spaceToCopy.lessons,
          resources: spaceToCopy.resources,
          color: colorPicked,
          liveFeedComments: spaceToCopy.liveFeedComments,
          mailPostNotification: spaceToCopy.mailPostNotification,
          mailCommentNotification: spaceToCopy.mailCommentNotification,
          permissions: {
            public: spaceToCopy.permissions.public,
            authorList: spaceToCopy.permissions.authorList,
            liveFeedAddPost: spaceToCopy.permissions.liveFeedAddPost,
            liveFeedAddPostHome: spaceToCopy.permissions.liveFeedAddPostHome,
            liveFeedAddCategory: spaceToCopy.permissions.liveFeedAddCategory,
            liveFeedChangeName: spaceToCopy.permissions.liveFeedChangeName,
            addResourcesAllowed: spaceToCopy.permissions.addResourcesAllowed,
            passwordNeeded: spaceToCopy.permissions.passwordNeeded,
            avatarEnabled: spaceToCopy.permissions.avatarEnabled
          }
        };
        var spaceId = Spaces.insert(space); // Creating directories

        var fs = Npm.require('fs');

        var uploadDir = Meteor.settings.uploadDir;
        var spaceDir = uploadDir + "/" + spaceId; // Creating space directory

        if (!fs.existsSync(spaceDir)) {
          fs.mkdirSync(spaceDir);
        } // Creating resource directory


        if (!fs.existsSync(spaceDir + "/resource")) {
          fs.mkdirSync(spaceDir + "/resource");
        } //space = _.extend({}, space, spaceAttributes)
        // Duplicate categories


        Categories.find({
          spaceId: originSpaceId
        }).forEach(function (item) {
          Categories.insert({
            spaceId: spaceId,
            type: item.type,
            name: item.name,
            color: item.color,
            subcategoryId: item.subcategoryId,
            instruction: item.instruction,
            order: item.order,
            nRefs: 0
          });
        }); // Duplicate ressources
        // Meteor.call('duplicateResourcesFolder', originalSpaceId, newSpaceId, function(error, result) {
        // 	if(error)
        // 		console.log(TAPi18n.__('error-message')+error.message); 
        // 	else {
        // 		console.log("result : "+result);
        // 	}     
        // });

        Resources.find({
          spaceId: originSpaceId
        }).forEach(function (item) {
          if (item.fileId) {
            var newFilePath = uploadDir + "/" + spaceId + "/resource/" + item.fileName + "." + item.fileExt;

            if (fs.existsSync(uploadDir + "/" + originSpaceId + "/resource/" + item.fileName + "." + item.fileExt)) {
              fs.copyFile(uploadDir + "/" + originSpaceId + "/resource/" + item.fileName + "." + item.fileExt, newFilePath, err => {
                if (err) throw err;
                console.log('successfully deleted /tmp/hello');
              });
            }
          }

          if (item.categoryId) var newCategoryId = Categories.findOne({
            spaceId: spaceId,
            name: Categories.findOne(item.categoryId).name
          })._id;
          Resources.insert({
            spaceId: spaceId,
            type: item.type,
            author: item.author,
            body: item.body,
            url: item.url,
            filePath: "/" + spaceId + "/resource/" + item.fileName + "." + item.fileExt,
            fileName: item.fileName,
            fileExt: item.fileExt,
            title: item.title,
            youtubeid: item.youtubeid,
            vimeoid: item.vimeoid,
            fileId: item.fileId,
            categoryId: newCategoryId,
            submitted: item.submitted,
            order: item.order
          });
        });
        return {
          _id: spaceId
        }; // Meteor.call('spaceInsert', newSpace, function(error, result) {
        // 	if(error)
        // 		console.log(TAPi18n.__('error-message')+error.message); 
        // 	else {
        // 		console.log("result : "+result);
        // 	}     
        // });
      },
      spaceInsert: function (spaceAttributes) {
        check(spaceAttributes, {
          title: String,
          lang: String
        }); //var nbOfCodes = Codes.find().count();

        var prefix = Meteor.settings.public.prefix;
        var codeLength = 4; // if (nbOfCodes <= 1000)
        // 	codeLength = 2;
        // else if (nbOfCodes > 1000 && nbOfCodes <= 100000)
        // 	codeLength = 3;
        // else if (nbOfCodes > 100000 && nbOfCodes <= 10000000)
        // 	codeLength = 4;

        var code = prefix + makeCode(codeLength);

        while (typeof Codes.findOne({
          code: code
        }) != 'undefined') code = prefix + makeCode(codeLength);

        colors = ["color-1", "color-2", "color-3", "color-4", "color-5", "color-6", "color-7", "color-8"]; //colors = ["cdfe96","afccf8","e5c9aa","fabb2d","fff37e","fcd0e8","d7b0f9"]

        var colorPicked = colors[Math.floor(Math.random() * colors.length)];
        Codes.insert({
          code: code,
          userId: Meteor.userId()
        });
        var userId = Meteor.userId();
        var space = {
          userId: userId,
          ownersId: [],
          spaceCode: code,
          submitted: new Date(),
          visible: true,
          codePanel: true,
          createUserAllowed: true,
          instruction: "",
          liveFeed: true,
          lessons: false,
          resources: true,
          color: colorPicked,
          liveFeedComments: true,
          mailPostNotification: false,
          mailCommentNotification: false,
          permissions: {
            public: false,
            authorList: false,
            liveFeedAddPost: true,
            liveFeedAddPostHome: true,
            liveFeedAddCategory: false,
            liveFeedChangeName: false,
            addResourcesAllowed: false,
            passwordNeeded: false,
            avatarEnabled: true
          }
        };
        space = _.extend({}, space, spaceAttributes); // var space = _.extend(spaceAttributes, {
        // 	userId: userId,
        // 	spaceCode: code,
        // 	submitted: new Date(),
        // 	visible: true,
        // 	codePanel: true,
        // 	createUserAllowed:true,
        // 	instruction:"",
        // 	liveFeed:true,
        // 	lessons:false,
        // 	resources:true,
        // 	color:colorPicked,
        // 	liveFeedComments:true,
        // 	mailPostNotification: false,
        // 	mailCommentNotification:false,
        // 	permissions:{public:false, authorList:false, liveFeedAddPost:true, liveFeedAddPostHome:true, liveFeedAddCategory:false, liveFeedChangeName: false, addResourcesAllowed :false, passwordNeeded: false, avatarEnabled:true}
        // });

        var spaceId = Spaces.insert(space); //Meteor.call('authorInsert', 'Invité', spaceId );
        // Insert welcome post
        //if (spaceAttributes.lang == "fr-FR" || spaceAttributes.lang == "fr")
        //	Posts.insert({spaceId:spaceId, type:"home", categoryId:"", color:'#afccf8', order:0, submitted: Date.now(),title: "Bienvenue dans votre nouvel espace Beekee Live !", body:"<p>Beekee Live est l'outil idéal pour soutenir les interactions en temps réel, pour partager des photos ou des fichiers avec vos étudiants.</p>\n<p>Ce message est visible par vos étudiants : sentez-vous libre de le modifier (ou de le supprimer) pour communiquer avec eux.</p>"});
        //else
        //	Posts.insert({spaceId:spaceId, type:"home", categoryId:"", color:'#afccf8', order:0, submitted: Date.now(),title: "Welcome to your new Beekee Live space!", body:"<p>Beekee Live is ideal for real-time interactions and to share pictures or files with your learners.</p>\n<p>This message will be visibile for everyone: feel free to edit (or delete ) it according to your needs.</p>"});

        return {
          _id: spaceId
        };
      }
    });
  }
}

function makeCode(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; //var possible = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789";

  for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/users.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let Authors;
module.link("./authors.js", {
  Authors(v) {
    Authors = v;
  }

}, 1);
let Spaces;
module.link("./spaces.js", {
  Spaces(v) {
    Spaces = v;
  }

}, 2);
let Posts;
module.link("./posts.js", {
  Posts(v) {
    Posts = v;
  }

}, 3);

// Sharing the same Account collection than beekee-live
if (Meteor.isServer) {
  // check that the userId specified is admin
  isAdmin = function (userId) {
    console.log("isadmin");
    return Roles.userIsInRole(Meteor.user(), 'admin');
  }; // Publish Roles to client


  Meteor.publish(null, function () {
    if (this.userId) {
      return Meteor.roleAssignment.find({
        'user._id': this.userId
      });
    } else {
      this.ready();
    }
  });
  Meteor.publish(null, function () {
    return Meteor.roleAssignment.find();
  });
  Meteor.publish('ownersUsers', function (spaceId) {
    check(spaceId, String);
    var spaceOwners = Spaces.findOne(spaceId).ownersId;
    return Meteor.users.find({
      _id: {
        "$in": spaceOwners
      }
    });
  });
  Meteor.methods({
    'changeEmail': function (email) {
      var email = email;
      check(email, String);
      var user = Meteor.user();
      var oldemail = user.emails;
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

      if (emailReg.test(email)) {
        if (oldemail != null) {
          Accounts.removeEmail(user._id, user.emails[0].address);
        }

        Accounts.addEmail(user._id, email);
        return email;
      } else return null;
    },
    'renameUser': function (userId, oldName, newName) {
      Spaces.find({
        userId: userId
      }).forEach(function (item) {
        console.log("space id : " + item._id); //console.log("author ? : "+Authors.update({spaceId:item._id, userId:userId},{$set:{name:newName}}));

        Posts.update({
          spaceId: item._id,
          author: oldName
        }, {
          $set: {
            author: newName
          }
        }, {
          multi: true
        });
        Authors.remove({
          spaceId: item._id,
          userId: userId
        });
      });
    }
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"fixtures.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/fixtures.js                                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Spaces;
module.link("../imports/api/spaces.js", {
  Spaces(v) {
    Spaces = v;
  }

}, 0);

// ###  Create admin user at first start  ###
if (Spaces.find().count() === 0) {
  if (Meteor.users.find().count() === 0) {
    // Create the admin role
    Roles.createRole('admin', {
      unlessExists: true
    });
    var adminPassword = Meteor.settings.adminPassword;
    var users = [{
      username: "admin",
      roles: ['admin']
    }];

    _.each(users, function (user) {
      var id;
      id = Accounts.createUser({
        username: user.username,
        email: "admin@beekee.ch",
        //password: adminPassword,
        password: "admin",
        profile: {
          name: "Admin"
        }
      });

      if (user.roles.length > 0) {
        Roles.addUsersToRoles(id, user.roles);
      }
    });
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/methods.js                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.startup(function () {
  // ###  Mail configuration  ###
  process.env.MAIL_URL = 'smtp://' + Meteor.settings.mailAddress + ':' + Meteor.settings.mailPassword + '@' + Meteor.settings.mailServer;
  Accounts.emailTemplates.from = "Beekee Live <vincent.widmer@beekee.ch>"; // Reset Password mail configuration

  Accounts.emailTemplates.resetPassword.text = function (user, url) {
    return "Hi, \n\n You recently requested to reset your password for your Beekee Live account.\n\n Click the link below to reset it. : \n" + url + "\n\n If you did not requested a password reset, please ignore this email." + "\n\n Thanks," + "\n\n Beekee Live Team";
  };

  Accounts.emailTemplates.resetPassword.subject = function () {
    return "Reset your Beekee Live password";
  };

  Accounts.urls.resetPassword = function (token) {
    return 'http://live.beekee.ch/reset-password/' + token;
  };
});
exec = Npm.require('child_process').exec; // No idea what is this ?

cmd = Meteor.wrapAsync(exec);
Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]); // Let other method calls from the same client start running, without waiting for the email sending to complete.

    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      html: text
    });
  },
  'adminSetNewPassword': function (adminId, userId, newPassword) {
    // Admin can forcibly change the password for a user
    if (Roles.userIsInRole(adminId, 'admin')) {
      Accounts.setPassword(userId, newPassword);
    }
  },
  'createAccount': function (email, password, profile) {
    Accounts.createUser({
      email: email,
      password: password,
      profile: profile
    }); // Callback is not supported on server-side
  },
  'deleteUser': function (userId) {
    Meteor.users.remove(userId, function (error, result) {
      if (error) {
        console.log("Error when deleting user : " + error.message);
      }
    });
  },
  'getUsedSpace': function () {
    var res;
    res = cmd("df / -h | awk '{print ($3)}' | tail -1") + "/ " + cmd("df / -h | awk '{print ($2)}' | tail -1") + " (" + cmd("df / | awk '{print ($5)}' | tail -1") + "used)";
    return res;
  },
  'getCpuUsage': function () {
    var res;
    res = cmd("ps -A -o pcpu | tail -n+2 | paste -sd+ | bc");
    return res;
  },
  'getMemoryUsage': function () {
    var res;
    res = cmd("free -m | grep Mem | awk '{print ($3/$2)*100}'");
    return res;
  },
  'isPremium': function (userId) {
    return Meteor.users.findOne(userId).profile.premium;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"permissions.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/permissions.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// check that the userId specified owns the documents
ownsDocument = function (userId, doc) {
  return doc && doc.userId === userId || doc.ownersId.indexOf(userId) != -1;
}; // check that the userId specified is admin


isAdmin = function (userId) {
  return Roles.userIsInRole(Meteor.user(), 'admin');
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"uploads.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/uploads.js                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Files;
module.link("../imports/api/files.js", {
  Files(v) {
    Files = v;
  }

}, 0);
// Upload files with tomitrescak:meteor-uploads
Meteor.startup(function () {
  Meteor.methods({
    rotateImage: function (imagePath) {
      gmRotate = function (callback) {
        gm(Meteor.settings.uploadDir + imagePath).rotate('white', 90).write(Meteor.settings.uploadDir + imagePath, Meteor.bindEnvironment(function (error, result) {
          callback(null, 'returned');
          ;
        }));
      }; // Wait until GraphicMagicks has ended rotating the image


      var syncFunc = Meteor.wrapAsync(gmRotate);
      var result = syncFunc();
      return result;
    }
  });
  UploadServer.init({
    tmpDir: Meteor.settings.uploadDir + '/tmp',
    uploadDir: Meteor.settings.uploadDir,
    checkCreateDirectories: true,
    maxFileSize: 2e8,
    //   validateRequest: function(req) {
    // 	if (req.headers["content-length"] > 10) {
    // 		console.log("file too long");
    // 	    return "File is too long!";
    // 	}
    // 	return null;
    // },
    getDirectory: function (fileInfo, formData) {
      var spaceId = formData.spaceId;
      fileInfo.spaceId = spaceId;
      var newID = new Mongo.ObjectID(); // Manually generate a new Mongo id

      var fileId = newID._str;
      fileInfo.fileId = fileId;

      if (formData.type == 'liveFeed') {
        console.log("Uploading a liveFeed file...");
        return '/' + spaceId + '/liveFeed/';
      } else if (formData.type == 'resource') {
        console.log("Uploading a resource...");
        return '/' + spaceId + '/resource/';
      }

      if (formData.type == 'assignment') {
        console.log("Uploading a assignment file...");
        return '/' + spaceId + '/assignment/';
      } else if (formData.type == 'lesson') {
        console.log("Uploading lesson file...");
        return '/' + spaceId + '/lesson/' + fileId;
      } // TODO : add more security
      else if (formData.type == 'update') {
          console.log("Uploading update file");
          return '/updates';
        }

      return '/';
    },
    finished: function (fileInfo, formFields, formData) {
      var fileName = fileInfo.name.substr(0, fileInfo.name.lastIndexOf('.')) || fileInfo.name;
      fileInfo.fileName = fileName; //fileInfo.fileName = unescape(fileName); // Check why we unescape file name in getFileName method

      var fileExt = fileInfo.name.substr(fileInfo.name.lastIndexOf('.') + 1).toLowerCase();
      fileInfo.fileExt = fileExt;

      if (formFields.type == 'liveFeed' || formFields.type == 'resource' || formFields.type == 'assignment') {
        if (fileExt == "jpg" || fileExt == "jpeg" || fileExt == "png") {
          // Resize and auto-orient uploaded images with GraphicMagicks
          gm(Meteor.settings.uploadDir + fileInfo.path).autoOrient().resize('1200', '1200').write(Meteor.settings.uploadDir + fileInfo.path, Meteor.bindEnvironment(function (error, result) {
            if (error) {
              console.log("Error when resizing :" + error);
              var errorMessage = "An error has occured.";
              Files.insert({
                _id: fileInfo.fileId,
                error: errorMessage
              });
            } else {
              Files.insert({
                _id: fileInfo.fileId,
                fileName: fileInfo.fileName,
                fileExt: fileExt,
                filePath: fileInfo.path
              });
            }
          }));
        } else {
          Files.insert({
            _id: fileInfo.fileId,
            fileName: fileInfo.fileName,
            fileExt: fileExt,
            filePath: fileInfo.path
          });
        }
      } else if (formFields.type == 'lesson') {
        cmd = Meteor.wrapAsync(exec);
        res = cmd("unzip '" + Meteor.settings.uploadDir + fileInfo.path + "' -d '" + Meteor.settings.uploadDir + "/" + fileInfo.spaceId + "/lesson/" + fileInfo.fileId + "'", {
          maxBuffer: 1024 * 1024 * 64
        }, function (error, result) {
          if (error) {
            console.log("Error when uploading a lesson : " + error);
            var errorMessage = "An error has occured.";
            Files.insert({
              _id: fileInfo.fileId,
              error: errorMessage
            });
          } else {
            Files.insert({
              _id: fileInfo.fileId,
              fileName: fileInfo.fileName,
              fileExt: fileExt,
              filePath: fileInfo.path
            });
          }
        });
        res2 = cmd("rm '" + Meteor.settings.uploadDir + fileInfo.path + "'");
      } else if (formFields.type == 'update') {
        cmd = Meteor.wrapAsync(exec);
        res = cmd("tar zxvf '" + Meteor.settings.uploadDir + fileInfo.path + "' -C " + Meteor.settings.updateDir, {
          maxBuffer: 1024 * 1024 * 64
        }, function (error, result) {
          if (error) {
            console.log("Error when uploading an update : " + error);
            var errorMessage = "An error has occured.";
            Files.insert({
              _id: fileInfo.fileId,
              error: errorMessage
            });
          } else {
            Files.insert({
              _id: fileInfo.fileId,
              fileName: fileInfo.fileName,
              fileExt: fileExt,
              filePath: fileInfo.path
            });
          }
        });
        res2 = cmd("rm '" + Meteor.settings.uploadDir + fileInfo.path + "'", {
          maxBuffer: 1024 * 1024 * 64
        });
      }
    },
    getFileName: function (fileInfo, formFields, formData) {
      var fileName = fileInfo.name; //fileName = escape(fileName);
      // The file name is used to generate the file path, so we escape unicode characters
      // and then we unescape it in finished method to save it in human-readable text

      return fileName; // var fileExt = fileInfo.name.substr(fileInfo.name.lastIndexOf('.')+1).toLowerCase();
      // // If file is an image, set a random name
      // if (fileExt == "jpg" || fileExt == "jpeg" || fileExt == "png") {
      // 	var newName = Random.id() + '.' + fileExt;
      // 	return newName;
      // }
      // else {
      // 	var fileName = fileInfo.name;	
      // 	fileName = encodeURIComponent(fileName);
      // 	return fileName;
      // }
    },
    cacheTime: 0
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// server/main.js                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Authors;
module.link("../imports/api/authors.js", {
  Authors(v) {
    Authors = v;
  }

}, 1);
module.link("../server/fixtures.js");
module.link("../server/methods.js");
module.link("../server/uploads.js");
module.link("../server/permissions.js");
module.link("../lib/app_loader.js");
module.link("../imports/api/users.js");
module.link("../imports/api/spaces.js");
module.link("../imports/api/authors.js");
module.link("../imports/api/codes.js");
module.link("../imports/api/files.js");
module.link("../imports/api/posts.js");
module.link("../imports/api/chats.js");
module.link("../imports/api/resources.js");
module.link("../imports/api/activities.js");
module.link("../imports/api/assignments.js");
module.link("../imports/api/notifications.js");
//import { Posts } from '../imports/api/posts.js';
//import { Categories } from '../imports/api/categories.js';
//import { Authors } from '../imports/api/authors.js';
Meteor.startup(() => {// colors = ["7d58bf","a345b7","e73f78","ec5b51","f86c41","f8a126","f7c42b","f7e657","ceda55","97c561","63b668","27a498","25c0d4","27b0ee","41a1ef","5a66ba","7d58bf","a345b7","e73f78","ec5b51","f86c41","f8a126","f7c42b","f7e657","ceda55","97c561","63b668"];
  // Authors.find().forEach(function(item){
  // 	colorPicked = "#"+colors[Math.floor(Math.random() * colors.length)];
  // 	Authors.update({_id:item._id},{$set:{color:colorPicked}});
  // });
  // Update category -> categoryId
  // 	Posts.find().forEach(function(item){
  // 		//Post.update({item._id},{$set:{categoryId:Categories.find({spaceId:item.spaceId,name:item.category})._id},{multi:true});
  // 		if (item.category) {
  // 		if (Categories.findOne({spaceId:item.spaceId,name:item.category})) {
  // 			Posts.update({_id:item._id,category:{$exists:true}},{$set:{categoryId:Categories.findOne({spaceId:item.spaceId,name:item.category})._id}});
  // 		}
  // 	}
  // });
  // Update nbLikes
  // 	Posts.find().forEach(function(item){
  // 		//Post.update({item._id},{$set:{categoryId:Categories.find({spaceId:item.spaceId,name:item.category})._id},{multi:true});
  // 		if (item.type == "liveFeed" && !item.likes)
  // 			Posts.update({_id:item._id},{$set:{likes:[]}});
  // 		if (item.likes)
  // 			Posts.update({_id:item._id},{$set:{nbLikes:item.likes.length}});
  // });
  // code to run on server at startup
  // Connect Accounts to remote App
  //Meteor.connection = DDP.connect('http://beekee.box:80');
  // Remote = DDP.connect('http://beekee.box:80');
  // Accounts.connection = Remote;
  // Meteor.users = new Mongo.Collection('users', Remote);
  //  Accounts.connection.subscribe('users');
  // __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL = 'http://beekee.box:80';
  // var connection = DDP.connect("http://beekee.box:80");
  // Accounts.connection = connection;
  // Meteor.users = new Mongo.Collection("users", {connection: connection});
  // Update avatars
  // avatars = ["avatar-1", "avatar-2","avatar-3", "avatar-4","avatar-5", "avatar-6","avatar-7", "avatar-8","avatar-9", "avatar-10","avatar-11", "avatar-12","avatar-13", "avatar-14","avatar-15", "avatar-16","avatar-17", "avatar-18","avatar-19", "avatar-20","avatar-21", "avatar-22","avatar-23", "avatar-24", "avatar-25"];
  // Authors.find({avatar:{$exists:false}}).forEach(function(item){
  // 	avatarPicked = avatars[Math.floor(Math.random() * avatars.length)];
  // 	Authors.update({_id:item._id},{$set:{avatar:avatarPicked}});
  // });
  // Meteor.users.update({"profile.avatar":{$exists:false}},{$set:{"profile.avatar":"avatar-1"}});
  // Meteor.users.update({"profile.color":{$exists:false}},{$set:{"profile.color":"#7d58bf"}});
  // Authors.find().forEach(function(item){
  // 	if (Meteor.users.findOne(item.userId)) {
  // 		console.log("user : "+item.userId);
  // 		if (Meteor.users.findOne(item.userId).profile) {
  // 			var avatar = Meteor.users.findOne(item.userId).profile.avatar;
  // 			var color = Meteor.users.findOne(item.userId).profile.color;
  // 			console.log("avatar : "+avatar);
  // 			Authors.update({userId:item.userId},{$set:{avatar:avatar, color:color}});
  // 		}
  // 	}
  // });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".ts"
  ]
});

require("/lib/i18n/en.i18n.json");
require("/lib/i18n/fr.i18n.json");
var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2FjdGl2aXRpZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2Fzc2lnbm1lbnRzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9hdXRob3JzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jYXRlZ29yaWVzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9jaGF0cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvY29kZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2ZpbGVzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9ub3RpZmljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9wb3N0cy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvcmVzb3VyY2VzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9zcGFjZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3VzZXJzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvZml4dHVyZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcGVybWlzc2lvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci91cGxvYWRzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJNZXRlb3IiLCJpc1NlcnZlciIsIkluamVjdCIsInJhd0hlYWQiLCJyYXdCb2R5IiwiQXNzZXRzIiwiZ2V0VGV4dCIsImlzQ2xpZW50Iiwic3RhcnR1cCIsInNldFRpbWVvdXQiLCIkIiwiZmFkZU91dCIsInJlbW92ZSIsIm1vZHVsZSIsImV4cG9ydCIsIkFjdGl2aXRpZXMiLCJNb25nbyIsImxpbmsiLCJ2IiwiQ2F0ZWdvcmllcyIsIkNvbGxlY3Rpb24iLCJhbGxvdyIsImluc2VydCIsInVwZGF0ZSIsInB1Ymxpc2giLCJhY3Rpdml0eUlkIiwiY2hlY2siLCJTdHJpbmciLCJmaW5kIiwiX2lkIiwiZmlsdGVycyIsInNvcnQiLCJzdWJtaXR0ZWQiLCJhZnRlciIsInVzZXJJZCIsImRvYyIsImNhdGVnb3J5SWQiLCJjYXRlZ29yeSIsImZpbmRPbmUiLCIkaW5jIiwiblJlZnMiLCJtZXRob2RzIiwiYWN0aXZpdHlJbnNlcnQiLCJhY3Rpdml0eUF0dHJpYnV0ZXMiLCJzcGFjZUlkIiwiYWN0aXZpdHkiLCJfIiwiZXh0ZW5kIiwiRGF0ZSIsIm5vdyIsIm9yZGVyIiwiY291bnQiLCJzcGFjZSIsIkFzc2lnbm1lbnRzIiwiYXNzaWdubWVudElkIiwiYXNzaWdubWVudEluc2VydCIsImFzc2lnbm1lbnRBdHRyaWJ1dGVzIiwiYXNzaWdubWVudCIsInR5cGUiLCJhc3NpZ25tZW50V29ya0luc2VydCIsImFzc2lnbm1lbnRXb3JrIiwiQXV0aG9ycyIsIlBvc3RzIiwiYXV0aG9ySW5zZXJ0IiwibmFtZSIsImNvbG9yIiwidXNlciIsInByb2ZpbGUiLCJhdmF0YXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY29sb3JzIiwiY29sb3JQaWNrZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJhdmF0YXJzIiwiYXZhdGFyUGlja2VkIiwiYXV0aG9yRWRpdCIsIm9sZE5hbWUiLCJuZXdOYW1lIiwiYXV0aG9yIiwiJHNldCIsIm11bHRpIiwiYXV0aG9yRGVsZXRlIiwiY3JlYXRlUGFzc3dvcmRzIiwiYWxsQXV0aG9ycyIsImZldGNoIiwiaSIsInBhc3N3b3JkIiwibWFrZUNvZGUiLCJ0ZXh0IiwicG9zc2libGUiLCJjaGFyQXQiLCJSZXNvdXJjZXMiLCJzdWJjYXRlZ29yeUlkIiwiJGd0IiwiY2F0ZWdvcnlJbnNlcnQiLCJpbnN0cnVjdGlvbiIsImNhdGVnb3J5RWRpdCIsImlkIiwib2xkU3ViY2F0ZWdvcnlJZCIsIm5ld1N1YmNhdGVnb3J5SWQiLCJuYk5ld0NhdGVnb3JpZXMiLCJjYXRlZ29yeURlbGV0ZSIsIkNoYXRzIiwiU3BhY2VzIiwiRmlsZXMiLCIkb3IiLCJzZW5kZXIiLCJyZWNlaXZlciIsIm1hcmtDaGF0TWVzc2FnZXNTZWVuIiwib3RoZXJVc2VyIiwiJGFuZCIsImlzU2VlbiIsIkNvZGVzIiwiZmlsZUlkIiwiZnMiLCJOcG0iLCJyZXF1aXJlIiwicmltcmFmIiwidXBsb2FkRGlyIiwic2V0dGluZ3MiLCJkZWxldGVGaWxlIiwicG9zdCIsImVyciIsInVubGlua1N5bmMiLCJmaWxlUGF0aCIsIk5vdGlmaWNhdGlvbnMiLCJwb3N0SWQiLCJtYWlsQ29tbWVudE5vdGlmaWNhdGlvbiIsInNwYWNlT3duZXIiLCJ1c2VycyIsIm93bmVyTWFpbCIsImVtYWlscyIsImFkZHJlc3MiLCJsYXN0Q29tbWVudCIsImNvbW1lbnRzIiwibWFpbEJvZHkiLCJUQVBpMThuIiwiX18iLCJib2R5IiwiZGVmZXIiLCJjYWxsIiwiZGVsZXRlUG9zdE5vdGlmaWNhdGlvbnMiLCJlbGVtZW50SWQiLCJyZXNvdXJjZUlkIiwiY2xlYXJBbGxOb3RpZmljYXRpb25zIiwiQ291bnRzIiwiUGlubmVkQ291bnRzIiwiRmlsZXNDb3VudHMiLCJJbWFnZXNDb3VudHMiLCJMaXZlRmVlZENvdW50cyIsIlJlc291cmNlc0NvdW50cyIsIkZlZWRDb3VudHMiLCJzb3J0aW5nIiwic2tpcCIsImxpbWl0Iiwic2VsZiIsImxpdmVGZWVkQ291bnRzIiwiaW5pdGlhbGl6aW5nIiwiaGFuZGxlIiwib2JzZXJ2ZUNoYW5nZXMiLCJhZGRlZCIsImlkeCIsImNoYW5nZWQiLCJyZW1vdmVkIiwicmVhZHkiLCJvblN0b3AiLCJzdG9wIiwicmVzb3VyY2VzQ291bnRzIiwiZmlsZUV4dCIsInRhZ2dlZEF1dGhvcnMiLCJtYXRjaCIsInRhZ2dlZEF1dGhvciIsInJlcGxhY2UiLCJtYWlsUG9zdE5vdGlmaWNhdGlvbiIsImFkZExpa2VDb21tZW50IiwiZGF0YSIsImN1cnJlbnRQb3N0SWQiLCJjdXJyZW50Q29tbWVudElkIiwiJHB1c2giLCJyZW1vdmVMaWtlQ29tbWVudCIsIiRwdWxsIiwiYWRkUmVzb3VyY2VMaWtlQ29tbWVudCIsInJlbW92ZVJlc291cmNlTGlrZUNvbW1lbnQiLCJob21lUG9zdEluc2VydCIsInBvc3RBdHRyaWJ1dGVzIiwicG9zdEluc2VydCIsIml0ZW0iLCJhdXRob3JJZCIsIm5iIiwibGlrZXMiLCJuYkxpa2VzIiwiY2xpZW50SVAiLCJjb25uZWN0aW9uIiwiY2xpZW50QWRkcmVzcyIsInJlc291cmNlSW5zZXJ0IiwicmVzb3VyY2VBdHRyaWJ1dGVzIiwicmVzb3VyY2UiLCJvd25zRG9jdW1lbnQiLCJpc0FkbWluIiwib3duZXJzSWQiLCIkaW4iLCJzcGFjZXNJZCIsImJlZm9yZSIsImdldFNwYWNlSWQiLCJzcGFjZUNvZGUiLCJ1cGRhdGVDb2RlIiwib2xkQ29kZSIsIm5ld0NvZGUiLCJjb2RlSWQiLCJjb2RlIiwiY2hhbmdlT3duZXIiLCJuZXdVc2VySWQiLCJhZGRPd25lciIsIm5ld1VzZXJNYWlsIiwibmV3VXNlciIsIiRhZGRUb1NldCIsImRlbGV0ZVNwYWNlIiwiZGVsZXRlU3BhY2VzIiwiZHVwbGljYXRlU3BhY2UiLCJvcmlnaW5TcGFjZUlkIiwiZHVwbGljYU5hbWUiLCJsYW5nIiwicHJlZml4IiwicHVibGljIiwiY29kZUxlbmd0aCIsInNwYWNlVG9Db3B5IiwidGl0bGUiLCJ2aXNpYmxlIiwiY29kZVBhbmVsIiwiY3JlYXRlVXNlckFsbG93ZWQiLCJsaXZlRmVlZCIsImxlc3NvbnMiLCJyZXNvdXJjZXMiLCJsaXZlRmVlZENvbW1lbnRzIiwicGVybWlzc2lvbnMiLCJhdXRob3JMaXN0IiwibGl2ZUZlZWRBZGRQb3N0IiwibGl2ZUZlZWRBZGRQb3N0SG9tZSIsImxpdmVGZWVkQWRkQ2F0ZWdvcnkiLCJsaXZlRmVlZENoYW5nZU5hbWUiLCJhZGRSZXNvdXJjZXNBbGxvd2VkIiwicGFzc3dvcmROZWVkZWQiLCJhdmF0YXJFbmFibGVkIiwic3BhY2VEaXIiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwiZm9yRWFjaCIsIm5ld0ZpbGVQYXRoIiwiZmlsZU5hbWUiLCJjb3B5RmlsZSIsIm5ld0NhdGVnb3J5SWQiLCJ1cmwiLCJ5b3V0dWJlaWQiLCJ2aW1lb2lkIiwic3BhY2VJbnNlcnQiLCJzcGFjZUF0dHJpYnV0ZXMiLCJSb2xlcyIsInVzZXJJc0luUm9sZSIsInJvbGVBc3NpZ25tZW50Iiwic3BhY2VPd25lcnMiLCJlbWFpbCIsIm9sZGVtYWlsIiwiZW1haWxSZWciLCJ0ZXN0IiwiQWNjb3VudHMiLCJyZW1vdmVFbWFpbCIsImFkZEVtYWlsIiwiY3JlYXRlUm9sZSIsInVubGVzc0V4aXN0cyIsImFkbWluUGFzc3dvcmQiLCJ1c2VybmFtZSIsInJvbGVzIiwiZWFjaCIsImNyZWF0ZVVzZXIiLCJhZGRVc2Vyc1RvUm9sZXMiLCJwcm9jZXNzIiwiZW52IiwiTUFJTF9VUkwiLCJtYWlsQWRkcmVzcyIsIm1haWxQYXNzd29yZCIsIm1haWxTZXJ2ZXIiLCJlbWFpbFRlbXBsYXRlcyIsImZyb20iLCJyZXNldFBhc3N3b3JkIiwic3ViamVjdCIsInVybHMiLCJ0b2tlbiIsImV4ZWMiLCJjbWQiLCJ3cmFwQXN5bmMiLCJzZW5kRW1haWwiLCJ0byIsInVuYmxvY2siLCJFbWFpbCIsInNlbmQiLCJodG1sIiwiYWRtaW5JZCIsIm5ld1Bhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyZXN1bHQiLCJyZXMiLCJwcmVtaXVtIiwiaW5kZXhPZiIsInJvdGF0ZUltYWdlIiwiaW1hZ2VQYXRoIiwiZ21Sb3RhdGUiLCJjYWxsYmFjayIsImdtIiwicm90YXRlIiwid3JpdGUiLCJiaW5kRW52aXJvbm1lbnQiLCJzeW5jRnVuYyIsIlVwbG9hZFNlcnZlciIsImluaXQiLCJ0bXBEaXIiLCJjaGVja0NyZWF0ZURpcmVjdG9yaWVzIiwibWF4RmlsZVNpemUiLCJnZXREaXJlY3RvcnkiLCJmaWxlSW5mbyIsImZvcm1EYXRhIiwibmV3SUQiLCJPYmplY3RJRCIsIl9zdHIiLCJmaW5pc2hlZCIsImZvcm1GaWVsZHMiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsInRvTG93ZXJDYXNlIiwicGF0aCIsImF1dG9PcmllbnQiLCJyZXNpemUiLCJlcnJvck1lc3NhZ2UiLCJtYXhCdWZmZXIiLCJyZXMyIiwidXBkYXRlRGlyIiwiZ2V0RmlsZU5hbWUiLCJjYWNoZVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO0FBQ3BCQyxRQUFNLENBQUNDLE9BQVAsQ0FBZSxZQUFmLEVBQTZCLDJOQUE3QjtBQUVBRCxRQUFNLENBQUNFLE9BQVAsQ0FBZSxZQUFmLEVBQTZCQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxpQkFBZixDQUE3QjtBQUNBOztBQUVELElBQUlOLE1BQU0sQ0FBQ08sUUFBWCxFQUFxQjtBQUNwQlAsUUFBTSxDQUFDUSxPQUFQLENBQWUsWUFBVztBQUN6QkMsY0FBVSxDQUFDLFlBQVc7QUFDckJDLE9BQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCQyxPQUE1QixDQUFvQyxHQUFwQyxFQUF5QyxZQUFXO0FBQUVELFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUUsTUFBUjtBQUFtQixPQUF6RTtBQUNBLEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHQSxHQUpEO0FBS0EsQzs7Ozs7Ozs7Ozs7QUNaREMsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsWUFBVSxFQUFDLE1BQUlBO0FBQWhCLENBQWQ7QUFBMkMsSUFBSUMsS0FBSjtBQUFVSCxNQUFNLENBQUNJLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNELE9BQUssQ0FBQ0UsQ0FBRCxFQUFHO0FBQUNGLFNBQUssR0FBQ0UsQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEv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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0M7QUFDRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFFQTtBQUNBO0FBQ0E7QUFFQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLENBdEVELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0SW5qZWN0LnJhd0hlYWQoXCJtZXRhTG9hZGVyXCIsICc8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MCwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodFwiLz48bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj5cdDxtZXRhIG5hbWU9XCJtb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiPicpO1xuXG5cdEluamVjdC5yYXdCb2R5KFwiaHRtbExvYWRlclwiLCBBc3NldHMuZ2V0VGV4dCgnYXBwX2xvYWRlci5odG1sJykpO1xufVxuXG5pZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG5cdE1ldGVvci5zdGFydHVwKGZ1bmN0aW9uKCkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHQkKFwiI2luamVjdC1sb2FkZXItd3JhcHBlclwiKS5mYWRlT3V0KDUwMCwgZnVuY3Rpb24oKSB7ICQodGhpcykucmVtb3ZlKCk7IH0pO1xuXHRcdH0sIDcwMCk7XG5cdH0pO1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbi8vIGltcG9ydCB7IEF1dGhvcnMgfSBmcm9tICcuL2F1dGhvcnMuanMnO1xuLy8gaW1wb3J0IHsgU3BhY2VzIH0gZnJvbSAnLi9zcGFjZXMuanMnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllcyB9IGZyb20gJy4vY2F0ZWdvcmllcy5qcyc7XG4vLyBpbXBvcnQgeyBGaWxlcyB9IGZyb20gJy4vZmlsZXMuanMnO1xuLy9pbXBvcnQgeyBOb3RpZmljYXRpb25zIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLmpzJztcblxuZXhwb3J0IGNvbnN0IEFjdGl2aXRpZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignYWN0aXZpdGllcycpO1xuXG5cbkFjdGl2aXRpZXMuYWxsb3coe1xuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlO30sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZTt9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWU7fVxufSk7XG5cblxuaWYoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ2FjdGl2aXR5JywgZnVuY3Rpb24oYWN0aXZpdHlJZCkge1xuXHRcdGNoZWNrKGFjdGl2aXR5SWQsIFN0cmluZyk7XG5cdFx0cmV0dXJuIEFjdGl2aXRpZXMuZmluZCh7X2lkOiBhY3Rpdml0eUlkfSk7XG5cdH0pO1xuXG5cdE1ldGVvci5wdWJsaXNoKCdhY3Rpdml0aWVzJywgZnVuY3Rpb24oZmlsdGVycykge1xuXHRcdC8vcmV0dXJuIEFjdGl2aXRpZXMuZmluZCh7c3BhY2VJZDogc3BhY2VJZH0se3NvcnQ6IHtzdWJtaXR0ZWQ6IDF9fSk7XG5cdFx0cmV0dXJuIEFjdGl2aXRpZXMuZmluZChmaWx0ZXJzLCB7c29ydDoge3N1Ym1pdHRlZDoxfX0pO1xuXHR9KTtcblxuXHRNZXRlb3IucHVibGlzaCgnYWxsQWN0aXZpdGllcycsIGZ1bmN0aW9uKGZpbHRlcnMpIHtcblx0XHQvL3JldHVybiBBY3Rpdml0aWVzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWR9LHtzb3J0OiB7c3VibWl0dGVkOiAxfX0pO1xuXHRcdHJldHVybiBBY3Rpdml0aWVzLmZpbmQoZmlsdGVycywge3NvcnQ6IHtzdWJtaXR0ZWQ6MX19KTtcblx0fSk7XG5cblx0QWN0aXZpdGllcy5hZnRlci5yZW1vdmUoZnVuY3Rpb24gKHVzZXJJZCwgZG9jKSB7IFxuXHRcdGlmIChkb2MuY2F0ZWdvcnlJZCkge1xuXHRcdFx0dmFyIGNhdGVnb3J5ID0gQ2F0ZWdvcmllcy5maW5kT25lKHtfaWQ6ZG9jLmNhdGVnb3J5SWR9KTtcblx0XHRcdGlmIChjYXRlZ29yeSlcblx0XHRcdFx0Q2F0ZWdvcmllcy51cGRhdGUoY2F0ZWdvcnkuX2lkLCB7JGluYzoge25SZWZzOiAtMX19KTtcblx0XHR9XG5cdH0pO1xufVxuXG5cbk1ldGVvci5tZXRob2RzKHtcblxuXHRhY3Rpdml0eUluc2VydDogZnVuY3Rpb24oYWN0aXZpdHlBdHRyaWJ1dGVzKSB7XG5cdFx0Y2hlY2soYWN0aXZpdHlBdHRyaWJ1dGVzLnNwYWNlSWQsIFN0cmluZyk7XG5cblx0XHQvL2lmIChNZXRlb3Iuc2V0dGluZ3MucHVibGljKVxuXHRcdFx0Ly92YXIgcG9zdEZyb21DbG91ZCA9ICEoTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5pc0JveCA9PT0gXCJ0cnVlXCIpOyAvLyBTZXQgd2hlcmUgcG9zdCBpcyBzdWJtaXR0ZWQgKGJveCBvciBjbG91ZClcblxuXHRcdGFjdGl2aXR5ID0gXy5leHRlbmQoYWN0aXZpdHlBdHRyaWJ1dGVzLCB7XG5cdFx0XHRzdWJtaXR0ZWQ6IERhdGUubm93KCksXG5cdFx0XHRvcmRlcjogQWN0aXZpdGllcy5maW5kKHtzcGFjZUlkOiBhY3Rpdml0eUF0dHJpYnV0ZXMuc3BhY2VJZCwgY2F0ZWdvcnlJZDogYWN0aXZpdHlBdHRyaWJ1dGVzLmNhdGVnb3J5SWR9KS5jb3VudCgpLFxuXHRcdH0pO1xuXG5cdFx0Y2F0ZWdvcnkgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe3NwYWNlSWQ6IGFjdGl2aXR5QXR0cmlidXRlcy5zcGFjZUlkLCBfaWQ6IGFjdGl2aXR5QXR0cmlidXRlcy5jYXRlZ29yeUlkfSk7IC8vIEluY3JlbWVudCBjYXRlZ29yeSBuUmVmc1xuXHRcdENhdGVnb3JpZXMudXBkYXRlKGNhdGVnb3J5LCB7JGluYzoge25SZWZzOiAxfX0pO1xuXG5cdFx0dmFyIHNwYWNlID0gQWN0aXZpdGllcy5maW5kT25lKGFjdGl2aXR5QXR0cmlidXRlcy5zcGFjZUlkKTtcblx0XHRhY3Rpdml0eS5faWQgPSBBY3Rpdml0aWVzLmluc2VydChhY3Rpdml0eSk7XHRcdFxuXHRcdHJldHVybiBhY3Rpdml0eS5faWQ7XG5cdH1cbn0pOyIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbi8vIGltcG9ydCB7IEF1dGhvcnMgfSBmcm9tICcuL2F1dGhvcnMuanMnO1xuLy8gaW1wb3J0IHsgU3BhY2VzIH0gZnJvbSAnLi9zcGFjZXMuanMnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllcyB9IGZyb20gJy4vY2F0ZWdvcmllcy5qcyc7XG4vLyBpbXBvcnQgeyBGaWxlcyB9IGZyb20gJy4vZmlsZXMuanMnO1xuLy9pbXBvcnQgeyBOb3RpZmljYXRpb25zIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLmpzJztcblxuZXhwb3J0IGNvbnN0IEFzc2lnbm1lbnRzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2Fzc2lnbm1lbnRzJyk7XG5cblxuQXNzaWdubWVudHMuYWxsb3coe1xuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlO30sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZTt9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWU7fVxufSk7XG5cblxuaWYoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ2Fzc2lnbm1lbnQnLCBmdW5jdGlvbihhc3NpZ25tZW50SWQpIHtcblx0XHRjaGVjayhhY3Rpdml0eUlkLCBTdHJpbmcpO1xuXHRcdHJldHVybiBBc3NpZ25tZW50cy5maW5kKHtfaWQ6IGFjdGl2aXR5SWR9KTtcblx0fSk7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ2Fzc2lnbm1lbnRzJywgZnVuY3Rpb24oZmlsdGVycykge1xuXHRcdC8vcmV0dXJuIEFjdGl2aXRpZXMuZmluZCh7c3BhY2VJZDogc3BhY2VJZH0se3NvcnQ6IHtzdWJtaXR0ZWQ6IDF9fSk7XG5cdFx0cmV0dXJuIEFzc2lnbm1lbnRzLmZpbmQoZmlsdGVycywge3NvcnQ6IHtzdWJtaXR0ZWQ6MX19KTtcblx0fSk7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ2FsbEFzc2lnbm1lbnRzJywgZnVuY3Rpb24oZmlsdGVycykge1xuXHRcdC8vcmV0dXJuIEFjdGl2aXRpZXMuZmluZCh7c3BhY2VJZDogc3BhY2VJZH0se3NvcnQ6IHtzdWJtaXR0ZWQ6IDF9fSk7XG5cdFx0cmV0dXJuIEFzc2lnbm1lbnRzLmZpbmQoZmlsdGVycywge3NvcnQ6IHtzdWJtaXR0ZWQ6MX19KTtcblx0fSk7XG5cblx0QXNzaWdubWVudHMuYWZ0ZXIucmVtb3ZlKGZ1bmN0aW9uICh1c2VySWQsIGRvYykgeyBcblx0XHRpZiAoZG9jLmNhdGVnb3J5SWQpIHtcblx0XHRcdHZhciBjYXRlZ29yeSA9IENhdGVnb3JpZXMuZmluZE9uZSh7X2lkOmRvYy5jYXRlZ29yeUlkfSk7XG5cdFx0XHRpZiAoY2F0ZWdvcnkpXG5cdFx0XHRcdENhdGVnb3JpZXMudXBkYXRlKGNhdGVnb3J5Ll9pZCwgeyRpbmM6IHtuUmVmczogLTF9fSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5NZXRlb3IubWV0aG9kcyh7XG5cblx0YXNzaWdubWVudEluc2VydDogZnVuY3Rpb24oYXNzaWdubWVudEF0dHJpYnV0ZXMpIHtcblx0XHRjaGVjayhhc3NpZ25tZW50QXR0cmlidXRlcy5zcGFjZUlkLCBTdHJpbmcpO1xuXG5cdFx0Ly9pZiAoTWV0ZW9yLnNldHRpbmdzLnB1YmxpYylcblx0XHRcdC8vdmFyIHBvc3RGcm9tQ2xvdWQgPSAhKE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuaXNCb3ggPT09IFwidHJ1ZVwiKTsgLy8gU2V0IHdoZXJlIHBvc3QgaXMgc3VibWl0dGVkIChib3ggb3IgY2xvdWQpXG5cblx0XHRhc3NpZ25tZW50ID0gXy5leHRlbmQoYXNzaWdubWVudEF0dHJpYnV0ZXMsIHtcblx0XHRcdHN1Ym1pdHRlZDogRGF0ZS5ub3coKSxcblx0XHRcdHR5cGU6IFwiYXNzaWdubWVudFwiLFxuXHRcdFx0b3JkZXI6IEFzc2lnbm1lbnRzLmZpbmQoe3NwYWNlSWQ6IGFzc2lnbm1lbnRBdHRyaWJ1dGVzLnNwYWNlSWQsIGNhdGVnb3J5SWQ6IGFzc2lnbm1lbnRBdHRyaWJ1dGVzLmNhdGVnb3J5SWR9KS5jb3VudCgpLFxuXHRcdH0pO1xuXG5cdFx0Y2F0ZWdvcnkgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe3NwYWNlSWQ6IGFzc2lnbm1lbnRBdHRyaWJ1dGVzLnNwYWNlSWQsIF9pZDogYXNzaWdubWVudEF0dHJpYnV0ZXMuY2F0ZWdvcnlJZH0pOyAvLyBJbmNyZW1lbnQgY2F0ZWdvcnkgblJlZnNcblx0XHRDYXRlZ29yaWVzLnVwZGF0ZShjYXRlZ29yeSwgeyRpbmM6IHtuUmVmczogMX19KTtcblxuXHRcdHZhciBzcGFjZSA9IEFzc2lnbm1lbnRzLmZpbmRPbmUoYXNzaWdubWVudEF0dHJpYnV0ZXMuc3BhY2VJZCk7XG5cdFx0YXNzaWdubWVudC5faWQgPSBBc3NpZ25tZW50cy5pbnNlcnQoYXNzaWdubWVudCk7XHRcdFxuXHRcdHJldHVybiBhc3NpZ25tZW50Ll9pZDtcblx0fSxcblx0YXNzaWdubWVudFdvcmtJbnNlcnQ6IGZ1bmN0aW9uKGFzc2lnbm1lbnRBdHRyaWJ1dGVzKSB7XG5cdFx0Y2hlY2soYXNzaWdubWVudEF0dHJpYnV0ZXMuc3BhY2VJZCwgU3RyaW5nKTtcblxuXHRcdC8vaWYgKE1ldGVvci5zZXR0aW5ncy5wdWJsaWMpXG5cdFx0XHQvL3ZhciBwb3N0RnJvbUNsb3VkID0gIShNZXRlb3Iuc2V0dGluZ3MucHVibGljLmlzQm94ID09PSBcInRydWVcIik7IC8vIFNldCB3aGVyZSBwb3N0IGlzIHN1Ym1pdHRlZCAoYm94IG9yIGNsb3VkKVxuXG5cdFx0YXNzaWdubWVudFdvcmsgPSBfLmV4dGVuZChhc3NpZ25tZW50QXR0cmlidXRlcywge1xuXHRcdFx0c3VibWl0dGVkOiBEYXRlLm5vdygpLFxuXHRcdFx0dHlwZTogXCJhc3NpZ25tZW50V29ya1wiXG5cdFx0fSk7XG5cblx0XHR2YXIgc3BhY2UgPSBBc3NpZ25tZW50cy5maW5kT25lKGFzc2lnbm1lbnRBdHRyaWJ1dGVzLnNwYWNlSWQpO1xuXHRcdGFzc2lnbm1lbnRXb3JrLl9pZCA9IEFzc2lnbm1lbnRzLmluc2VydChhc3NpZ25tZW50V29yayk7XHRcdFxuXHRcdHJldHVybiBhc3NpZ25tZW50V29yay5faWQ7XG5cdH1cbn0pOyIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuaW1wb3J0IHsgUG9zdHMgfSBmcm9tICcuL3Bvc3RzLmpzJztcbiBcbmV4cG9ydCBjb25zdCBBdXRob3JzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2F1dGhvcnMnKTtcblxuQXV0aG9ycy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZX0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZX0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZX1cbn0pO1xuXG5pZihNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHRNZXRlb3IucHVibGlzaChcImF1dGhvcnNcIiwgZnVuY3Rpb24oc3BhY2VJZCkge1xuXHRcdHJldHVybiBBdXRob3JzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWR9KTtcblx0fSk7XG59XG5cbk1ldGVvci5tZXRob2RzKHtcblxuXHRhdXRob3JJbnNlcnQ6IGZ1bmN0aW9uKG5hbWUsIHNwYWNlSWQsIHVzZXJJZD1mYWxzZSkge1xuXHRcdGlmICh1c2VySWQpIHtcblx0XHRcdEF1dGhvcnMuaW5zZXJ0KHtuYW1lOiBuYW1lLCBzcGFjZUlkOiBzcGFjZUlkLCB1c2VySWQ6IHVzZXJJZCwgY29sb3I6IE1ldGVvci51c2VyKCkucHJvZmlsZS5jb2xvciwgYXZhdGFyOk1ldGVvci51c2VyKCkucHJvZmlsZS5hdmF0YXIsIG5SZWZzOiAwfSxmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gaW5zZXJ0aW5nIGF1dGhvciAgOiBcIitlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkF1dGhvciBpbnNlcnRlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbG9ycyA9IFtcIjdkNThiZlwiLFwiYTM0NWI3XCIsXCJlNzNmNzhcIixcImVjNWI1MVwiLFwiZjg2YzQxXCIsXCJmOGExMjZcIixcImY3YzQyYlwiLFwiZjdlNjU3XCIsXCJjZWRhNTVcIixcIjk3YzU2MVwiLFwiNjNiNjY4XCIsXCIyN2E0OThcIixcIjI1YzBkNFwiLFwiMjdiMGVlXCIsXCI0MWExZWZcIixcIjVhNjZiYVwiLFwiN2Q1OGJmXCIsXCJhMzQ1YjdcIixcImU3M2Y3OFwiLFwiZWM1YjUxXCIsXCJmODZjNDFcIixcImY4YTEyNlwiLFwiZjdjNDJiXCIsXCJmN2U2NTdcIixcImNlZGE1NVwiLFwiOTdjNTYxXCIsXCI2M2I2NjhcIl07XG5cdFx0XHR2YXIgY29sb3JQaWNrZWQgPSBcIiNcIitjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuXG5cdFx0XHRhdmF0YXJzID0gW1wiYXZhdGFyLTFcIiwgXCJhdmF0YXItMlwiLFwiYXZhdGFyLTNcIiwgXCJhdmF0YXItNFwiLFwiYXZhdGFyLTVcIiwgXCJhdmF0YXItNlwiLFwiYXZhdGFyLTdcIiwgXCJhdmF0YXItOFwiLFwiYXZhdGFyLTlcIiwgXCJhdmF0YXItMTBcIixcImF2YXRhci0xMVwiLCBcImF2YXRhci0xMlwiLFwiYXZhdGFyLTEzXCIsIFwiYXZhdGFyLTE0XCIsXCJhdmF0YXItMTVcIiwgXCJhdmF0YXItMTZcIixcImF2YXRhci0xN1wiLCBcImF2YXRhci0xOFwiLFwiYXZhdGFyLTE5XCIsIFwiYXZhdGFyLTIwXCIsXCJhdmF0YXItMjFcIiwgXCJhdmF0YXItMjJcIixcImF2YXRhci0yM1wiLCBcImF2YXRhci0yNFwiLCBcImF2YXRhci0yNVwiXTtcblx0XHRcdHZhciBhdmF0YXJQaWNrZWQgPSBhdmF0YXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YXRhcnMubGVuZ3RoKV07XG5cblx0XHRcdEF1dGhvcnMuaW5zZXJ0KHtuYW1lOiBuYW1lLCBzcGFjZUlkOiBzcGFjZUlkLCB1c2VySWQ6IHVzZXJJZCwgY29sb3I6IGNvbG9yUGlja2VkLCBhdmF0YXI6YXZhdGFyUGlja2VkLCBuUmVmczogMH0sZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGluc2VydGluZyBhdXRob3IgIDogXCIrZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJBdXRob3IgaW5zZXJ0ZWQgQlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXHRhdXRob3JFZGl0OiBmdW5jdGlvbihzcGFjZUlkLCBvbGROYW1lLCBuZXdOYW1lKSB7XG5cdFx0dmFyIGF1dGhvciA9IEF1dGhvcnMuZmluZE9uZSh7bmFtZTogb2xkTmFtZSwgc3BhY2VJZDogc3BhY2VJZH0pO1xuXHRcdEF1dGhvcnMudXBkYXRlKGF1dGhvci5faWQsIHskc2V0OiB7bmFtZTpuZXdOYW1lfX0sIGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGNoYW5naW5nIGF1dGhvciBuYW1lIDogXCIrZXJyb3IubWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0UG9zdHMudXBkYXRlKHtzcGFjZUlkOnNwYWNlSWQsIGF1dGhvcjogb2xkTmFtZX0seyRzZXQ6IHthdXRob3I6IG5ld05hbWV9fSwge211bHRpOiB0cnVlfSk7IC8vIFVwZGF0ZSBhbGwgYXV0aG9yIHBvc3RzIHdpdGggbmV3IG5hbWVcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0YXV0aG9yRGVsZXRlOiBmdW5jdGlvbihuYW1lLCBzcGFjZUlkKSB7XG5cdFx0QXV0aG9ycy5yZW1vdmUoe25hbWU6IG5hbWUsIHNwYWNlSWQ6IHNwYWNlSWR9LGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIHJlbW92aW5nIGF1dGhvciAgOiBcIitlcnJvci5tZXNzYWdlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQXV0aG9yIHJlbW92ZWRcIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdGNyZWF0ZVBhc3N3b3JkczogZnVuY3Rpb24oc3BhY2VJZCkge1xuXHRcdHZhciBhbGxBdXRob3JzID0gQXV0aG9ycy5maW5kKHtzcGFjZUlkOnNwYWNlSWR9KS5mZXRjaCgpO1xuXG5cdFx0Zm9yICh2YXIgaT0wOyBpPCBhbGxBdXRob3JzLmxlbmd0aCA7IGkrKykge1xuXHRcdFx0Ly8gU2V0IGEgcmFuZG9tIHBhc3N3b3JkIGZvciBzdHVkZW50cyB3aG8gZG9uJ3QgaGF2ZSBhbGVhZHkgb25lIHNldFxuXHRcdFx0QXV0aG9ycy51cGRhdGUoe19pZDphbGxBdXRob3JzW2ldLl9pZCwgcGFzc3dvcmQ6bnVsbH0seyRzZXQ6e3Bhc3N3b3JkOm1ha2VDb2RlKDQpfX0pO1xuXHRcdH1cblx0fVxufSk7XG5cbmZ1bmN0aW9uIG1ha2VDb2RlKGxlbmd0aClcbntcblx0dmFyIHRleHQgPSBcIlwiO1xuXHR2YXIgcG9zc2libGUgPSBcIjAxMjM0NTY3ODlcIlxuXG5cdGZvciggdmFyIGk9MDsgaSA8IGxlbmd0aDsgaSsrIClcblx0XHR0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcblx0XG5cdHJldHVybiB0ZXh0O1xufSIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnLi9wb3N0cy5qcyc7XG5pbXBvcnQgeyBBY3Rpdml0aWVzIH0gZnJvbSAnLi9hY3Rpdml0aWVzLmpzJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4vcmVzb3VyY2VzLmpzJztcblxuXG5leHBvcnQgY29uc3QgQ2F0ZWdvcmllcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdjYXRlZ29yaWVzJyk7XG5cbkNhdGVnb3JpZXMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWV9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWV9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWV9XG59KTtcblxuXG5pZihNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHRNZXRlb3IucHVibGlzaChcImNhdGVnb3JpZXNcIiwgZnVuY3Rpb24oc3BhY2VJZCkge1xuXHRcdHJldHVybiBDYXRlZ29yaWVzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWR9KTtcblx0fSk7XG5cblxuXHRDYXRlZ29yaWVzLmFmdGVyLnVwZGF0ZShmdW5jdGlvbiAodXNlcklkLCBkb2MpIHtcblxuXG5cdH0pO1xuXG5cblxuXHRDYXRlZ29yaWVzLmFmdGVyLnJlbW92ZShmdW5jdGlvbiAodXNlcklkLCBkb2MpIHtcblxuXHRcdC8vIERlY3JlYXNlIG9yZGVyIG51bWJlciBvZiBvdGhlcnMgY2F0ZWdvcmllc1xuXHRcdGlmICghZG9jLnN1YmNhdGVnb3J5SWQpXG5cdFx0XHRDYXRlZ29yaWVzLnVwZGF0ZSh7c3BhY2VJZDogZG9jLnNwYWNlSWQsIG9yZGVyOiB7ICRndDogZG9jLm9yZGVyIH0gfSx7JGluYzogeyBvcmRlcjogLTEgfX0se211bHRpOnRydWV9KTtcblx0XHRlbHNlXG5cdFx0XHRDYXRlZ29yaWVzLnVwZGF0ZSh7c3BhY2VJZDogZG9jLnNwYWNlSWQsIHN1YmNhdGVnb3J5SWQ6IGRvYy5zdWJjYXRlZ29yeUlkLCBvcmRlcjogeyAkZ3Q6IGRvYy5vcmRlciB9IH0seyRpbmM6IHsgb3JkZXI6IC0xIH19LHttdWx0aTp0cnVlfSk7XG5cdFxuXHRcdFxuXHRcdC8vIFJlbW92ZSByZWZlcmVuY2UgdG8gdGhlIGNhdGVnb3J5IGluIHBvc3RzLCBhY3Rpdml0aWVzIGFuZCByZXNvdXJjZXNcblx0XHRQb3N0cy51cGRhdGUoe2NhdGVnb3J5SWQ6ZG9jLl9pZH0seyRzZXQ6e2NhdGVnb3J5SWQ6bnVsbH19LHttdWx0aTp0cnVlfSk7XG5cdFx0QWN0aXZpdGllcy51cGRhdGUoe2NhdGVnb3J5SWQ6ZG9jLl9pZH0seyRzZXQ6e2NhdGVnb3J5SWQ6bnVsbH19LHttdWx0aTp0cnVlfSk7XG5cdFx0UmVzb3VyY2VzLnVwZGF0ZSh7Y2F0ZWdvcnlJZDpkb2MuX2lkfSx7JHNldDp7Y2F0ZWdvcnlJZDpudWxsfX0se211bHRpOnRydWV9KTtcblx0fSk7XG59XG5cbk1ldGVvci5tZXRob2RzKHtcblxuXHRjYXRlZ29yeUluc2VydDogZnVuY3Rpb24odHlwZSwgbmFtZSwgc3BhY2VJZCwgc3ViY2F0ZWdvcnlJZCA9IFwiXCIpIHtcblx0XHRjb2xvcnM9IFtcImNvbG9yLTFcIiwgXCJjb2xvci0yXCIsIFwiY29sb3ItM1wiLCBcImNvbG9yLTRcIiwgXCJjb2xvci01XCIsIFwiY29sb3ItNlwiLCBcImNvbG9yLTdcIiwgXCJjb2xvci04XCJdO1xuXHRcdC8vY29sb3JzID0gW1wiY2RmZTk2XCIsXCJhZmNjZjhcIixcImU1YzlhYVwiLFwiZmFiYjJkXCIsXCJmZmYzN2VcIixcImZjZDBlOFwiLFwiZDdiMGY5XCJdXG5cdFx0Ly9jb2xvcnMgPSBbXCI3ZDU4YmZcIixcImEzNDViN1wiLFwiZTczZjc4XCIsXCJlYzViNTFcIixcImY4NmM0MVwiLFwiZjhhMTI2XCIsXCJmN2M0MmJcIixcImY3ZTY1N1wiLFwiY2VkYTU1XCIsXCI5N2M1NjFcIixcIjYzYjY2OFwiLFwiMjdhNDk4XCIsXCIyNWMwZDRcIixcIjI3YjBlZVwiLFwiNDFhMWVmXCIsXCI1YTY2YmFcIixcIjdkNThiZlwiLFwiYTM0NWI3XCIsXCJlNzNmNzhcIixcImVjNWI1MVwiLFwiZjg2YzQxXCIsXCJmOGExMjZcIixcImY3YzQyYlwiLFwiZjdlNjU3XCIsXCJjZWRhNTVcIixcIjk3YzU2MVwiLFwiNjNiNjY4XCJdO1xuXHRcdHZhciBjb2xvclBpY2tlZCA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG5cblx0XHR2YXIgb3JkZXIgPSBudWxsO1xuXHRcdGlmIChzdWJjYXRlZ29yeUlkICE9IFwiXCIpXG5cdFx0XHRvcmRlciA9IENhdGVnb3JpZXMuZmluZCh7c3BhY2VJZDogc3BhY2VJZCwgc3ViY2F0ZWdvcnlJZDpzdWJjYXRlZ29yeUlkfSkuY291bnQoKTtcblx0XHRlbHNlXG5cdFx0XHRvcmRlciA9IENhdGVnb3JpZXMuZmluZCh7c3BhY2VJZDogc3BhY2VJZCwgc3ViY2F0ZWdvcnlJZDpudWxsfSkuY291bnQoKTtcblxuXG5cdFx0cmV0dXJuIENhdGVnb3JpZXMuaW5zZXJ0KHtcblx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRuYW1lOiBuYW1lLCBcblx0XHRcdGNvbG9yOmNvbG9yUGlja2VkLFxuXHRcdFx0c3ViY2F0ZWdvcnlJZDpzdWJjYXRlZ29yeUlkLFxuXHRcdFx0aW5zdHJ1Y3Rpb246XCJcIixcblx0XHRcdHNwYWNlSWQ6IHNwYWNlSWQsXG5cdFx0XHRuUmVmczogMCxcblx0XHRcdG9yZGVyOiBvcmRlclxuXHRcdH0pO1xuXHR9LFxuXHRjYXRlZ29yeUVkaXQ6IGZ1bmN0aW9uKHNwYWNlSWQsIHR5cGUsIGlkLCBuZXdOYW1lLCBvbGRTdWJjYXRlZ29yeUlkID0gXCJcIiwgbmV3U3ViY2F0ZWdvcnlJZCA9IFwiXCIpIHtcblx0XHR2YXIgY2F0ZWdvcnkgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe19pZDppZH0pO1xuXHRcdENhdGVnb3JpZXMudXBkYXRlKGNhdGVnb3J5Ll9pZCwgeyRzZXQ6IHtuYW1lOm5ld05hbWUsIHN1YmNhdGVnb3J5SWQ6bmV3U3ViY2F0ZWdvcnlJZH19LCBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBjaGFuZ2luZyBjYXRlZ29yeSBuYW1lIDogXCIrZXJyb3IubWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly8gUmUtY2FsY3VsYXRlIG9yZGVyIGlmIGNhdGVnb3J5IGNoYW5nZVxuXHRcdFx0XHRpZiAob2xkU3ViY2F0ZWdvcnlJZCAhPSBuZXdTdWJjYXRlZ29yeUlkKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJvbiBjaGFuZ2UgaWNpIFwiKTtcblx0XHRcdFx0XHRDYXRlZ29yaWVzLnVwZGF0ZSh7c3ViY2F0ZWdvcnlJZDogb2xkU3ViY2F0ZWdvcnlJZCwgb3JkZXI6IHsgJGd0OiBjYXRlZ29yeS5vcmRlciB9IH0seyRpbmM6IHsgb3JkZXI6IC0xIH19LHttdWx0aTp0cnVlfSk7IC8vIERlY3JlYXNlIGFsbCBzdWJjYXRlZ29yaWVzIG9yZGVyIGlmIGhpZ2hlciB0aGFuIHRoZSBjYXRlZ29yeSdzIG9yZGVyXG5cdFx0XHRcdFx0dmFyIG5iTmV3Q2F0ZWdvcmllcyA9IENhdGVnb3JpZXMuZmluZCh7c3BhY2VJZDogc3BhY2VJZCwgc3ViY2F0ZWdvcnlJZDogbmV3U3ViY2F0ZWdvcnlJZH0pLmNvdW50KCk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJuYk5ld0NhdGVnb3JpZXMgOiBcIituYk5ld0NhdGVnb3JpZXMpO1xuXHRcdFx0XHRcdENhdGVnb3JpZXMudXBkYXRlKGNhdGVnb3J5Ll9pZCwgeyRzZXQ6IHsgb3JkZXI6IG5iTmV3Q2F0ZWdvcmllcy0xIH19KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRjYXRlZ29yeURlbGV0ZTogZnVuY3Rpb24oaWQsIHNwYWNlSWQpIHtcblx0XHR2YXIgY2F0ZWdvcnkgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe19pZDppZH0pO1xuXHRcdENhdGVnb3JpZXMucmVtb3ZlKGNhdGVnb3J5Ll9pZCwgZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gZGVsZXRpbmcgY2F0ZWdvcnkgOiBcIitlcnJvci5tZXNzYWdlKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvLyBEZWxldGUgc3ViY2F0ZWdvcmllc1xuXHRcdFx0XHRDYXRlZ29yaWVzLnJlbW92ZSh7c3ViY2F0ZWdvcnlJZDpjYXRlZ29yeS5faWR9KTtcdFx0XHRcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuaW1wb3J0IHsgQXV0aG9ycyB9IGZyb20gJy4vYXV0aG9ycy5qcyc7XG5pbXBvcnQgeyBTcGFjZXMgfSBmcm9tICcuL3NwYWNlcy5qcyc7XG5pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yaWVzLmpzJztcbmltcG9ydCB7IEZpbGVzIH0gZnJvbSAnLi9maWxlcy5qcyc7XG4vL2ltcG9ydCB7IE5vdGlmaWNhdGlvbnMgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuanMnO1xuXG5leHBvcnQgY29uc3QgQ2hhdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignY2hhdHMnKTtcblxuXG5DaGF0cy5hbGxvdyh7XG5cdGluc2VydDogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWU7fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlO30sXG5cblx0dXBkYXRlOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZTt9XG59KTtcblxuaWYoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ293bkNoYXRzJywgZnVuY3Rpb24oc3BhY2VJZCwgdXNlcklkKSB7IC8vIGdldCBhbGwgY2hhdHMgZnJvbSBhIHNwZWNpZmljIHNwYWNlSWQgd2hlcmUgdGhlIHVzZXIgaXMgaW5cblx0cmV0dXJuIENoYXRzLmZpbmQoe3NwYWNlSWQ6c3BhY2VJZCwgJG9yOlt7c2VuZGVyOnVzZXJJZH0se3JlY2VpdmVyOnVzZXJJZH1dfSk7XG59KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goJ293bkNoYXRzJywgZnVuY3Rpb24oc3BhY2VJZCwgdXNlcklkKSB7IC8vIGdldCBhbGwgY2hhdHMgZnJvbSBhIHNwZWNpZmljIHNwYWNlSWQgd2hlcmUgdGhlIHVzZXIgaXMgaW5cbi8vIFx0cmV0dXJuIENoYXRzLmZpbmQoe3NwYWNlSWQ6c3BhY2VJZCwgJG9yOlt7c2VuZGVyOnVzZXJJZH0se3JlY2VpdmVyOnVzZXJJZH1dfSk7XG4vLyB9KTtcblxuXG5cblxufVxuXG5cbk1ldGVvci5tZXRob2RzKHtcblxuXHRtYXJrQ2hhdE1lc3NhZ2VzU2VlbjogZnVuY3Rpb24odXNlciwgb3RoZXJVc2VyKSB7XG5cdFx0Q2hhdHMudXBkYXRlKHskYW5kOlt7c2VuZGVyOm90aGVyVXNlcn0se3JlY2VpdmVyOnVzZXJ9XX0seyRzZXQ6e2lzU2VlbjpEYXRlLm5vdygpfX0sIHttdWx0aTogdHJ1ZX0pO1xuXHR9XG59KTsiLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgQ29kZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignY29kZXMnKTtcblxuQ29kZXMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWV9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWV9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWV9XG59KTsiLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgRmlsZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignZmlsZXMnKTtcblxuXG5GaWxlcy5hbGxvdyh7XG5cbiAgXHRpbnNlcnQ6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlfSxcblxuIFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZX0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZX1cbn0pO1xuXG5pZihNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHRNZXRlb3IucHVibGlzaChcImZpbGVcIiwgZnVuY3Rpb24oZmlsZUlkKSB7XG5cdHJldHVybiBGaWxlcy5maW5kKHtfaWQ6ZmlsZUlkfSlcbn0pO1xuXG5NZXRlb3IucHVibGlzaChcImZpbGVzXCIsIGZ1bmN0aW9uKHNwYWNlSWQpIHtcblx0cmV0dXJuIEZpbGVzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWR9KVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKFwiYWxsRmlsZXNcIiwgZnVuY3Rpb24oKSB7XG5cdHJldHVybiBGaWxlcy5maW5kKHt9KVxufSk7XG5cblx0dmFyIGZzID0gTnBtLnJlcXVpcmUoJ2ZzJyk7XG5cdHZhciByaW1yYWYgPSBOcG0ucmVxdWlyZSgncmltcmFmJyk7IC8vIFBhY2thZ2UgdG8gZGVsZXRlIGRpcmVjdG9yaWVzXG5cdHZhciB1cGxvYWREaXIgPSBNZXRlb3Iuc2V0dGluZ3MudXBsb2FkRGlyO1xuXG5cdE1ldGVvci5tZXRob2RzKHtcblxuXHRcdGRlbGV0ZUZpbGU6IGZ1bmN0aW9uKHBvc3QpIHtcblxuXHRcdFx0aWYgKHBvc3QudHlwZSA9PSAnbGVzc29uJykgLy8gUmVtb3ZlIGRpcmVjdG9yeSAoZWFjaCBzdG9ybGluZSBsZXNzb24gaXMgc3RvcmVkIGluIGlzIG93biBkaXJlY3RvcnkpXG5cdFx0XHRcdHJpbXJhZih1cGxvYWREaXIrXCIvXCIrcG9zdC5zcGFjZUlkK1wiL1wiK3Bvc3QudHlwZStcIi9cIitwb3N0LmZpbGVJZCwgZnVuY3Rpb24gKGVycikge2NvbnNvbGUubG9nKGVycil9KTtcblx0XHRcdGVsc2UgLy8gUmVtb3ZlIHRoZSBmaWxlXG4gICAgXHRcdFx0ZnMudW5saW5rU3luYyh1cGxvYWREaXIgK1wiL1wiK3Bvc3QuZmlsZVBhdGgsIGZ1bmN0aW9uIChlcnIpIHtjb25zb2xlLmxvZyhlcnIpfSk7XG4gIFx0XHR9XG5cdH0pXG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IHsgU3BhY2VzIH0gZnJvbSAnLi9zcGFjZXMuanMnO1xuaW1wb3J0IHsgUG9zdHMgfSBmcm9tICcuL3Bvc3RzLmpzJztcblxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignbm90aWZpY2F0aW9ucycpO1xuXG5Ob3RpZmljYXRpb25zLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlfSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlfSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlfVxufSk7XG5cbmlmKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdE1ldGVvci5wdWJsaXNoKFwibm90aWZpY2F0aW9uc1wiLCBmdW5jdGlvbihzcGFjZUlkKSB7XG5cdFx0cmV0dXJuIE5vdGlmaWNhdGlvbnMuZmluZCh7c3BhY2VJZDogc3BhY2VJZH0pO1xuXHR9KTtcblxuXHROb3RpZmljYXRpb25zLmFmdGVyLmluc2VydChmdW5jdGlvbiAodXNlcklkLCBkb2MpIHsgXG5cblx0XHR2YXIgc3BhY2UgPSBTcGFjZXMuZmluZE9uZShkb2Muc3BhY2VJZCk7XG5cdFx0dmFyIHBvc3QgPSBQb3N0cy5maW5kT25lKGRvYy5wb3N0SWQpO1xuXG5cdFx0aWYgKHNwYWNlLm1haWxDb21tZW50Tm90aWZpY2F0aW9uID09IHRydWUpIHtcblxuXHRcdFx0Y29uc29sZS5sb2coXCJ1c2VySWQgOiBcIit1c2VySWQpO1xuXG5cdFx0XHRpZiAoc3BhY2UudXNlcklkICE9IE1ldGVvci51c2VySWQoKSkge1xuXG5cdFx0XHR2YXIgc3BhY2VPd25lciA9IE1ldGVvci51c2Vycy5maW5kT25lKHtfaWQ6c3BhY2UudXNlcklkfSk7XG5cblx0XHRcdGNvbnNvbGUubG9nKFwic3BhY2UgSWQgOiBcIitzcGFjZU93bmVyKTtcblxuXHRcdFx0dmFyIG93bmVyTWFpbCA9IHNwYWNlT3duZXIuZW1haWxzWzBdLmFkZHJlc3M7XG5cblx0XHRcdHZhciBsYXN0Q29tbWVudCA9IHBvc3QuY29tbWVudHNbcG9zdC5jb21tZW50cy5sZW5ndGgtMV07XG5cdFx0XHRjb25zb2xlLmxvZyhcImxhc3QgY29tbWVudCA6IFwiK3Bvc3QuY29tbWVudHMubGVuZ3RoKTtcblxuXHRcdFx0Y29uc29sZS5sb2coXCJvbiBlbnZvaWUgdW4gZS1tYWlsIGRlIG5vdGlmaWNhdGlvbiDDoCA6XCIrb3duZXJNYWlsKTtcblx0XHRcdHZhciBtYWlsQm9keSA9IG51bGw7XG5cdFx0XHRpZiAocG9zdC5maWxlUGF0aCkge1xuXHRcdCAgICAgICAgbWFpbEJvZHkgPSAnPGgzPicrVEFQaTE4bi5fXyhcInBvc3Qtc3VibWl0LS1tYWlsLWNvbW1lbnQtbm90aWZpY2F0aW9uLWJvZHlcIikrJzwvaDM+PHA+PGI+JytsYXN0Q29tbWVudC5hdXRob3IrJzwvYj48L3A+PHA+JytsYXN0Q29tbWVudC50ZXh0Kyc8L3A+PHA+LS0tLS0tLS0tLTwvcD48ZGl2IHN0eWxlPVwicGFkZGluZzo4cHg6Ym9yZGVyOnNvbGlkIDFweCBncmV5O1wiPjxwPjxiPicrcG9zdC5hdXRob3IrJzwvYj48L3A+PHA+Jytwb3N0LmJvZHkrJzwvcD48aW1nIHN0eWxlPVwid2lkdGg6MTUwcHhcIiBzcmM9XCJodHRwczovL2xpdmUyLmJlZWtlZS5jaC91cGxvYWQnK3Bvc3QuZmlsZVBhdGgrJ1wiIC8+PC9kaXY+PGEgaHJlZj1cImh0dHBzOi8vbGl2ZTIuYmVla2VlLmNoL3Bvc3QvJytwb3N0Ll9pZCsnXCI+JytUQVBpMThuLl9fKFwicG9zdC1zdWJtaXQtLW1haWwtbm90aWZpY2F0aW9uLWxpbmtcIikrJzwvYT4nXG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0ICAgICAgICBtYWlsQm9keSA9ICc8aDM+JytUQVBpMThuLl9fKFwicG9zdC1zdWJtaXQtLW1haWwtY29tbWVudC1ub3RpZmljYXRpb24tYm9keVwiKSsnPC9oMz48cD48Yj4nK2xhc3RDb21tZW50LmF1dGhvcisnPC9iPjwvcD48cD4nK2xhc3RDb21tZW50LnRleHQrJzwvcD48cD4tLS0tLS0tLS0tPC9wPjxkaXYgc3R5bGU9XCJwYWRkaW5nOjhweDpib3JkZXI6c29saWQgMXB4IGdyZXk7XCI+PHA+PGI+Jytwb3N0LmF1dGhvcisnPC9iPjwvcD48cD4nK3Bvc3QuYm9keSsnPC9wPjwvZGl2PjxhIGhyZWY9XCJodHRwczovL2xpdmUyLmJlZWtlZS5jaC9wb3N0LycrcG9zdC5faWQrJ1wiPicrVEFQaTE4bi5fXyhcInBvc3Qtc3VibWl0LS1tYWlsLW5vdGlmaWNhdGlvbi1saW5rXCIpKyc8L2E+J1xuXHRcdFx0fVxuXG5cdFx0XHRNZXRlb3IuZGVmZXIoZnVuY3Rpb24oKSB7IC8vIEF2b2lkIGNsaWVudCB0byB3YWl0IGZvciBjYWxsYmFja1xuXHRcdFx0XHRNZXRlb3IuY2FsbCgnc2VuZEVtYWlsJywgLy8gU2VuZCBhbiBlLW1haWwgdG8gdXNlclxuXHRcdCAgICAgICAgICAgIG93bmVyTWFpbCxcblx0XHQgICAgICAgICAgICAndmluY2VudC53aWRtZXJAYmVla2VlLmNoJyxcblx0XHQgICAgICAgICAgICBUQVBpMThuLl9fKFwicG9zdC1zdWJtaXQtLW1haWwtY29tbWVudC1ub3RpZmljYXRpb24tc3ViamVjdFwiKSxcblx0XHQgICAgICAgICAgICBtYWlsQm9keVxuXHRcdCAgICAgICAgKTtcdFxuXHRcdFx0fSk7XG5cdCAgICAgICB9XG5cdCAgICAgfVxuXHR9KTtcblxufVxuXG5NZXRlb3IubWV0aG9kcyh7XG5cblx0ZGVsZXRlUG9zdE5vdGlmaWNhdGlvbnM6IGZ1bmN0aW9uKHNwYWNlSWQsIGF1dGhvciwgZWxlbWVudElkKSB7XG5cdFx0Y29uc29sZS5sb2coXCJzcGFjZUlEIDogXCIrc3BhY2VJZCtcIiBhdXRob3I6IFwiK2F1dGhvcitcIiBlbGVtZW50SUQgOiBcIitlbGVtZW50SWQpO1xuXHRcdE5vdGlmaWNhdGlvbnMucmVtb3ZlKHtzcGFjZUlkOiBzcGFjZUlkLCByZWNlaXZlcjphdXRob3IsIHBvc3RJZDplbGVtZW50SWR9KTtcblx0XHROb3RpZmljYXRpb25zLnJlbW92ZSh7c3BhY2VJZDogc3BhY2VJZCwgcmVjZWl2ZXI6YXV0aG9yLCByZXNvdXJjZUlkOmVsZW1lbnRJZH0pO1xuXG5cdFx0Ly9Qb3N0cy51cGRhdGUoe19pZDpkYXRhLmN1cnJlbnRQb3N0SWQsXCJjb21tZW50cy5pZFwiOmRhdGEuY3VycmVudENvbW1lbnRJZH0sIHskcHVzaDoge1wiY29tbWVudHMuJC5saWtlc1wiOiBkYXRhLmF1dGhvcn19KTtcblx0fSxcblx0Y2xlYXJBbGxOb3RpZmljYXRpb25zOiBmdW5jdGlvbihzcGFjZUlkLCBhdXRob3IpIHtcblx0XHROb3RpZmljYXRpb25zLnJlbW92ZSh7c3BhY2VJZDogc3BhY2VJZCwgcmVjZWl2ZXI6YXV0aG9yfSk7XG5cdH1cbn0pOyIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmltcG9ydCB7IEF1dGhvcnMgfSBmcm9tICcuL2F1dGhvcnMuanMnO1xuaW1wb3J0IHsgU3BhY2VzIH0gZnJvbSAnLi9zcGFjZXMuanMnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllcyB9IGZyb20gJy4vY2F0ZWdvcmllcy5qcyc7XG5pbXBvcnQgeyBGaWxlcyB9IGZyb20gJy4vZmlsZXMuanMnO1xuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi9yZXNvdXJjZXMuanMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9ucyB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy5qcyc7XG5cbmV4cG9ydCBjb25zdCBQb3N0cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdwb3N0cycpO1xuXG5cblBvc3RzLmFsbG93KHtcblx0aW5zZXJ0OiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZTt9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWU7fSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlO31cbn0pO1xuXG5pZihNZXRlb3IuaXNDbGllbnQpIHtcblx0Q291bnRzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJjb3VudHNcIik7IC8vIFN0b3JlIHBvc3QgY291bnQgb2YgYSBzcGFjZSA7IEFsbG93IHRvIGNvdW50IHRoZW0gd2l0aG91dCBzdWJzY3JpYmUgdG8gYWxsIHBvc3RzIChvcHRpbWl6YXRpb24pXG5cdFBpbm5lZENvdW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwicGlubmVkQ291bnRzXCIpO1xuXHRGaWxlc0NvdW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiZmlsZXNDb3VudHNcIik7XG5cdEltYWdlc0NvdW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiaW1hZ2VzQ291bnRzXCIpO1xuXHRMaXZlRmVlZENvdW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwibGl2ZUZlZWRDb3VudHNcIik7XG5cdFJlc291cmNlc0NvdW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwicmVzb3VyY2VzQ291bnRzXCIpO1xuXHRGZWVkQ291bnRzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJmZWVkQ291bnRzXCIpO1xufVxuXG5pZihNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuTWV0ZW9yLnB1Ymxpc2goJ3Bvc3QnLCBmdW5jdGlvbihwb3N0SWQpIHtcblx0Y2hlY2socG9zdElkLCBTdHJpbmcpO1xuXHRyZXR1cm4gUG9zdHMuZmluZCh7X2lkOiBwb3N0SWR9KTtcbn0pO1xuXG5NZXRlb3IucHVibGlzaCgnaG9tZVBvc3RzJywgZnVuY3Rpb24oc3BhY2VJZCkge1xuXHRjaGVjayhzcGFjZUlkLCBTdHJpbmcpO1xuXHRyZXR1cm4gUG9zdHMuZmluZCh7c3BhY2VJZDogc3BhY2VJZCwgdHlwZTpcImhvbWVcIn0se3NvcnQ6IHtzdWJtaXR0ZWQ6IDF9fSk7XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ2xpdmVGZWVkUG9zdHMnLCBmdW5jdGlvbihzcGFjZUlkKSB7XG5cdGNoZWNrKHNwYWNlSWQsIFN0cmluZyk7XG5cdHJldHVybiBQb3N0cy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkLCB0eXBlOlwibGl2ZUZlZWRcIn0se3NvcnQ6IHtzdWJtaXR0ZWQ6IC0xfX0pO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKCdyZXNvdXJjZXNQb3N0cycsIGZ1bmN0aW9uKHNwYWNlSWQpIHtcblx0Y2hlY2soc3BhY2VJZCwgU3RyaW5nKTtcblx0cmV0dXJuIFBvc3RzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWQsIHR5cGU6XCJyZXNvdXJjZVwifSk7XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ3Bvc3RzJywgZnVuY3Rpb24oc29ydGluZywgZmlsdGVycywgc2tpcCA9IDAsIGxpbWl0ID0gMCkge1xuXHRyZXR1cm4gUG9zdHMuZmluZChmaWx0ZXJzLCB7c29ydDoge3N1Ym1pdHRlZDotMX0sc2tpcDpza2lwLGxpbWl0OmxpbWl0fSk7XG5cdC8vcmV0dXJuIFBvc3RzLmZpbmQoZmlsdGVycywge3NvcnQ6IHtzdWJtaXR0ZWQ6MX0sc2tpcDpza2lwLGxpbWl0OmxpbWl0fSk7XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ2xhc3RQb3N0cycsIGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gUG9zdHMuZmluZCh7fSx7c29ydDoge3N1Ym1pdHRlZDotMX0sIGxpbWl0OiAyMH0pO1xufSk7XG5cbi8vIE1ldGVvci5wdWJsaXNoKFwiY291bnQtYWxsLWZlZWRcIiwgZnVuY3Rpb24gKHNwYWNlSWQpIHtcbi8vIFx0dmFyIHNlbGYgPSB0aGlzO1xuLy8gXHR2YXIgZmVlZENvdW50cyA9IDA7XG4vLyBcdHZhciBpbml0aWFsaXppbmcgPSB0cnVlO1xuXG4vLyBcdHZhciBoYW5kbGUgPSBQb3N0cy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkLCB0eXBlOidsaXZlRmVlZCd9KS5vYnNlcnZlQ2hhbmdlcyh7XG4vLyBcdFx0YWRkZWQ6IGZ1bmN0aW9uIChkb2MsIGlkeCkge1xuLy8gXHRcdFx0bGl2ZUZlZWRDb3VudHMrKztcbi8vIFx0XHRcdGlmICghaW5pdGlhbGl6aW5nKSB7XG4vLyBcdFx0XHRcdHNlbGYuY2hhbmdlZChcImxpdmVGZWVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogbGl2ZUZlZWRDb3VudHN9KTsgIC8vIFwiY291bnRzXCIgaXMgdGhlIHB1Ymxpc2hlZCBjb2xsZWN0aW9uIG5hbWVcbi8vIFx0XHRcdH1cbi8vIFx0XHR9LFxuLy8gXHRcdHJlbW92ZWQ6IGZ1bmN0aW9uIChkb2MsIGlkeCkge1xuLy8gXHRcdFx0bGl2ZUZlZWRDb3VudHMtLTtcbi8vIFx0XHRcdHNlbGYuY2hhbmdlZChcImxpdmVGZWVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogbGl2ZUZlZWRDb3VudHN9KTsgIC8vIFNhbWUgcHVibGlzaGVkIGNvbGxlY3Rpb24sIFwiY291bnRzXCJcbi8vIFx0XHR9XG4vLyBcdH0pO1xuXG4vLyBcdGluaXRpYWxpemluZyA9IGZhbHNlO1xuXG4vLyBcdC8vIHB1Ymxpc2ggdGhlIGluaXRpYWwgY291bnQuIGBvYnNlcnZlQ2hhbmdlc2AgZ3VhcmFudGVlZCBub3QgdG8gcmV0dXJuXG4vLyBcdC8vIHVudGlsIHRoZSBpbml0aWFsIHNldCBvZiBgYWRkZWRgIGNhbGxiYWNrcyBoYXZlIHJ1biwgc28gdGhlIGBjb3VudGBcbi8vIFx0Ly8gdmFyaWFibGUgaXMgdXAgdG8gZGF0ZS5cbi8vIFx0c2VsZi5hZGRlZChcImxpdmVGZWVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogbGl2ZUZlZWRDb3VudHN9KTtcblxuLy8gXHQvLyBhbmQgc2lnbmFsIHRoYXQgdGhlIGluaXRpYWwgZG9jdW1lbnQgc2V0IGlzIG5vdyBhdmFpbGFibGUgb24gdGhlIGNsaWVudFxuLy8gXHRzZWxmLnJlYWR5KCk7XG5cbi8vIFx0Ly8gdHVybiBvZmYgb2JzZXJ2ZSB3aGVuIGNsaWVudCB1bnN1YnNjcmliZXNcbi8vIFx0c2VsZi5vblN0b3AoZnVuY3Rpb24gKCkge1xuLy8gXHRcdGhhbmRsZS5zdG9wKCk7XG4vLyBcdH0pO1xuLy8gfSk7XG5cbk1ldGVvci5wdWJsaXNoKFwiY291bnQtYWxsLWxpdmUtZmVlZFwiLCBmdW5jdGlvbiAoc3BhY2VJZCkge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHZhciBsaXZlRmVlZENvdW50cyA9IDA7XG5cdHZhciBpbml0aWFsaXppbmcgPSB0cnVlO1xuXG5cdHZhciBoYW5kbGUgPSBQb3N0cy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkLCB0eXBlOidsaXZlRmVlZCd9KS5vYnNlcnZlQ2hhbmdlcyh7XG5cdFx0YWRkZWQ6IGZ1bmN0aW9uIChkb2MsIGlkeCkge1xuXHRcdFx0bGl2ZUZlZWRDb3VudHMrKztcblx0XHRcdGlmICghaW5pdGlhbGl6aW5nKSB7XG5cdFx0XHRcdHNlbGYuY2hhbmdlZChcImxpdmVGZWVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogbGl2ZUZlZWRDb3VudHN9KTsgIC8vIFwiY291bnRzXCIgaXMgdGhlIHB1Ymxpc2hlZCBjb2xsZWN0aW9uIG5hbWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdHJlbW92ZWQ6IGZ1bmN0aW9uIChkb2MsIGlkeCkge1xuXHRcdFx0bGl2ZUZlZWRDb3VudHMtLTtcblx0XHRcdHNlbGYuY2hhbmdlZChcImxpdmVGZWVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogbGl2ZUZlZWRDb3VudHN9KTsgIC8vIFNhbWUgcHVibGlzaGVkIGNvbGxlY3Rpb24sIFwiY291bnRzXCJcblx0XHR9XG5cdH0pO1xuXG5cdGluaXRpYWxpemluZyA9IGZhbHNlO1xuXG5cdC8vIHB1Ymxpc2ggdGhlIGluaXRpYWwgY291bnQuIGBvYnNlcnZlQ2hhbmdlc2AgZ3VhcmFudGVlZCBub3QgdG8gcmV0dXJuXG5cdC8vIHVudGlsIHRoZSBpbml0aWFsIHNldCBvZiBgYWRkZWRgIGNhbGxiYWNrcyBoYXZlIHJ1biwgc28gdGhlIGBjb3VudGBcblx0Ly8gdmFyaWFibGUgaXMgdXAgdG8gZGF0ZS5cblx0c2VsZi5hZGRlZChcImxpdmVGZWVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogbGl2ZUZlZWRDb3VudHN9KTtcblxuXHQvLyBhbmQgc2lnbmFsIHRoYXQgdGhlIGluaXRpYWwgZG9jdW1lbnQgc2V0IGlzIG5vdyBhdmFpbGFibGUgb24gdGhlIGNsaWVudFxuXHRzZWxmLnJlYWR5KCk7XG5cblx0Ly8gdHVybiBvZmYgb2JzZXJ2ZSB3aGVuIGNsaWVudCB1bnN1YnNjcmliZXNcblx0c2VsZi5vblN0b3AoZnVuY3Rpb24gKCkge1xuXHRcdGhhbmRsZS5zdG9wKCk7XG5cdH0pO1xufSk7XG5cblxuXHRNZXRlb3IucHVibGlzaChcImNvdW50LWFsbC1yZXNvdXJjZXNcIiwgZnVuY3Rpb24gKHNwYWNlSWQpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHR2YXIgcmVzb3VyY2VzQ291bnRzID0gMDtcblx0dmFyIGluaXRpYWxpemluZyA9IHRydWU7XG5cblx0dmFyIGhhbmRsZSA9IFBvc3RzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWQsIHR5cGU6J3Jlc291cmNlJ30pLm9ic2VydmVDaGFuZ2VzKHtcblx0XHRhZGRlZDogZnVuY3Rpb24gKGRvYywgaWR4KSB7XG5cdFx0XHRyZXNvdXJjZXNDb3VudHMrKztcblx0XHRcdGlmICghaW5pdGlhbGl6aW5nKSB7XG5cdFx0XHRcdHNlbGYuY2hhbmdlZChcInJlc291cmNlc0NvdW50c1wiLCBzcGFjZUlkLCB7Y291bnQ6IHJlc291cmNlc0NvdW50c30pOyAgLy8gXCJjb3VudHNcIiBpcyB0aGUgcHVibGlzaGVkIGNvbGxlY3Rpb24gbmFtZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0cmVtb3ZlZDogZnVuY3Rpb24gKGRvYywgaWR4KSB7XG5cdFx0XHRyZXNvdXJjZXNDb3VudHMtLTtcblx0XHRcdHNlbGYuY2hhbmdlZChcInJlc291cmNlc0NvdW50c1wiLCBzcGFjZUlkLCB7Y291bnQ6IHJlc291cmNlc0NvdW50c30pOyAgLy8gU2FtZSBwdWJsaXNoZWQgY29sbGVjdGlvbiwgXCJjb3VudHNcIlxuXHRcdH1cblx0fSk7XG5cblx0aW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cblx0Ly8gcHVibGlzaCB0aGUgaW5pdGlhbCBjb3VudC4gYG9ic2VydmVDaGFuZ2VzYCBndWFyYW50ZWVkIG5vdCB0byByZXR1cm5cblx0Ly8gdW50aWwgdGhlIGluaXRpYWwgc2V0IG9mIGBhZGRlZGAgY2FsbGJhY2tzIGhhdmUgcnVuLCBzbyB0aGUgYGNvdW50YFxuXHQvLyB2YXJpYWJsZSBpcyB1cCB0byBkYXRlLlxuXHRzZWxmLmFkZGVkKFwicmVzb3VyY2VzQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogcmVzb3VyY2VzQ291bnRzfSk7XG5cblx0Ly8gYW5kIHNpZ25hbCB0aGF0IHRoZSBpbml0aWFsIGRvY3VtZW50IHNldCBpcyBub3cgYXZhaWxhYmxlIG9uIHRoZSBjbGllbnRcblx0c2VsZi5yZWFkeSgpO1xuXG5cdC8vIHR1cm4gb2ZmIG9ic2VydmUgd2hlbiBjbGllbnQgdW5zdWJzY3JpYmVzXG5cdHNlbGYub25TdG9wKGZ1bmN0aW9uICgpIHtcblx0XHRoYW5kbGUuc3RvcCgpO1xuXHR9KTtcbn0pO1xufVxuXG4vLyBpZihNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuLy8gXHRQb3N0cy5iZWZvcmUuaW5zZXJ0KGZ1bmN0aW9uICh1c2VySWQsIGRvYykge1xuLy8gXHRcdC8vIGNoYW5nZSBtb2RpZmllZCBkYXRlXG4vLyBcdFx0U3BhY2VzLnVwZGF0ZShkb2Muc3BhY2VJZCwgeyRzZXQ6IHttb2RpZmllZDogRGF0ZS5ub3coKX19KTtcbi8vIFx0XHRkb2MudmVyc2lvbiA9ICAxO1xuLy8gXHRcdC8vZG9jLm1vZGlmaWVkID0gRGF0ZS5ub3coKTtcbi8vIFx0XHQvKlxuLy8gXHRcdHZhciB2ZXJzaW9ubmluZyA9IHt9O1xuLy8gXHRcdF8uZXh0ZW5kKHZlcnNpb25uaW5nLCBkb2MsIHttb2RpZmllZEJ5OiB1c2VySWR9KTtcbi8vIFx0XHRNZXRlb3IuY2FsbCgnYWRkUG9zdFZlcnNpb24nLCB2ZXJzaW9ubmluZyk7XG4vLyBcdFx0Ki9cbi8vIFx0fSk7XG5cblxuLy8gXHQvLyBDb3B5IHBvc3QgaW4gcG9zdFZlcnNpb24gYmVmb3JlIHVwZGF0ZWRcbi8vIFx0Ly8gVE9ETyA6IHJlZmFjdG9yaW5nXG4vLyBcdFBvc3RzLmJlZm9yZS51cGRhdGUoZnVuY3Rpb24gKHVzZXJJZCwgZG9jLCBmaWVsZE5hbWVzLCBtb2RpZmllciwgb3B0aW9ucykge1xuXG5cblxuLy8gXHRcdC8vIHZhciB2ZXJzaW9ubmluZyA9IHt9O1xuLy8gXHRcdC8vIF8uZXh0ZW5kKHZlcnNpb25uaW5nLCBkb2MsIHttb2RpZmllZEJ5OiB1c2VySWR9KTtcbi8vIFx0XHQvLyBNZXRlb3IuY2FsbCgnYWRkUG9zdFZlcnNpb24nLCB2ZXJzaW9ubmluZyk7XG5cbi8vIFx0XHQvLyB2YXIgbmV3SW5jID0gZG9jLnZlcnNpb24rMTtcbi8vIFx0XHQvLyBpZiAoIW1vZGlmaWVyLiRzZXQpIG1vZGlmaWVyLiRzZXQgPSB7fTtcbi8vIFx0XHQvLyBtb2RpZmllci4kc2V0LnZlcnNpb24gPSBuZXdJbmM7XG4vLyBcdFx0Ly8gbW9kaWZpZXIuJHNldC5tb2RpZmllZCA9IERhdGUubm93KCk7XG4vLyBcdH0pO1xuXG5cbi8vIFx0UG9zdHMuYmVmb3JlLnJlbW92ZShmdW5jdGlvbiAodXNlcklkLCBkb2MpIHsgXG5cblxuLy8gXHRcdC8vIHZhciBkZWxldGlvblRpbWUgPSBEYXRlLm5vdygpO1xuXG4vLyBcdFx0Ly8gTWV0ZW9yLmNhbGwoJ3RhZ3NFZGl0Jywge3NwYWNlSWQ6IGRvYy5zcGFjZUlkLCBuZXdUYWdzOiBbXSwgb2xkVGFnczogZG9jLnRhZ3N9LCBmdW5jdGlvbihlcnJvcikgeyAvLyBEZWNyZW1lbnQgdGFncyBuUmVmc1xuLy8gXHRcdC8vIFx0aWYgKGVycm9yKSB7XG4vLyBcdFx0Ly8gXHRcdHRocm93RXJyb3IoZXJyb3IucmVhc29uKTtcbi8vIFx0XHQvLyBcdH1cbi8vICBcdC8vIFx0fSk7XG5cbi8vIFx0XHQvLyB2YXIgZmlsZSA9IEZpbGVzLmZpbmRPbmUoeydtZXRhZGF0YS5wb3N0SWQnOiBkb2MuZmlsZUlkfSk7IC8vIFJlbW92ZSBmaWxlXG4vLyBcdFx0Ly8gaWYgKGZpbGUpe1xuLy8gXHRcdC8vIFx0IC8vIFRPRE8gOiByZW1vdmUgZmlsZSAobm90IG9ubHkgZnJvbSBjb2xsZWN0aW9uKVxuLy8gXHRcdC8vIFx0RmlsZXMucmVtb3ZlKGZpbGUuX2lkKTtcbi8vIFx0XHQvLyB9XG5cbi8vIFx0XHQvLyBEZWxldGUgdGhlIGZpbGUgaWYgZXhpc3RzXG4vLyBcdFx0dmFyIGZpbGVJZCA9IGRvYy5maWxlSWQ7XG4vLyBcdFx0dmFyIGZpbGVFeHQgPSBkb2MuZmlsZUV4dDtcbi8vIFx0XHRpZiAoZmlsZUlkKSB7XG4vLyBcdFx0XHRGaWxlcy5yZW1vdmUoe2ZpbGVJZDpmaWxlSWR9KTtcbi8vIFx0XHRcdE1ldGVvci5jYWxsKCdkZWxldGVGaWxlJyxkb2MpO1xuLy8gXHRcdH1cblxuLy8gXHRcdGlmIChkb2MudHlwZSA9PSAnaG9tZScpIHsgLy8gVXBkYXRlIHBvc3Qgb3JkZXJcbi8vIFx0XHRcdHZhciBwb3N0ID0gZG9jO1xuXG4vLyBcdFx0XHR2YXIgcG9zdHNEb3duID0gUG9zdHMuZmluZCh7c3BhY2VJZDpkb2Muc3BhY2VJZCwgdHlwZTonaG9tZScsIG9yZGVyOnskZ3Q6cG9zdC5vcmRlcn19KS5mZXRjaCgpO1xuXG4vLyBcdFx0XHRmb3IgKHZhciBpPTA7IGk8cG9zdHNEb3duLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0XHRcdGNvbnNvbGUubG9nKFwiaWQgOiBcIitwb3N0c0Rvd25baV0uX2lkKTtcbi8vIFx0XHRcdFx0dmFyIGN1cnJlbnRQb3N0ID0gcG9zdHNEb3duW2ldO1xuLy8gXHRcdFx0XHRQb3N0cy51cGRhdGUoe19pZDpjdXJyZW50UG9zdC5faWR9LHskc2V0OntvcmRlcjpjdXJyZW50UG9zdC5vcmRlci0xfX0pO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cblxuLy8gXHRcdGlmIChkb2MudHlwZSA9PSAnbGl2ZUZlZWQnKSB7XG4vLyBcdFx0XHR2YXIgYXV0aG9yID0gQXV0aG9ycy5maW5kT25lKHtzcGFjZUlkOiBkb2Muc3BhY2VJZCwgbmFtZTogZG9jLmF1dGhvcn0pO1xuLy8gXHRcdFx0QXV0aG9ycy51cGRhdGUoYXV0aG9yLl9pZCwgeyRpbmM6IHtuUmVmczogLTF9fSk7IC8vIERlY3JlbWVudCBhdXRob3IgblJlZnNcblxuLy8gXHRcdFx0aWYgKGRvYy5jYXRlZ29yeSkge1xuLy8gXHRcdFx0XHR2YXIgY2F0ZWdvcnkgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe3NwYWNlSWQ6IGRvYy5zcGFjZUlkLCB0eXBlOlwibGl2ZUZlZWRcIiwgbmFtZTogZG9jLmNhdGVnb3J5fSk7XG4vLyBcdFx0XHRcdGlmIChjYXRlZ29yeSlcbi8vIFx0XHRcdFx0XHRDYXRlZ29yaWVzLnVwZGF0ZShjYXRlZ29yeS5faWQsIHskaW5jOiB7blJlZnM6IC0xfX0pOyAvLyBEZWNyZW1lbnQgY2F0ZWdvcnkgblJlZnNcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG5cbi8vIFx0XHRpZiAoZG9jLnR5cGUgPT0gJ3Jlc291cmNlJykge1xuLy8gXHRcdFx0aWYgKGRvYy5jYXRlZ29yeSkge1xuLy8gXHRcdFx0XHR2YXIgY2F0ZWdvcnkgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe3NwYWNlSWQ6IGRvYy5zcGFjZUlkLCB0eXBlOlwicmVzb3VyY2VcIiwgbmFtZTogZG9jLmNhdGVnb3J5fSk7XG4vLyBcdFx0XHRcdGlmIChjYXRlZ29yeSlcbi8vIFx0XHRcdFx0XHRDYXRlZ29yaWVzLnVwZGF0ZShjYXRlZ29yeS5faWQsIHskaW5jOiB7blJlZnM6IC0xfX0pOyAvLyBEZWNyZW1lbnQgY2F0ZWdvcnkgblJlZnNcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdFx0Ly8gLy8gQWRkIHBvc3QgdG8gcG9zdHMgdmVyc2lvbnNcbi8vIFx0XHQvLyAvLyBUT0RPIDogcmVmYWN0b3Jpbmdcbi8vIFx0XHQvLyB2YXIgc3BhY2UgPSBTcGFjZXMuZmluZE9uZShkb2Muc3BhY2VJZCk7XG4vLyBcdFx0Ly8gLy8gdmFyIG9sZFBvc3RzID0gW107XG4vLyBcdFx0Ly8gLy8gaWYgKHNwYWNlLm9sZFBvc3RzICE9PSB1bmRlZmluZWQpIHtcbi8vIFx0XHQvLyAvLyBcdG9sZFBvc3RzID0gc3BhY2Uub2xkUG9zdHM7XG4vLyBcdFx0Ly8gLy8gfVxuLy8gXHRcdC8vIC8vIG9sZFBvc3RzLnB1c2goZG9jLl9pZCk7XG4vLyBcdFx0Ly8gLy9TcGFjZXMudXBkYXRlKGRvYy5zcGFjZUlkLCB7JHNldDoge29sZFBvc3RzOiBvbGRQb3N0cywgbW9kaWZpZWQ6IERhdGUubm93KCl9fSk7XG4vLyBcdFx0Ly8gU3BhY2VzLnVwZGF0ZShkb2Muc3BhY2VJZCwgeyRzZXQ6IHttb2RpZmllZDogRGF0ZS5ub3coKX19KTtcblxuLy8gXHRcdC8vIGRvYy52ZXJzaW9uID0gIGRvYy52ZXJzaW9uKys7XG4vLyBcdFx0Ly8gZG9jLm1vZGlmaWVkID0gRGF0ZS5ub3coKTtcbi8vIFx0XHQvLyB2YXIgdmVyc2lvbm5pbmcgPSB7fTtcbi8vIFx0XHQvLyBfLmV4dGVuZCh2ZXJzaW9ubmluZywgZG9jLCB7bW9kaWZpZWRCeTogdXNlcklkLCBsYXN0OiB0cnVlfSk7XG4vLyBcdFx0Ly8gTWV0ZW9yLmNhbGwoJ2FkZFBvc3RWZXJzaW9uJywgdmVyc2lvbm5pbmcpO1xuLy8gXHR9KTtcbi8vIH1cblxuaWYoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0Ly8gUG9zdHMuYWZ0ZXIuaW5zZXJ0KGZ1bmN0aW9uICh1c2VySWQsIGRvYykge1xuXHQvLyBcdE5vdGlmaWNhdGlvbnMuaW5zZXJ0KHtzcGFjZUlkOmRvYy5zcGFjZUlkLCBhdXRob3I6ZG9jLmF1dGhvciwgcG9zdElkOiBkb2MuX2lkfSk7XG5cdC8vIH0pO1xuXG5cdFBvc3RzLmFmdGVyLnJlbW92ZShmdW5jdGlvbiAodXNlcklkLCBkb2MpIHsgXG5cdFx0XHRcblx0XHRcdC8vIERlbGV0ZSB0aGUgZmlsZSBpZiBleGlzdHNcblx0XHRcdHZhciBmaWxlSWQgPSBkb2MuZmlsZUlkO1xuXHRcdFx0dmFyIGZpbGVFeHQgPSBkb2MuZmlsZUV4dDtcblx0XHRcdGlmIChmaWxlSWQpIHtcblx0XHRcdFx0RmlsZXMucmVtb3ZlKHtmaWxlSWQ6ZmlsZUlkfSk7XG5cdFx0XHRcdE1ldGVvci5jYWxsKCdkZWxldGVGaWxlJyxkb2MpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEZWNyZWFzZSBhdXRob3IgY291bnRcblx0XHRcdGlmIChkb2MudHlwZSA9PSAnbGl2ZUZlZWQnKSB7XG5cdFx0XHRcdHZhciBhdXRob3IgPSBBdXRob3JzLmZpbmRPbmUoe3NwYWNlSWQ6IGRvYy5zcGFjZUlkLCBuYW1lOiBkb2MuYXV0aG9yfSk7XG5cdFx0XHRcdEF1dGhvcnMudXBkYXRlKGF1dGhvci5faWQsIHskaW5jOiB7blJlZnM6IC0xfX0pOyAvLyBEZWNyZW1lbnQgYXV0aG9yIG5SZWZzXG5cblx0XHRcdFx0Ly8gRGVjcmVhc2UgY2F0ZWdvcnkgY291bnRcblx0XHRcdFx0aWYgKGRvYy5jYXRlZ29yeUlkKSB7XG5cdFx0XHRcdFx0dmFyIGNhdGVnb3J5ID0gQ2F0ZWdvcmllcy5maW5kT25lKHtfaWQ6ZG9jLmNhdGVnb3J5SWR9KTtcblx0XHRcdFx0XHRpZiAoY2F0ZWdvcnkpXG5cdFx0XHRcdFx0XHRDYXRlZ29yaWVzLnVwZGF0ZShjYXRlZ29yeS5faWQsIHskaW5jOiB7blJlZnM6IC0xfX0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBEZWNyZWFzZSBjYXRlZ29yeSBjb3VudFxuXHRcdGlmIChkb2MudHlwZSA9PSAncmVzb3VyY2UnKSB7XG5cdFx0XHRpZiAoZG9jLmNhdGVnb3J5SWQpIHtcblx0XHRcdFx0dmFyIGNhdGVnb3J5ID0gQ2F0ZWdvcmllcy5maW5kT25lKHtfaWQ6ZG9jLmNhdGVnb3J5SWR9KTtcblx0XHRcdFx0aWYgKGNhdGVnb3J5KVxuXHRcdFx0XHRcdENhdGVnb3JpZXMudXBkYXRlKGNhdGVnb3J5Ll9pZCwgeyRpbmM6IHtuUmVmczogLTF9fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRQb3N0cy5hZnRlci5pbnNlcnQoZnVuY3Rpb24gKHVzZXJJZCwgZG9jKSB7IFxuXG5cdFx0dmFyIHNwYWNlID0gU3BhY2VzLmZpbmRPbmUoZG9jLnNwYWNlSWQpO1xuXG5cblxuXHRcdC8vIFNlbmQgYSBub3RpZmljYXRpb24gaWYgYW4gYXV0aG9yIGlzIHRhZ2dlZFxuXHRcdHZhciB0YWdnZWRBdXRob3JzID0gZG9jLmJvZHkubWF0Y2goLzx7e1widmFsdWVcIjpcIiguKj8pXCIsXCJwcmVmaXhcIjpcIkBcIn19Pi9nKTtcblx0XHRpZiAodGFnZ2VkQXV0aG9ycykge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YWdnZWRBdXRob3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciB0YWdnZWRBdXRob3IgPSB0YWdnZWRBdXRob3JzW2ldLnJlcGxhY2UoLzx7e1widmFsdWVcIjpcIiguKylcIixcInByZWZpeFwiOlwiQFwifX0+LywgJyQxJyk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiYXV0aG9yIHRhZ2dlZCA6IFwiK3RhZ2dlZEF1dGhvcik7XG5cdFx0XHRcdE5vdGlmaWNhdGlvbnMuaW5zZXJ0KHtzcGFjZUlkOnNwYWNlLl9pZCwgc2VuZGVyOmRvYy5hdXRob3IsIHJlY2VpdmVyOnRhZ2dlZEF1dGhvciwgdHlwZTondGFnJywgc3VibWl0dGVkOkRhdGUubm93KCksIHBvc3RJZDogZG9jLl9pZH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXG5cdFx0Y29uc29sZS5sb2coXCJzcGFjZSA6IFwiK3NwYWNlLm1haWxQb3N0Tm90aWZpY2F0aW9uKTtcblxuXHRcdGlmIChzcGFjZS5tYWlsUG9zdE5vdGlmaWNhdGlvbiA9PSB0cnVlKSB7XG5cblx0XHRcdGNvbnNvbGUubG9nKFwidXNlcklkIDogXCIrdXNlcklkKTtcblxuXHRcdFx0aWYgKHNwYWNlLnVzZXJJZCAhPSBNZXRlb3IudXNlcklkKCkpIHtcblxuXHRcdFx0dmFyIHNwYWNlT3duZXIgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh7X2lkOnNwYWNlLnVzZXJJZH0pO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcInNwYWNlIElkIDogXCIrc3BhY2VPd25lcik7XG5cblx0XHRcdHZhciBvd25lck1haWwgPSBzcGFjZU93bmVyLmVtYWlsc1swXS5hZGRyZXNzO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIm9uIGVudm9pZSB1biBlLW1haWwgZGUgbm90aWZpY2F0aW9uIMOgIDpcIitvd25lck1haWwpO1xuXHRcdFx0dmFyIG1haWxCb2R5ID0gbnVsbDtcblx0XHRcdGlmIChwb3N0LmZpbGVQYXRoKSB7XG5cdFx0ICAgICAgICBtYWlsQm9keSA9ICc8aDM+JytUQVBpMThuLl9fKFwicG9zdC1zdWJtaXQtLW1haWwtbm90aWZpY2F0aW9uLWJvZHlcIikrJzwvaDM+PGRpdiBzdHlsZT1cInBhZGRpbmc6OHB4OmJvcmRlcjpzb2xpZCAxcHggZ3JleTtcIj48cD48Yj4nK2RvYy5hdXRob3IrJzwvYj48L3A+PHA+Jytkb2MuYm9keSsnPC9wPjxpbWcgc3R5bGU9XCJ3aWR0aDoxNTBweFwiIHNyYz1cImh0dHBzOi8vbGl2ZS5iZWVrZWUuY2gvdXBsb2FkJytkb2MuZmlsZVBhdGgrJ1wiIC8+PC9kaXY+PGEgaHJlZj1cImh0dHBzOi8vbGl2ZS5iZWVrZWUuY2gvcG9zdC8nK2RvYy5faWQrJ1wiPicrVEFQaTE4bi5fXyhcInBvc3Qtc3VibWl0LS1tYWlsLW5vdGlmaWNhdGlvbi1saW5rXCIpKyc8L2E+J1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdCAgICAgICAgbWFpbEJvZHkgPSAnPGgzPicrVEFQaTE4bi5fXyhcInBvc3Qtc3VibWl0LS1tYWlsLW5vdGlmaWNhdGlvbi1ib2R5XCIpKyc8L2gzPjxkaXYgc3R5bGU9XCJwYWRkaW5nOjhweDpib3JkZXI6c29saWQgMXB4IGdyZXk7XCI+PHA+PGI+Jytkb2MuYXV0aG9yKyc8L2I+PC9wPjxwPicrZG9jLmJvZHkrJzwvcD48L2Rpdj48YSBocmVmPVwiaHR0cHM6Ly9saXZlLmJlZWtlZS5jaC9wb3N0LycrZG9jLl9pZCsnXCI+JytUQVBpMThuLl9fKFwicG9zdC1zdWJtaXQtLW1haWwtbm90aWZpY2F0aW9uLWxpbmtcIikrJzwvYT4nXG5cdFx0XHR9XG5cblx0XHRcdE1ldGVvci5kZWZlcihmdW5jdGlvbigpIHsgLy8gQXZvaWQgY2xpZW50IHRvIHdhaXQgZm9yIGNhbGxiYWNrXG5cdFx0XHRcdE1ldGVvci5jYWxsKCdzZW5kRW1haWwnLCAvLyBTZW5kIGFuIGUtbWFpbCB0byB1c2VyXG5cdFx0ICAgICAgICAgICAgb3duZXJNYWlsLFxuXHRcdCAgICAgICAgICAgICd2aW5jZW50LndpZG1lckBiZWVrZWUuY2gnLFxuXHRcdCAgICAgICAgICAgIFRBUGkxOG4uX18oXCJwb3N0LXN1Ym1pdC0tbWFpbC1ub3RpZmljYXRpb24tc3ViamVjdFwiKSxcblx0XHRcdFx0XHRtYWlsQm9keVxuXHRcdCAgICAgICAgKTtcdFxuXHRcdFx0fSk7XG5cdCAgICAgICB9XG5cdCAgICAgfVxuXHR9KTtcblxufVxuXG5cbk1ldGVvci5tZXRob2RzKHtcblxuXHRhZGRMaWtlQ29tbWVudDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFBvc3RzLnVwZGF0ZSh7X2lkOmRhdGEuY3VycmVudFBvc3RJZCxcImNvbW1lbnRzLmlkXCI6ZGF0YS5jdXJyZW50Q29tbWVudElkfSwgeyRwdXNoOiB7XCJjb21tZW50cy4kLmxpa2VzXCI6IGRhdGEuYXV0aG9yfX0pO1xuXHR9LFxuXHRyZW1vdmVMaWtlQ29tbWVudDogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFBvc3RzLnVwZGF0ZSh7X2lkOmRhdGEuY3VycmVudFBvc3RJZCxcImNvbW1lbnRzLmlkXCI6ZGF0YS5jdXJyZW50Q29tbWVudElkfSwgeyRwdWxsOiB7XCJjb21tZW50cy4kLmxpa2VzXCI6IGRhdGEuYXV0aG9yfX0pO1xuXHR9LFxuXHRhZGRSZXNvdXJjZUxpa2VDb21tZW50OiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0UmVzb3VyY2VzLnVwZGF0ZSh7X2lkOmRhdGEuY3VycmVudFBvc3RJZCxcImNvbW1lbnRzLmlkXCI6ZGF0YS5jdXJyZW50Q29tbWVudElkfSwgeyRwdXNoOiB7XCJjb21tZW50cy4kLmxpa2VzXCI6IGRhdGEuYXV0aG9yfX0pO1xuXHR9LFxuXHRyZW1vdmVSZXNvdXJjZUxpa2VDb21tZW50OiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0UmVzb3VyY2VzLnVwZGF0ZSh7X2lkOmRhdGEuY3VycmVudFBvc3RJZCxcImNvbW1lbnRzLmlkXCI6ZGF0YS5jdXJyZW50Q29tbWVudElkfSwgeyRwdWxsOiB7XCJjb21tZW50cy4kLmxpa2VzXCI6IGRhdGEuYXV0aG9yfX0pO1xuXHR9LFxuXHRob21lUG9zdEluc2VydDogZnVuY3Rpb24ocG9zdEF0dHJpYnV0ZXMpIHtcblx0XHRjaGVjayhwb3N0QXR0cmlidXRlcy5zcGFjZUlkLCBTdHJpbmcpO1xuXG5cdFx0Ly9pZiAoTWV0ZW9yLnNldHRpbmdzLnB1YmxpYylcblx0XHRcdC8vdmFyIHBvc3RGcm9tQ2xvdWQgPSAhKE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuaXNCb3ggPT09IFwidHJ1ZVwiKTsgLy8gU2V0IHdoZXJlIHBvc3QgaXMgc3VibWl0dGVkIChib3ggb3IgY2xvdWQpXG5cblx0XHRwb3N0ID0gXy5leHRlbmQocG9zdEF0dHJpYnV0ZXMsIHtcblx0XHRcdHN1Ym1pdHRlZDogRGF0ZS5ub3coKSxcblx0XHRcdG9yZGVyOiBQb3N0cy5maW5kKHtzcGFjZUlkOiBwb3N0QXR0cmlidXRlcy5zcGFjZUlkLCB0eXBlOiBwb3N0QXR0cmlidXRlcy50eXBlfSkuY291bnQoKVxuXG5cdFx0XHQvL25iOiBQb3N0cy5maW5kKHtzcGFjZUlkOiBwb3N0QXR0cmlidXRlcy5zcGFjZUlkfSkuY291bnQoKSArIDEsXG5cdFx0XHQvL3Bpbm5lZCA6IGZhbHNlLFxuXHRcdH0pO1xuXG5cdFx0dmFyIHNwYWNlID0gU3BhY2VzLmZpbmRPbmUocG9zdEF0dHJpYnV0ZXMuc3BhY2VJZCk7XG5cdFx0cG9zdC5faWQgPSBQb3N0cy5pbnNlcnQocG9zdCk7XHRcdFxuXHRcdHJldHVybiBwb3N0Ll9pZDtcblx0fSxcblx0cG9zdEluc2VydDogZnVuY3Rpb24ocG9zdEF0dHJpYnV0ZXMpIHtcblx0XHRjaGVjayhwb3N0QXR0cmlidXRlcy5zcGFjZUlkLCBTdHJpbmcpO1xuXG5cdFx0Ly9pZiAoTWV0ZW9yLnNldHRpbmdzLnB1YmxpYylcblx0XHRcdC8vdmFyIHBvc3RGcm9tQ2xvdWQgPSAhKE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuaXNCb3ggPT09IFwidHJ1ZVwiKTsgLy8gU2V0IHdoZXJlIHBvc3QgaXMgc3VibWl0dGVkIChib3ggb3IgY2xvdWQpXG5cblx0XHRpdGVtID0gQXV0aG9ycy5maW5kT25lKHtzcGFjZUlkOiBwb3N0QXR0cmlidXRlcy5zcGFjZUlkLCBuYW1lOiBwb3N0QXR0cmlidXRlcy5hdXRob3J9KTtcblx0XHRBdXRob3JzLnVwZGF0ZShpdGVtLCB7JGluYzoge25SZWZzOiAxfX0pO1xuXHRcdHBvc3QgPSBfLmV4dGVuZChwb3N0QXR0cmlidXRlcywge1xuXHRcdFx0YXV0aG9ySWQ6IEF1dGhvcnMuZmluZE9uZSh7c3BhY2VJZDogcG9zdEF0dHJpYnV0ZXMuc3BhY2VJZCwgbmFtZTogcG9zdEF0dHJpYnV0ZXMuYXV0aG9yfSkuX2lkLFxuXHRcdFx0c3VibWl0dGVkOiBEYXRlLm5vdygpLFxuXHRcdFx0bmI6IFBvc3RzLmZpbmQoe3NwYWNlSWQ6IHBvc3RBdHRyaWJ1dGVzLnNwYWNlSWR9KS5jb3VudCgpICsgMSxcblx0XHRcdG9yZGVyOiBQb3N0cy5maW5kKHtzcGFjZUlkOiBwb3N0QXR0cmlidXRlcy5zcGFjZUlkLCB0eXBlOiBwb3N0QXR0cmlidXRlcy50eXBlfSkuY291bnQoKSxcblx0XHRcdGxpa2VzOltdLFxuXHRcdFx0bmJMaWtlczowXG5cdFx0XHQvLyBwb3N0RnJvbUNsb3VkOiBwb3N0RnJvbUNsb3VkIC8vIFdvcmthcm91bmQgYnVnIHN5bmNcblx0XHR9KTtcblxuXHRcdC8vIEdldCBjbGllbnQgSVAgYWRkcmVzc1xuXHRcdGlmIChNZXRlb3IuaXNTZXJ2ZXIpXG5cdFx0XHRwb3N0ID0gXy5leHRlbmQocG9zdEF0dHJpYnV0ZXMsIHtjbGllbnRJUDogdGhpcy5jb25uZWN0aW9uLmNsaWVudEFkZHJlc3N9KTtcblxuXHRcdHZhciBzcGFjZSA9IFNwYWNlcy5maW5kT25lKHBvc3RBdHRyaWJ1dGVzLnNwYWNlSWQpO1xuXG5cdFx0Y2F0ZWdvcnkgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe3NwYWNlSWQ6IHBvc3RBdHRyaWJ1dGVzLnNwYWNlSWQsIF9pZDogcG9zdEF0dHJpYnV0ZXMuY2F0ZWdvcnlJZH0pOyAvLyBJbmNyZW1lbnQgY2F0ZWdvcnkgblJlZnNcblx0XHRDYXRlZ29yaWVzLnVwZGF0ZShjYXRlZ29yeSwgeyRpbmM6IHtuUmVmczogMX19KTtcblxuXHRcdHBvc3QuX2lkID0gUG9zdHMuaW5zZXJ0KHBvc3QpO1x0XG5cblx0XHRyZXR1cm4gcG9zdC5faWQ7XG5cdH1cbn0pOyIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbi8vIGltcG9ydCB7IEF1dGhvcnMgfSBmcm9tICcuL2F1dGhvcnMuanMnO1xuLy8gaW1wb3J0IHsgU3BhY2VzIH0gZnJvbSAnLi9zcGFjZXMuanMnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllcyB9IGZyb20gJy4vY2F0ZWdvcmllcy5qcyc7XG4vLyBpbXBvcnQgeyBGaWxlcyB9IGZyb20gJy4vZmlsZXMuanMnO1xuLy9pbXBvcnQgeyBOb3RpZmljYXRpb25zIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLmpzJztcblxuZXhwb3J0IGNvbnN0IFJlc291cmNlcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdyZXNvdXJjZXMnKTtcblxuXG5SZXNvdXJjZXMuYWxsb3coe1xuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlO30sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZTt9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWU7fVxufSk7XG5cblxuaWYoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ3Jlc291cmNlJywgZnVuY3Rpb24ocmVzb3VyY2VJZCkge1xuXHRcdGNoZWNrKHJlc291cmNlSWQsIFN0cmluZyk7XG5cdFx0cmV0dXJuIFJlc291cmNlcy5maW5kKHtfaWQ6IHJlc291cmNlSWR9KTtcblx0fSk7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ3Jlc291cmNlcycsIGZ1bmN0aW9uKGZpbHRlcnMpIHtcblx0XHQvL3JldHVybiBSZXNvdXJjZXMuZmluZCh7c3BhY2VJZDogc3BhY2VJZH0se3NvcnQ6IHtzdWJtaXR0ZWQ6IDF9fSk7XG5cdFx0Ly9jb25zb2xlLmxvZyhcImZpbHRlcnMgOiBcIitmaWx0ZXJzLmNhdGVnb3J5SWQpO1xuXHRcdHJldHVybiBSZXNvdXJjZXMuZmluZChmaWx0ZXJzLCB7c29ydDoge3N1Ym1pdHRlZDoxfX0pO1xuXHR9KTtcblxuXHRcdE1ldGVvci5wdWJsaXNoKCdhbGxSZXNvdXJjZXMnLCBmdW5jdGlvbihmaWx0ZXJzKSB7XG5cdFx0Ly9yZXR1cm4gUmVzb3VyY2VzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWR9LHtzb3J0OiB7c3VibWl0dGVkOiAxfX0pO1xuXHRcdC8vY29uc29sZS5sb2coXCJmaWx0ZXJzIDogXCIrZmlsdGVycy5jYXRlZ29yeUlkKTtcblx0XHRyZXR1cm4gUmVzb3VyY2VzLmZpbmQoZmlsdGVycywge3NvcnQ6IHtzdWJtaXR0ZWQ6MX19KTtcblx0fSk7XG5cblxuXHRSZXNvdXJjZXMuYWZ0ZXIucmVtb3ZlKGZ1bmN0aW9uICh1c2VySWQsIGRvYykgeyBcblx0XHRpZiAoZG9jLmNhdGVnb3J5SWQpIHtcblx0XHRcdHZhciBjYXRlZ29yeSA9IENhdGVnb3JpZXMuZmluZE9uZSh7X2lkOmRvYy5jYXRlZ29yeUlkfSk7XG5cdFx0XHRpZiAoY2F0ZWdvcnkpXG5cdFx0XHRcdENhdGVnb3JpZXMudXBkYXRlKGNhdGVnb3J5Ll9pZCwgeyRpbmM6IHtuUmVmczogLTF9fSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5NZXRlb3IubWV0aG9kcyh7XG5cblx0cmVzb3VyY2VJbnNlcnQ6IGZ1bmN0aW9uKHJlc291cmNlQXR0cmlidXRlcykge1xuXHRcdGNoZWNrKHJlc291cmNlQXR0cmlidXRlcy5zcGFjZUlkLCBTdHJpbmcpO1xuXG5cdFx0Ly9pZiAoTWV0ZW9yLnNldHRpbmdzLnB1YmxpYylcblx0XHRcdC8vdmFyIHBvc3RGcm9tQ2xvdWQgPSAhKE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuaXNCb3ggPT09IFwidHJ1ZVwiKTsgLy8gU2V0IHdoZXJlIHBvc3QgaXMgc3VibWl0dGVkIChib3ggb3IgY2xvdWQpXG5cblx0XHRyZXNvdXJjZSA9IF8uZXh0ZW5kKHJlc291cmNlQXR0cmlidXRlcywge1xuXHRcdFx0c3VibWl0dGVkOiBEYXRlLm5vdygpLFxuXHRcdFx0b3JkZXI6IFJlc291cmNlcy5maW5kKHtzcGFjZUlkOiByZXNvdXJjZUF0dHJpYnV0ZXMuc3BhY2VJZCwgY2F0ZWdvcnlJZDogcmVzb3VyY2VBdHRyaWJ1dGVzLmNhdGVnb3J5SWR9KS5jb3VudCgpLFxuXHRcdH0pO1xuXG5cdFx0Y2F0ZWdvcnkgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe3NwYWNlSWQ6IHJlc291cmNlQXR0cmlidXRlcy5zcGFjZUlkLCBfaWQ6IHJlc291cmNlQXR0cmlidXRlcy5jYXRlZ29yeUlkfSk7IC8vIEluY3JlbWVudCBjYXRlZ29yeSBuUmVmc1xuXHRcdENhdGVnb3JpZXMudXBkYXRlKGNhdGVnb3J5LCB7JGluYzoge25SZWZzOiAxfX0pO1xuXG5cdFx0dmFyIHNwYWNlID0gUmVzb3VyY2VzLmZpbmRPbmUocmVzb3VyY2VBdHRyaWJ1dGVzLnNwYWNlSWQpO1xuXHRcdHJlc291cmNlLl9pZCA9IFJlc291cmNlcy5pbnNlcnQocmVzb3VyY2UpO1xuXG5cdFx0cmV0dXJuIHJlc291cmNlLl9pZDtcblx0fVxufSk7IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5pbXBvcnQgeyBBdXRob3JzIH0gZnJvbSAnLi9hdXRob3JzLmpzJztcbmltcG9ydCB7IENvZGVzIH0gZnJvbSAnLi9jb2Rlcy5qcyc7XG5pbXBvcnQgeyBQb3N0cyB9IGZyb20gJy4vcG9zdHMuanMnO1xuaW1wb3J0IHsgQ2F0ZWdvcmllcyB9IGZyb20gJy4vY2F0ZWdvcmllcy5qcyc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcy5qcyc7XG5cblxuXG5cblxuXG5leHBvcnQgY29uc3QgU3BhY2VzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3NwYWNlcycpO1xuXG5cblNwYWNlcy5hbGxvdyh7XG5cblx0Ly91cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXHQvL3JlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0aW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG5cbmlmKE1ldGVvci5pc1NlcnZlcikge1xuXG5cblx0TWV0ZW9yLnB1Ymxpc2goJ3NwYWNlJywgZnVuY3Rpb24oc3BhY2VJZCkge1xuXHRcdGNoZWNrKHNwYWNlSWQsIFN0cmluZyk7XG5cdFx0cmV0dXJuIFNwYWNlcy5maW5kKHtfaWQ6IHNwYWNlSWR9KTtcdFxuXHR9KTtcblxuXHRNZXRlb3IucHVibGlzaCgnYWxsU3BhY2VzJywgZnVuY3Rpb24oKSB7XG5cdHJldHVybiBTcGFjZXMuZmluZCh7fSk7XG5cdH0pO1xuXG5cdE1ldGVvci5wdWJsaXNoKCdhbGxVc2VycycsIGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gTWV0ZW9yLnVzZXJzLmZpbmQoKTtcbiBcdH0pO1xuXG5cdE1ldGVvci5wdWJsaXNoKCdwdWJsaWNTcGFjZXMnLCBmdW5jdGlvbih1c2VySWQpIHtcblx0cmV0dXJuIFNwYWNlcy5maW5kKHtcInBlcm1pc3Npb25zLnB1YmxpY1wiOnRydWV9KTtcblx0fSk7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ293blNwYWNlcycsIGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdC8vcmV0dXJuIFNwYWNlcy5maW5kKHt1c2VySWQ6dXNlcklkfSk7XG5cdFx0cmV0dXJuIFNwYWNlcy5maW5kKHskb3I6IFt7dXNlcklkOiBNZXRlb3IudXNlcklkKCl9LHtvd25lcnNJZDp7JGluOiBbTWV0ZW9yLnVzZXJJZCgpXX19XX0pO1xuXG5cdH0pO1xuXG5cdE1ldGVvci5wdWJsaXNoKCdzcGFjZXNWaXNpdGVkJywgZnVuY3Rpb24oc3BhY2VzSWQpIHtcblx0XHRyZXR1cm4gU3BhY2VzLmZpbmQoeyBcIl9pZFwiOiB7IFwiJGluXCI6IHNwYWNlc0lkIH0gfSk7XG5cdH0pO1xuXHQvLyBTcGFjZXMuYmVmb3JlLnVwZGF0ZShmdW5jdGlvbiAodXNlcklkLCBkb2MsIGZpZWxkTmFtZXMsIG1vZGlmaWVyLCBvcHRpb25zKSB7XG5cblx0Ly8gXHRtb2RpZmllci4kc2V0ID0gbW9kaWZpZXIuJHNldCB8fCB7fTtcblx0Ly8gXHRtb2RpZmllci4kc2V0Lm1vZGlmaWVkID0gRGF0ZS5ub3coKTtcblxuXHQvLyBcdC8vIGNoYW5nZSBtb2RpZmllZCBkYXRlXG5cdC8vIFx0ZG9jLnZlcnNpb24gPSAgZG9jLnZlcnNpb24rKztcblx0Ly8gXHRkb2MubW9kaWZpZWQgPSBEYXRlLm5vdygpO1xuXHQvLyB9KTtcblxuXHQvLyBTcGFjZXMuYmVmb3JlLmluc2VydChmdW5jdGlvbiAodXNlcklkLCBkb2MpIHtcblx0Ly8gXHQvLyBjaGFuZ2UgbW9kaWZpZWQgZGF0ZVxuXHQvLyBcdGRvYy5zdWJtaXR0ZWQgPSAgRGF0ZS5ub3coKTtcblx0Ly8gfSk7XG5cbmlmKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdC8vIFJlbW92ZSBldmVyeSBwb3N0cyB3aGVuIGEgc3BhY2UgaXMgZGVsZXRlZFxuXHRTcGFjZXMuYmVmb3JlLnJlbW92ZShmdW5jdGlvbiAodXNlcklkLCBkb2MpIHtcblxuXHRcdHZhciBzcGFjZUlkID0gZG9jLl9pZDtcblx0XHRQb3N0cy5yZW1vdmUoe3NwYWNlSWQ6c3BhY2VJZH0pO1xuXHR9KTtcblxuXG5cblx0TWV0ZW9yLm1ldGhvZHMoe1xuXG5cdFx0Z2V0U3BhY2VJZDogZnVuY3Rpb24oc3BhY2VDb2RlKSB7XG5cdFx0XHRpZiAoU3BhY2VzLmZpbmRPbmUoe3NwYWNlQ29kZTpzcGFjZUNvZGV9KSlcblx0XHRcdFx0cmV0dXJuIFNwYWNlcy5maW5kT25lKHtzcGFjZUNvZGU6c3BhY2VDb2RlfSkuX2lkO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHRcdHVwZGF0ZUNvZGU6IGZ1bmN0aW9uKG9sZENvZGUsIG5ld0NvZGUpIHtcblx0XHRcdHZhciBjb2RlSWQgPSBDb2Rlcy5maW5kT25lKHtjb2RlOiBvbGRDb2RlfSkuX2lkO1xuXHRcdFx0Q29kZXMudXBkYXRlKGNvZGVJZCx7Y29kZTpuZXdDb2RlfSwgZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGNoYW5naW5nIGNvZGUgOiBcIitlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkNvZGUgaGFzIGJlZW4gY2hhbmdlZC5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHRjaGFuZ2VPd25lcjogZnVuY3Rpb24oc3BhY2VJZCwgbmV3VXNlcklkKSB7XG5cdFx0XHRTcGFjZXMudXBkYXRlKHNwYWNlSWQseyRzZXQ6e3VzZXJJZDpuZXdVc2VySWR9fSwgZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGNoYW5naW5nIG93bmVyIDogXCIrZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJPd25lciBoYXMgYmVlbiBjaGFuZ2VkLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGFkZE93bmVyOiBmdW5jdGlvbihuZXdVc2VyTWFpbCwgc3BhY2VJZCkge1xuXHRcdFx0dmFyIG5ld1VzZXIgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh7IFwiZW1haWxzLmFkZHJlc3NcIiA6IG5ld1VzZXJNYWlsIH0pO1xuXHRcdFx0aWYgKG5ld1VzZXIpIHtcblx0XHRcdFx0dmFyIG5ld1VzZXJJZCA9IG5ld1VzZXIuX2lkO1xuXHRcdFx0XHRpZiAobmV3VXNlcklkKSB7XG5cdFx0XHRcdFx0U3BhY2VzLnVwZGF0ZShzcGFjZUlkLHskYWRkVG9TZXQ6e293bmVyc0lkOm5ld1VzZXJJZH19LCBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBhZGRpbmcgbmV3IG93bmVyIDogXCIrZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJPd25lciBoYXMgYmVlbiBhZGRlZC5cIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlbGV0ZVNwYWNlOiBmdW5jdGlvbihzcGFjZUlkKSB7XG5cdFx0XHRTcGFjZXMucmVtb3ZlKHNwYWNlSWQpO1xuXHRcdFx0Ly9Qb3N0cy5yZW1vdmUoe3NwYWNlSWQ6c3BhY2VJZH0se211bHRpOnRydWV9KTtcblx0XHR9LFxuXHRcdGRlbGV0ZVNwYWNlczogZnVuY3Rpb24odXNlcklkKSB7XG5cblx0XHRcdFNwYWNlcy5yZW1vdmUoe3VzZXJJZDp1c2VySWR9KTtcblxuXHRcdH0sXG5cdFx0ZHVwbGljYXRlU3BhY2U6IGZ1bmN0aW9uKG9yaWdpblNwYWNlSWQsIGR1cGxpY2FOYW1lLCBsYW5nKSB7XG5cblxuXG5cdFx0Ly8gdmFyIG5ld1NwYWNlID0ge1xuXHRcdC8vIFx0dGl0bGU6IGR1cGxpY2FOYW1lLFxuXHRcdC8vIFx0bGFuZzogbGFuZyxcblx0XHQvLyBcdGxlc3NvbnM6IHRydWVcblx0XHQvLyB9O1xuXG5cdFx0XHR2YXIgcHJlZml4ID0gTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5wcmVmaXg7XG5cdFx0XHR2YXIgY29kZUxlbmd0aCA9IDQ7XG5cblx0XHRcdC8vIGlmIChuYk9mQ29kZXMgPD0gMTAwMClcblx0XHRcdC8vIFx0Y29kZUxlbmd0aCA9IDI7XG5cdFx0XHQvLyBlbHNlIGlmIChuYk9mQ29kZXMgPiAxMDAwICYmIG5iT2ZDb2RlcyA8PSAxMDAwMDApXG5cdFx0XHQvLyBcdGNvZGVMZW5ndGggPSAzO1xuXHRcdFx0Ly8gZWxzZSBpZiAobmJPZkNvZGVzID4gMTAwMDAwICYmIG5iT2ZDb2RlcyA8PSAxMDAwMDAwMClcblx0XHRcdC8vIFx0Y29kZUxlbmd0aCA9IDQ7XG5cblx0XHRcdHZhciBjb2RlID0gcHJlZml4ICsgbWFrZUNvZGUoY29kZUxlbmd0aCk7XG5cdFx0XHR3aGlsZSAodHlwZW9mIENvZGVzLmZpbmRPbmUoe2NvZGU6IGNvZGV9KSAhPSAndW5kZWZpbmVkJylcblx0XHRcdFx0Y29kZSA9IHByZWZpeCArIG1ha2VDb2RlKGNvZGVMZW5ndGgpO1xuXG5cdFx0XHRjb2xvcnMgPSBbXCJjb2xvci0xXCIsIFwiY29sb3ItMlwiLCBcImNvbG9yLTNcIiwgXCJjb2xvci00XCIsIFwiY29sb3ItNVwiLCBcImNvbG9yLTZcIiwgXCJjb2xvci03XCIsIFwiY29sb3ItOFwiXTtcblx0XHRcdC8vY29sb3JzID0gW1wiY2RmZTk2XCIsXCJhZmNjZjhcIixcImU1YzlhYVwiLFwiZmFiYjJkXCIsXCJmZmYzN2VcIixcImZjZDBlOFwiLFwiZDdiMGY5XCJdXG5cdFx0XHR2YXIgY29sb3JQaWNrZWQgPSBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuXG5cdFx0XHRDb2Rlcy5pbnNlcnQoe2NvZGU6Y29kZSwgdXNlcklkOk1ldGVvci51c2VySWQoKX0pO1xuXG5cdFx0XHR2YXIgdXNlcklkID0gTWV0ZW9yLnVzZXJJZCgpO1xuXG5cdFx0XHR2YXIgc3BhY2VUb0NvcHkgPSBTcGFjZXMuZmluZE9uZShvcmlnaW5TcGFjZUlkKTtcblxuXHRcdFx0dmFyIHNwYWNlID0ge1xuXHRcdFx0XHR0aXRsZTogZHVwbGljYU5hbWUsXG5cdFx0XHRcdGxhbmc6IGxhbmcsXG5cdFx0XHRcdHVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRvd25lcnNJZDogb3duZXJzSWQsXG5cdFx0XHRcdHNwYWNlQ29kZTogY29kZSxcblx0XHRcdFx0c3VibWl0dGVkOiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHR2aXNpYmxlOiBzcGFjZVRvQ29weS52aXNpYmxlLFxuXHRcdFx0XHRjb2RlUGFuZWw6IHNwYWNlVG9Db3B5LmNvZGVQYW5lbCxcblx0XHRcdFx0Y3JlYXRlVXNlckFsbG93ZWQ6IHNwYWNlVG9Db3B5LmNyZWF0ZVVzZXJBbGxvd2VkLFxuXHRcdFx0XHRpbnN0cnVjdGlvbjpzcGFjZVRvQ29weS5pbnN0cnVjdGlvbixcblx0XHRcdFx0bGl2ZUZlZWQ6c3BhY2VUb0NvcHkubGl2ZUZlZWQsXG5cdFx0XHRcdGxlc3NvbnM6c3BhY2VUb0NvcHkubGVzc29ucyxcblx0XHRcdFx0cmVzb3VyY2VzOnNwYWNlVG9Db3B5LnJlc291cmNlcyxcblx0XHRcdFx0Y29sb3I6Y29sb3JQaWNrZWQsXG5cdFx0XHRcdGxpdmVGZWVkQ29tbWVudHM6c3BhY2VUb0NvcHkubGl2ZUZlZWRDb21tZW50cyxcblx0XHRcdFx0bWFpbFBvc3ROb3RpZmljYXRpb246IHNwYWNlVG9Db3B5Lm1haWxQb3N0Tm90aWZpY2F0aW9uLFxuXHRcdFx0XHRtYWlsQ29tbWVudE5vdGlmaWNhdGlvbjpzcGFjZVRvQ29weS5tYWlsQ29tbWVudE5vdGlmaWNhdGlvbixcblx0XHRcdFx0cGVybWlzc2lvbnM6e3B1YmxpYzpzcGFjZVRvQ29weS5wZXJtaXNzaW9ucy5wdWJsaWMsIGF1dGhvckxpc3Q6c3BhY2VUb0NvcHkucGVybWlzc2lvbnMuYXV0aG9yTGlzdCwgbGl2ZUZlZWRBZGRQb3N0OnNwYWNlVG9Db3B5LnBlcm1pc3Npb25zLmxpdmVGZWVkQWRkUG9zdCwgbGl2ZUZlZWRBZGRQb3N0SG9tZTpzcGFjZVRvQ29weS5wZXJtaXNzaW9ucy5saXZlRmVlZEFkZFBvc3RIb21lLCBsaXZlRmVlZEFkZENhdGVnb3J5OnNwYWNlVG9Db3B5LnBlcm1pc3Npb25zLmxpdmVGZWVkQWRkQ2F0ZWdvcnksIGxpdmVGZWVkQ2hhbmdlTmFtZTogc3BhY2VUb0NvcHkucGVybWlzc2lvbnMubGl2ZUZlZWRDaGFuZ2VOYW1lLCBhZGRSZXNvdXJjZXNBbGxvd2VkIDpzcGFjZVRvQ29weS5wZXJtaXNzaW9ucy5hZGRSZXNvdXJjZXNBbGxvd2VkLCBwYXNzd29yZE5lZWRlZDogc3BhY2VUb0NvcHkucGVybWlzc2lvbnMucGFzc3dvcmROZWVkZWQsIGF2YXRhckVuYWJsZWQ6c3BhY2VUb0NvcHkucGVybWlzc2lvbnMuYXZhdGFyRW5hYmxlZH1cdFx0XHRcdFxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc3BhY2VJZCA9IFNwYWNlcy5pbnNlcnQoc3BhY2UpO1xuXG5cdFx0XHQvLyBDcmVhdGluZyBkaXJlY3Rvcmllc1xuXHRcdFx0dmFyIGZzID0gTnBtLnJlcXVpcmUoJ2ZzJyk7XG5cdFx0XHR2YXIgdXBsb2FkRGlyID0gTWV0ZW9yLnNldHRpbmdzLnVwbG9hZERpcjtcblx0XHRcdHZhciBzcGFjZURpciA9IHVwbG9hZERpcitcIi9cIitzcGFjZUlkXG5cblx0XHRcdC8vIENyZWF0aW5nIHNwYWNlIGRpcmVjdG9yeVxuXHRcdFx0aWYgKCFmcy5leGlzdHNTeW5jKHNwYWNlRGlyKSl7XG4gICAgXHRcdFx0ZnMubWtkaXJTeW5jKHNwYWNlRGlyKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ3JlYXRpbmcgcmVzb3VyY2UgZGlyZWN0b3J5XG5cdFx0XHRpZiAoIWZzLmV4aXN0c1N5bmMoc3BhY2VEaXIrXCIvcmVzb3VyY2VcIikpe1xuICAgIFx0XHRcdGZzLm1rZGlyU3luYyhzcGFjZURpcitcIi9yZXNvdXJjZVwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly9zcGFjZSA9IF8uZXh0ZW5kKHt9LCBzcGFjZSwgc3BhY2VBdHRyaWJ1dGVzKVxuXG5cdFx0XHQvLyBEdXBsaWNhdGUgY2F0ZWdvcmllc1xuXHRcdCAgICAgIENhdGVnb3JpZXMuZmluZCh7c3BhY2VJZDpvcmlnaW5TcGFjZUlkfSkuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcblx0XHQgICAgICBcdFx0Q2F0ZWdvcmllcy5pbnNlcnQoe3NwYWNlSWQ6IHNwYWNlSWQsIHR5cGU6aXRlbS50eXBlLCBuYW1lOiBpdGVtLm5hbWUsIGNvbG9yOiBpdGVtLmNvbG9yLCBzdWJjYXRlZ29yeUlkOiBpdGVtLnN1YmNhdGVnb3J5SWQsIGluc3RydWN0aW9uOiBpdGVtLmluc3RydWN0aW9uLCBvcmRlcjogaXRlbS5vcmRlciwgblJlZnM6IDB9KTtcblx0XHQgICAgICB9KTtcblxuXHRcdCAgICAvLyBEdXBsaWNhdGUgcmVzc291cmNlc1xuXG5cblx0XHQvLyBNZXRlb3IuY2FsbCgnZHVwbGljYXRlUmVzb3VyY2VzRm9sZGVyJywgb3JpZ2luYWxTcGFjZUlkLCBuZXdTcGFjZUlkLCBmdW5jdGlvbihlcnJvciwgcmVzdWx0KSB7XG5cdFx0Ly8gXHRpZihlcnJvcilcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coVEFQaTE4bi5fXygnZXJyb3ItbWVzc2FnZScpK2Vycm9yLm1lc3NhZ2UpOyBcblx0XHQvLyBcdGVsc2Uge1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcInJlc3VsdCA6IFwiK3Jlc3VsdCk7XG5cdFx0Ly8gXHR9ICAgICBcblx0XHQvLyB9KTtcblx0XHRcdFx0ICAgICAgUmVzb3VyY2VzLmZpbmQoe3NwYWNlSWQ6b3JpZ2luU3BhY2VJZH0pLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG5cblx0XHRcdFx0ICAgICAgXHRpZiAoaXRlbS5maWxlSWQpIHtcblxuXHRcdFx0XHQgICAgICBcdFx0dmFyIG5ld0ZpbGVQYXRoID0gdXBsb2FkRGlyK1wiL1wiK3NwYWNlSWQrXCIvcmVzb3VyY2UvXCIraXRlbS5maWxlTmFtZStcIi5cIitpdGVtLmZpbGVFeHQ7XG5cdFx0XHRcdCAgICAgIFx0XHRpZiAoZnMuZXhpc3RzU3luYyh1cGxvYWREaXIrXCIvXCIrb3JpZ2luU3BhY2VJZCtcIi9yZXNvdXJjZS9cIitpdGVtLmZpbGVOYW1lK1wiLlwiK2l0ZW0uZmlsZUV4dCkpe1xuXHRcdFx0XHRcdCAgICAgIFx0XHRmcy5jb3B5RmlsZSh1cGxvYWREaXIrXCIvXCIrb3JpZ2luU3BhY2VJZCtcIi9yZXNvdXJjZS9cIitpdGVtLmZpbGVOYW1lK1wiLlwiK2l0ZW0uZmlsZUV4dCwgbmV3RmlsZVBhdGgsIChlcnIpID0+IHtcblx0ICBcdFx0XHRcdFx0XHRcdFx0aWYgKGVycikgdGhyb3cgZXJyO1xuXHQgIFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgL3RtcC9oZWxsbycpO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHQgICAgICBcdFx0fVxuXHRcdFx0XHQgICAgICBcdH1cblxuXHRcdCAgICAgIFx0aWYgKGl0ZW0uY2F0ZWdvcnlJZClcblx0XHQgICAgICBcdFx0dmFyIG5ld0NhdGVnb3J5SWQgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe3NwYWNlSWQ6c3BhY2VJZCwgbmFtZTpDYXRlZ29yaWVzLmZpbmRPbmUoaXRlbS5jYXRlZ29yeUlkKS5uYW1lfSkuX2lkO1xuXHRcdCAgICAgIFx0UmVzb3VyY2VzLmluc2VydCh7c3BhY2VJZDogc3BhY2VJZCwgdHlwZTppdGVtLnR5cGUsIGF1dGhvcjogaXRlbS5hdXRob3IsIGJvZHk6IGl0ZW0uYm9keSwgdXJsOiBpdGVtLnVybCwgZmlsZVBhdGg6IFwiL1wiK3NwYWNlSWQrXCIvcmVzb3VyY2UvXCIraXRlbS5maWxlTmFtZStcIi5cIitpdGVtLmZpbGVFeHQsIGZpbGVOYW1lOiBpdGVtLmZpbGVOYW1lLCBmaWxlRXh0OiBpdGVtLmZpbGVFeHQsIHRpdGxlOiBpdGVtLnRpdGxlLCB5b3V0dWJlaWQ6IGl0ZW0ueW91dHViZWlkLCB2aW1lb2lkOiBpdGVtLnZpbWVvaWQsIGZpbGVJZDogaXRlbS5maWxlSWQsIGNhdGVnb3J5SWQ6IG5ld0NhdGVnb3J5SWQsIHN1Ym1pdHRlZDogaXRlbS5zdWJtaXR0ZWQsIG9yZGVyOml0ZW0ub3JkZXJ9KTtcblx0XHQgICAgICB9KTtcblxuXHRcdFx0cmV0dXJuIHsgX2lkOiBzcGFjZUlkIH07XG5cblxuXG5cdFx0Ly8gTWV0ZW9yLmNhbGwoJ3NwYWNlSW5zZXJ0JywgbmV3U3BhY2UsIGZ1bmN0aW9uKGVycm9yLCByZXN1bHQpIHtcblx0XHQvLyBcdGlmKGVycm9yKVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhUQVBpMThuLl9fKCdlcnJvci1tZXNzYWdlJykrZXJyb3IubWVzc2FnZSk7IFxuXHRcdC8vIFx0ZWxzZSB7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwicmVzdWx0IDogXCIrcmVzdWx0KTtcblx0XHQvLyBcdH0gICAgIFxuXHRcdC8vIH0pO1xuXG5cblx0XHR9LFxuXHRcdHNwYWNlSW5zZXJ0OiBmdW5jdGlvbihzcGFjZUF0dHJpYnV0ZXMpIHtcblxuXHRcdFx0Y2hlY2soc3BhY2VBdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdFx0dGl0bGU6IFN0cmluZyxcblx0XHRcdFx0XHRsYW5nOiBTdHJpbmdcblx0XHRcdH0pO1xuXG5cdFx0XHQvL3ZhciBuYk9mQ29kZXMgPSBDb2Rlcy5maW5kKCkuY291bnQoKTtcblx0XHRcdHZhciBwcmVmaXggPSBNZXRlb3Iuc2V0dGluZ3MucHVibGljLnByZWZpeDtcblx0XHRcdHZhciBjb2RlTGVuZ3RoID0gNDtcblxuXHRcdFx0Ly8gaWYgKG5iT2ZDb2RlcyA8PSAxMDAwKVxuXHRcdFx0Ly8gXHRjb2RlTGVuZ3RoID0gMjtcblx0XHRcdC8vIGVsc2UgaWYgKG5iT2ZDb2RlcyA+IDEwMDAgJiYgbmJPZkNvZGVzIDw9IDEwMDAwMClcblx0XHRcdC8vIFx0Y29kZUxlbmd0aCA9IDM7XG5cdFx0XHQvLyBlbHNlIGlmIChuYk9mQ29kZXMgPiAxMDAwMDAgJiYgbmJPZkNvZGVzIDw9IDEwMDAwMDAwKVxuXHRcdFx0Ly8gXHRjb2RlTGVuZ3RoID0gNDtcblxuXHRcdFx0dmFyIGNvZGUgPSBwcmVmaXggKyBtYWtlQ29kZShjb2RlTGVuZ3RoKTtcblx0XHRcdHdoaWxlICh0eXBlb2YgQ29kZXMuZmluZE9uZSh7Y29kZTogY29kZX0pICE9ICd1bmRlZmluZWQnKVxuXHRcdFx0XHRjb2RlID0gcHJlZml4ICsgbWFrZUNvZGUoY29kZUxlbmd0aCk7XG5cblx0XHRcdGNvbG9ycyA9IFtcImNvbG9yLTFcIiwgXCJjb2xvci0yXCIsIFwiY29sb3ItM1wiLCBcImNvbG9yLTRcIiwgXCJjb2xvci01XCIsIFwiY29sb3ItNlwiLCBcImNvbG9yLTdcIiwgXCJjb2xvci04XCJdO1xuXHRcdFx0Ly9jb2xvcnMgPSBbXCJjZGZlOTZcIixcImFmY2NmOFwiLFwiZTVjOWFhXCIsXCJmYWJiMmRcIixcImZmZjM3ZVwiLFwiZmNkMGU4XCIsXCJkN2IwZjlcIl1cblx0XHRcdHZhciBjb2xvclBpY2tlZCA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG5cblx0XHRcdENvZGVzLmluc2VydCh7Y29kZTpjb2RlLCB1c2VySWQ6TWV0ZW9yLnVzZXJJZCgpfSk7XG5cblx0XHRcdHZhciB1c2VySWQgPSBNZXRlb3IudXNlcklkKCk7XG5cblx0XHRcdHZhciBzcGFjZSA9IHtcblx0XHRcdFx0dXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdG93bmVyc0lkOiBbXSxcblx0XHRcdFx0c3BhY2VDb2RlOiBjb2RlLFxuXHRcdFx0XHRzdWJtaXR0ZWQ6IG5ldyBEYXRlKCksXG5cdFx0XHRcdHZpc2libGU6IHRydWUsXG5cdFx0XHRcdGNvZGVQYW5lbDogdHJ1ZSxcblx0XHRcdFx0Y3JlYXRlVXNlckFsbG93ZWQ6dHJ1ZSxcblx0XHRcdFx0aW5zdHJ1Y3Rpb246XCJcIixcblx0XHRcdFx0bGl2ZUZlZWQ6dHJ1ZSxcblx0XHRcdFx0bGVzc29uczpmYWxzZSxcblx0XHRcdFx0cmVzb3VyY2VzOnRydWUsXG5cdFx0XHRcdGNvbG9yOmNvbG9yUGlja2VkLFxuXHRcdFx0XHRsaXZlRmVlZENvbW1lbnRzOnRydWUsXG5cdFx0XHRcdG1haWxQb3N0Tm90aWZpY2F0aW9uOiBmYWxzZSxcblx0XHRcdFx0bWFpbENvbW1lbnROb3RpZmljYXRpb246ZmFsc2UsXG5cdFx0XHRcdHBlcm1pc3Npb25zOntwdWJsaWM6ZmFsc2UsIGF1dGhvckxpc3Q6ZmFsc2UsIGxpdmVGZWVkQWRkUG9zdDp0cnVlLCBsaXZlRmVlZEFkZFBvc3RIb21lOnRydWUsIGxpdmVGZWVkQWRkQ2F0ZWdvcnk6ZmFsc2UsIGxpdmVGZWVkQ2hhbmdlTmFtZTogZmFsc2UsIGFkZFJlc291cmNlc0FsbG93ZWQgOmZhbHNlLCBwYXNzd29yZE5lZWRlZDogZmFsc2UsIGF2YXRhckVuYWJsZWQ6dHJ1ZX1cdFx0XHRcdFxuXHRcdFx0fVxuXG5cblx0XHRcdHNwYWNlID0gXy5leHRlbmQoe30sIHNwYWNlLCBzcGFjZUF0dHJpYnV0ZXMpXG5cdFx0XHRcblxuXHRcdFx0Ly8gdmFyIHNwYWNlID0gXy5leHRlbmQoc3BhY2VBdHRyaWJ1dGVzLCB7XG5cdFx0XHQvLyBcdHVzZXJJZDogdXNlcklkLFxuXHRcdFx0Ly8gXHRzcGFjZUNvZGU6IGNvZGUsXG5cdFx0XHQvLyBcdHN1Ym1pdHRlZDogbmV3IERhdGUoKSxcblx0XHRcdC8vIFx0dmlzaWJsZTogdHJ1ZSxcblx0XHRcdC8vIFx0Y29kZVBhbmVsOiB0cnVlLFxuXHRcdFx0Ly8gXHRjcmVhdGVVc2VyQWxsb3dlZDp0cnVlLFxuXHRcdFx0Ly8gXHRpbnN0cnVjdGlvbjpcIlwiLFxuXHRcdFx0Ly8gXHRsaXZlRmVlZDp0cnVlLFxuXHRcdFx0Ly8gXHRsZXNzb25zOmZhbHNlLFxuXHRcdFx0Ly8gXHRyZXNvdXJjZXM6dHJ1ZSxcblx0XHRcdC8vIFx0Y29sb3I6Y29sb3JQaWNrZWQsXG5cdFx0XHQvLyBcdGxpdmVGZWVkQ29tbWVudHM6dHJ1ZSxcblx0XHRcdC8vIFx0bWFpbFBvc3ROb3RpZmljYXRpb246IGZhbHNlLFxuXHRcdFx0Ly8gXHRtYWlsQ29tbWVudE5vdGlmaWNhdGlvbjpmYWxzZSxcblx0XHRcdC8vIFx0cGVybWlzc2lvbnM6e3B1YmxpYzpmYWxzZSwgYXV0aG9yTGlzdDpmYWxzZSwgbGl2ZUZlZWRBZGRQb3N0OnRydWUsIGxpdmVGZWVkQWRkUG9zdEhvbWU6dHJ1ZSwgbGl2ZUZlZWRBZGRDYXRlZ29yeTpmYWxzZSwgbGl2ZUZlZWRDaGFuZ2VOYW1lOiBmYWxzZSwgYWRkUmVzb3VyY2VzQWxsb3dlZCA6ZmFsc2UsIHBhc3N3b3JkTmVlZGVkOiBmYWxzZSwgYXZhdGFyRW5hYmxlZDp0cnVlfVxuXHRcdFx0Ly8gfSk7XG5cblx0XHRcdHZhciBzcGFjZUlkID0gU3BhY2VzLmluc2VydChzcGFjZSk7XG5cblx0XHRcdC8vTWV0ZW9yLmNhbGwoJ2F1dGhvckluc2VydCcsICdJbnZpdMOpJywgc3BhY2VJZCApO1xuXG5cdFx0XHQvLyBJbnNlcnQgd2VsY29tZSBwb3N0XG5cdFx0XHQvL2lmIChzcGFjZUF0dHJpYnV0ZXMubGFuZyA9PSBcImZyLUZSXCIgfHwgc3BhY2VBdHRyaWJ1dGVzLmxhbmcgPT0gXCJmclwiKVxuXHRcdFx0Ly9cdFBvc3RzLmluc2VydCh7c3BhY2VJZDpzcGFjZUlkLCB0eXBlOlwiaG9tZVwiLCBjYXRlZ29yeUlkOlwiXCIsIGNvbG9yOicjYWZjY2Y4Jywgb3JkZXI6MCwgc3VibWl0dGVkOiBEYXRlLm5vdygpLHRpdGxlOiBcIkJpZW52ZW51ZSBkYW5zIHZvdHJlIG5vdXZlbCBlc3BhY2UgQmVla2VlIExpdmUgIVwiLCBib2R5OlwiPHA+QmVla2VlIExpdmUgZXN0IGwnb3V0aWwgaWTDqWFsIHBvdXIgc291dGVuaXIgbGVzIGludGVyYWN0aW9ucyBlbiB0ZW1wcyByw6llbCwgcG91ciBwYXJ0YWdlciBkZXMgcGhvdG9zIG91IGRlcyBmaWNoaWVycyBhdmVjIHZvcyDDqXR1ZGlhbnRzLjwvcD5cXG48cD5DZSBtZXNzYWdlIGVzdCB2aXNpYmxlIHBhciB2b3Mgw6l0dWRpYW50cyA6IHNlbnRlei12b3VzIGxpYnJlIGRlIGxlIG1vZGlmaWVyIChvdSBkZSBsZSBzdXBwcmltZXIpIHBvdXIgY29tbXVuaXF1ZXIgYXZlYyBldXguPC9wPlwifSk7XG5cdFx0XHQvL2Vsc2Vcblx0XHRcdC8vXHRQb3N0cy5pbnNlcnQoe3NwYWNlSWQ6c3BhY2VJZCwgdHlwZTpcImhvbWVcIiwgY2F0ZWdvcnlJZDpcIlwiLCBjb2xvcjonI2FmY2NmOCcsIG9yZGVyOjAsIHN1Ym1pdHRlZDogRGF0ZS5ub3coKSx0aXRsZTogXCJXZWxjb21lIHRvIHlvdXIgbmV3IEJlZWtlZSBMaXZlIHNwYWNlIVwiLCBib2R5OlwiPHA+QmVla2VlIExpdmUgaXMgaWRlYWwgZm9yIHJlYWwtdGltZSBpbnRlcmFjdGlvbnMgYW5kIHRvIHNoYXJlIHBpY3R1cmVzIG9yIGZpbGVzIHdpdGggeW91ciBsZWFybmVycy48L3A+XFxuPHA+VGhpcyBtZXNzYWdlIHdpbGwgYmUgdmlzaWJpbGUgZm9yIGV2ZXJ5b25lOiBmZWVsIGZyZWUgdG8gZWRpdCAob3IgZGVsZXRlICkgaXQgYWNjb3JkaW5nIHRvIHlvdXIgbmVlZHMuPC9wPlwifSk7XG5cblx0XHRcdHJldHVybiB7IF9pZDogc3BhY2VJZCB9O1xuXHRcdH1cblx0fSk7XG59XG59XG5cbmZ1bmN0aW9uIG1ha2VDb2RlKGxlbmd0aClcbntcblx0dmFyIHRleHQgPSBcIlwiO1xuXHR2YXIgcG9zc2libGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OVwiXG5cdC8vdmFyIHBvc3NpYmxlID0gXCJBQkNERUZHSEpLTE1OUFFSU1RVVldYWVphYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6MTIzNDU2Nzg5XCI7XG5cblx0Zm9yKCB2YXIgaT0wOyBpIDwgbGVuZ3RoOyBpKysgKVxuXHRcdHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xuXHRcblx0cmV0dXJuIHRleHQ7XG59IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuXG5pbXBvcnQgeyBBdXRob3JzIH0gZnJvbSAnLi9hdXRob3JzLmpzJztcbmltcG9ydCB7IFNwYWNlcyB9IGZyb20gJy4vc3BhY2VzLmpzJztcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnLi9wb3N0cy5qcyc7XG5cbi8vIFNoYXJpbmcgdGhlIHNhbWUgQWNjb3VudCBjb2xsZWN0aW9uIHRoYW4gYmVla2VlLWxpdmVcbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHQvLyBjaGVjayB0aGF0IHRoZSB1c2VySWQgc3BlY2lmaWVkIGlzIGFkbWluXG5pc0FkbWluID0gZnVuY3Rpb24odXNlcklkKSB7XG5cdGNvbnNvbGUubG9nKFwiaXNhZG1pblwiKTtcbiAgcmV0dXJuIFJvbGVzLnVzZXJJc0luUm9sZShNZXRlb3IudXNlcigpLCAnYWRtaW4nKTtcbn1cblxuXG4vLyBQdWJsaXNoIFJvbGVzIHRvIGNsaWVudFxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gTWV0ZW9yLnJvbGVBc3NpZ25tZW50LmZpbmQoeyAndXNlci5faWQnOiB0aGlzLnVzZXJJZCB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5KClcbiAgfVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKG51bGwsIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCgpO1xuXG59KTtcblxuXG4gIE1ldGVvci5wdWJsaXNoKCdvd25lcnNVc2VycycsIGZ1bmN0aW9uKHNwYWNlSWQpIHtcbiAgICBjaGVjayhzcGFjZUlkLCBTdHJpbmcpO1xuICAgIHZhciBzcGFjZU93bmVycyA9IFNwYWNlcy5maW5kT25lKHNwYWNlSWQpLm93bmVyc0lkO1xuICAgIHJldHVybiBNZXRlb3IudXNlcnMuZmluZCh7X2lkOiB7XCIkaW5cIjogc3BhY2VPd25lcnN9fSk7XG5cbiAgfSk7XG5cblx0TWV0ZW9yLm1ldGhvZHMoe1xuXG4gICdjaGFuZ2VFbWFpbCc6IGZ1bmN0aW9uKGVtYWlsKSB7XG4gICAgICB2YXIgZW1haWwgPSBlbWFpbDtcbiAgICAgIGNoZWNrKGVtYWlsLCBTdHJpbmcpO1xuICAgICAgdmFyIHVzZXIgPSBNZXRlb3IudXNlcigpO1xuICAgICAgdmFyIG9sZGVtYWlsID0gdXNlci5lbWFpbHM7XG4gICAgICB2YXIgZW1haWxSZWcgPSAvXihbXFx3LVxcLl0rQChbXFx3LV0rXFwuKStbXFx3LV17Miw0fSk/JC87XG4gICAgICBpZiAoZW1haWxSZWcudGVzdChlbWFpbCkpIHtcbiAgICAgIGlmKG9sZGVtYWlsICE9IG51bGwpe1xuICAgICAgICBBY2NvdW50cy5yZW1vdmVFbWFpbCh1c2VyLl9pZCwgdXNlci5lbWFpbHNbMF0uYWRkcmVzcylcbiAgICAgIH1cbiAgICAgIEFjY291bnRzLmFkZEVtYWlsKHVzZXIuX2lkLCBlbWFpbCk7XG4gICAgICByZXR1cm4gZW1haWw7XG4gICAgfSBlbHNlXG4gICAgcmV0dXJuIG51bGxcbiAgIH0sXG4gICAncmVuYW1lVXNlcic6IGZ1bmN0aW9uKHVzZXJJZCwgb2xkTmFtZSwgbmV3TmFtZSkge1xuICAgICAgU3BhY2VzLmZpbmQoe3VzZXJJZDp1c2VySWR9KS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3BhY2UgaWQgOiBcIitpdGVtLl9pZCk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImF1dGhvciA/IDogXCIrQXV0aG9ycy51cGRhdGUoe3NwYWNlSWQ6aXRlbS5faWQsIHVzZXJJZDp1c2VySWR9LHskc2V0OntuYW1lOm5ld05hbWV9fSkpO1xuICAgICAgICAgIFBvc3RzLnVwZGF0ZSh7c3BhY2VJZDppdGVtLl9pZCwgYXV0aG9yOm9sZE5hbWV9LHskc2V0OnthdXRob3I6bmV3TmFtZX19LHttdWx0aTp0cnVlfSk7XG4gICAgICAgICAgQXV0aG9ycy5yZW1vdmUoe3NwYWNlSWQ6aXRlbS5faWQsIHVzZXJJZDp1c2VySWR9KTtcbiAgICAgIH0pO1xuICAgfVxufSk7XG5cblxufVxuXG5cblxuIiwiaW1wb3J0IHsgU3BhY2VzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvc3BhY2VzLmpzJztcblxuXG4vLyAjIyMgIENyZWF0ZSBhZG1pbiB1c2VyIGF0IGZpcnN0IHN0YXJ0ICAjIyNcblxuaWYgKFNwYWNlcy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXHRpZiAoTWV0ZW9yLnVzZXJzLmZpbmQoKS5jb3VudCgpID09PSAwKSB7XG5cblx0XHQvLyBDcmVhdGUgdGhlIGFkbWluIHJvbGVcblx0XHRSb2xlcy5jcmVhdGVSb2xlKCdhZG1pbicsIHt1bmxlc3NFeGlzdHM6IHRydWV9KTtcblxuXHRcdHZhciBhZG1pblBhc3N3b3JkID0gTWV0ZW9yLnNldHRpbmdzLmFkbWluUGFzc3dvcmQ7XG5cblx0XHR2YXIgdXNlcnMgPSBbXG5cdFx0XHR7dXNlcm5hbWU6XCJhZG1pblwiLHJvbGVzOlsnYWRtaW4nXX0sXG5cdFx0XTtcblxuXHRcdF8uZWFjaCh1c2VycywgZnVuY3Rpb24gKHVzZXIpIHtcblx0XHRcdHZhciBpZDtcblx0XHRcdGlkID0gQWNjb3VudHMuY3JlYXRlVXNlcih7XG5cdFx0XHRcdHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxuXHRcdFx0XHRlbWFpbDogXCJhZG1pbkBiZWVrZWUuY2hcIixcblx0XHRcdFx0Ly9wYXNzd29yZDogYWRtaW5QYXNzd29yZCxcblx0XHRcdFx0cGFzc3dvcmQ6IFwiYWRtaW5cIixcblx0XHRcdFx0cHJvZmlsZTp7bmFtZTpcIkFkbWluXCJ9XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKHVzZXIucm9sZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRSb2xlcy5hZGRVc2Vyc1RvUm9sZXMoaWQsIHVzZXIucm9sZXMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59IiwiTWV0ZW9yLnN0YXJ0dXAoZnVuY3Rpb24oKSB7XG5cblxuXHQvLyAjIyMgIE1haWwgY29uZmlndXJhdGlvbiAgIyMjXG5cdHByb2Nlc3MuZW52Lk1BSUxfVVJMID0gJ3NtdHA6Ly8nK01ldGVvci5zZXR0aW5ncy5tYWlsQWRkcmVzcysnOicrTWV0ZW9yLnNldHRpbmdzLm1haWxQYXNzd29yZCsnQCcrTWV0ZW9yLnNldHRpbmdzLm1haWxTZXJ2ZXI7ICAgICAgICAgIFxuXHRBY2NvdW50cy5lbWFpbFRlbXBsYXRlcy5mcm9tID0gXCJCZWVrZWUgTGl2ZSA8dmluY2VudC53aWRtZXJAYmVla2VlLmNoPlwiO1xuXG5cdC8vIFJlc2V0IFBhc3N3b3JkIG1haWwgY29uZmlndXJhdGlvblxuXHRBY2NvdW50cy5lbWFpbFRlbXBsYXRlcy5yZXNldFBhc3N3b3JkLnRleHQgPSBmdW5jdGlvbiAodXNlciwgdXJsKSB7XG4gXHRcdHJldHVybiBcIkhpLCBcXG5cXG4gWW91IHJlY2VudGx5IHJlcXVlc3RlZCB0byByZXNldCB5b3VyIHBhc3N3b3JkIGZvciB5b3VyIEJlZWtlZSBMaXZlIGFjY291bnQuXFxuXFxuIENsaWNrIHRoZSBsaW5rIGJlbG93IHRvIHJlc2V0IGl0LiA6IFxcblwiXG5cdFx0KyB1cmxcblx0XHQrIFwiXFxuXFxuIElmIHlvdSBkaWQgbm90IHJlcXVlc3RlZCBhIHBhc3N3b3JkIHJlc2V0LCBwbGVhc2UgaWdub3JlIHRoaXMgZW1haWwuXCJcblx0XHQrIFwiXFxuXFxuIFRoYW5rcyxcIlxuXHRcdCsgXCJcXG5cXG4gQmVla2VlIExpdmUgVGVhbVwiO1xuXHR9O1xuXHRBY2NvdW50cy5lbWFpbFRlbXBsYXRlcy5yZXNldFBhc3N3b3JkLnN1YmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gXHRcdHJldHVybiBcIlJlc2V0IHlvdXIgQmVla2VlIExpdmUgcGFzc3dvcmRcIjtcblx0fTtcblxuXHRBY2NvdW50cy51cmxzLnJlc2V0UGFzc3dvcmQgPSBmdW5jdGlvbih0b2tlbikge1xuXHRcdHJldHVybiAnaHR0cDovL2xpdmUuYmVla2VlLmNoL3Jlc2V0LXBhc3N3b3JkLycgKyB0b2tlbjtcblx0fTtcbn0pO1xuXG5cbmV4ZWMgPSBOcG0ucmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWM7IC8vIE5vIGlkZWEgd2hhdCBpcyB0aGlzID9cbmNtZCA9IE1ldGVvci53cmFwQXN5bmMoZXhlYyk7XG5cbk1ldGVvci5tZXRob2RzKHtcblx0c2VuZEVtYWlsOiBmdW5jdGlvbiAodG8sIGZyb20sIHN1YmplY3QsIHRleHQpIHtcblx0XHRjaGVjayhbdG8sIGZyb20sIHN1YmplY3QsIHRleHRdLCBbU3RyaW5nXSk7XG5cblx0XHQvLyBMZXQgb3RoZXIgbWV0aG9kIGNhbGxzIGZyb20gdGhlIHNhbWUgY2xpZW50IHN0YXJ0IHJ1bm5pbmcsIHdpdGhvdXQgd2FpdGluZyBmb3IgdGhlIGVtYWlsIHNlbmRpbmcgdG8gY29tcGxldGUuXG5cdFx0dGhpcy51bmJsb2NrKCk7XG5cblx0XHRFbWFpbC5zZW5kKHtcblx0XHRcdHRvOiB0byxcblx0XHRcdGZyb206IGZyb20sXG5cdFx0XHRzdWJqZWN0OiBzdWJqZWN0LFxuXHRcdFx0aHRtbDogdGV4dFxuXHRcdH0pO1xuXHR9LFxuXHQnYWRtaW5TZXROZXdQYXNzd29yZCc6IGZ1bmN0aW9uKGFkbWluSWQsIHVzZXJJZCwgbmV3UGFzc3dvcmQpIHsgLy8gQWRtaW4gY2FuIGZvcmNpYmx5IGNoYW5nZSB0aGUgcGFzc3dvcmQgZm9yIGEgdXNlclxuXHRcdGlmIChSb2xlcy51c2VySXNJblJvbGUoYWRtaW5JZCwgJ2FkbWluJykpIHtcblx0XHRcdEFjY291bnRzLnNldFBhc3N3b3JkKHVzZXJJZCwgbmV3UGFzc3dvcmQpO1xuXHRcdH1cblx0fSxcblx0J2NyZWF0ZUFjY291bnQnOiBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQsIHByb2ZpbGUpIHtcblx0XHRBY2NvdW50cy5jcmVhdGVVc2VyKHtlbWFpbDplbWFpbCxwYXNzd29yZDpwYXNzd29yZCxwcm9maWxlOnByb2ZpbGV9KTsgLy8gQ2FsbGJhY2sgaXMgbm90IHN1cHBvcnRlZCBvbiBzZXJ2ZXItc2lkZVxuXHR9LFxuXHQnZGVsZXRlVXNlcic6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdE1ldGVvci51c2Vycy5yZW1vdmUodXNlcklkLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBkZWxldGluZyB1c2VyIDogXCIrZXJyb3IubWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdCdnZXRVc2VkU3BhY2UnOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcmVzO1xuXHRcdHJlcyA9IGNtZChcImRmIC8gLWggfCBhd2sgJ3twcmludCAoJDMpfScgfCB0YWlsIC0xXCIpICsgXCIvIFwiICsgY21kKFwiZGYgLyAtaCB8IGF3ayAne3ByaW50ICgkMil9JyB8IHRhaWwgLTFcIikgKyBcIiAoXCIrY21kKFwiZGYgLyB8IGF3ayAne3ByaW50ICgkNSl9JyB8IHRhaWwgLTFcIikrXCJ1c2VkKVwiO1xuXHRcdHJldHVybiByZXM7XG5cdH0sXG5cdCdnZXRDcHVVc2FnZSc6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciByZXM7XG5cdFx0cmVzID0gY21kKFwicHMgLUEgLW8gcGNwdSB8IHRhaWwgLW4rMiB8IHBhc3RlIC1zZCsgfCBiY1wiKTtcblx0XHRyZXR1cm4gcmVzO1xuXHR9LFxuXHQnZ2V0TWVtb3J5VXNhZ2UnOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcmVzO1xuXHRcdHJlcyA9IGNtZChcImZyZWUgLW0gfCBncmVwIE1lbSB8IGF3ayAne3ByaW50ICgkMy8kMikqMTAwfSdcIik7XG5cdFx0cmV0dXJuIHJlcztcblx0fSxcblx0J2lzUHJlbWl1bSc6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRcdHJldHVybiBNZXRlb3IudXNlcnMuZmluZE9uZSh1c2VySWQpLnByb2ZpbGUucHJlbWl1bTtcblx0fVxufSk7IiwiLy8gY2hlY2sgdGhhdCB0aGUgdXNlcklkIHNwZWNpZmllZCBvd25zIHRoZSBkb2N1bWVudHNcbm93bnNEb2N1bWVudCA9IGZ1bmN0aW9uKHVzZXJJZCwgZG9jKSB7XG4gIHJldHVybiBkb2MgJiYgZG9jLnVzZXJJZCA9PT0gdXNlcklkIHx8IGRvYy5vd25lcnNJZC5pbmRleE9mKHVzZXJJZCkgIT0gLTE7XG59XG5cbi8vIGNoZWNrIHRoYXQgdGhlIHVzZXJJZCBzcGVjaWZpZWQgaXMgYWRtaW5cbmlzQWRtaW4gPSBmdW5jdGlvbih1c2VySWQpIHtcbiAgcmV0dXJuIFJvbGVzLnVzZXJJc0luUm9sZShNZXRlb3IudXNlcigpLCAnYWRtaW4nKTtcbn0iLCJpbXBvcnQgeyBGaWxlcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL2ZpbGVzLmpzJztcblxuLy8gVXBsb2FkIGZpbGVzIHdpdGggdG9taXRyZXNjYWs6bWV0ZW9yLXVwbG9hZHNcblxuXG5NZXRlb3Iuc3RhcnR1cChmdW5jdGlvbiAoKSB7XG5cblx0TWV0ZW9yLm1ldGhvZHMoe1xuXHRyb3RhdGVJbWFnZTogZnVuY3Rpb24gKGltYWdlUGF0aCkge1xuXHRcdFxuXHRcdGdtUm90YXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdGdtKE1ldGVvci5zZXR0aW5ncy51cGxvYWREaXIraW1hZ2VQYXRoKS5yb3RhdGUoJ3doaXRlJywgOTApLndyaXRlKE1ldGVvci5zZXR0aW5ncy51cGxvYWREaXIraW1hZ2VQYXRoLE1ldGVvci5iaW5kRW52aXJvbm1lbnQoZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpe1xuXHRcdFx0XHRjYWxsYmFjayhudWxsLCAncmV0dXJuZWQnKTs7XG5cdFx0XHR9KSk7XG5cdFx0fVxuXG5cdFx0Ly8gV2FpdCB1bnRpbCBHcmFwaGljTWFnaWNrcyBoYXMgZW5kZWQgcm90YXRpbmcgdGhlIGltYWdlXG5cdFx0dmFyIHN5bmNGdW5jID0gTWV0ZW9yLndyYXBBc3luYyhnbVJvdGF0ZSk7IFxuICAgIFx0dmFyIHJlc3VsdCA9IHN5bmNGdW5jKCk7XG4gICAgXHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59KTtcblxuXHRVcGxvYWRTZXJ2ZXIuaW5pdCh7XG5cdFx0dG1wRGlyOiBNZXRlb3Iuc2V0dGluZ3MudXBsb2FkRGlyKycvdG1wJyxcblx0XHR1cGxvYWREaXI6IE1ldGVvci5zZXR0aW5ncy51cGxvYWREaXIsXG5cdFx0Y2hlY2tDcmVhdGVEaXJlY3RvcmllczogdHJ1ZSxcblx0XHRtYXhGaWxlU2l6ZTogMmU4LFxuXHRcdCAgLy8gICB2YWxpZGF0ZVJlcXVlc3Q6IGZ1bmN0aW9uKHJlcSkge1xuICAgIC8vIFx0aWYgKHJlcS5oZWFkZXJzW1wiY29udGVudC1sZW5ndGhcIl0gPiAxMCkge1xuICAgIC8vIFx0XHRjb25zb2xlLmxvZyhcImZpbGUgdG9vIGxvbmdcIik7XG4gICAgLy8gXHQgICAgcmV0dXJuIFwiRmlsZSBpcyB0b28gbG9uZyFcIjtcbiAgICAvLyBcdH1cbiAgICAvLyBcdHJldHVybiBudWxsO1xuICAgIC8vIH0sXG5cdFx0Z2V0RGlyZWN0b3J5OiBmdW5jdGlvbihmaWxlSW5mbywgZm9ybURhdGEpIHtcblxuXHRcdFx0dmFyIHNwYWNlSWQgPSBmb3JtRGF0YS5zcGFjZUlkO1xuXHRcdFx0ZmlsZUluZm8uc3BhY2VJZCA9IHNwYWNlSWQ7XG5cblx0XHRcdHZhciBuZXdJRCA9IG5ldyBNb25nby5PYmplY3RJRCgpOyAvLyBNYW51YWxseSBnZW5lcmF0ZSBhIG5ldyBNb25nbyBpZFxuXHRcdFx0dmFyIGZpbGVJZCA9IG5ld0lELl9zdHI7XG5cdFx0XHRmaWxlSW5mby5maWxlSWQgPSBmaWxlSWQ7XG5cblx0XHRcdGlmIChmb3JtRGF0YS50eXBlID09ICdsaXZlRmVlZCcpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJVcGxvYWRpbmcgYSBsaXZlRmVlZCBmaWxlLi4uXCIpO1xuXHRcdFx0XHRyZXR1cm4gJy8nK3NwYWNlSWQrJy9saXZlRmVlZC8nO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoZm9ybURhdGEudHlwZSA9PSAncmVzb3VyY2UnKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiVXBsb2FkaW5nIGEgcmVzb3VyY2UuLi5cIik7XG5cdFx0XHRcdHJldHVybiAnLycrc3BhY2VJZCsnL3Jlc291cmNlLyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm9ybURhdGEudHlwZSA9PSAnYXNzaWdubWVudCcpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJVcGxvYWRpbmcgYSBhc3NpZ25tZW50IGZpbGUuLi5cIik7XG5cdFx0XHRcdHJldHVybiAnLycrc3BhY2VJZCsnL2Fzc2lnbm1lbnQvJztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKGZvcm1EYXRhLnR5cGUgPT0gJ2xlc3NvbicpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJVcGxvYWRpbmcgbGVzc29uIGZpbGUuLi5cIik7XG5cdFx0XHRcdHJldHVybiAnLycrc3BhY2VJZCsnL2xlc3Nvbi8nK2ZpbGVJZDtcblx0XHRcdH1cblx0XHRcdC8vIFRPRE8gOiBhZGQgbW9yZSBzZWN1cml0eVxuXHRcdFx0ZWxzZSBpZiAoZm9ybURhdGEudHlwZSA9PSAndXBkYXRlJykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlVwbG9hZGluZyB1cGRhdGUgZmlsZVwiKTtcblx0XHRcdFx0cmV0dXJuICcvdXBkYXRlcyc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJy8nO1xuXHRcdFx0XG5cdFx0fSxcblx0XHRmaW5pc2hlZDogZnVuY3Rpb24oZmlsZUluZm8sIGZvcm1GaWVsZHMsIGZvcm1EYXRhKSB7XG5cblx0XHRcdHZhciBmaWxlTmFtZSA9IGZpbGVJbmZvLm5hbWUuc3Vic3RyKDAsIGZpbGVJbmZvLm5hbWUubGFzdEluZGV4T2YoJy4nKSkgfHwgZmlsZUluZm8ubmFtZTtcblx0XHRcdGZpbGVJbmZvLmZpbGVOYW1lID0gZmlsZU5hbWU7XG5cdFx0XHQvL2ZpbGVJbmZvLmZpbGVOYW1lID0gdW5lc2NhcGUoZmlsZU5hbWUpOyAvLyBDaGVjayB3aHkgd2UgdW5lc2NhcGUgZmlsZSBuYW1lIGluIGdldEZpbGVOYW1lIG1ldGhvZFxuXG5cdFx0XHR2YXIgZmlsZUV4dCA9IGZpbGVJbmZvLm5hbWUuc3Vic3RyKGZpbGVJbmZvLm5hbWUubGFzdEluZGV4T2YoJy4nKSsxKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0ZmlsZUluZm8uZmlsZUV4dCA9IGZpbGVFeHQ7XG5cblx0XHRcdGlmIChmb3JtRmllbGRzLnR5cGUgPT0gJ2xpdmVGZWVkJyB8fCBmb3JtRmllbGRzLnR5cGUgPT0gJ3Jlc291cmNlJyB8fCBmb3JtRmllbGRzLnR5cGUgPT0gJ2Fzc2lnbm1lbnQnKSB7XG5cdFx0XHRcdGlmIChmaWxlRXh0ID09IFwianBnXCIgfHwgZmlsZUV4dCA9PSBcImpwZWdcIiB8fCBmaWxlRXh0ID09IFwicG5nXCIpIHtcblx0XHRcdFx0XHQvLyBSZXNpemUgYW5kIGF1dG8tb3JpZW50IHVwbG9hZGVkIGltYWdlcyB3aXRoIEdyYXBoaWNNYWdpY2tzXG5cdFx0XHRcdFx0Z20oTWV0ZW9yLnNldHRpbmdzLnVwbG9hZERpcitmaWxlSW5mby5wYXRoKS5hdXRvT3JpZW50KCkucmVzaXplKCcxMjAwJywnMTIwMCcpLndyaXRlKE1ldGVvci5zZXR0aW5ncy51cGxvYWREaXIrZmlsZUluZm8ucGF0aCxNZXRlb3IuYmluZEVudmlyb25tZW50KGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIHJlc2l6aW5nIDpcIitlcnJvcik7XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvck1lc3NhZ2UgPSBcIkFuIGVycm9yIGhhcyBvY2N1cmVkLlwiXG5cdFx0XHRcdFx0XHRcdEZpbGVzLmluc2VydCh7X2lkOiBmaWxlSW5mby5maWxlSWQsIGVycm9yOmVycm9yTWVzc2FnZX0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0RmlsZXMuaW5zZXJ0KHtfaWQ6IGZpbGVJbmZvLmZpbGVJZCwgZmlsZU5hbWU6ZmlsZUluZm8uZmlsZU5hbWUsIGZpbGVFeHQ6ZmlsZUV4dCwgZmlsZVBhdGg6IGZpbGVJbmZvLnBhdGh9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0RmlsZXMuaW5zZXJ0KHtfaWQ6IGZpbGVJbmZvLmZpbGVJZCwgZmlsZU5hbWU6ZmlsZUluZm8uZmlsZU5hbWUsIGZpbGVFeHQ6ZmlsZUV4dCwgZmlsZVBhdGg6IGZpbGVJbmZvLnBhdGh9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoZm9ybUZpZWxkcy50eXBlID09ICdsZXNzb24nKSB7XG5cdFx0XHRcdGNtZCA9IE1ldGVvci53cmFwQXN5bmMoZXhlYyk7XG5cdFx0XHRcdHJlcyA9IGNtZChcInVuemlwICdcIitNZXRlb3Iuc2V0dGluZ3MudXBsb2FkRGlyK2ZpbGVJbmZvLnBhdGgrXCInIC1kICdcIitNZXRlb3Iuc2V0dGluZ3MudXBsb2FkRGlyK1wiL1wiK2ZpbGVJbmZvLnNwYWNlSWQrXCIvbGVzc29uL1wiK2ZpbGVJbmZvLmZpbGVJZCtcIidcIiwge21heEJ1ZmZlciA6IDEwMjQgKiAxMDI0ICogNjR9LCBmdW5jdGlvbihlcnJvcixyZXN1bHQpe1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIHVwbG9hZGluZyBhIGxlc3NvbiA6IFwiK2Vycm9yKTtcblx0XHRcdFx0XHRcdHZhciBlcnJvck1lc3NhZ2UgPSBcIkFuIGVycm9yIGhhcyBvY2N1cmVkLlwiXG5cdFx0XHRcdFx0XHRGaWxlcy5pbnNlcnQoe19pZDogZmlsZUluZm8uZmlsZUlkLCBlcnJvcjplcnJvck1lc3NhZ2V9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1x0XHRcdFx0XG5cdFx0XHRcdFx0XHRGaWxlcy5pbnNlcnQoe19pZDogZmlsZUluZm8uZmlsZUlkLCBmaWxlTmFtZTpmaWxlSW5mby5maWxlTmFtZSwgZmlsZUV4dDpmaWxlRXh0LCBmaWxlUGF0aDogZmlsZUluZm8ucGF0aH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmVzMiA9IGNtZChcInJtICdcIitNZXRlb3Iuc2V0dGluZ3MudXBsb2FkRGlyK2ZpbGVJbmZvLnBhdGgrXCInXCIpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoZm9ybUZpZWxkcy50eXBlID09ICd1cGRhdGUnKSB7XG5cdFx0XHRcdGNtZCA9IE1ldGVvci53cmFwQXN5bmMoZXhlYyk7XHRcblx0XHRcdFx0cmVzID0gY21kKFwidGFyIHp4dmYgJ1wiK01ldGVvci5zZXR0aW5ncy51cGxvYWREaXIrZmlsZUluZm8ucGF0aCtcIicgLUMgXCIrTWV0ZW9yLnNldHRpbmdzLnVwZGF0ZURpciwge21heEJ1ZmZlciA6IDEwMjQgKiAxMDI0ICogNjR9LCBmdW5jdGlvbihlcnJvcixyZXN1bHQpe1xuXHRcdFx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIHVwbG9hZGluZyBhbiB1cGRhdGUgOiBcIitlcnJvcik7XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JNZXNzYWdlID0gXCJBbiBlcnJvciBoYXMgb2NjdXJlZC5cIlxuXHRcdFx0XHRcdFx0RmlsZXMuaW5zZXJ0KHtfaWQ6IGZpbGVJbmZvLmZpbGVJZCwgZXJyb3I6ZXJyb3JNZXNzYWdlfSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcdFx0XHRcdFxuXHRcdFx0XHRcdFx0RmlsZXMuaW5zZXJ0KHtfaWQ6IGZpbGVJbmZvLmZpbGVJZCwgZmlsZU5hbWU6ZmlsZUluZm8uZmlsZU5hbWUsIGZpbGVFeHQ6ZmlsZUV4dCwgZmlsZVBhdGg6IGZpbGVJbmZvLnBhdGh9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlczIgPSBjbWQoXCJybSAnXCIrTWV0ZW9yLnNldHRpbmdzLnVwbG9hZERpcitmaWxlSW5mby5wYXRoK1wiJ1wiLCB7bWF4QnVmZmVyIDogMTAyNCAqIDEwMjQgKiA2NH0sKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGdldEZpbGVOYW1lOiBmdW5jdGlvbihmaWxlSW5mbywgZm9ybUZpZWxkcywgZm9ybURhdGEpIHsgXG5cblx0XHRcdHZhciBmaWxlTmFtZSA9IGZpbGVJbmZvLm5hbWU7XHRcblxuXHRcdFx0Ly9maWxlTmFtZSA9IGVzY2FwZShmaWxlTmFtZSk7XG5cdFx0XHQvLyBUaGUgZmlsZSBuYW1lIGlzIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIGZpbGUgcGF0aCwgc28gd2UgZXNjYXBlIHVuaWNvZGUgY2hhcmFjdGVyc1xuXHRcdFx0Ly8gYW5kIHRoZW4gd2UgdW5lc2NhcGUgaXQgaW4gZmluaXNoZWQgbWV0aG9kIHRvIHNhdmUgaXQgaW4gaHVtYW4tcmVhZGFibGUgdGV4dFxuXG5cdFx0XHRyZXR1cm4gZmlsZU5hbWU7XG5cdFx0XHQvLyB2YXIgZmlsZUV4dCA9IGZpbGVJbmZvLm5hbWUuc3Vic3RyKGZpbGVJbmZvLm5hbWUubGFzdEluZGV4T2YoJy4nKSsxKS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHQvLyAvLyBJZiBmaWxlIGlzIGFuIGltYWdlLCBzZXQgYSByYW5kb20gbmFtZVxuXHRcdFx0Ly8gaWYgKGZpbGVFeHQgPT0gXCJqcGdcIiB8fCBmaWxlRXh0ID09IFwianBlZ1wiIHx8IGZpbGVFeHQgPT0gXCJwbmdcIikge1xuXHRcdFx0Ly8gXHR2YXIgbmV3TmFtZSA9IFJhbmRvbS5pZCgpICsgJy4nICsgZmlsZUV4dDtcblx0XHRcdC8vIFx0cmV0dXJuIG5ld05hbWU7XG5cdFx0XHQvLyB9XG5cdFx0XHQvLyBlbHNlIHtcblx0XHRcdC8vIFx0dmFyIGZpbGVOYW1lID0gZmlsZUluZm8ubmFtZTtcdFxuXG5cdFx0XHQvLyBcdGZpbGVOYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKTtcblxuXHRcdFx0Ly8gXHRyZXR1cm4gZmlsZU5hbWU7XG5cdFx0XHQvLyB9XG5cdFx0fSxcblx0XHRjYWNoZVRpbWU6IDAsXG4gIFx0fSk7XG59KTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IEF1dGhvcnMgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9hdXRob3JzLmpzJztcblxuXG5pbXBvcnQgJy4uL3NlcnZlci9maXh0dXJlcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9tZXRob2RzLmpzJztcblxuLy9pbXBvcnQgJy4uL3NlcnZlci9wdWJsaWNhdGlvbnMuanMnO1xuaW1wb3J0ICcuLi9zZXJ2ZXIvdXBsb2Fkcy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci9wZXJtaXNzaW9ucy5qcyc7XG5pbXBvcnQgJy4uL2xpYi9hcHBfbG9hZGVyLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvdXNlcnMuanMnO1xuXG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3NwYWNlcy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2F1dGhvcnMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9jb2Rlcy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2ZpbGVzLmpzJztcbmltcG9ydCAnLi4vaW1wb3J0cy9hcGkvcG9zdHMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9jaGF0cy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL3Jlc291cmNlcy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL2FjdGl2aXRpZXMuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS9hc3NpZ25tZW50cy5qcyc7XG5pbXBvcnQgJy4uL2ltcG9ydHMvYXBpL25vdGlmaWNhdGlvbnMuanMnO1xuXG4vL2ltcG9ydCB7IFBvc3RzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvcG9zdHMuanMnO1xuLy9pbXBvcnQgeyBDYXRlZ29yaWVzIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvY2F0ZWdvcmllcy5qcyc7XG4vL2ltcG9ydCB7IEF1dGhvcnMgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9hdXRob3JzLmpzJztcblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuXG5cblx0XHQvLyBjb2xvcnMgPSBbXCI3ZDU4YmZcIixcImEzNDViN1wiLFwiZTczZjc4XCIsXCJlYzViNTFcIixcImY4NmM0MVwiLFwiZjhhMTI2XCIsXCJmN2M0MmJcIixcImY3ZTY1N1wiLFwiY2VkYTU1XCIsXCI5N2M1NjFcIixcIjYzYjY2OFwiLFwiMjdhNDk4XCIsXCIyNWMwZDRcIixcIjI3YjBlZVwiLFwiNDFhMWVmXCIsXCI1YTY2YmFcIixcIjdkNThiZlwiLFwiYTM0NWI3XCIsXCJlNzNmNzhcIixcImVjNWI1MVwiLFwiZjg2YzQxXCIsXCJmOGExMjZcIixcImY3YzQyYlwiLFwiZjdlNjU3XCIsXCJjZWRhNTVcIixcIjk3YzU2MVwiLFwiNjNiNjY4XCJdO1xuXHRcblx0XHQvLyBBdXRob3JzLmZpbmQoKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuXHRcdC8vIFx0Y29sb3JQaWNrZWQgPSBcIiNcIitjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuXHRcdC8vIFx0QXV0aG9ycy51cGRhdGUoe19pZDppdGVtLl9pZH0seyRzZXQ6e2NvbG9yOmNvbG9yUGlja2VkfX0pO1xuXHRcdC8vIH0pO1xuXG5cdC8vIFVwZGF0ZSBjYXRlZ29yeSAtPiBjYXRlZ29yeUlkXG4vLyBcdFBvc3RzLmZpbmQoKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuLy8gXHRcdC8vUG9zdC51cGRhdGUoe2l0ZW0uX2lkfSx7JHNldDp7Y2F0ZWdvcnlJZDpDYXRlZ29yaWVzLmZpbmQoe3NwYWNlSWQ6aXRlbS5zcGFjZUlkLG5hbWU6aXRlbS5jYXRlZ29yeX0pLl9pZH0se211bHRpOnRydWV9KTtcbi8vIFx0XHRpZiAoaXRlbS5jYXRlZ29yeSkge1xuLy8gXHRcdGlmIChDYXRlZ29yaWVzLmZpbmRPbmUoe3NwYWNlSWQ6aXRlbS5zcGFjZUlkLG5hbWU6aXRlbS5jYXRlZ29yeX0pKSB7XG4vLyBcdFx0XHRQb3N0cy51cGRhdGUoe19pZDppdGVtLl9pZCxjYXRlZ29yeTp7JGV4aXN0czp0cnVlfX0seyRzZXQ6e2NhdGVnb3J5SWQ6Q2F0ZWdvcmllcy5maW5kT25lKHtzcGFjZUlkOml0ZW0uc3BhY2VJZCxuYW1lOml0ZW0uY2F0ZWdvcnl9KS5faWR9fSk7XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9KTtcblxuXG5cdC8vIFVwZGF0ZSBuYkxpa2VzXG4vLyBcdFBvc3RzLmZpbmQoKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuLy8gXHRcdC8vUG9zdC51cGRhdGUoe2l0ZW0uX2lkfSx7JHNldDp7Y2F0ZWdvcnlJZDpDYXRlZ29yaWVzLmZpbmQoe3NwYWNlSWQ6aXRlbS5zcGFjZUlkLG5hbWU6aXRlbS5jYXRlZ29yeX0pLl9pZH0se211bHRpOnRydWV9KTtcblxuLy8gXHRcdGlmIChpdGVtLnR5cGUgPT0gXCJsaXZlRmVlZFwiICYmICFpdGVtLmxpa2VzKVxuLy8gXHRcdFx0UG9zdHMudXBkYXRlKHtfaWQ6aXRlbS5faWR9LHskc2V0OntsaWtlczpbXX19KTtcbi8vIFx0XHRpZiAoaXRlbS5saWtlcylcbi8vIFx0XHRcdFBvc3RzLnVwZGF0ZSh7X2lkOml0ZW0uX2lkfSx7JHNldDp7bmJMaWtlczppdGVtLmxpa2VzLmxlbmd0aH19KTtcbi8vIH0pO1xuXG5cbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcblxuXHQvLyBDb25uZWN0IEFjY291bnRzIHRvIHJlbW90ZSBBcHBcblx0Ly9NZXRlb3IuY29ubmVjdGlvbiA9IEREUC5jb25uZWN0KCdodHRwOi8vYmVla2VlLmJveDo4MCcpO1xuXHQvLyBSZW1vdGUgPSBERFAuY29ubmVjdCgnaHR0cDovL2JlZWtlZS5ib3g6ODAnKTtcblx0Ly8gQWNjb3VudHMuY29ubmVjdGlvbiA9IFJlbW90ZTtcblx0Ly8gTWV0ZW9yLnVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3VzZXJzJywgUmVtb3RlKTtcblx0Ly8gIEFjY291bnRzLmNvbm5lY3Rpb24uc3Vic2NyaWJlKCd1c2VycycpO1xuLy8gX19tZXRlb3JfcnVudGltZV9jb25maWdfXy5BQ0NPVU5UU19DT05ORUNUSU9OX1VSTCA9ICdodHRwOi8vYmVla2VlLmJveDo4MCc7XG5cbi8vIHZhciBjb25uZWN0aW9uID0gRERQLmNvbm5lY3QoXCJodHRwOi8vYmVla2VlLmJveDo4MFwiKTtcbi8vIEFjY291bnRzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuLy8gTWV0ZW9yLnVzZXJzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiLCB7Y29ubmVjdGlvbjogY29ubmVjdGlvbn0pO1xuXG5cdC8vIFVwZGF0ZSBhdmF0YXJzXG5cdC8vIGF2YXRhcnMgPSBbXCJhdmF0YXItMVwiLCBcImF2YXRhci0yXCIsXCJhdmF0YXItM1wiLCBcImF2YXRhci00XCIsXCJhdmF0YXItNVwiLCBcImF2YXRhci02XCIsXCJhdmF0YXItN1wiLCBcImF2YXRhci04XCIsXCJhdmF0YXItOVwiLCBcImF2YXRhci0xMFwiLFwiYXZhdGFyLTExXCIsIFwiYXZhdGFyLTEyXCIsXCJhdmF0YXItMTNcIiwgXCJhdmF0YXItMTRcIixcImF2YXRhci0xNVwiLCBcImF2YXRhci0xNlwiLFwiYXZhdGFyLTE3XCIsIFwiYXZhdGFyLTE4XCIsXCJhdmF0YXItMTlcIiwgXCJhdmF0YXItMjBcIixcImF2YXRhci0yMVwiLCBcImF2YXRhci0yMlwiLFwiYXZhdGFyLTIzXCIsIFwiYXZhdGFyLTI0XCIsIFwiYXZhdGFyLTI1XCJdO1xuXHRcblx0Ly8gQXV0aG9ycy5maW5kKHthdmF0YXI6eyRleGlzdHM6ZmFsc2V9fSkuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcblx0Ly8gXHRhdmF0YXJQaWNrZWQgPSBhdmF0YXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YXRhcnMubGVuZ3RoKV07XG5cdC8vIFx0QXV0aG9ycy51cGRhdGUoe19pZDppdGVtLl9pZH0seyRzZXQ6e2F2YXRhcjphdmF0YXJQaWNrZWR9fSk7XG5cdC8vIH0pO1xuXG5cdC8vIE1ldGVvci51c2Vycy51cGRhdGUoe1wicHJvZmlsZS5hdmF0YXJcIjp7JGV4aXN0czpmYWxzZX19LHskc2V0OntcInByb2ZpbGUuYXZhdGFyXCI6XCJhdmF0YXItMVwifX0pO1xuXHQvLyBNZXRlb3IudXNlcnMudXBkYXRlKHtcInByb2ZpbGUuY29sb3JcIjp7JGV4aXN0czpmYWxzZX19LHskc2V0OntcInByb2ZpbGUuY29sb3JcIjpcIiM3ZDU4YmZcIn19KTtcblxuXHQvLyBBdXRob3JzLmZpbmQoKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuXHQvLyBcdGlmIChNZXRlb3IudXNlcnMuZmluZE9uZShpdGVtLnVzZXJJZCkpIHtcblx0Ly8gXHRcdGNvbnNvbGUubG9nKFwidXNlciA6IFwiK2l0ZW0udXNlcklkKTtcblx0Ly8gXHRcdGlmIChNZXRlb3IudXNlcnMuZmluZE9uZShpdGVtLnVzZXJJZCkucHJvZmlsZSkge1xuXHQvLyBcdFx0XHR2YXIgYXZhdGFyID0gTWV0ZW9yLnVzZXJzLmZpbmRPbmUoaXRlbS51c2VySWQpLnByb2ZpbGUuYXZhdGFyO1xuXHQvLyBcdFx0XHR2YXIgY29sb3IgPSBNZXRlb3IudXNlcnMuZmluZE9uZShpdGVtLnVzZXJJZCkucHJvZmlsZS5jb2xvcjtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coXCJhdmF0YXIgOiBcIithdmF0YXIpO1xuXHQvLyBcdFx0XHRBdXRob3JzLnVwZGF0ZSh7dXNlcklkOml0ZW0udXNlcklkfSx7JHNldDp7YXZhdGFyOmF2YXRhciwgY29sb3I6Y29sb3J9fSk7XG5cdC8vIFx0XHR9XG5cdC8vIFx0fVxuXHQvLyB9KTtcblxuXG59KTtcbiJdfQ==
