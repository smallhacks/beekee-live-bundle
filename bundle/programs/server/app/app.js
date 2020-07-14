var require = meteorInstall({"lib":{"i18n":{"en.i18n.json":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/i18n/en.i18n.json                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
translations[namespace] = {"error-message":"An error occurred : ","access-denied--page-title":"Access denied !","access-denied--login-needed":"You need to login first.","access-denied--login":"Log in","admin--page-title":"Administration","admin--spaces-list":"List of spaces","admin--spaces-title":"Title","admin--spaces-creation":"Date of creation","admin--spaces-owner":"Owner","admin--spaces-actions":"Actions","admin--spaces-open":"Open","admin--spaces-delete":"Delete","admin--users-list":"List of teacher accounts","admin--users-logins":"Login","admin--users-creation":"Date of creation","admin--users-last-connexion":"Last connection","admin--users-actions":"Actions","admin--users-change-password":"Change password","admin--users-delete":"Delete","admin--user-delete-message":"Permanently delete this user and its spaces ?","admin--user-delete-confirm-message":"The user has been deleted.","admin--change-password-message":"Enter a new password for the user:","admin--change-password-confirm-message":"The password has been changed.","layout--connection-status":"Disconnected","login--page-title":"Login","login--mail":"E-mail","login--password":"Password","login--send-mail-forgot-password-link":"Reset my password","login--button-submit":"Log in","login--register":"You do not have an account yet ?","login--register-contact-admin":"Please contact your Beekee Box administrator.","login--register-link":"Create an account","login--user-not-found":"Username does not exist.","login--incorrect-password":"Password does not match.","login--send-mail-forgot-password":"An email has been sent to % s with a link to reset your password.","login--send-mail-forgot-password-error":"An error has occurred. Please contact the administrator at : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Error sending an email to recover password : %s","logout--page-title":"Sign out","not-found--page-title":"Page not found","not-found--page-description":"Sorry, we can not find a page at this address.","not-found--go-back":"Return to home","privacy--page-title":"Privacy policy","privacy--content":"<h3> Teacher Account Information </h3> <p> When you create a teacher account, you must provide a valid email address and password. These details are not public and can be modified at any time. Beekee Live will not share this information with third parties. </p> <h3> Publications, photos, users </h3> <p> Beekee Live follows a strict data protection policy. The data published on Beekee Live are hosted on servers located in Switzerland. The Beekee Live platform is therefore subject to Swiss data protection law. Publications, photographs, user names and any other data published on the platform are the exclusive property of the user. At any time, a user may choose to permanently delete his/her data. In no event will Beekee Live transmit this data to third parties. </p> <h3> Intervention of a technician </h3> <p> On request of the user, a technician can access a space and consult the data stored on it in order to solve a technical problem. </p> <h3> Cookies </h3> <p> Like many websites, Beekee Live uses cookies to facilitate the use of the platform. The information contained in these cookies is not used by Beekee Live for any other purpose. </p>","register--page-title":"Create an account","register--mail":"E-mail","register--name":"Name","register--password":"Password","register--password-confirm":"Confirm password","register--password-dont-match":"Confirm password doesn't match.","register--terms":"By registering, you accept our <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">terms and conditions</a>.<br>Your e-mail address will not be disclosed to third parties.","register--button-submit":"Sign up","register--mail-exist":"There already exists a user account with this email address.","register--mail-no-valid-message":"Please enter a valid email address.","register--mail-subject":"Your registration on Beekee Live","register--mail-content":"<h2>Welcome to <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h2><h3>We’re glad you’re here. Start teaching today by creating your first Beekee Live space!</h3><p><b>Tip</b> : Did you know that you can use Beekee Live on computer, smartphone or tablet without the need of installing an app?</p><p>The <a href=\"https://www.beekee.ch\">Beekee Team</a></p>","reset-password--page-title":"Reset your password","reset-password--new-password":"New password","reset-password--button-submit":"Save","register--password-changed-message":"The password has been changed.","space-edit-categories--page-title":"Manage categories","space-edit-categories--page-description":"The categories are used to classify posts.<br />Unlike tags, categories are defined in advance by the teacher.","space-edit-categories--confirm-delete":"Delete category","space-edit--button-submit-add-category":"Add","space-edit-categories--edit-category":"Edit category","space-edit--page-title":"Settings","space-edit--subtitle-general":"General","space-edit--list-title-change-code":"Change the access code","space-edit--description-change-code":"Share this code with your students so they can join this space.","space-edit--list-title-rename-space":"Rename this space","space-edit--list-title-delete-space":"Delete this space","space-edit--list-title-content":"Content","space-edit--list-title-flow":"Continuous Flow","space-edit--description-flow":"By enabling Continuous Flow, new publications are displayed in real time.","space-edit--list-title-categories":"Manage categories","space-edit--list-title-comments":"Allow comments","space-edit--subtitle-users":"Users","space-edit--list-title-users":"Manage authors","space-edit--list-title-free-users":"Free authors","space-edit--description-free-users":"By activating \"Free authors\", users are able to enter their username when they first log in. Otherwise, they will choose from an editable list under \"Manage authors\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Authors can edit their own publications","space-edit--select-permissions-all":"Authors can edit all publications","space-edit--select-permissions-none":"Nobody can add or edit publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Update the Box","space-edit--list-title-ip":"IP address :","space-edit--list-title-sync":"Synchronize with the cloud","space-edit--description-sync":"Connect the beekee box using an ethernet cable to sync its content with the cloud (www.beekee.ch). This may take several minutes.","space-edit--subtitle-account":"Your account","space-edit--description-change-password":"Change your account password.","space-edit--change-code-message":"Change the access code","space-edit--change-code-confirm-message":"The access code has been changed.","space-edit--change-code-already-used-message":"This code is already assigned to another space.","space-edit--rename-space-message":"Rename this space","space-edit--rename-space-confirm-message":"This space is now called","space-edit--delete-space-message":"Permanently delete this space and its contents ?","space-edit--delete-space-confirm-message":"The space has been removed.","space-edit--sync-login-message":"To synchronize this space with the cloud, you must have an account on www.beekee.ch.\nIf this is the case, enter the username linked to your account :","space-edit--sync-error-message":"A problem has occurred. Check that the box is connected to the internet and try again.","space-edit--update-message":"Updating of the box may make the platform inaccessible for several minutes.\nDo you want to continue ?","space-edit--update-waiting-message":"The box will be updated, please wait...","space-edit--no-ip":"No IP address","space-edit--not-connected":"Not connected","space-edit--module-resources":"Distribute files to your learners","space-edit--permissions-public-space":"Allows anyone to access the contents and interact within this Space without needing an Access Code","space-edit--permissions-add-categories":"Users can add categories","space-edit--permissions-add-posts":"Users can add posts","space-edit-authors---page-title":"Manage authors","space-edit-authors---page-description":"Author names are used to identify publications.<br>For example, add the name of your students or the name of a group.","space-edit-authors---submit-button":"Add","space-edit-authors--delete-author-message":"Delete the author %s ?","space-edit-authors--edit-author-message":"Modify the author :","space-edit-authors--add-author-error-message":"There is already an author with this name.","index-student--title":"The platform to promote real-time collaboration","index-student--wrapper-text":"A private space to share photos and messages <br> with your students, colleagues or friends.","index-student--code":"Private space","index-student--code-input-placeholder":"Enter an access code","index-student--visited-title":"Recently visited :","index-student--delete-recent":"(delete)","index-student--public-spaces-title":"Public spaces","index-student--button-code-link":"Validate","index-student--space-doesnt-exist-message":"This space does not exist.\nMake sure to respect the upper and lower case.","index-student--create-your-space-1":"Create","index-student--create-your-space-2":" your space in seconds for free!","index-student--privacy":"Privacy","index-student--about-us":"About us","index-teacher--spaces-title":"Your spaces","index-teacher--no-space":"You have not created a space yet.","index-teacher--button-submit-space":"Create a new space","index-teacher--shutdown":"Shutdown","index-teacher--shutdown-message":"Do you really want to shutdown the box ?","index-teacher--shutdown-confirm":"The box will shutdown in a few seconds...","update--reboot-confirm":"The box will reboot in a few seconds...","space-page--hide-panel":"Hide","space-page--code-panel-title":"Space's access code :","space-page--code-panel-description":"Spread this code for others to join you:","space-page--pinned-title":"Pinned","space-page--post-order":"Sort","space-page--post-order-asc":"Newest first","space-page--post-order-desc":"Older first","space-page--no-post":"There are no posts to display yet.","space-submit--page-title":"Create a space","space-submit--space-name":"Name of the space","space-submit--button-submit":"Create","space-submit--button-cancel":"Cancel","space-users--page-title":"Want to change your name ?","space-users-first-connection--page-title":"What is your name ?","space-users--page-description":"It will be used to identify your contributions","space-users--input-choose-author-placeholder":"Type a name...","space-users--submit-author":"Validate","space-users--user-exist":"The user %s already exists. Connect with this name ?","space-sidebar--home":"Home","space-sidebar--live-feed":"Live feed","space-sidebar--categories":"CATEGORIES","space-sidebar--add-category":"Add","space-sidebar--authors":"AUTHORS","space-sidebar--lessons":"Lessons","space-sidebar--resources":"Resources","space-submit--create-space":"Create a new space","space-submit--create-space-placeholer":"Space name","space-sidebar--create-own-space-1":"Create your own space","space-sidebar--create-own-space-2":"for free!","space-sidebar--privacy":"Privacy","space-sidebar--about-us":"About us","header--back":"Back","header--admin-access":"Teacher Access","header--register":"Create an account","header--login":"Log in","header--exit-message":"Leave this space ?","menu--show-all":"Show all","menu--favorites":"My favorites","menu--files":"Files","menu--images":"Images","menu--categories":"Categories","menu--authors":"Authors","menu--tags":"Keywords","menu--code":"Access code","post-edit--submit-button":"Edit","post-item--remove-pin":"Remove pin","post-item--add-pin":"Pin on top","post-item--remove-favorites":"Remove from my favorites","post-item--add-favorites":"Add to my favorites","post-item--delete-post-confirm":"Delete the post ?","post-item--delete-comment-confirm":"Delete the comment ?","post-submit--body-placeholder":"Say something...","post-submit--tags-placeholder":"Add Keywords...","post-submit--select-category":"Select a category","post-submit--no-category":"No category","post-submit--delete-image":"Delete the image","post-submit--confirm-delete-image":"Delete the image ?\nThis action is irreversible.","post-submit--confirm-delete-file":"Delete the file ?\nThis action is irreversible.","post-submit--submit-button":"Send","user-settings--page-title":"User settings","user-settings--confirm-logout":"Are you sure you want to sign out ?","user-settings--change-password":"Change password","user-settings--logout":"Sign out","user-settings--change-password-old-message":"Current Password :","user-settings--change-password-new-message":"New Password :","user-settings--change-password-confirm-message":"Your Password has been changed.","space-header--leave":"Leave this space","space-header--settings":"Settings","post--edit":"Edit","post--delete":"Delete","home--title":"Home","home--space-code-message":"<strong>Bzz!</strong> Spread this code for others to join you:","home--submit-button":"Add a section","home-post--order-up":"Up","home-post--order-down":"Down","home-post-delete--title":"Delete this section","home-post-delete--confirm":"Delete this section ?","home-post-edit--title":"Edit section","home-post-submit--title":"Add a section","home-post-submit--placeholder":"Title of the section","home-post-submit--confirm-toast":"The new section has been added.","modal--close":"Close","modal--cancel":"Cancel","modal--delete":"Delete","modal--submit":"Submit","modal--save":"Save changes","lessons--title":"Lessons","lessons--subtitle":"Articulate Storyline materials","lessons--submit-button":"Add a lesson","lessons-post--start-lesson":"Start this lesson","lessons-post-submit--title":"Add a lesson","lessons-post-submit--title-placeholder":"Title of the lesson","lessons-post-submit--description-placeholder":"Description of the lesson","lessons-post-submit--help":"Lessons must be exported in HTML5 format within Storyline.<br>The resulting folder must be zipped before being uploaded, and the .zip file must have the same name as the zipped folder it contains.","lessons-post-submit--confirm-toast":"The new lesson has been added.","lessons-post-delete--confirm":"Do you want to delete this lesson ?","lessons-post-delete--title":"Delete this lesson","lessons-post-edit--title":"Edit lesson","lessons-upload--button":"Upload a Storyline lesson","resources--title":"Resources","resources-post-edit--title":"Edit resource","resources-post-submit--title":"Add a resource","resources-post-submit--title-placeholder":"Title of the resource","resources-post-submit--description-placeholder":"Description of the ressource","resources-post-submit--confirm-toast":"The new resource has been added.","resources--submit-button":"Add a resource","resources-category-edit--title":"Edit a category","resources-category-submit--title":"Add a category","resources-category-submit--placeholder":"Category name","live-feed--notification-panel":"new messages","live-feed--load-more":"Load more...","live-feed-category-edit--title":"Edit a category","live-feed-category-submit--title":"Add a category","live-feed-category-submit--placeholder":"Category name","live-feed-post-delete--delete-confirm":"Do you want to delete this post ?","live-feed-post-delete--title":"Delete this post","live-feed-post--add-comment":"Add a comment...","live-feed-post--nb-likes-with-me":"You and %s people","live-feed-post--like":"You like","live-feed-post--nb-likes":"people","live-feed-post-submit--add-category":"+ Add a category...","live-feed-post-edit--title":"Edit post","live-feed-delete-comment--title":"Delete comment","live-feed-delete-comment--subtitle":"Delete this comment?"};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fr-FR.i18n.json":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/i18n/fr-FR.i18n.json                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["fr-FR"] = ["fr-FR","fr-FR"];
if(_.isUndefined(TAPi18n.translations["fr-FR"])) {
  TAPi18n.translations["fr-FR"] = {};
}

if(_.isUndefined(TAPi18n.translations["fr-FR"][namespace])) {
  TAPi18n.translations["fr-FR"][namespace] = {};
}

_.extend(TAPi18n.translations["fr-FR"][namespace], {"error-message":"Une erreur est survenue : ","access-denied--page-title":"Accès refusé !","access-denied--login-needed":"Vous devez d'abord vous connecter","access-denied--login":"Se connecter","admin--page-title":"Administration","admin--spaces-list":"Liste des espaces","admin--spaces-title":"Titre","admin--spaces-creation":"Date de création","admin--spaces-owner":"Propriétaire","admin--spaces-actions":"Actions","admin--spaces-open":"Ouvrir","admin--spaces-delete":"Supprimer","admin--users-list":"Liste des comptes enseignants","admin--users-logins":"Identifiant","admin--users-creation":"Date de création","admin--users-last-connexion":"Dernière connexion","admin--users-actions":"Actions","admin--users-change-password":"Changer le mot de passe","admin--users-delete":"Supprimer","admin--user-delete-message":"Supprimer cet auteur et tous ces espaces ?","admin--user-delete-confirm-message":"L'utilisateur a été supprimé","admin--change-password-message":"Entrez un nouveau mot de passe pour l'utilisateur :","admin--change-password-confirm-message":"Le mot de passe a bien été changé.","layout--connection-status":"Déconnecté","login--page-title":"Accès enseignant","login--mail":"E-mail","login--password":"Mot de passe","login--send-mail-forgot-password-link":"Réinitialiser mon mot de passe","login--button-submit":"S'identifier","login--register":"Vous n'avez pas encore de compte ?","login--register-contact-admin":"Contactez l'administrateur de la Beekee Box.","login--register-link":"Créez un compte","login--user-not-found":"L'utilisateur n'existe pas.","login--incorrect-password":"Le mot de passe n'est pas correct.","login--send-mail-forgot-password":"Un e-mail a été envoyé à l'adresse %s comprenant un lien pour réinitialiser votre mot de passe.","login--send-mail-forgot-password-error":"Une erreur est survenue. Merci de contacter l'administrateur à l'adresse : vincent.widmer@beekee.ch","login--send-mail-forgot-password-error-log":"Erreur lors de l'envoi d'un e-mail pour récupérer un mot de passe : %s","logout--page-title":"Se déconnecter","not-found--page-title":"Page introuvable","not-found--page-description":"Désolé, nous ne pouvons pas trouver une page à cette adresse.","not-found--go-back":"Revenir à l'accueil","privacy--page-title":"Politique de confidentialité","privacy--content":"<h3>Informations sur les comptes enseignants</h3><p>Lorsque vous crééz un compte « enseignant », vous devez fournir une adresse e-mail valide ainsi qu’un mot de passe. Ces données ne sont pas publiques et peuvent être modifiées à tout moment. Beekee Live ne divulguera en aucun cas ces informations à des tiers.</p><h3>Publications, photos, utilisateurs</h3><p>Beekee Live suit une politique de protection des données stricte. Les données publiées sur Beekee Live sont hébergées sur des serveurs localisés en Suisse. La plateforme Beekee Live est donc soumise au droit suisse sur la protection des données.Les publications, photographies, noms d’utilisateurs et toutes autres données publiées sur la plateforme sont la propriété exclusive de l’utilisateur. À tout moment, il peut choisir de supprimer définitivement ces données. En aucun cas Beekee Live ne transmettra ces données à des tiers.</p><h3>Intervention d’un technicien</h3><p>Sur demande de l’utilisateur, un technicien peut accéder à un espace et consulter les données qui s’y trouvent pour résoudre un problème technique.</p><h3>Cookies</h3><p>Comme de nombreux sites internet, Beekee Live utilise des cookies pour faciliter l’utilisation de la plateforme. Les informations contenues dans ces cookies ne sont pas utilisées par Beekee Live dans un autre but.</p>","register--page-title":"Créer un compte","register--mail":"E-mail","register--name":"Nom","register--password":"Mot de passe","register--password-confirm":"Confirmez le mot de passe","register--password-dont-match":"Les mots de passe de sont pas identiques.","register--terms":"En vous enregistrant, vous acceptez notre <a href=\"{{pathFor 'privacy'}}\" target=\"_blank\">politique de confidentialité</a>.<br>Votre adresse e-mail ne sera pas transmise à des tiers.","register--button-submit":"S'enregistrer","register--mail-exist":"Un compte lié à cet e-mail existe déjà.","register--mail-no-valid-message":"Merci d'entrer une adresse e-mail valide.","register--mail-subject":"Votre inscription sur Beekee Live","register--mail-content":"<h2>Bienvenue sur <a href=\"https://live.beekee.ch\">Beekee Live</a>!</h1><h3>Nous sommes fiers de vous compter parmi nous. Commencez dès aujourd'hui à enseigner en créant votre premier espace Beekee Live !</h3><p><b>Astuce</b> : Savez-vous que vous pouvez utiliser Beekee Live sur ordinateur, smartphone ou tablette sans avoir besoin d'installer une app ?</p><p>L'<a href=\"https://www.beekee.ch\">équipe Beekee</a></p>","reset-password--page-title":"Réinitialiser votre mot de passe","reset-password--new-password":"Nouveau mot de passe","reset-password--button-submit":"Enregistrer","register--password-changed-message":"Le mot de passe a été changé.","space-edit-categories--page-title":"Gérer les catégories","space-edit-categories--page-description":"Les catégories servent à classer les publications.<br />À la différence des tags, les catégories sont définies à l'avance par l'enseignant.","space-edit-categories--confirm-delete":"Supprimer la catégorie","space-edit--button-submit-add-category":"Ajouter","space-edit-categories--edit-category":"Modifier la catégorie","space-edit--page-title":"Paramètres","space-edit--subtitle-general":"Général","space-edit--list-title-change-code":"Changer le code d'accès","space-edit--description-change-code":"Transmettez le code d'accès à vos élèves pour qu'ils  rejoignent cet espace.","space-edit--list-title-rename-space":"Renommer cet espace","space-edit--list-title-delete-space":"Supprimer cet espace","space-edit--list-title-content":"Contenu","space-edit--list-title-flow":"Flux continu","space-edit--description-flow":"En activant le flux continu, les nouvelles publications s'affichent en temps réel.","space-edit--list-title-categories":"Gérer les catégories","space-edit--list-title-comments":"Autoriser les commentaires","space-edit--subtitle-users":"Utilisateurs","space-edit--list-title-users":"Gérer les auteurs","space-edit--list-title-free-users":"Auteurs libres","space-edit--description-free-users":"En activant \"Auteurs libres\", les utilisateurs entrent eux-même leur nom d'utilisateur à la première connexion. Autrement, ils choisiront parmis une liste modifiable sous \"Gérer les auteurs\".","space-edit--subtitle-permissions":"Permissions","space-edit--select-permissions-own":"Les auteurs peuvent modifier leurs propres publications","space-edit--select-permissions-all":"Les auteurs peuvent modifier toutes les publications","space-edit--select-permissions-none":"Personne ne peut ajouter ou modifier des publications","space-edit--subtitle-box":"Box","space-edit--list-title-update-box":"Mettre à jour la box","space-edit--list-title-ip":"Adresse IP :","space-edit--list-title-sync":"Syncroniser avec le cloud","space-edit--description-sync":"Branchez la beekee box à l'aide d'un câble ethernet pour syncroniser son contenu avec le cloud (www.beekee.ch). Cela peut prendre plusieurs minutes.","space-edit--subtitle-account":"Votre compte","space-edit--description-change-password":"Modifier le mot de passe de votre compte.","space-edit--change-code-message":"Changer le code d'accès","space-edit--change-code-confirm-message":"Le code d'accès a été changé.","space-edit--change-code-already-used-message":"Ce code est déjà attribué à un autre espace.","space-edit--rename-space-message":"Renommer cet espace","space-edit--rename-space-confirm-message":"Cet espace s'appelle désormais","space-edit--delete-space-message":"Effacer définitivement cet espace et son contenu ?","space-edit--delete-space-confirm-message":"L'espace a bien été supprimé.","space-edit--sync-login-message":"Pour synchroniser cet espace avec le cloud, vous devez posséder un compte sur www.beekee.ch.\nSi c'est le cas, entrez le nom d'utilisateur de votre compte :","space-edit--sync-error-message":"Un problème est survenu. Vérifiez que la box est bien connectée à internet et recommencez.","space-edit--update-message":"La mise à jour de la box peut rendre la plateforme inaccessible pendant plusieurs minutes.\nVoulez-vous continuer ?","space-edit--update-waiting-message":"La box va être mise à jour, merci de patienter...","space-edit--no-ip":"Pas d'adresse IP","space-edit--not-connected":"Non connecté","space-edit--module-resources":"Mettre à disposition des fichiers pour vos étudiants","space-edit--public-space":"Permet à n'importe qui de se connecter à cet espace sans nécessiter de code d'accès","space-edit--permissions-add-categories":"Les utilisateurs peuvent ajouter des catégories","space-edit--permissions-add-posts":"Les utilisateurs peuvent ajouter des posts","space-edit-authors---page-title":"Gérer les auteurs","space-edit-authors---page-description":"Les auteurs servent à identifier les publications.<br>Ajoutez par exemple le nom de vos élèves ou le nom d'un groupe.","space-edit-authors---submit-button":"Ajouter","space-edit-authors--delete-author-message":"Supprimer l'auteur %s ?","space-edit-authors--edit-author-message":"Modifier l'auteur :","space-edit-authors--add-author-error-message":"Il y a déjà un auteur avec ce nom.","index-student--title":"La plateforme pour soutenir la collaboration en temps réel","index-student--wrapper-text":"Un espace privé pour partager photos et messages<br>avec vos étudiants, collègues ou amis.","index-student--code":"Espace privé","index-student--code-input-placeholder":"Entrez un code d'accès","index-student--visited-title":"Récemment visité :","index-student--delete-recent":"(effacer)","index-student--public-spaces-title":"Espaces publics","index-student--button-code-link":"Valider","index-student--space-doesnt-exist-message":"Cet espace n'existe pas.\nAssurez-vous de respecter les majuscules et les minuscules.","index-student--create-your-space-1":"Créez","index-student--create-your-space-2":" gratuitement votre propre espace en quelques secondes !","index-student--privacy":"Confidentialité","index-student--about-us":"À propos de nous","index-teacher--spaces-title":"Vos espaces","index-teacher--no-space":"Vous n'avez pas encore créé d'espace.","index-teacher--button-submit-space":"Créer un nouvel espace","index-teacher--shutdown":"Éteindre","index-teacher--shutdown-message":"Voulez-vous vraiment éteindre la box ?","index-teacher--shutdown-confirm":"La box va s'éteindre dans quelques secondes...","update--reboot-confirm":"La box va redémarrer dans quelques secondes...","space-page--hide-panel":"Cacher","space-page--code-panel-title":"Code d'accès de l'espace :","space-page--code-panel-description":"Transmettez ce code pour que d'autres vous rejoignent:","space-page--pinned-title":"Épinglés","space-page--post-order":"Tri","space-page--post-order-asc":"Plus récents d'abord","space-page--post-order-desc":"Plus anciens d'abord","space-page--no-post":"Il n'y pas encore de publication à afficher.","space-submit--page-title":"Créer un espace","space-submit--space-name":"Nom de l'espace","space-submit--button-submit":"Créer","space-submit--button-cancel":"Annuler","space-users-first-connection--page-title":"Quel est votre nom ?","space-users--page-title":"Vous voulez changer de nom d'utilisateur ?","space-users--page-description":"Il sera utilisé pour identifier vos contributions","space-users--input-choose-author-placeholder":"Entrez un nom...","space-users--submit-author":"Valider","space-users--user-exist":"L'utilisateur %s existe déjà. Se connecter avec ce nom ?","space-sidebar--home":"Accueil","space-sidebar--live-feed":"Direct","space-sidebar--categories":"CATEGORIES","space-sidebar--add-category":"Ajouter","space-sidebar--authors":"AUTEURS","space-sidebar--lessons":"Leçons","space-sidebar--resources":"Ressources","space-sidebar--create-own-space-1":"Créé votre propre espace","space-sidebar--create-own-space-2":"gratuitement !","space-sidebar--privacy":"Confidentialité","space-sidebar--about-us":"À propos de nous","space-submit--create-space":"Créer un nouvel espace","space-submit--create-space-placeholer":"Nom de l'espace","header--back":"Retour","header--admin-access":"Accès enseignant","header--register":"Créer un comte","header--login":"S'identifier","header--exit-message":"Quitter cet espace ?","menu--show-all":"Tout afficher","menu--favorites":"Mes favoris","menu--files":"Fichiers","menu--images":"Images","menu--categories":"Catégories","menu--authors":"Auteurs","menu--tags":"Mots-clés","menu--code":"Code d'accès","post-edit--submit-button":"Modifier","post-item--remove-pin":"Retirer l'épingle","post-item--add-pin":"Épingler en haut","post-item--remove-favorites":"Retirer de mes favoris","post-item--add-favorites":"Ajouter à mes favoris","post-item--delete-post-confirm":"Effacer la publication ?","post-item--delete-comment-confirm":"Effacer le commentaire ?","post-submit--body-placeholder":"Dites quelque chose...","post-submit--tags-placeholder":"Ajoutez des mots-clés...","post-submit--select-category":"Sélectionnez une catégorie","post-submit--no-category":"Aucune catégorie","post-submit--delete-image":"Supprimer l'image","post-submit--confirm-delete-image":"Effacer l'image ?\nCette action est irréversible.","post-submit--confirm-delete-file":"Effacer le fichier ?\nCette action est irréversible.","post-submit--submit-button":"Envoyer","user-settings--page-title":"Paramètres de l'utilisateur","user-settings--confirm-logout":"Voulez-vous vraiment vous déconnecter ?","user-settings--change-password":"Changer mot de passe","user-settings--logout":"Se déconnecter","user-settings--change-password-old-message":"Mot de passe actuel :","user-settings--change-password-new-message":"Nouveau mot de passe :","user-settings--change-password-confirm-message":"Votre mot de passe a été changé.","space-header--leave":"Quitter cet espace","space-header--settings":"Paramètres","post--edit":"Éditer","post--delete":"Supprimer","home--title":"Accueil","home--space-code-message":"<strong>Bzz!</strong> Partagez ce code pour que d'autres se joignent à vous:","home--submit-button":"Ajouter une section","home-post--order-up":"Monter","home-post--order-down":"Descendre","home-post-delete--title":"Supprimer cette section","home-post-delete--confirm":"Supprimer cette section ?","modal--close":"Fermer","modal--cancel":"Annuler","modal--delete":"Supprimer","modal--save":"Sauver les changements","modal--submit":"Soumettre","home-post-edit--title":"Modifier la section","home-post-submit--title":"Ajouter une section","home-post-submit--placeholder":"Titre de la section","home-post-submit--confirm-toast":"La section a été ajoutée.","lessons--title":"Leçons","lessons--subtitle":"E-learning Articulate Storyline","lessons--submit-button":"Ajouter une leçon","lessons-post--start-lesson":"Lancer cette leçon","lessons-post-submit--title":"Ajouter une leçon","lessons-post-submit--title-placeholder":"Titre de la leçon","lessons-post-submit--description-placeholder":"Description de la leçon","lessons-post-submit--help":"Les leçons doivent être exportées au format HTML5 à partir du logiciel Storyline.<br>Le dossier résultant doit être zippé avant d'être uploadé, et le .zip doit avoir le même nom que le dossier qu'il contient.","lessons-post-submit--confirm-toast":"La leçon a été ajoutée.","lessons-post-delete--confirm":"Voulez-vous supprimer cette leçon ?","lessons-post-delete--title":"Supprimer cette leçon","lessons-post-edit--title":"Editer une leçon","lessons-upload--button":"Uploader une leçon Storyline","resources--title":"Ressources","resources-post-edit--title":"Editer une resource","resources-post-submit--title":"Ajouter une ressource","resources-post-submit--title-placeholder":"Titre de la ressource","resources-post-submit--description-placeholder":"Description de la ressource","resources-post-submit--confirm-toast":"La ressource a été ajoutée.","resources--submit-button":"Ajouter une ressource","resources-category-edit--title":"Éditer une catégorie","resources-category-submit--title":"Ajouter une catégorie","resources-category-submit--placeholder":"Nom de la catégorie","live-feed--notification-panel":"nouveau(x) message(s)","live-feed--load-more":"Charger plus...","live-feed-category-edit--title":"Éditer une catégorie","live-feed-category-submit--title":"Ajouter une catégorie","live-feed-category-submit--placeholder":"Nom de la catégorie","live-feed-post-delete--delete-confirm":"Voulez-vous supprimer ce post ?","live-feed-post-delete--title":"Supprimer ce post","live-feed-post--add-comment":"Ajoutez un commentaire...","live-feed-post--nb-likes-with-me":"Vous et %s personne(s)","live-feed-post--like":"Vous aimez","live-feed-post--nb-likes":"personne(s)","live-feed-post-submit--add-category":"+ Ajouter une catégorie...","live-feed-post-edit--title":"Éditer un post","live-feed-delete-comment--title":"Supprimer un commentaire","live-feed-delete-comment--subtitle":"Supprimer ce commentaire ?"});
TAPi18n._registerServerTranslator("fr-FR", namespace);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"app_loader.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/app_loader.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"authors.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/authors.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
const Authors = new Mongo.Collection('live-authors');
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
    Authors.insert({
      name: name,
      spaceId: spaceId,
      nRefs: 0
    }, function (error) {
      if (error) {
        console.log("Error when inserting author  : " + error.message);
      } else {
        console.log("Author inserted");
      }
    });
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
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"categories.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/categories.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
const Categories = new Mongo.Collection('live-categories');
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
}

Meteor.methods({
  categoryInsert: function (type, name, spaceId) {
    Categories.insert({
      type: type,
      name: name,
      spaceId: spaceId,
      nRefs: 0
    });
  },
  categoryEdit: function (spaceId, type, oldName, newName) {
    var category = Categories.findOne({
      type: type,
      name: oldName,
      spaceId: spaceId
    });
    Categories.update(category._id, {
      $set: {
        name: newName
      }
    }, function (error) {
      if (error) {
        console.log("Error when changing category name : " + error.message);
      } else {
        Posts.update({
          spaceId: spaceId,
          type: type,
          category: oldName
        }, {
          $set: {
            category: newName
          }
        }, {
          multi: true
        }); // Update all author posts with new name
      }
    });
  },
  categoryDelete: function (type, name, spaceId) {
    var category = Categories.findOne({
      type: type,
      name: name,
      spaceId: spaceId
    });
    Categories.remove(category._id, function (error) {
      if (error) {
        console.log("Error when deleting category : " + error.message);
      } else {
        Posts.update({
          type: type,
          spaceId: spaceId,
          category: name
        }, {
          $unset: {
            category: ""
          }
        }, {
          multi: true
        }); // Update all author posts with new name
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"codes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/codes.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
const Codes = new Mongo.Collection('live-codes');
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"files.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/files.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
const Files = new Mongo.Collection('live-files');
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"posts.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/posts.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
const Posts = new Mongo.Collection('live-posts');
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
      type: "resources"
    });
  });
  Meteor.publish('posts', function (filters) {
    let skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return Posts.find(filters, {
      sort: {
        submitted: 1
      },
      skip: skip,
      limit: limit
    });
  });
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
  Posts.after.remove(function (userId, doc) {
    // Delete the file if exists
    var fileId = doc.fileId;
    var fileExt = doc.fileExt;

    if (fileId) {
      Files.remove({
        fileId: fileId
      });
      Meteor.call('deleteFile', doc);
    } // Remove author count and decrease category count


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

      if (doc.category) {
        var category = Categories.findOne({
          spaceId: doc.spaceId,
          type: "liveFeed",
          name: doc.category
        });
        if (category) Categories.update(category._id, {
          $inc: {
            nRefs: -1
          }
        }); // Decrement category nRefs
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
      pinned: false // postFromCloud: postFromCloud // Workaround bug sync

    }); // Get client IP address

    if (Meteor.isServer) post = _.extend(postAttributes, {
      clientIP: this.connection.clientAddress
    });
    var space = Spaces.findOne(postAttributes.spaceId);
    category = Categories.findOne({
      spaceId: postAttributes.spaceId,
      name: postAttributes.category
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"spaces.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/spaces.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
const Spaces = new Mongo.Collection('live-spaces');
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
    console.log("publication space...");
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
    console.log("own space... : " + Spaces.find());
    return Spaces.find({
      userId: userId
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
  }

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
    deleteSpace: function (spaceId) {
      Spaces.remove(spaceId); //Posts.remove({spaceId:spaceId},{multi:true});
    },
    deleteSpaces: function (userId) {
      Spaces.remove({
        userId: userId
      });
    },
    spaceInsert: function (spaceAttributes) {
      check(spaceAttributes, {
        title: String,
        lang: String
      });
      var nbOfCodes = Codes.find().count();
      var prefix = Meteor.settings.public.prefix;
      var codeLength = 4;
      if (nbOfCodes <= 1000) codeLength = 2;else if (nbOfCodes > 1000 && nbOfCodes <= 100000) codeLength = 3;else if (nbOfCodes > 100000 && nbOfCodes <= 10000000) codeLength = 4;
      var code = prefix + makeCode(codeLength);

      while (typeof Codes.findOne({
        code: code
      }) != 'undefined') code = prefix + makeCode(codeLength);

      Codes.insert({
        code: code,
        userId: Meteor.userId()
      });
      var userId = Meteor.userId();
      console.log("user Id : " + Accounts.userId());
      console.log("user Id : " + Meteor.userId());

      var space = _.extend(spaceAttributes, {
        userId: userId,
        spaceCode: code,
        submitted: new Date(),
        visible: true,
        codePanel: true,
        createUserAllowed: true,
        liveFeed: true,
        lessons: false,
        resources: true,
        liveFeedComments: true,
        permissions: {
          public: false,
          liveFeedAddPost: true,
          liveFeedAddCategory: false
        }
      });

      var spaceId = Spaces.insert(space);
      Meteor.call('authorInsert', 'Invité', spaceId); // Insert welcome post

      if (spaceAttributes.lang == "fr-FR" || spaceAttributes.lang == "fr") Posts.insert({
        spaceId: spaceId,
        type: "home",
        order: 0,
        submitted: Date.now(),
        title: "Bienvenue dans votre nouvel espace Beekee Live !",
        body: "<p>Beekee Live est l'outil idéal pour soutenir les interactions en temps réel, pour partager des photos ou des fichiers avec vos étudiants.</p>\n<p>Ce message est visible par vos étudiants : sentez-vous libre de le modifier (ou de le supprimer) pour communiquer avec eux.</p>"
      });else Posts.insert({
        spaceId: spaceId,
        type: "home",
        order: 0,
        submitted: Date.now(),
        title: "Welcome to your new Beekee Live space!",
        body: "<p>Beekee Live is ideal for real-time interactions and to share pictures or files with your learners.</p>\n<p>This message will be visibile for everyone: feel free to edit (or delete ) it according to your needs.</p>"
      });
      return {
        _id: spaceId
      };
    }
  });
}

function makeCode(length) {
  var text = "";
  var possible = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789";

  for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/users.js                                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);

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
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"fixtures.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/fixtures.js                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"permissions.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/permissions.js                                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// check that the userId specified owns the documents
ownsDocument = function (userId, doc) {
  return doc && doc.userId === userId;
}; // check that the userId specified is admin


isAdmin = function (userId) {
  return Roles.userIsInRole(Meteor.user(), 'admin');
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publications.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/publications.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Meteor.publish('space', function(spaceId) {
// 	check(spaceId, String);
// 	return Spaces.find({_id: spaceId});	
// });
// Meteor.publish('allSpaces', function() {
// 	return Spaces.find({});
// });
// Meteor.publish('publicSpaces', function(userId) {
// 	return Spaces.find({"permissions.public":true});
// });
// Meteor.publish('ownSpaces', function(userId) {
// 	return Spaces.find({userId:userId});
// });
// Meteor.publish('spacesVisited', function(spacesId) {
// 	return Spaces.find({ "_id": { "$in": spacesId } });
// });
// Meteor.publish('post', function(postId) {
// 	check(postId, String);
// 	return Posts.find({_id: postId});
// });
// Meteor.publish('homePosts', function(spaceId) {
// 	check(spaceId, String);
// 	return Posts.find({spaceId: spaceId, type:"home"},{sort: {submitted: 1}});
// });
// Meteor.publish('liveFeedPosts', function(spaceId) {
// 	check(spaceId, String);
// 	return Posts.find({spaceId: spaceId, type:"liveFeed"},{sort: {submitted: -1}});
// });
// Meteor.publish('lessonsPosts', function(spaceId) {
// 	check(spaceId, String);
// 	return Posts.find({spaceId: spaceId, type:"lessons"});
// });
// Meteor.publish('resourcesPosts', function(spaceId) {
// 	check(spaceId, String);
// 	return Posts.find({spaceId: spaceId, type:"resources"});
// });
// Meteor.publish('posts', function(filters, skip = 0, limit = 0) {
// 	return Posts.find(filters, {sort: {submitted:1},skip:skip,limit:limit});
// });
// // Meteor.publish('posts', function(filters,skip,limit) {
// // 	return Posts.find(filters, {sort: {submitted: 1},skip:skip,limit:limit});
// // });
// Meteor.publish("file", function(fileId) {
// 	return Files.find({_id:fileId})
// });
// Meteor.publish("files", function(spaceId) {
// 	return Files.find({spaceId: spaceId})
// });
// Meteor.publish("allFiles", function() {
// 	return Files.find({})
// });
// Meteor.publish("authors", function(spaceId) {
// 	return Authors.find({spaceId: spaceId});
// });
// Meteor.publish("categories", function(spaceId) {
// 	return Categories.find({spaceId: spaceId});
// });
// Meteor.publish("tags", function(spaceId) {
// 	return Tags.find({spaceId: spaceId});
// });
// Meteor.publish('allUsers', function() {
// 	return Meteor.users.find();
//  })
// Publish the current size of a collection without subscribe to the collection
// Meteor.publish("count-all-live-feed-posts", function (spaceId) {
// 	var self = this;
// 	var count = 0;
// 	var initializing = true;
// 	var handle = Posts.find({spaceId: spaceId, type:"liveFeed"}).observeChanges({
// 		added: function (doc, idx) {
// 			count++;
// 			if (!initializing) {
// 				self.changed("counts", spaceId, {count: count});  // "counts" is the published collection name
// 			}
// 		},
// 		removed: function (doc, idx) {
// 			count--;
// 			self.changed("counts", spaceId, {count: count});  // Same published collection, "counts"
// 		}
// 	});
// 	initializing = false;
// 	// publish the initial count. `observeChanges` guaranteed not to return
// 	// until the initial set of `added` callbacks have run, so the `count`
// 	// variable is up to date.
// 	self.added("counts", spaceId, {count: count});
// 	// and signal that the initial document set is now available on the client
// 	self.ready();
// 	// turn off observe when client unsubscribes
// 	self.onStop(function () {
// 		handle.stop();
// 	});
// });
// Meteor.publish("count-all-pinned", function (spaceId) {
// 	var self = this;
// 	var pinnedCounts = 0;
// 	var initializing = true;
// 	var handle = Posts.find({spaceId: spaceId, pinned:true}).observeChanges({
// 		added: function (doc, idx) {
// 			pinnedCounts++;
// 			if (!initializing) {
// 				self.changed("pinnedCounts", spaceId, {count: pinnedCounts});  // "counts" is the published collection name
// 			}
// 		},
// 		removed: function (doc, idx) {
// 			pinnedCounts--;
// 			self.changed("pinnedCounts", spaceId, {count: pinnedCounts});  // Same published collection, "counts"
// 		}
// 	});
// 	initializing = false;
// 	// publish the initial count. `observeChanges` guaranteed not to return
// 	// until the initial set of `added` callbacks have run, so the `count`
// 	// variable is up to date.
// 	self.added("pinnedCounts", spaceId, {count: pinnedCounts});
// 	// and signal that the initial document set is now available on the client
// 	self.ready();
// 	// turn off observe when client unsubscribes
// 	self.onStop(function () {
// 		handle.stop();
// 	});
// });
// Meteor.publish("count-all-files", function (spaceId) {
// 	var self = this;
// 	var filesCounts = 0;
// 	var initializing = true;
// 	//var handle = Posts.find({spaceId: spaceId, $or : [{fileExt:"txt"},{fileExt:"rtf"},{fileExt:"pdf"},{fileExt:"zip"}]}).observeChanges({
// 	var handle = Posts.find({spaceId: spaceId, $and : [{fileId:{$exists:true} },{fileId:{$ne:false} },{fileExt:{$nin : ["jpg","jpeg","png","gif"]}}]}).observeChanges({
// 		added: function (doc, idx) {
// 			filesCounts++;
// 			if (!initializing) {
// 				self.changed("filesCounts", spaceId, {count: filesCounts});  // "counts" is the published collection name
// 			}
// 		},
// 		removed: function (doc, idx) {
// 			filesCounts--;
// 			self.changed("filesCounts", spaceId, {count: filesCounts});  // Same published collection, "counts"
// 		}
// 	});
// 	initializing = false;
// 	// publish the initial count. `observeChanges` guaranteed not to return
// 	// until the initial set of `added` callbacks have run, so the `count`
// 	// variable is up to date.
// 	self.added("filesCounts", spaceId, {count: filesCounts});
// 	// and signal that the initial document set is now available on the client
// 	self.ready();
// 	// turn off observe when client unsubscribes
// 	self.onStop(function () {
// 		handle.stop();
// 	});
// });
// Meteor.publish("count-all-images", function (spaceId) {
// 	var self = this;
// 	var imagesCounts = 0;
// 	var initializing = true;
// 	var handle = Posts.find({spaceId: spaceId, $or : [{fileExt:"jpg"},{fileExt:"jpeg"},{fileExt:"gif"},{fileExt:"png"}]}).observeChanges({
// 		added: function (doc, idx) {
// 			imagesCounts++;
// 			if (!initializing) {
// 				self.changed("imagesCounts", spaceId, {count: imagesCounts});  // "counts" is the published collection name
// 			}
// 		},
// 		removed: function (doc, idx) {
// 			imagesCounts--;
// 			self.changed("imagesCounts", spaceId, {count: imagesCounts});  // Same published collection, "counts"
// 		}
// 	});
// 	initializing = false;
// 	// publish the initial count. `observeChanges` guaranteed not to return
// 	// until the initial set of `added` callbacks have run, so the `count`
// 	// variable is up to date.
// 	self.added("imagesCounts", spaceId, {count: imagesCounts});
// 	// and signal that the initial document set is now available on the client
// 	self.ready();
// 	// turn off observe when client unsubscribes
// 	self.onStop(function () {
// 		handle.stop();
// 	});
// });
// Meteor.publish("count-all-live-feed", function (spaceId) {
// 	var self = this;
// 	var liveFeedCounts = 0;
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"uploads.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/uploads.js                                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Files;
module.link("../imports/api/files.js", {
  Files(v) {
    Files = v;
  }

}, 0);
// Upload files with tomitrescak:meteor-uploads
Meteor.startup(function () {
  UploadServer.init({
    tmpDir: Meteor.settings.uploadDir + '/tmp',
    uploadDir: Meteor.settings.uploadDir,
    checkCreateDirectories: true,
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

      if (formFields.type == 'liveFeed' || formFields.type == 'resource') {
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// server/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.link("../server/fixtures.js");
module.link("../server/publications.js");
module.link("../server/uploads.js");
module.link("../server/permissions.js");
module.link("../lib/app_loader.js");
module.link("../imports/api/users.js");
Meteor.startup(() => {// code to run on server at startup
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
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".ts"
  ]
});

require("/lib/i18n/en.i18n.json");
require("/lib/i18n/fr-FR.i18n.json");
var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2FwcF9sb2FkZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2F1dGhvcnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2NhdGVnb3JpZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL2NvZGVzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2FwaS9maWxlcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvcG9zdHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL2ltcG9ydHMvYXBpL3NwYWNlcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvdXNlcnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9maXh0dXJlcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3Blcm1pc3Npb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvdXBsb2Fkcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsiTWV0ZW9yIiwiaXNTZXJ2ZXIiLCJJbmplY3QiLCJyYXdIZWFkIiwicmF3Qm9keSIsIkFzc2V0cyIsImdldFRleHQiLCJpc0NsaWVudCIsInN0YXJ0dXAiLCJzZXRUaW1lb3V0IiwiJCIsImZhZGVPdXQiLCJyZW1vdmUiLCJtb2R1bGUiLCJleHBvcnQiLCJBdXRob3JzIiwiTW9uZ28iLCJsaW5rIiwidiIsIlBvc3RzIiwiQ29sbGVjdGlvbiIsImFsbG93IiwiaW5zZXJ0IiwidXBkYXRlIiwicHVibGlzaCIsInNwYWNlSWQiLCJmaW5kIiwibWV0aG9kcyIsImF1dGhvckluc2VydCIsIm5hbWUiLCJuUmVmcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJhdXRob3JFZGl0Iiwib2xkTmFtZSIsIm5ld05hbWUiLCJhdXRob3IiLCJmaW5kT25lIiwiX2lkIiwiJHNldCIsIm11bHRpIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3J5SW5zZXJ0IiwidHlwZSIsImNhdGVnb3J5RWRpdCIsImNhdGVnb3J5IiwiY2F0ZWdvcnlEZWxldGUiLCIkdW5zZXQiLCJDb2RlcyIsIkZpbGVzIiwiZmlsZUlkIiwiZnMiLCJOcG0iLCJyZXF1aXJlIiwicmltcmFmIiwidXBsb2FkRGlyIiwic2V0dGluZ3MiLCJkZWxldGVGaWxlIiwicG9zdCIsImVyciIsInVubGlua1N5bmMiLCJmaWxlUGF0aCIsIlNwYWNlcyIsIkNvdW50cyIsIlBpbm5lZENvdW50cyIsIkZpbGVzQ291bnRzIiwiSW1hZ2VzQ291bnRzIiwiTGl2ZUZlZWRDb3VudHMiLCJwb3N0SWQiLCJjaGVjayIsIlN0cmluZyIsInNvcnQiLCJzdWJtaXR0ZWQiLCJmaWx0ZXJzIiwic2tpcCIsImxpbWl0Iiwic2VsZiIsImxpdmVGZWVkQ291bnRzIiwiaW5pdGlhbGl6aW5nIiwiaGFuZGxlIiwib2JzZXJ2ZUNoYW5nZXMiLCJhZGRlZCIsImRvYyIsImlkeCIsImNoYW5nZWQiLCJjb3VudCIsInJlbW92ZWQiLCJyZWFkeSIsIm9uU3RvcCIsInN0b3AiLCJhZnRlciIsInVzZXJJZCIsImZpbGVFeHQiLCJjYWxsIiwiJGluYyIsImFkZExpa2VDb21tZW50IiwiZGF0YSIsImN1cnJlbnRQb3N0SWQiLCJjdXJyZW50Q29tbWVudElkIiwiJHB1c2giLCJyZW1vdmVMaWtlQ29tbWVudCIsIiRwdWxsIiwiaG9tZVBvc3RJbnNlcnQiLCJwb3N0QXR0cmlidXRlcyIsIl8iLCJleHRlbmQiLCJEYXRlIiwibm93Iiwib3JkZXIiLCJzcGFjZSIsInBvc3RJbnNlcnQiLCJpdGVtIiwiYXV0aG9ySWQiLCJuYiIsInBpbm5lZCIsImNsaWVudElQIiwiY29ubmVjdGlvbiIsImNsaWVudEFkZHJlc3MiLCJvd25zRG9jdW1lbnQiLCJpc0FkbWluIiwidXNlcnMiLCJzcGFjZXNJZCIsImJlZm9yZSIsImdldFNwYWNlSWQiLCJzcGFjZUNvZGUiLCJ1cGRhdGVDb2RlIiwib2xkQ29kZSIsIm5ld0NvZGUiLCJjb2RlSWQiLCJjb2RlIiwiZGVsZXRlU3BhY2UiLCJkZWxldGVTcGFjZXMiLCJzcGFjZUluc2VydCIsInNwYWNlQXR0cmlidXRlcyIsInRpdGxlIiwibGFuZyIsIm5iT2ZDb2RlcyIsInByZWZpeCIsInB1YmxpYyIsImNvZGVMZW5ndGgiLCJtYWtlQ29kZSIsIkFjY291bnRzIiwidmlzaWJsZSIsImNvZGVQYW5lbCIsImNyZWF0ZVVzZXJBbGxvd2VkIiwibGl2ZUZlZWQiLCJsZXNzb25zIiwicmVzb3VyY2VzIiwibGl2ZUZlZWRDb21tZW50cyIsInBlcm1pc3Npb25zIiwibGl2ZUZlZWRBZGRQb3N0IiwibGl2ZUZlZWRBZGRDYXRlZ29yeSIsImJvZHkiLCJsZW5ndGgiLCJ0ZXh0IiwicG9zc2libGUiLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiUm9sZXMiLCJ1c2VySXNJblJvbGUiLCJ1c2VyIiwicm9sZUFzc2lnbm1lbnQiLCJjcmVhdGVSb2xlIiwidW5sZXNzRXhpc3RzIiwiYWRtaW5QYXNzd29yZCIsInVzZXJuYW1lIiwicm9sZXMiLCJlYWNoIiwiaWQiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInByb2ZpbGUiLCJhZGRVc2Vyc1RvUm9sZXMiLCJVcGxvYWRTZXJ2ZXIiLCJpbml0IiwidG1wRGlyIiwiY2hlY2tDcmVhdGVEaXJlY3RvcmllcyIsImdldERpcmVjdG9yeSIsImZpbGVJbmZvIiwiZm9ybURhdGEiLCJuZXdJRCIsIk9iamVjdElEIiwiX3N0ciIsImZpbmlzaGVkIiwiZm9ybUZpZWxkcyIsImZpbGVOYW1lIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJ0b0xvd2VyQ2FzZSIsImdtIiwicGF0aCIsImF1dG9PcmllbnQiLCJyZXNpemUiLCJ3cml0ZSIsImJpbmRFbnZpcm9ubWVudCIsInJlc3VsdCIsImVycm9yTWVzc2FnZSIsImNtZCIsIndyYXBBc3luYyIsImV4ZWMiLCJyZXMiLCJtYXhCdWZmZXIiLCJyZXMyIiwidXBkYXRlRGlyIiwiZ2V0RmlsZU5hbWUiLCJjYWNoZVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO0FBQ3BCQyxRQUFNLENBQUNDLE9BQVAsQ0FBZSxZQUFmLEVBQTZCLDJOQUE3QjtBQUVBRCxRQUFNLENBQUNFLE9BQVAsQ0FBZSxZQUFmLEVBQTZCQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxpQkFBZixDQUE3QjtBQUNBOztBQUVELElBQUlOLE1BQU0sQ0FBQ08sUUFBWCxFQUFxQjtBQUNwQlAsUUFBTSxDQUFDUSxPQUFQLENBQWUsWUFBVztBQUN6QkMsY0FBVSxDQUFDLFlBQVc7QUFDckJDLE9BQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCQyxPQUE1QixDQUFvQyxHQUFwQyxFQUF5QyxZQUFXO0FBQUVELFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUUsTUFBUjtBQUFtQixPQUF6RTtBQUNBLEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHQSxHQUpEO0FBS0EsQzs7Ozs7Ozs7Ozs7QUNaREMsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsU0FBTyxFQUFDLE1BQUlBO0FBQWIsQ0FBZDtBQUFxQyxJQUFJQyxLQUFKO0FBQVVILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGNBQVosRUFBMkI7QUFBQ0QsT0FBSyxDQUFDRSxDQUFELEVBQUc7QUFBQ0YsU0FBSyxHQUFDRSxDQUFOO0FBQVE7O0FBQWxCLENBQTNCLEVBQStDLENBQS9DO0FBQWtELElBQUlDLEtBQUo7QUFBVU4sTUFBTSxDQUFDSSxJQUFQLENBQVksWUFBWixFQUF5QjtBQUFDRSxPQUFLLENBQUNELENBQUQsRUFBRztBQUFDQyxTQUFLLEdBQUNELENBQU47QUFBUTs7QUFBbEIsQ0FBekIsRUFBNkMsQ0FBN0M7QUFJcEcsTUFBTUgs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O0FBRUE7QUFDQTtBQUNBO0FBRUMsQ0FmRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdEluamVjdC5yYXdIZWFkKFwibWV0YUxvYWRlclwiLCAnPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPTAsIHdpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHRcIi8+PG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCI+XHQ8bWV0YSBuYW1lPVwibW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIj4nKTtcblxuXHRJbmplY3QucmF3Qm9keShcImh0bWxMb2FkZXJcIiwgQXNzZXRzLmdldFRleHQoJ2FwcF9sb2FkZXIuaHRtbCcpKTtcbn1cblxuaWYgKE1ldGVvci5pc0NsaWVudCkge1xuXHRNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0JChcIiNpbmplY3QtbG9hZGVyLXdyYXBwZXJcIikuZmFkZU91dCg1MDAsIGZ1bmN0aW9uKCkgeyAkKHRoaXMpLnJlbW92ZSgpOyB9KTtcblx0XHR9LCA3MDApO1xuXHR9KTtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnLi9wb3N0cy5qcyc7XG4gXG5leHBvcnQgY29uc3QgQXV0aG9ycyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdsaXZlLWF1dGhvcnMnKTtcblxuQXV0aG9ycy5hbGxvdyh7XG5cblx0aW5zZXJ0OiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZX0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZX0sXG5cblx0dXBkYXRlOiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZX1cbn0pO1xuXG5pZihNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuXHRNZXRlb3IucHVibGlzaChcImF1dGhvcnNcIiwgZnVuY3Rpb24oc3BhY2VJZCkge1xuXHRcdHJldHVybiBBdXRob3JzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWR9KTtcblx0fSk7XG59XG5cbk1ldGVvci5tZXRob2RzKHtcblxuXHRhdXRob3JJbnNlcnQ6IGZ1bmN0aW9uKG5hbWUsIHNwYWNlSWQpIHtcblx0XHRBdXRob3JzLmluc2VydCh7bmFtZTogbmFtZSwgc3BhY2VJZDogc3BhY2VJZCwgblJlZnM6IDB9LGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGluc2VydGluZyBhdXRob3IgIDogXCIrZXJyb3IubWVzc2FnZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkF1dGhvciBpbnNlcnRlZFwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0YXV0aG9yRWRpdDogZnVuY3Rpb24oc3BhY2VJZCwgb2xkTmFtZSwgbmV3TmFtZSkge1xuXHRcdHZhciBhdXRob3IgPSBBdXRob3JzLmZpbmRPbmUoe25hbWU6IG9sZE5hbWUsIHNwYWNlSWQ6IHNwYWNlSWR9KTtcblx0XHRBdXRob3JzLnVwZGF0ZShhdXRob3IuX2lkLCB7JHNldDoge25hbWU6bmV3TmFtZX19LCBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBjaGFuZ2luZyBhdXRob3IgbmFtZSA6IFwiK2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFBvc3RzLnVwZGF0ZSh7c3BhY2VJZDpzcGFjZUlkLCBhdXRob3I6IG9sZE5hbWV9LHskc2V0OiB7YXV0aG9yOiBuZXdOYW1lfX0sIHttdWx0aTogdHJ1ZX0pOyAvLyBVcGRhdGUgYWxsIGF1dGhvciBwb3N0cyB3aXRoIG5ldyBuYW1lXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pOyIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmltcG9ydCB7IFBvc3RzIH0gZnJvbSAnLi9wb3N0cy5qcyc7XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yaWVzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2xpdmUtY2F0ZWdvcmllcycpO1xuXG5DYXRlZ29yaWVzLmFsbG93KHtcblxuXHRpbnNlcnQ6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlfSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlfSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlfVxufSk7XG5cblxuaWYoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0TWV0ZW9yLnB1Ymxpc2goXCJjYXRlZ29yaWVzXCIsIGZ1bmN0aW9uKHNwYWNlSWQpIHtcblx0XHRyZXR1cm4gQ2F0ZWdvcmllcy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkfSk7XG5cdH0pO1xufVxuXG5NZXRlb3IubWV0aG9kcyh7XG5cblx0Y2F0ZWdvcnlJbnNlcnQ6IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNwYWNlSWQpIHtcblx0XHRDYXRlZ29yaWVzLmluc2VydCh7dHlwZTogdHlwZSwgbmFtZTogbmFtZSwgc3BhY2VJZDogc3BhY2VJZCwgblJlZnM6IDB9KTtcblx0fSxcblx0Y2F0ZWdvcnlFZGl0OiBmdW5jdGlvbihzcGFjZUlkLCB0eXBlLCBvbGROYW1lLCBuZXdOYW1lKSB7XG5cdFx0dmFyIGNhdGVnb3J5ID0gQ2F0ZWdvcmllcy5maW5kT25lKHt0eXBlOiB0eXBlLCBuYW1lOiBvbGROYW1lLCBzcGFjZUlkOiBzcGFjZUlkfSk7XG5cdFx0Q2F0ZWdvcmllcy51cGRhdGUoY2F0ZWdvcnkuX2lkLCB7JHNldDoge25hbWU6bmV3TmFtZX19LCBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBjaGFuZ2luZyBjYXRlZ29yeSBuYW1lIDogXCIrZXJyb3IubWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0UG9zdHMudXBkYXRlKHtzcGFjZUlkOnNwYWNlSWQsIHR5cGU6IHR5cGUsIGNhdGVnb3J5OiBvbGROYW1lfSx7JHNldDoge2NhdGVnb3J5OiBuZXdOYW1lfX0sIHttdWx0aTogdHJ1ZX0pOyAvLyBVcGRhdGUgYWxsIGF1dGhvciBwb3N0cyB3aXRoIG5ldyBuYW1lXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdGNhdGVnb3J5RGVsZXRlOiBmdW5jdGlvbih0eXBlLCBuYW1lLCBzcGFjZUlkKSB7XG5cdFx0dmFyIGNhdGVnb3J5ID0gQ2F0ZWdvcmllcy5maW5kT25lKHt0eXBlOiB0eXBlLCBuYW1lOiBuYW1lLCBzcGFjZUlkOiBzcGFjZUlkfSk7XG5cdFx0Q2F0ZWdvcmllcy5yZW1vdmUoY2F0ZWdvcnkuX2lkLCBmdW5jdGlvbihlcnJvcikge1xuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBkZWxldGluZyBjYXRlZ29yeSA6IFwiK2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFBvc3RzLnVwZGF0ZSh7dHlwZTogdHlwZSwgc3BhY2VJZDpzcGFjZUlkLCBjYXRlZ29yeTogbmFtZX0seyR1bnNldDoge2NhdGVnb3J5OlwiXCJ9fSwge211bHRpOiB0cnVlfSk7IC8vIFVwZGF0ZSBhbGwgYXV0aG9yIHBvc3RzIHdpdGggbmV3IG5hbWVcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7IiwiaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuIFxuZXhwb3J0IGNvbnN0IENvZGVzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2xpdmUtY29kZXMnKTtcblxuQ29kZXMuYWxsb3coe1xuXG5cdGluc2VydDogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWV9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWV9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWV9XG59KTsiLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5leHBvcnQgY29uc3QgRmlsZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignbGl2ZS1maWxlcycpO1xuXG5cbkZpbGVzLmFsbG93KHtcblxuICBcdGluc2VydDogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWV9LFxuXG4gXHRyZW1vdmU6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlfSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlfVxufSk7XG5cbmlmKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdE1ldGVvci5wdWJsaXNoKFwiZmlsZVwiLCBmdW5jdGlvbihmaWxlSWQpIHtcblx0cmV0dXJuIEZpbGVzLmZpbmQoe19pZDpmaWxlSWR9KVxufSk7XG5cbk1ldGVvci5wdWJsaXNoKFwiZmlsZXNcIiwgZnVuY3Rpb24oc3BhY2VJZCkge1xuXHRyZXR1cm4gRmlsZXMuZmluZCh7c3BhY2VJZDogc3BhY2VJZH0pXG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goXCJhbGxGaWxlc1wiLCBmdW5jdGlvbigpIHtcblx0cmV0dXJuIEZpbGVzLmZpbmQoe30pXG59KTtcblxuXHR2YXIgZnMgPSBOcG0ucmVxdWlyZSgnZnMnKTtcblx0dmFyIHJpbXJhZiA9IE5wbS5yZXF1aXJlKCdyaW1yYWYnKTsgLy8gUGFja2FnZSB0byBkZWxldGUgZGlyZWN0b3JpZXNcblx0dmFyIHVwbG9hZERpciA9IE1ldGVvci5zZXR0aW5ncy51cGxvYWREaXI7XG5cblx0TWV0ZW9yLm1ldGhvZHMoe1xuXG5cdFx0ZGVsZXRlRmlsZTogZnVuY3Rpb24ocG9zdCkge1xuXG5cdFx0XHRpZiAocG9zdC50eXBlID09ICdsZXNzb24nKSAvLyBSZW1vdmUgZGlyZWN0b3J5IChlYWNoIHN0b3JsaW5lIGxlc3NvbiBpcyBzdG9yZWQgaW4gaXMgb3duIGRpcmVjdG9yeSlcblx0XHRcdFx0cmltcmFmKHVwbG9hZERpcitcIi9cIitwb3N0LnNwYWNlSWQrXCIvXCIrcG9zdC50eXBlK1wiL1wiK3Bvc3QuZmlsZUlkLCBmdW5jdGlvbiAoZXJyKSB7Y29uc29sZS5sb2coZXJyKX0pO1xuXHRcdFx0ZWxzZSAvLyBSZW1vdmUgdGhlIGZpbGVcbiAgICBcdFx0XHRmcy51bmxpbmtTeW5jKHVwbG9hZERpciArXCIvXCIrcG9zdC5maWxlUGF0aCwgZnVuY3Rpb24gKGVycikge2NvbnNvbGUubG9nKGVycil9KTtcbiAgXHRcdH1cblx0fSlcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG4gXG5pbXBvcnQgeyBBdXRob3JzIH0gZnJvbSAnLi9hdXRob3JzLmpzJztcbmltcG9ydCB7IFNwYWNlcyB9IGZyb20gJy4vc3BhY2VzLmpzJztcbmltcG9ydCB7IENhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3JpZXMuanMnO1xuaW1wb3J0IHsgRmlsZXMgfSBmcm9tICcuL2ZpbGVzLmpzJztcblxuXG5leHBvcnQgY29uc3QgUG9zdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignbGl2ZS1wb3N0cycpO1xuXG5cblBvc3RzLmFsbG93KHtcblx0aW5zZXJ0OiBmdW5jdGlvbigpIHtyZXR1cm4gdHJ1ZTt9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7cmV0dXJuIHRydWU7fSxcblxuXHR1cGRhdGU6IGZ1bmN0aW9uKCkge3JldHVybiB0cnVlO31cbn0pO1xuXG5pZihNZXRlb3IuaXNDbGllbnQpIHtcblx0Q291bnRzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oXCJjb3VudHNcIik7IC8vIFN0b3JlIHBvc3QgY291bnQgb2YgYSBzcGFjZSA7IEFsbG93IHRvIGNvdW50IHRoZW0gd2l0aG91dCBzdWJzY3JpYmUgdG8gYWxsIHBvc3RzIChvcHRpbWl6YXRpb24pXG5cdFBpbm5lZENvdW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwicGlubmVkQ291bnRzXCIpO1xuXHRGaWxlc0NvdW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiZmlsZXNDb3VudHNcIik7XG5cdEltYWdlc0NvdW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwiaW1hZ2VzQ291bnRzXCIpO1xuXHRMaXZlRmVlZENvdW50cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwibGl2ZUZlZWRDb3VudHNcIik7XG59XG5cbmlmKE1ldGVvci5pc1NlcnZlcikge1xuXG5NZXRlb3IucHVibGlzaCgncG9zdCcsIGZ1bmN0aW9uKHBvc3RJZCkge1xuXHRjaGVjayhwb3N0SWQsIFN0cmluZyk7XG5cdHJldHVybiBQb3N0cy5maW5kKHtfaWQ6IHBvc3RJZH0pO1xufSk7XG5cbk1ldGVvci5wdWJsaXNoKCdob21lUG9zdHMnLCBmdW5jdGlvbihzcGFjZUlkKSB7XG5cdGNoZWNrKHNwYWNlSWQsIFN0cmluZyk7XG5cdHJldHVybiBQb3N0cy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkLCB0eXBlOlwiaG9tZVwifSx7c29ydDoge3N1Ym1pdHRlZDogMX19KTtcbn0pO1xuXG5NZXRlb3IucHVibGlzaCgnbGl2ZUZlZWRQb3N0cycsIGZ1bmN0aW9uKHNwYWNlSWQpIHtcblx0Y2hlY2soc3BhY2VJZCwgU3RyaW5nKTtcblx0cmV0dXJuIFBvc3RzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWQsIHR5cGU6XCJsaXZlRmVlZFwifSx7c29ydDoge3N1Ym1pdHRlZDogLTF9fSk7XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ3Jlc291cmNlc1Bvc3RzJywgZnVuY3Rpb24oc3BhY2VJZCkge1xuXHRjaGVjayhzcGFjZUlkLCBTdHJpbmcpO1xuXHRyZXR1cm4gUG9zdHMuZmluZCh7c3BhY2VJZDogc3BhY2VJZCwgdHlwZTpcInJlc291cmNlc1wifSk7XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2goJ3Bvc3RzJywgZnVuY3Rpb24oZmlsdGVycywgc2tpcCA9IDAsIGxpbWl0ID0gMCkge1xuXHRyZXR1cm4gUG9zdHMuZmluZChmaWx0ZXJzLCB7c29ydDoge3N1Ym1pdHRlZDoxfSxza2lwOnNraXAsbGltaXQ6bGltaXR9KTtcbn0pO1xuXG5cblxuXHRNZXRlb3IucHVibGlzaChcImNvdW50LWFsbC1saXZlLWZlZWRcIiwgZnVuY3Rpb24gKHNwYWNlSWQpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHR2YXIgbGl2ZUZlZWRDb3VudHMgPSAwO1xuXHR2YXIgaW5pdGlhbGl6aW5nID0gdHJ1ZTtcblxuXHR2YXIgaGFuZGxlID0gUG9zdHMuZmluZCh7c3BhY2VJZDogc3BhY2VJZCwgdHlwZTonbGl2ZUZlZWQnfSkub2JzZXJ2ZUNoYW5nZXMoe1xuXHRcdGFkZGVkOiBmdW5jdGlvbiAoZG9jLCBpZHgpIHtcblx0XHRcdGxpdmVGZWVkQ291bnRzKys7XG5cdFx0XHRpZiAoIWluaXRpYWxpemluZykge1xuXHRcdFx0XHRzZWxmLmNoYW5nZWQoXCJsaXZlRmVlZENvdW50c1wiLCBzcGFjZUlkLCB7Y291bnQ6IGxpdmVGZWVkQ291bnRzfSk7ICAvLyBcImNvdW50c1wiIGlzIHRoZSBwdWJsaXNoZWQgY29sbGVjdGlvbiBuYW1lXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyZW1vdmVkOiBmdW5jdGlvbiAoZG9jLCBpZHgpIHtcblx0XHRcdGxpdmVGZWVkQ291bnRzLS07XG5cdFx0XHRzZWxmLmNoYW5nZWQoXCJsaXZlRmVlZENvdW50c1wiLCBzcGFjZUlkLCB7Y291bnQ6IGxpdmVGZWVkQ291bnRzfSk7ICAvLyBTYW1lIHB1Ymxpc2hlZCBjb2xsZWN0aW9uLCBcImNvdW50c1wiXG5cdFx0fVxuXHR9KTtcblxuXHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblxuXHQvLyBwdWJsaXNoIHRoZSBpbml0aWFsIGNvdW50LiBgb2JzZXJ2ZUNoYW5nZXNgIGd1YXJhbnRlZWQgbm90IHRvIHJldHVyblxuXHQvLyB1bnRpbCB0aGUgaW5pdGlhbCBzZXQgb2YgYGFkZGVkYCBjYWxsYmFja3MgaGF2ZSBydW4sIHNvIHRoZSBgY291bnRgXG5cdC8vIHZhcmlhYmxlIGlzIHVwIHRvIGRhdGUuXG5cdHNlbGYuYWRkZWQoXCJsaXZlRmVlZENvdW50c1wiLCBzcGFjZUlkLCB7Y291bnQ6IGxpdmVGZWVkQ291bnRzfSk7XG5cblx0Ly8gYW5kIHNpZ25hbCB0aGF0IHRoZSBpbml0aWFsIGRvY3VtZW50IHNldCBpcyBub3cgYXZhaWxhYmxlIG9uIHRoZSBjbGllbnRcblx0c2VsZi5yZWFkeSgpO1xuXG5cdC8vIHR1cm4gb2ZmIG9ic2VydmUgd2hlbiBjbGllbnQgdW5zdWJzY3JpYmVzXG5cdHNlbGYub25TdG9wKGZ1bmN0aW9uICgpIHtcblx0XHRoYW5kbGUuc3RvcCgpO1xuXHR9KTtcbn0pO1xufVxuXG4vLyBpZihNZXRlb3IuaXNTZXJ2ZXIpIHtcblxuLy8gXHRQb3N0cy5iZWZvcmUuaW5zZXJ0KGZ1bmN0aW9uICh1c2VySWQsIGRvYykge1xuLy8gXHRcdC8vIGNoYW5nZSBtb2RpZmllZCBkYXRlXG4vLyBcdFx0U3BhY2VzLnVwZGF0ZShkb2Muc3BhY2VJZCwgeyRzZXQ6IHttb2RpZmllZDogRGF0ZS5ub3coKX19KTtcbi8vIFx0XHRkb2MudmVyc2lvbiA9ICAxO1xuLy8gXHRcdC8vZG9jLm1vZGlmaWVkID0gRGF0ZS5ub3coKTtcbi8vIFx0XHQvKlxuLy8gXHRcdHZhciB2ZXJzaW9ubmluZyA9IHt9O1xuLy8gXHRcdF8uZXh0ZW5kKHZlcnNpb25uaW5nLCBkb2MsIHttb2RpZmllZEJ5OiB1c2VySWR9KTtcbi8vIFx0XHRNZXRlb3IuY2FsbCgnYWRkUG9zdFZlcnNpb24nLCB2ZXJzaW9ubmluZyk7XG4vLyBcdFx0Ki9cbi8vIFx0fSk7XG5cblxuLy8gXHQvLyBDb3B5IHBvc3QgaW4gcG9zdFZlcnNpb24gYmVmb3JlIHVwZGF0ZWRcbi8vIFx0Ly8gVE9ETyA6IHJlZmFjdG9yaW5nXG4vLyBcdFBvc3RzLmJlZm9yZS51cGRhdGUoZnVuY3Rpb24gKHVzZXJJZCwgZG9jLCBmaWVsZE5hbWVzLCBtb2RpZmllciwgb3B0aW9ucykge1xuXG5cblxuLy8gXHRcdC8vIHZhciB2ZXJzaW9ubmluZyA9IHt9O1xuLy8gXHRcdC8vIF8uZXh0ZW5kKHZlcnNpb25uaW5nLCBkb2MsIHttb2RpZmllZEJ5OiB1c2VySWR9KTtcbi8vIFx0XHQvLyBNZXRlb3IuY2FsbCgnYWRkUG9zdFZlcnNpb24nLCB2ZXJzaW9ubmluZyk7XG5cbi8vIFx0XHQvLyB2YXIgbmV3SW5jID0gZG9jLnZlcnNpb24rMTtcbi8vIFx0XHQvLyBpZiAoIW1vZGlmaWVyLiRzZXQpIG1vZGlmaWVyLiRzZXQgPSB7fTtcbi8vIFx0XHQvLyBtb2RpZmllci4kc2V0LnZlcnNpb24gPSBuZXdJbmM7XG4vLyBcdFx0Ly8gbW9kaWZpZXIuJHNldC5tb2RpZmllZCA9IERhdGUubm93KCk7XG4vLyBcdH0pO1xuXG5cbi8vIFx0UG9zdHMuYmVmb3JlLnJlbW92ZShmdW5jdGlvbiAodXNlcklkLCBkb2MpIHsgXG5cblxuLy8gXHRcdC8vIHZhciBkZWxldGlvblRpbWUgPSBEYXRlLm5vdygpO1xuXG4vLyBcdFx0Ly8gTWV0ZW9yLmNhbGwoJ3RhZ3NFZGl0Jywge3NwYWNlSWQ6IGRvYy5zcGFjZUlkLCBuZXdUYWdzOiBbXSwgb2xkVGFnczogZG9jLnRhZ3N9LCBmdW5jdGlvbihlcnJvcikgeyAvLyBEZWNyZW1lbnQgdGFncyBuUmVmc1xuLy8gXHRcdC8vIFx0aWYgKGVycm9yKSB7XG4vLyBcdFx0Ly8gXHRcdHRocm93RXJyb3IoZXJyb3IucmVhc29uKTtcbi8vIFx0XHQvLyBcdH1cbi8vICBcdC8vIFx0fSk7XG5cbi8vIFx0XHQvLyB2YXIgZmlsZSA9IEZpbGVzLmZpbmRPbmUoeydtZXRhZGF0YS5wb3N0SWQnOiBkb2MuZmlsZUlkfSk7IC8vIFJlbW92ZSBmaWxlXG4vLyBcdFx0Ly8gaWYgKGZpbGUpe1xuLy8gXHRcdC8vIFx0IC8vIFRPRE8gOiByZW1vdmUgZmlsZSAobm90IG9ubHkgZnJvbSBjb2xsZWN0aW9uKVxuLy8gXHRcdC8vIFx0RmlsZXMucmVtb3ZlKGZpbGUuX2lkKTtcbi8vIFx0XHQvLyB9XG5cbi8vIFx0XHQvLyBEZWxldGUgdGhlIGZpbGUgaWYgZXhpc3RzXG4vLyBcdFx0dmFyIGZpbGVJZCA9IGRvYy5maWxlSWQ7XG4vLyBcdFx0dmFyIGZpbGVFeHQgPSBkb2MuZmlsZUV4dDtcbi8vIFx0XHRpZiAoZmlsZUlkKSB7XG4vLyBcdFx0XHRGaWxlcy5yZW1vdmUoe2ZpbGVJZDpmaWxlSWR9KTtcbi8vIFx0XHRcdE1ldGVvci5jYWxsKCdkZWxldGVGaWxlJyxkb2MpO1xuLy8gXHRcdH1cblxuLy8gXHRcdGlmIChkb2MudHlwZSA9PSAnaG9tZScpIHsgLy8gVXBkYXRlIHBvc3Qgb3JkZXJcbi8vIFx0XHRcdHZhciBwb3N0ID0gZG9jO1xuXG4vLyBcdFx0XHR2YXIgcG9zdHNEb3duID0gUG9zdHMuZmluZCh7c3BhY2VJZDpkb2Muc3BhY2VJZCwgdHlwZTonaG9tZScsIG9yZGVyOnskZ3Q6cG9zdC5vcmRlcn19KS5mZXRjaCgpO1xuXG4vLyBcdFx0XHRmb3IgKHZhciBpPTA7IGk8cG9zdHNEb3duLmxlbmd0aDsgaSsrKSB7XG4vLyBcdFx0XHRcdGNvbnNvbGUubG9nKFwiaWQgOiBcIitwb3N0c0Rvd25baV0uX2lkKTtcbi8vIFx0XHRcdFx0dmFyIGN1cnJlbnRQb3N0ID0gcG9zdHNEb3duW2ldO1xuLy8gXHRcdFx0XHRQb3N0cy51cGRhdGUoe19pZDpjdXJyZW50UG9zdC5faWR9LHskc2V0OntvcmRlcjpjdXJyZW50UG9zdC5vcmRlci0xfX0pO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cblxuLy8gXHRcdGlmIChkb2MudHlwZSA9PSAnbGl2ZUZlZWQnKSB7XG4vLyBcdFx0XHR2YXIgYXV0aG9yID0gQXV0aG9ycy5maW5kT25lKHtzcGFjZUlkOiBkb2Muc3BhY2VJZCwgbmFtZTogZG9jLmF1dGhvcn0pO1xuLy8gXHRcdFx0QXV0aG9ycy51cGRhdGUoYXV0aG9yLl9pZCwgeyRpbmM6IHtuUmVmczogLTF9fSk7IC8vIERlY3JlbWVudCBhdXRob3IgblJlZnNcblxuLy8gXHRcdFx0aWYgKGRvYy5jYXRlZ29yeSkge1xuLy8gXHRcdFx0XHR2YXIgY2F0ZWdvcnkgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe3NwYWNlSWQ6IGRvYy5zcGFjZUlkLCB0eXBlOlwibGl2ZUZlZWRcIiwgbmFtZTogZG9jLmNhdGVnb3J5fSk7XG4vLyBcdFx0XHRcdGlmIChjYXRlZ29yeSlcbi8vIFx0XHRcdFx0XHRDYXRlZ29yaWVzLnVwZGF0ZShjYXRlZ29yeS5faWQsIHskaW5jOiB7blJlZnM6IC0xfX0pOyAvLyBEZWNyZW1lbnQgY2F0ZWdvcnkgblJlZnNcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG5cbi8vIFx0XHRpZiAoZG9jLnR5cGUgPT0gJ3Jlc291cmNlJykge1xuLy8gXHRcdFx0aWYgKGRvYy5jYXRlZ29yeSkge1xuLy8gXHRcdFx0XHR2YXIgY2F0ZWdvcnkgPSBDYXRlZ29yaWVzLmZpbmRPbmUoe3NwYWNlSWQ6IGRvYy5zcGFjZUlkLCB0eXBlOlwicmVzb3VyY2VcIiwgbmFtZTogZG9jLmNhdGVnb3J5fSk7XG4vLyBcdFx0XHRcdGlmIChjYXRlZ29yeSlcbi8vIFx0XHRcdFx0XHRDYXRlZ29yaWVzLnVwZGF0ZShjYXRlZ29yeS5faWQsIHskaW5jOiB7blJlZnM6IC0xfX0pOyAvLyBEZWNyZW1lbnQgY2F0ZWdvcnkgblJlZnNcbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdFx0Ly8gLy8gQWRkIHBvc3QgdG8gcG9zdHMgdmVyc2lvbnNcbi8vIFx0XHQvLyAvLyBUT0RPIDogcmVmYWN0b3Jpbmdcbi8vIFx0XHQvLyB2YXIgc3BhY2UgPSBTcGFjZXMuZmluZE9uZShkb2Muc3BhY2VJZCk7XG4vLyBcdFx0Ly8gLy8gdmFyIG9sZFBvc3RzID0gW107XG4vLyBcdFx0Ly8gLy8gaWYgKHNwYWNlLm9sZFBvc3RzICE9PSB1bmRlZmluZWQpIHtcbi8vIFx0XHQvLyAvLyBcdG9sZFBvc3RzID0gc3BhY2Uub2xkUG9zdHM7XG4vLyBcdFx0Ly8gLy8gfVxuLy8gXHRcdC8vIC8vIG9sZFBvc3RzLnB1c2goZG9jLl9pZCk7XG4vLyBcdFx0Ly8gLy9TcGFjZXMudXBkYXRlKGRvYy5zcGFjZUlkLCB7JHNldDoge29sZFBvc3RzOiBvbGRQb3N0cywgbW9kaWZpZWQ6IERhdGUubm93KCl9fSk7XG4vLyBcdFx0Ly8gU3BhY2VzLnVwZGF0ZShkb2Muc3BhY2VJZCwgeyRzZXQ6IHttb2RpZmllZDogRGF0ZS5ub3coKX19KTtcblxuLy8gXHRcdC8vIGRvYy52ZXJzaW9uID0gIGRvYy52ZXJzaW9uKys7XG4vLyBcdFx0Ly8gZG9jLm1vZGlmaWVkID0gRGF0ZS5ub3coKTtcbi8vIFx0XHQvLyB2YXIgdmVyc2lvbm5pbmcgPSB7fTtcbi8vIFx0XHQvLyBfLmV4dGVuZCh2ZXJzaW9ubmluZywgZG9jLCB7bW9kaWZpZWRCeTogdXNlcklkLCBsYXN0OiB0cnVlfSk7XG4vLyBcdFx0Ly8gTWV0ZW9yLmNhbGwoJ2FkZFBvc3RWZXJzaW9uJywgdmVyc2lvbm5pbmcpO1xuLy8gXHR9KTtcbi8vIH1cblxuaWYoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0UG9zdHMuYWZ0ZXIucmVtb3ZlKGZ1bmN0aW9uICh1c2VySWQsIGRvYykgeyBcblx0XHRcdFxuXHRcdFx0Ly8gRGVsZXRlIHRoZSBmaWxlIGlmIGV4aXN0c1xuXHRcdFx0dmFyIGZpbGVJZCA9IGRvYy5maWxlSWQ7XG5cdFx0XHR2YXIgZmlsZUV4dCA9IGRvYy5maWxlRXh0O1xuXHRcdFx0aWYgKGZpbGVJZCkge1xuXHRcdFx0XHRGaWxlcy5yZW1vdmUoe2ZpbGVJZDpmaWxlSWR9KTtcblx0XHRcdFx0TWV0ZW9yLmNhbGwoJ2RlbGV0ZUZpbGUnLGRvYyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSBhdXRob3IgY291bnQgYW5kIGRlY3JlYXNlIGNhdGVnb3J5IGNvdW50XG5cdFx0XHRpZiAoZG9jLnR5cGUgPT0gJ2xpdmVGZWVkJykge1xuXHRcdFx0dmFyIGF1dGhvciA9IEF1dGhvcnMuZmluZE9uZSh7c3BhY2VJZDogZG9jLnNwYWNlSWQsIG5hbWU6IGRvYy5hdXRob3J9KTtcblx0XHRcdEF1dGhvcnMudXBkYXRlKGF1dGhvci5faWQsIHskaW5jOiB7blJlZnM6IC0xfX0pOyAvLyBEZWNyZW1lbnQgYXV0aG9yIG5SZWZzXG5cblx0XHRcdGlmIChkb2MuY2F0ZWdvcnkpIHtcblx0XHRcdFx0dmFyIGNhdGVnb3J5ID0gQ2F0ZWdvcmllcy5maW5kT25lKHtzcGFjZUlkOiBkb2Muc3BhY2VJZCwgdHlwZTpcImxpdmVGZWVkXCIsIG5hbWU6IGRvYy5jYXRlZ29yeX0pO1xuXHRcdFx0XHRpZiAoY2F0ZWdvcnkpXG5cdFx0XHRcdFx0Q2F0ZWdvcmllcy51cGRhdGUoY2F0ZWdvcnkuX2lkLCB7JGluYzoge25SZWZzOiAtMX19KTsgLy8gRGVjcmVtZW50IGNhdGVnb3J5IG5SZWZzXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5NZXRlb3IubWV0aG9kcyh7XG5cblx0YWRkTGlrZUNvbW1lbnQ6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRQb3N0cy51cGRhdGUoe19pZDpkYXRhLmN1cnJlbnRQb3N0SWQsXCJjb21tZW50cy5pZFwiOmRhdGEuY3VycmVudENvbW1lbnRJZH0sIHskcHVzaDoge1wiY29tbWVudHMuJC5saWtlc1wiOiBkYXRhLmF1dGhvcn19KTtcblx0fSxcblx0cmVtb3ZlTGlrZUNvbW1lbnQ6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRQb3N0cy51cGRhdGUoe19pZDpkYXRhLmN1cnJlbnRQb3N0SWQsXCJjb21tZW50cy5pZFwiOmRhdGEuY3VycmVudENvbW1lbnRJZH0sIHskcHVsbDoge1wiY29tbWVudHMuJC5saWtlc1wiOiBkYXRhLmF1dGhvcn19KTtcblx0fSxcblx0aG9tZVBvc3RJbnNlcnQ6IGZ1bmN0aW9uKHBvc3RBdHRyaWJ1dGVzKSB7XG5cdFx0Y2hlY2socG9zdEF0dHJpYnV0ZXMuc3BhY2VJZCwgU3RyaW5nKTtcblxuXHRcdC8vaWYgKE1ldGVvci5zZXR0aW5ncy5wdWJsaWMpXG5cdFx0XHQvL3ZhciBwb3N0RnJvbUNsb3VkID0gIShNZXRlb3Iuc2V0dGluZ3MucHVibGljLmlzQm94ID09PSBcInRydWVcIik7IC8vIFNldCB3aGVyZSBwb3N0IGlzIHN1Ym1pdHRlZCAoYm94IG9yIGNsb3VkKVxuXG5cdFx0cG9zdCA9IF8uZXh0ZW5kKHBvc3RBdHRyaWJ1dGVzLCB7XG5cdFx0XHRzdWJtaXR0ZWQ6IERhdGUubm93KCksXG5cdFx0XHRvcmRlcjogUG9zdHMuZmluZCh7c3BhY2VJZDogcG9zdEF0dHJpYnV0ZXMuc3BhY2VJZCwgdHlwZTogcG9zdEF0dHJpYnV0ZXMudHlwZX0pLmNvdW50KCksXG5cdFx0XHQvL25iOiBQb3N0cy5maW5kKHtzcGFjZUlkOiBwb3N0QXR0cmlidXRlcy5zcGFjZUlkfSkuY291bnQoKSArIDEsXG5cdFx0XHQvL3Bpbm5lZCA6IGZhbHNlLFxuXHRcdH0pO1xuXG5cdFx0dmFyIHNwYWNlID0gU3BhY2VzLmZpbmRPbmUocG9zdEF0dHJpYnV0ZXMuc3BhY2VJZCk7XG5cdFx0cG9zdC5faWQgPSBQb3N0cy5pbnNlcnQocG9zdCk7XHRcdFxuXHRcdHJldHVybiBwb3N0Ll9pZDtcblx0fSxcblx0cG9zdEluc2VydDogZnVuY3Rpb24ocG9zdEF0dHJpYnV0ZXMpIHtcblx0XHRjaGVjayhwb3N0QXR0cmlidXRlcy5zcGFjZUlkLCBTdHJpbmcpO1xuXG5cdFx0Ly9pZiAoTWV0ZW9yLnNldHRpbmdzLnB1YmxpYylcblx0XHRcdC8vdmFyIHBvc3RGcm9tQ2xvdWQgPSAhKE1ldGVvci5zZXR0aW5ncy5wdWJsaWMuaXNCb3ggPT09IFwidHJ1ZVwiKTsgLy8gU2V0IHdoZXJlIHBvc3QgaXMgc3VibWl0dGVkIChib3ggb3IgY2xvdWQpXG5cblx0XHRpdGVtID0gQXV0aG9ycy5maW5kT25lKHtzcGFjZUlkOiBwb3N0QXR0cmlidXRlcy5zcGFjZUlkLCBuYW1lOiBwb3N0QXR0cmlidXRlcy5hdXRob3J9KTtcblx0XHRBdXRob3JzLnVwZGF0ZShpdGVtLCB7JGluYzoge25SZWZzOiAxfX0pO1xuXHRcdHBvc3QgPSBfLmV4dGVuZChwb3N0QXR0cmlidXRlcywge1xuXHRcdFx0YXV0aG9ySWQ6IEF1dGhvcnMuZmluZE9uZSh7c3BhY2VJZDogcG9zdEF0dHJpYnV0ZXMuc3BhY2VJZCwgbmFtZTogcG9zdEF0dHJpYnV0ZXMuYXV0aG9yfSkuX2lkLFxuXHRcdFx0c3VibWl0dGVkOiBEYXRlLm5vdygpLFxuXHRcdFx0bmI6IFBvc3RzLmZpbmQoe3NwYWNlSWQ6IHBvc3RBdHRyaWJ1dGVzLnNwYWNlSWR9KS5jb3VudCgpICsgMSxcblx0XHRcdHBpbm5lZCA6IGZhbHNlLFxuXHRcdFx0Ly8gcG9zdEZyb21DbG91ZDogcG9zdEZyb21DbG91ZCAvLyBXb3JrYXJvdW5kIGJ1ZyBzeW5jXG5cdFx0fSk7XG5cblx0XHQvLyBHZXQgY2xpZW50IElQIGFkZHJlc3Ncblx0XHRpZiAoTWV0ZW9yLmlzU2VydmVyKVxuXHRcdFx0cG9zdCA9IF8uZXh0ZW5kKHBvc3RBdHRyaWJ1dGVzLCB7Y2xpZW50SVA6IHRoaXMuY29ubmVjdGlvbi5jbGllbnRBZGRyZXNzfSk7XG5cblx0XHR2YXIgc3BhY2UgPSBTcGFjZXMuZmluZE9uZShwb3N0QXR0cmlidXRlcy5zcGFjZUlkKTtcblxuXHRcdGNhdGVnb3J5ID0gQ2F0ZWdvcmllcy5maW5kT25lKHtzcGFjZUlkOiBwb3N0QXR0cmlidXRlcy5zcGFjZUlkLCBuYW1lOiBwb3N0QXR0cmlidXRlcy5jYXRlZ29yeX0pOyAvLyBJbmNyZW1lbnQgY2F0ZWdvcnkgblJlZnNcblx0XHRDYXRlZ29yaWVzLnVwZGF0ZShjYXRlZ29yeSwgeyRpbmM6IHtuUmVmczogMX19KTtcblxuXHRcdHBvc3QuX2lkID0gUG9zdHMuaW5zZXJ0KHBvc3QpO1x0XHRcblx0XHRyZXR1cm4gcG9zdC5faWQ7XG5cdH1cbn0pOyIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcblxuaW1wb3J0IHsgQXV0aG9ycyB9IGZyb20gJy4vYXV0aG9ycy5qcyc7XG5pbXBvcnQgeyBDb2RlcyB9IGZyb20gJy4vY29kZXMuanMnO1xuaW1wb3J0IHsgUG9zdHMgfSBmcm9tICcuL3Bvc3RzLmpzJztcblxuZXhwb3J0IGNvbnN0IFNwYWNlcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdsaXZlLXNwYWNlcycpO1xuXG5cblNwYWNlcy5hbGxvdyh7XG5cblx0Ly91cGRhdGU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIHRydWV9LFxuXHQvL3JlbW92ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gdHJ1ZX0sXG5cblx0aW5zZXJ0OiBmdW5jdGlvbih1c2VySWQsIHNwYWNlKSB7IHJldHVybiBvd25zRG9jdW1lbnQodXNlcklkLCBzcGFjZSkgfHwgaXNBZG1pbih1c2VySWQpOyB9LFxuXG5cdHVwZGF0ZTogZnVuY3Rpb24odXNlcklkLCBzcGFjZSkgeyByZXR1cm4gb3duc0RvY3VtZW50KHVzZXJJZCwgc3BhY2UpIHx8IGlzQWRtaW4odXNlcklkKTsgfSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKHVzZXJJZCwgc3BhY2UpIHsgcmV0dXJuIG93bnNEb2N1bWVudCh1c2VySWQsIHNwYWNlKSB8fCBpc0FkbWluKHVzZXJJZCk7IH1cbn0pO1xuXG5cbmlmKE1ldGVvci5pc1NlcnZlcikge1xuXG5cblx0TWV0ZW9yLnB1Ymxpc2goJ3NwYWNlJywgZnVuY3Rpb24oc3BhY2VJZCkge1xuXHRcdGNvbnNvbGUubG9nKFwicHVibGljYXRpb24gc3BhY2UuLi5cIik7XG5cdFx0Y2hlY2soc3BhY2VJZCwgU3RyaW5nKTtcblx0XHRyZXR1cm4gU3BhY2VzLmZpbmQoe19pZDogc3BhY2VJZH0pO1x0XG5cdH0pO1xuXG5cdE1ldGVvci5wdWJsaXNoKCdhbGxTcGFjZXMnLCBmdW5jdGlvbigpIHtcblx0cmV0dXJuIFNwYWNlcy5maW5kKHt9KTtcblx0fSk7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24oKSB7XG5cdHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuIFx0fSk7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ3B1YmxpY1NwYWNlcycsIGZ1bmN0aW9uKHVzZXJJZCkge1xuXHRyZXR1cm4gU3BhY2VzLmZpbmQoe1wicGVybWlzc2lvbnMucHVibGljXCI6dHJ1ZX0pO1xuXHR9KTtcblxuXHRNZXRlb3IucHVibGlzaCgnb3duU3BhY2VzJywgZnVuY3Rpb24odXNlcklkKSB7XG5cdFx0Y29uc29sZS5sb2coXCJvd24gc3BhY2UuLi4gOiBcIitTcGFjZXMuZmluZCgpKTtcblx0XHRyZXR1cm4gU3BhY2VzLmZpbmQoe3VzZXJJZDp1c2VySWR9KTtcblx0fSk7XG5cblx0TWV0ZW9yLnB1Ymxpc2goJ3NwYWNlc1Zpc2l0ZWQnLCBmdW5jdGlvbihzcGFjZXNJZCkge1xuXHRcdHJldHVybiBTcGFjZXMuZmluZCh7IFwiX2lkXCI6IHsgXCIkaW5cIjogc3BhY2VzSWQgfSB9KTtcblx0fSk7XG5cdC8vIFNwYWNlcy5iZWZvcmUudXBkYXRlKGZ1bmN0aW9uICh1c2VySWQsIGRvYywgZmllbGROYW1lcywgbW9kaWZpZXIsIG9wdGlvbnMpIHtcblxuXHQvLyBcdG1vZGlmaWVyLiRzZXQgPSBtb2RpZmllci4kc2V0IHx8IHt9O1xuXHQvLyBcdG1vZGlmaWVyLiRzZXQubW9kaWZpZWQgPSBEYXRlLm5vdygpO1xuXG5cdC8vIFx0Ly8gY2hhbmdlIG1vZGlmaWVkIGRhdGVcblx0Ly8gXHRkb2MudmVyc2lvbiA9ICBkb2MudmVyc2lvbisrO1xuXHQvLyBcdGRvYy5tb2RpZmllZCA9IERhdGUubm93KCk7XG5cdC8vIH0pO1xuXG5cdC8vIFNwYWNlcy5iZWZvcmUuaW5zZXJ0KGZ1bmN0aW9uICh1c2VySWQsIGRvYykge1xuXHQvLyBcdC8vIGNoYW5nZSBtb2RpZmllZCBkYXRlXG5cdC8vIFx0ZG9jLnN1Ym1pdHRlZCA9ICBEYXRlLm5vdygpO1xuXHQvLyB9KTtcblxuaWYoTWV0ZW9yLmlzU2VydmVyKSB7XG5cblx0Ly8gUmVtb3ZlIGV2ZXJ5IHBvc3RzIHdoZW4gYSBzcGFjZSBpcyBkZWxldGVkXG5cdFNwYWNlcy5iZWZvcmUucmVtb3ZlKGZ1bmN0aW9uICh1c2VySWQsIGRvYykge1xuXG5cdFx0dmFyIHNwYWNlSWQgPSBkb2MuX2lkO1xuXHRcdFBvc3RzLnJlbW92ZSh7c3BhY2VJZDpzcGFjZUlkfSk7XG5cdH0pO1xufVxuXG5cblx0TWV0ZW9yLm1ldGhvZHMoe1xuXG5cdFx0Z2V0U3BhY2VJZDogZnVuY3Rpb24oc3BhY2VDb2RlKSB7XG5cdFx0XHRpZiAoU3BhY2VzLmZpbmRPbmUoe3NwYWNlQ29kZTpzcGFjZUNvZGV9KSlcblx0XHRcdFx0cmV0dXJuIFNwYWNlcy5maW5kT25lKHtzcGFjZUNvZGU6c3BhY2VDb2RlfSkuX2lkO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHRcdHVwZGF0ZUNvZGU6IGZ1bmN0aW9uKG9sZENvZGUsIG5ld0NvZGUpIHtcblx0XHRcdHZhciBjb2RlSWQgPSBDb2Rlcy5maW5kT25lKHtjb2RlOiBvbGRDb2RlfSkuX2lkO1xuXHRcdFx0Q29kZXMudXBkYXRlKGNvZGVJZCx7Y29kZTpuZXdDb2RlfSwgZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGVuIGNoYW5naW5nIGNvZGUgOiBcIitlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkNvZGUgaGFzIGJlZW4gY2hhbmdlZC5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHRkZWxldGVTcGFjZTogZnVuY3Rpb24oc3BhY2VJZCkge1xuXHRcdFx0U3BhY2VzLnJlbW92ZShzcGFjZUlkKTtcblx0XHRcdC8vUG9zdHMucmVtb3ZlKHtzcGFjZUlkOnNwYWNlSWR9LHttdWx0aTp0cnVlfSk7XG5cdFx0fSxcblx0XHRkZWxldGVTcGFjZXM6IGZ1bmN0aW9uKHVzZXJJZCkge1xuXG5cdFx0XHRTcGFjZXMucmVtb3ZlKHt1c2VySWQ6dXNlcklkfSk7XG5cblx0XHR9LFxuXHRcdHNwYWNlSW5zZXJ0OiBmdW5jdGlvbihzcGFjZUF0dHJpYnV0ZXMpIHtcblxuXHRcdFx0Y2hlY2soc3BhY2VBdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdFx0dGl0bGU6IFN0cmluZyxcblx0XHRcdFx0XHRsYW5nOiBTdHJpbmdcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgbmJPZkNvZGVzID0gQ29kZXMuZmluZCgpLmNvdW50KCk7XG5cdFx0XHR2YXIgcHJlZml4ID0gTWV0ZW9yLnNldHRpbmdzLnB1YmxpYy5wcmVmaXg7XG5cdFx0XHR2YXIgY29kZUxlbmd0aCA9IDQ7XG5cblx0XHRcdGlmIChuYk9mQ29kZXMgPD0gMTAwMClcblx0XHRcdFx0Y29kZUxlbmd0aCA9IDI7XG5cdFx0XHRlbHNlIGlmIChuYk9mQ29kZXMgPiAxMDAwICYmIG5iT2ZDb2RlcyA8PSAxMDAwMDApXG5cdFx0XHRcdGNvZGVMZW5ndGggPSAzO1xuXHRcdFx0ZWxzZSBpZiAobmJPZkNvZGVzID4gMTAwMDAwICYmIG5iT2ZDb2RlcyA8PSAxMDAwMDAwMClcblx0XHRcdFx0Y29kZUxlbmd0aCA9IDQ7XG5cblx0XHRcdHZhciBjb2RlID0gcHJlZml4ICsgbWFrZUNvZGUoY29kZUxlbmd0aCk7XG5cdFx0XHR3aGlsZSAodHlwZW9mIENvZGVzLmZpbmRPbmUoe2NvZGU6IGNvZGV9KSAhPSAndW5kZWZpbmVkJylcblx0XHRcdFx0Y29kZSA9IHByZWZpeCArIG1ha2VDb2RlKGNvZGVMZW5ndGgpO1xuXG5cdFx0XHRDb2Rlcy5pbnNlcnQoe2NvZGU6Y29kZSwgdXNlcklkOk1ldGVvci51c2VySWQoKX0pO1xuXG5cdFx0XHR2YXIgdXNlcklkID0gTWV0ZW9yLnVzZXJJZCgpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJ1c2VyIElkIDogXCIrQWNjb3VudHMudXNlcklkKCkpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ1c2VyIElkIDogXCIrTWV0ZW9yLnVzZXJJZCgpKTtcblxuXHRcdFx0dmFyIHNwYWNlID0gXy5leHRlbmQoc3BhY2VBdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdHVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRzcGFjZUNvZGU6IGNvZGUsXG5cdFx0XHRcdHN1Ym1pdHRlZDogbmV3IERhdGUoKSxcblx0XHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHRcdFx0Y29kZVBhbmVsOiB0cnVlLFxuXHRcdFx0XHRjcmVhdGVVc2VyQWxsb3dlZDp0cnVlLFxuXHRcdFx0XHRsaXZlRmVlZDp0cnVlLFxuXHRcdFx0XHRsZXNzb25zOmZhbHNlLFxuXHRcdFx0XHRyZXNvdXJjZXM6dHJ1ZSxcblx0XHRcdFx0bGl2ZUZlZWRDb21tZW50czp0cnVlLFxuXHRcdFx0XHRwZXJtaXNzaW9uczp7cHVibGljOmZhbHNlLCBsaXZlRmVlZEFkZFBvc3Q6dHJ1ZSwgbGl2ZUZlZWRBZGRDYXRlZ29yeTpmYWxzZX1cblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgc3BhY2VJZCA9IFNwYWNlcy5pbnNlcnQoc3BhY2UpO1xuXG5cdFx0XHRNZXRlb3IuY2FsbCgnYXV0aG9ySW5zZXJ0JywgJ0ludml0w6knLCBzcGFjZUlkICk7XG5cblx0XHRcdC8vIEluc2VydCB3ZWxjb21lIHBvc3Rcblx0XHRcdGlmIChzcGFjZUF0dHJpYnV0ZXMubGFuZyA9PSBcImZyLUZSXCIgfHwgc3BhY2VBdHRyaWJ1dGVzLmxhbmcgPT0gXCJmclwiKVxuXHRcdFx0XHRQb3N0cy5pbnNlcnQoe3NwYWNlSWQ6c3BhY2VJZCwgdHlwZTpcImhvbWVcIiwgb3JkZXI6MCwgc3VibWl0dGVkOiBEYXRlLm5vdygpLHRpdGxlOiBcIkJpZW52ZW51ZSBkYW5zIHZvdHJlIG5vdXZlbCBlc3BhY2UgQmVla2VlIExpdmUgIVwiLCBib2R5OlwiPHA+QmVla2VlIExpdmUgZXN0IGwnb3V0aWwgaWTDqWFsIHBvdXIgc291dGVuaXIgbGVzIGludGVyYWN0aW9ucyBlbiB0ZW1wcyByw6llbCwgcG91ciBwYXJ0YWdlciBkZXMgcGhvdG9zIG91IGRlcyBmaWNoaWVycyBhdmVjIHZvcyDDqXR1ZGlhbnRzLjwvcD5cXG48cD5DZSBtZXNzYWdlIGVzdCB2aXNpYmxlIHBhciB2b3Mgw6l0dWRpYW50cyA6IHNlbnRlei12b3VzIGxpYnJlIGRlIGxlIG1vZGlmaWVyIChvdSBkZSBsZSBzdXBwcmltZXIpIHBvdXIgY29tbXVuaXF1ZXIgYXZlYyBldXguPC9wPlwifSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdFBvc3RzLmluc2VydCh7c3BhY2VJZDpzcGFjZUlkLCB0eXBlOlwiaG9tZVwiLCBvcmRlcjowLCBzdWJtaXR0ZWQ6IERhdGUubm93KCksdGl0bGU6IFwiV2VsY29tZSB0byB5b3VyIG5ldyBCZWVrZWUgTGl2ZSBzcGFjZSFcIiwgYm9keTpcIjxwPkJlZWtlZSBMaXZlIGlzIGlkZWFsIGZvciByZWFsLXRpbWUgaW50ZXJhY3Rpb25zIGFuZCB0byBzaGFyZSBwaWN0dXJlcyBvciBmaWxlcyB3aXRoIHlvdXIgbGVhcm5lcnMuPC9wPlxcbjxwPlRoaXMgbWVzc2FnZSB3aWxsIGJlIHZpc2liaWxlIGZvciBldmVyeW9uZTogZmVlbCBmcmVlIHRvIGVkaXQgKG9yIGRlbGV0ZSApIGl0IGFjY29yZGluZyB0byB5b3VyIG5lZWRzLjwvcD5cIn0pO1xuXG5cdFx0XHRyZXR1cm4geyBfaWQ6IHNwYWNlSWQgfTtcblx0XHR9XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIG1ha2VDb2RlKGxlbmd0aClcbntcblx0dmFyIHRleHQgPSBcIlwiO1xuXHR2YXIgcG9zc2libGUgPSBcIkFCQ0RFRkdISktMTU5QUVJTVFVWV1hZWmFiY2RlZmdoaWprbW5vcHFyc3R1dnd4eXoxMjM0NTY3ODlcIjtcblxuXHRmb3IoIHZhciBpPTA7IGkgPCBsZW5ndGg7IGkrKyApXG5cdFx0dGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG5cdFxuXHRyZXR1cm4gdGV4dDtcbn0iLCJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cblxuLy8gU2hhcmluZyB0aGUgc2FtZSBBY2NvdW50IGNvbGxlY3Rpb24gdGhhbiBiZWVrZWUtbGl2ZVxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXG5cdC8vIGNoZWNrIHRoYXQgdGhlIHVzZXJJZCBzcGVjaWZpZWQgaXMgYWRtaW5cbmlzQWRtaW4gPSBmdW5jdGlvbih1c2VySWQpIHtcblx0Y29uc29sZS5sb2coXCJpc2FkbWluXCIpO1xuICByZXR1cm4gUm9sZXMudXNlcklzSW5Sb2xlKE1ldGVvci51c2VyKCksICdhZG1pbicpO1xufVxuXG5cbi8vIFB1Ymxpc2ggUm9sZXMgdG8gY2xpZW50XG5NZXRlb3IucHVibGlzaChudWxsLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnVzZXJJZCkge1xuICAgIHJldHVybiBNZXRlb3Iucm9sZUFzc2lnbm1lbnQuZmluZCh7ICd1c2VyLl9pZCc6IHRoaXMudXNlcklkIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVhZHkoKVxuICB9XG59KTtcblxuTWV0ZW9yLnB1Ymxpc2gobnVsbCwgZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIE1ldGVvci5yb2xlQXNzaWdubWVudC5maW5kKCk7XG5cbn0pO1xufSIsImltcG9ydCB7IFNwYWNlcyB9IGZyb20gJy4uL2ltcG9ydHMvYXBpL3NwYWNlcy5qcyc7XG5cblxuLy8gIyMjICBDcmVhdGUgYWRtaW4gdXNlciBhdCBmaXJzdCBzdGFydCAgIyMjXG5cbmlmIChTcGFjZXMuZmluZCgpLmNvdW50KCkgPT09IDApIHtcblx0aWYgKE1ldGVvci51c2Vycy5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuXG5cdFx0Ly8gQ3JlYXRlIHRoZSBhZG1pbiByb2xlXG5cdFx0Um9sZXMuY3JlYXRlUm9sZSgnYWRtaW4nLCB7dW5sZXNzRXhpc3RzOiB0cnVlfSk7XG5cblx0XHR2YXIgYWRtaW5QYXNzd29yZCA9IE1ldGVvci5zZXR0aW5ncy5hZG1pblBhc3N3b3JkO1xuXG5cdFx0dmFyIHVzZXJzID0gW1xuXHRcdFx0e3VzZXJuYW1lOlwiYWRtaW5cIixyb2xlczpbJ2FkbWluJ119LFxuXHRcdF07XG5cblx0XHRfLmVhY2godXNlcnMsIGZ1bmN0aW9uICh1c2VyKSB7XG5cdFx0XHR2YXIgaWQ7XG5cdFx0XHRpZCA9IEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuXHRcdFx0XHR1c2VybmFtZTogdXNlci51c2VybmFtZSxcblx0XHRcdFx0ZW1haWw6IFwiYWRtaW5AYmVla2VlLmNoXCIsXG5cdFx0XHRcdC8vcGFzc3dvcmQ6IGFkbWluUGFzc3dvcmQsXG5cdFx0XHRcdHBhc3N3b3JkOiBcImFkbWluXCIsXG5cdFx0XHRcdHByb2ZpbGU6e25hbWU6XCJBZG1pblwifVxuXHRcdFx0fSk7XG5cblx0XHRcdGlmICh1c2VyLnJvbGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Um9sZXMuYWRkVXNlcnNUb1JvbGVzKGlkLCB1c2VyLnJvbGVzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSIsIi8vIGNoZWNrIHRoYXQgdGhlIHVzZXJJZCBzcGVjaWZpZWQgb3ducyB0aGUgZG9jdW1lbnRzXG5vd25zRG9jdW1lbnQgPSBmdW5jdGlvbih1c2VySWQsIGRvYykge1xuICByZXR1cm4gZG9jICYmIGRvYy51c2VySWQgPT09IHVzZXJJZDtcbn1cblxuLy8gY2hlY2sgdGhhdCB0aGUgdXNlcklkIHNwZWNpZmllZCBpcyBhZG1pblxuaXNBZG1pbiA9IGZ1bmN0aW9uKHVzZXJJZCkge1xuICByZXR1cm4gUm9sZXMudXNlcklzSW5Sb2xlKE1ldGVvci51c2VyKCksICdhZG1pbicpO1xufSIsIi8vIE1ldGVvci5wdWJsaXNoKCdzcGFjZScsIGZ1bmN0aW9uKHNwYWNlSWQpIHtcbi8vIFx0Y2hlY2soc3BhY2VJZCwgU3RyaW5nKTtcbi8vIFx0cmV0dXJuIFNwYWNlcy5maW5kKHtfaWQ6IHNwYWNlSWR9KTtcdFxuLy8gfSk7XG5cbi8vIE1ldGVvci5wdWJsaXNoKCdhbGxTcGFjZXMnLCBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIFNwYWNlcy5maW5kKHt9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaCgncHVibGljU3BhY2VzJywgZnVuY3Rpb24odXNlcklkKSB7XG4vLyBcdHJldHVybiBTcGFjZXMuZmluZCh7XCJwZXJtaXNzaW9ucy5wdWJsaWNcIjp0cnVlfSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goJ293blNwYWNlcycsIGZ1bmN0aW9uKHVzZXJJZCkge1xuLy8gXHRyZXR1cm4gU3BhY2VzLmZpbmQoe3VzZXJJZDp1c2VySWR9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaCgnc3BhY2VzVmlzaXRlZCcsIGZ1bmN0aW9uKHNwYWNlc0lkKSB7XG4vLyBcdHJldHVybiBTcGFjZXMuZmluZCh7IFwiX2lkXCI6IHsgXCIkaW5cIjogc3BhY2VzSWQgfSB9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaCgncG9zdCcsIGZ1bmN0aW9uKHBvc3RJZCkge1xuLy8gXHRjaGVjayhwb3N0SWQsIFN0cmluZyk7XG4vLyBcdHJldHVybiBQb3N0cy5maW5kKHtfaWQ6IHBvc3RJZH0pO1xuLy8gfSk7XG5cblxuXG5cbi8vIE1ldGVvci5wdWJsaXNoKCdob21lUG9zdHMnLCBmdW5jdGlvbihzcGFjZUlkKSB7XG4vLyBcdGNoZWNrKHNwYWNlSWQsIFN0cmluZyk7XG4vLyBcdHJldHVybiBQb3N0cy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkLCB0eXBlOlwiaG9tZVwifSx7c29ydDoge3N1Ym1pdHRlZDogMX19KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaCgnbGl2ZUZlZWRQb3N0cycsIGZ1bmN0aW9uKHNwYWNlSWQpIHtcbi8vIFx0Y2hlY2soc3BhY2VJZCwgU3RyaW5nKTtcbi8vIFx0cmV0dXJuIFBvc3RzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWQsIHR5cGU6XCJsaXZlRmVlZFwifSx7c29ydDoge3N1Ym1pdHRlZDogLTF9fSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goJ2xlc3NvbnNQb3N0cycsIGZ1bmN0aW9uKHNwYWNlSWQpIHtcbi8vIFx0Y2hlY2soc3BhY2VJZCwgU3RyaW5nKTtcbi8vIFx0cmV0dXJuIFBvc3RzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWQsIHR5cGU6XCJsZXNzb25zXCJ9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaCgncmVzb3VyY2VzUG9zdHMnLCBmdW5jdGlvbihzcGFjZUlkKSB7XG4vLyBcdGNoZWNrKHNwYWNlSWQsIFN0cmluZyk7XG4vLyBcdHJldHVybiBQb3N0cy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkLCB0eXBlOlwicmVzb3VyY2VzXCJ9KTtcbi8vIH0pO1xuXG5cbi8vIE1ldGVvci5wdWJsaXNoKCdwb3N0cycsIGZ1bmN0aW9uKGZpbHRlcnMsIHNraXAgPSAwLCBsaW1pdCA9IDApIHtcbi8vIFx0cmV0dXJuIFBvc3RzLmZpbmQoZmlsdGVycywge3NvcnQ6IHtzdWJtaXR0ZWQ6MX0sc2tpcDpza2lwLGxpbWl0OmxpbWl0fSk7XG4vLyB9KTtcblxuXG4vLyAvLyBNZXRlb3IucHVibGlzaCgncG9zdHMnLCBmdW5jdGlvbihmaWx0ZXJzLHNraXAsbGltaXQpIHtcbi8vIC8vIFx0cmV0dXJuIFBvc3RzLmZpbmQoZmlsdGVycywge3NvcnQ6IHtzdWJtaXR0ZWQ6IDF9LHNraXA6c2tpcCxsaW1pdDpsaW1pdH0pO1xuLy8gLy8gfSk7XG5cbi8vIE1ldGVvci5wdWJsaXNoKFwiZmlsZVwiLCBmdW5jdGlvbihmaWxlSWQpIHtcbi8vIFx0cmV0dXJuIEZpbGVzLmZpbmQoe19pZDpmaWxlSWR9KVxuLy8gfSk7XG5cbi8vIE1ldGVvci5wdWJsaXNoKFwiZmlsZXNcIiwgZnVuY3Rpb24oc3BhY2VJZCkge1xuLy8gXHRyZXR1cm4gRmlsZXMuZmluZCh7c3BhY2VJZDogc3BhY2VJZH0pXG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJhbGxGaWxlc1wiLCBmdW5jdGlvbigpIHtcbi8vIFx0cmV0dXJuIEZpbGVzLmZpbmQoe30pXG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJhdXRob3JzXCIsIGZ1bmN0aW9uKHNwYWNlSWQpIHtcbi8vIFx0cmV0dXJuIEF1dGhvcnMuZmluZCh7c3BhY2VJZDogc3BhY2VJZH0pO1xuLy8gfSk7XG5cbi8vIE1ldGVvci5wdWJsaXNoKFwiY2F0ZWdvcmllc1wiLCBmdW5jdGlvbihzcGFjZUlkKSB7XG4vLyBcdHJldHVybiBDYXRlZ29yaWVzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWR9KTtcbi8vIH0pO1xuXG4vLyBNZXRlb3IucHVibGlzaChcInRhZ3NcIiwgZnVuY3Rpb24oc3BhY2VJZCkge1xuLy8gXHRyZXR1cm4gVGFncy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkfSk7XG4vLyB9KTtcblxuLy8gTWV0ZW9yLnB1Ymxpc2goJ2FsbFVzZXJzJywgZnVuY3Rpb24oKSB7XG4vLyBcdHJldHVybiBNZXRlb3IudXNlcnMuZmluZCgpO1xuLy8gIH0pXG5cbi8vIFB1Ymxpc2ggdGhlIGN1cnJlbnQgc2l6ZSBvZiBhIGNvbGxlY3Rpb24gd2l0aG91dCBzdWJzY3JpYmUgdG8gdGhlIGNvbGxlY3Rpb25cbi8vIE1ldGVvci5wdWJsaXNoKFwiY291bnQtYWxsLWxpdmUtZmVlZC1wb3N0c1wiLCBmdW5jdGlvbiAoc3BhY2VJZCkge1xuLy8gXHR2YXIgc2VsZiA9IHRoaXM7XG4vLyBcdHZhciBjb3VudCA9IDA7XG4vLyBcdHZhciBpbml0aWFsaXppbmcgPSB0cnVlO1xuXG4vLyBcdHZhciBoYW5kbGUgPSBQb3N0cy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkLCB0eXBlOlwibGl2ZUZlZWRcIn0pLm9ic2VydmVDaGFuZ2VzKHtcbi8vIFx0XHRhZGRlZDogZnVuY3Rpb24gKGRvYywgaWR4KSB7XG4vLyBcdFx0XHRjb3VudCsrO1xuLy8gXHRcdFx0aWYgKCFpbml0aWFsaXppbmcpIHtcbi8vIFx0XHRcdFx0c2VsZi5jaGFuZ2VkKFwiY291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogY291bnR9KTsgIC8vIFwiY291bnRzXCIgaXMgdGhlIHB1Ymxpc2hlZCBjb2xsZWN0aW9uIG5hbWVcbi8vIFx0XHRcdH1cbi8vIFx0XHR9LFxuLy8gXHRcdHJlbW92ZWQ6IGZ1bmN0aW9uIChkb2MsIGlkeCkge1xuLy8gXHRcdFx0Y291bnQtLTtcbi8vIFx0XHRcdHNlbGYuY2hhbmdlZChcImNvdW50c1wiLCBzcGFjZUlkLCB7Y291bnQ6IGNvdW50fSk7ICAvLyBTYW1lIHB1Ymxpc2hlZCBjb2xsZWN0aW9uLCBcImNvdW50c1wiXG4vLyBcdFx0fVxuLy8gXHR9KTtcblxuLy8gXHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblxuLy8gXHQvLyBwdWJsaXNoIHRoZSBpbml0aWFsIGNvdW50LiBgb2JzZXJ2ZUNoYW5nZXNgIGd1YXJhbnRlZWQgbm90IHRvIHJldHVyblxuLy8gXHQvLyB1bnRpbCB0aGUgaW5pdGlhbCBzZXQgb2YgYGFkZGVkYCBjYWxsYmFja3MgaGF2ZSBydW4sIHNvIHRoZSBgY291bnRgXG4vLyBcdC8vIHZhcmlhYmxlIGlzIHVwIHRvIGRhdGUuXG4vLyBcdHNlbGYuYWRkZWQoXCJjb3VudHNcIiwgc3BhY2VJZCwge2NvdW50OiBjb3VudH0pO1xuXG4vLyBcdC8vIGFuZCBzaWduYWwgdGhhdCB0aGUgaW5pdGlhbCBkb2N1bWVudCBzZXQgaXMgbm93IGF2YWlsYWJsZSBvbiB0aGUgY2xpZW50XG4vLyBcdHNlbGYucmVhZHkoKTtcblxuLy8gXHQvLyB0dXJuIG9mZiBvYnNlcnZlIHdoZW4gY2xpZW50IHVuc3Vic2NyaWJlc1xuLy8gXHRzZWxmLm9uU3RvcChmdW5jdGlvbiAoKSB7XG4vLyBcdFx0aGFuZGxlLnN0b3AoKTtcbi8vIFx0fSk7XG4vLyB9KTtcblxuXG4vLyBNZXRlb3IucHVibGlzaChcImNvdW50LWFsbC1waW5uZWRcIiwgZnVuY3Rpb24gKHNwYWNlSWQpIHtcbi8vIFx0dmFyIHNlbGYgPSB0aGlzO1xuLy8gXHR2YXIgcGlubmVkQ291bnRzID0gMDtcbi8vIFx0dmFyIGluaXRpYWxpemluZyA9IHRydWU7XG5cbi8vIFx0dmFyIGhhbmRsZSA9IFBvc3RzLmZpbmQoe3NwYWNlSWQ6IHNwYWNlSWQsIHBpbm5lZDp0cnVlfSkub2JzZXJ2ZUNoYW5nZXMoe1xuLy8gXHRcdGFkZGVkOiBmdW5jdGlvbiAoZG9jLCBpZHgpIHtcbi8vIFx0XHRcdHBpbm5lZENvdW50cysrO1xuLy8gXHRcdFx0aWYgKCFpbml0aWFsaXppbmcpIHtcbi8vIFx0XHRcdFx0c2VsZi5jaGFuZ2VkKFwicGlubmVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogcGlubmVkQ291bnRzfSk7ICAvLyBcImNvdW50c1wiIGlzIHRoZSBwdWJsaXNoZWQgY29sbGVjdGlvbiBuYW1lXG4vLyBcdFx0XHR9XG4vLyBcdFx0fSxcbi8vIFx0XHRyZW1vdmVkOiBmdW5jdGlvbiAoZG9jLCBpZHgpIHtcbi8vIFx0XHRcdHBpbm5lZENvdW50cy0tO1xuLy8gXHRcdFx0c2VsZi5jaGFuZ2VkKFwicGlubmVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogcGlubmVkQ291bnRzfSk7ICAvLyBTYW1lIHB1Ymxpc2hlZCBjb2xsZWN0aW9uLCBcImNvdW50c1wiXG4vLyBcdFx0fVxuLy8gXHR9KTtcblxuLy8gXHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblxuLy8gXHQvLyBwdWJsaXNoIHRoZSBpbml0aWFsIGNvdW50LiBgb2JzZXJ2ZUNoYW5nZXNgIGd1YXJhbnRlZWQgbm90IHRvIHJldHVyblxuLy8gXHQvLyB1bnRpbCB0aGUgaW5pdGlhbCBzZXQgb2YgYGFkZGVkYCBjYWxsYmFja3MgaGF2ZSBydW4sIHNvIHRoZSBgY291bnRgXG4vLyBcdC8vIHZhcmlhYmxlIGlzIHVwIHRvIGRhdGUuXG4vLyBcdHNlbGYuYWRkZWQoXCJwaW5uZWRDb3VudHNcIiwgc3BhY2VJZCwge2NvdW50OiBwaW5uZWRDb3VudHN9KTtcblxuLy8gXHQvLyBhbmQgc2lnbmFsIHRoYXQgdGhlIGluaXRpYWwgZG9jdW1lbnQgc2V0IGlzIG5vdyBhdmFpbGFibGUgb24gdGhlIGNsaWVudFxuLy8gXHRzZWxmLnJlYWR5KCk7XG5cbi8vIFx0Ly8gdHVybiBvZmYgb2JzZXJ2ZSB3aGVuIGNsaWVudCB1bnN1YnNjcmliZXNcbi8vIFx0c2VsZi5vblN0b3AoZnVuY3Rpb24gKCkge1xuLy8gXHRcdGhhbmRsZS5zdG9wKCk7XG4vLyBcdH0pO1xuLy8gfSk7XG5cblxuLy8gTWV0ZW9yLnB1Ymxpc2goXCJjb3VudC1hbGwtZmlsZXNcIiwgZnVuY3Rpb24gKHNwYWNlSWQpIHtcbi8vIFx0dmFyIHNlbGYgPSB0aGlzO1xuLy8gXHR2YXIgZmlsZXNDb3VudHMgPSAwO1xuLy8gXHR2YXIgaW5pdGlhbGl6aW5nID0gdHJ1ZTtcblxuLy8gXHQvL3ZhciBoYW5kbGUgPSBQb3N0cy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkLCAkb3IgOiBbe2ZpbGVFeHQ6XCJ0eHRcIn0se2ZpbGVFeHQ6XCJydGZcIn0se2ZpbGVFeHQ6XCJwZGZcIn0se2ZpbGVFeHQ6XCJ6aXBcIn1dfSkub2JzZXJ2ZUNoYW5nZXMoe1xuXG4vLyBcdHZhciBoYW5kbGUgPSBQb3N0cy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkLCAkYW5kIDogW3tmaWxlSWQ6eyRleGlzdHM6dHJ1ZX0gfSx7ZmlsZUlkOnskbmU6ZmFsc2V9IH0se2ZpbGVFeHQ6eyRuaW4gOiBbXCJqcGdcIixcImpwZWdcIixcInBuZ1wiLFwiZ2lmXCJdfX1dfSkub2JzZXJ2ZUNoYW5nZXMoe1xuLy8gXHRcdGFkZGVkOiBmdW5jdGlvbiAoZG9jLCBpZHgpIHtcbi8vIFx0XHRcdGZpbGVzQ291bnRzKys7XG4vLyBcdFx0XHRpZiAoIWluaXRpYWxpemluZykge1xuLy8gXHRcdFx0XHRzZWxmLmNoYW5nZWQoXCJmaWxlc0NvdW50c1wiLCBzcGFjZUlkLCB7Y291bnQ6IGZpbGVzQ291bnRzfSk7ICAvLyBcImNvdW50c1wiIGlzIHRoZSBwdWJsaXNoZWQgY29sbGVjdGlvbiBuYW1lXG4vLyBcdFx0XHR9XG4vLyBcdFx0fSxcbi8vIFx0XHRyZW1vdmVkOiBmdW5jdGlvbiAoZG9jLCBpZHgpIHtcbi8vIFx0XHRcdGZpbGVzQ291bnRzLS07XG4vLyBcdFx0XHRzZWxmLmNoYW5nZWQoXCJmaWxlc0NvdW50c1wiLCBzcGFjZUlkLCB7Y291bnQ6IGZpbGVzQ291bnRzfSk7ICAvLyBTYW1lIHB1Ymxpc2hlZCBjb2xsZWN0aW9uLCBcImNvdW50c1wiXG4vLyBcdFx0fVxuLy8gXHR9KTtcblxuLy8gXHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblxuLy8gXHQvLyBwdWJsaXNoIHRoZSBpbml0aWFsIGNvdW50LiBgb2JzZXJ2ZUNoYW5nZXNgIGd1YXJhbnRlZWQgbm90IHRvIHJldHVyblxuLy8gXHQvLyB1bnRpbCB0aGUgaW5pdGlhbCBzZXQgb2YgYGFkZGVkYCBjYWxsYmFja3MgaGF2ZSBydW4sIHNvIHRoZSBgY291bnRgXG4vLyBcdC8vIHZhcmlhYmxlIGlzIHVwIHRvIGRhdGUuXG4vLyBcdHNlbGYuYWRkZWQoXCJmaWxlc0NvdW50c1wiLCBzcGFjZUlkLCB7Y291bnQ6IGZpbGVzQ291bnRzfSk7XG5cbi8vIFx0Ly8gYW5kIHNpZ25hbCB0aGF0IHRoZSBpbml0aWFsIGRvY3VtZW50IHNldCBpcyBub3cgYXZhaWxhYmxlIG9uIHRoZSBjbGllbnRcbi8vIFx0c2VsZi5yZWFkeSgpO1xuXG4vLyBcdC8vIHR1cm4gb2ZmIG9ic2VydmUgd2hlbiBjbGllbnQgdW5zdWJzY3JpYmVzXG4vLyBcdHNlbGYub25TdG9wKGZ1bmN0aW9uICgpIHtcbi8vIFx0XHRoYW5kbGUuc3RvcCgpO1xuLy8gXHR9KTtcbi8vIH0pO1xuXG5cbi8vIE1ldGVvci5wdWJsaXNoKFwiY291bnQtYWxsLWltYWdlc1wiLCBmdW5jdGlvbiAoc3BhY2VJZCkge1xuLy8gXHR2YXIgc2VsZiA9IHRoaXM7XG4vLyBcdHZhciBpbWFnZXNDb3VudHMgPSAwO1xuLy8gXHR2YXIgaW5pdGlhbGl6aW5nID0gdHJ1ZTtcblxuLy8gXHR2YXIgaGFuZGxlID0gUG9zdHMuZmluZCh7c3BhY2VJZDogc3BhY2VJZCwgJG9yIDogW3tmaWxlRXh0OlwianBnXCJ9LHtmaWxlRXh0OlwianBlZ1wifSx7ZmlsZUV4dDpcImdpZlwifSx7ZmlsZUV4dDpcInBuZ1wifV19KS5vYnNlcnZlQ2hhbmdlcyh7XG4vLyBcdFx0YWRkZWQ6IGZ1bmN0aW9uIChkb2MsIGlkeCkge1xuLy8gXHRcdFx0aW1hZ2VzQ291bnRzKys7XG4vLyBcdFx0XHRpZiAoIWluaXRpYWxpemluZykge1xuLy8gXHRcdFx0XHRzZWxmLmNoYW5nZWQoXCJpbWFnZXNDb3VudHNcIiwgc3BhY2VJZCwge2NvdW50OiBpbWFnZXNDb3VudHN9KTsgIC8vIFwiY291bnRzXCIgaXMgdGhlIHB1Ymxpc2hlZCBjb2xsZWN0aW9uIG5hbWVcbi8vIFx0XHRcdH1cbi8vIFx0XHR9LFxuLy8gXHRcdHJlbW92ZWQ6IGZ1bmN0aW9uIChkb2MsIGlkeCkge1xuLy8gXHRcdFx0aW1hZ2VzQ291bnRzLS07XG4vLyBcdFx0XHRzZWxmLmNoYW5nZWQoXCJpbWFnZXNDb3VudHNcIiwgc3BhY2VJZCwge2NvdW50OiBpbWFnZXNDb3VudHN9KTsgIC8vIFNhbWUgcHVibGlzaGVkIGNvbGxlY3Rpb24sIFwiY291bnRzXCJcbi8vIFx0XHR9XG4vLyBcdH0pO1xuXG4vLyBcdGluaXRpYWxpemluZyA9IGZhbHNlO1xuXG4vLyBcdC8vIHB1Ymxpc2ggdGhlIGluaXRpYWwgY291bnQuIGBvYnNlcnZlQ2hhbmdlc2AgZ3VhcmFudGVlZCBub3QgdG8gcmV0dXJuXG4vLyBcdC8vIHVudGlsIHRoZSBpbml0aWFsIHNldCBvZiBgYWRkZWRgIGNhbGxiYWNrcyBoYXZlIHJ1biwgc28gdGhlIGBjb3VudGBcbi8vIFx0Ly8gdmFyaWFibGUgaXMgdXAgdG8gZGF0ZS5cbi8vIFx0c2VsZi5hZGRlZChcImltYWdlc0NvdW50c1wiLCBzcGFjZUlkLCB7Y291bnQ6IGltYWdlc0NvdW50c30pO1xuXG4vLyBcdC8vIGFuZCBzaWduYWwgdGhhdCB0aGUgaW5pdGlhbCBkb2N1bWVudCBzZXQgaXMgbm93IGF2YWlsYWJsZSBvbiB0aGUgY2xpZW50XG4vLyBcdHNlbGYucmVhZHkoKTtcblxuLy8gXHQvLyB0dXJuIG9mZiBvYnNlcnZlIHdoZW4gY2xpZW50IHVuc3Vic2NyaWJlc1xuLy8gXHRzZWxmLm9uU3RvcChmdW5jdGlvbiAoKSB7XG4vLyBcdFx0aGFuZGxlLnN0b3AoKTtcbi8vIFx0fSk7XG4vLyB9KTtcblxuXG5cbi8vIE1ldGVvci5wdWJsaXNoKFwiY291bnQtYWxsLWxpdmUtZmVlZFwiLCBmdW5jdGlvbiAoc3BhY2VJZCkge1xuLy8gXHR2YXIgc2VsZiA9IHRoaXM7XG4vLyBcdHZhciBsaXZlRmVlZENvdW50cyA9IDA7XG4vLyBcdHZhciBpbml0aWFsaXppbmcgPSB0cnVlO1xuXG4vLyBcdHZhciBoYW5kbGUgPSBQb3N0cy5maW5kKHtzcGFjZUlkOiBzcGFjZUlkLCB0eXBlOidsaXZlRmVlZCd9KS5vYnNlcnZlQ2hhbmdlcyh7XG4vLyBcdFx0YWRkZWQ6IGZ1bmN0aW9uIChkb2MsIGlkeCkge1xuLy8gXHRcdFx0bGl2ZUZlZWRDb3VudHMrKztcbi8vIFx0XHRcdGlmICghaW5pdGlhbGl6aW5nKSB7XG4vLyBcdFx0XHRcdHNlbGYuY2hhbmdlZChcImxpdmVGZWVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogbGl2ZUZlZWRDb3VudHN9KTsgIC8vIFwiY291bnRzXCIgaXMgdGhlIHB1Ymxpc2hlZCBjb2xsZWN0aW9uIG5hbWVcbi8vIFx0XHRcdH1cbi8vIFx0XHR9LFxuLy8gXHRcdHJlbW92ZWQ6IGZ1bmN0aW9uIChkb2MsIGlkeCkge1xuLy8gXHRcdFx0bGl2ZUZlZWRDb3VudHMtLTtcbi8vIFx0XHRcdHNlbGYuY2hhbmdlZChcImxpdmVGZWVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogbGl2ZUZlZWRDb3VudHN9KTsgIC8vIFNhbWUgcHVibGlzaGVkIGNvbGxlY3Rpb24sIFwiY291bnRzXCJcbi8vIFx0XHR9XG4vLyBcdH0pO1xuXG4vLyBcdGluaXRpYWxpemluZyA9IGZhbHNlO1xuXG4vLyBcdC8vIHB1Ymxpc2ggdGhlIGluaXRpYWwgY291bnQuIGBvYnNlcnZlQ2hhbmdlc2AgZ3VhcmFudGVlZCBub3QgdG8gcmV0dXJuXG4vLyBcdC8vIHVudGlsIHRoZSBpbml0aWFsIHNldCBvZiBgYWRkZWRgIGNhbGxiYWNrcyBoYXZlIHJ1biwgc28gdGhlIGBjb3VudGBcbi8vIFx0Ly8gdmFyaWFibGUgaXMgdXAgdG8gZGF0ZS5cbi8vIFx0c2VsZi5hZGRlZChcImxpdmVGZWVkQ291bnRzXCIsIHNwYWNlSWQsIHtjb3VudDogbGl2ZUZlZWRDb3VudHN9KTtcblxuLy8gXHQvLyBhbmQgc2lnbmFsIHRoYXQgdGhlIGluaXRpYWwgZG9jdW1lbnQgc2V0IGlzIG5vdyBhdmFpbGFibGUgb24gdGhlIGNsaWVudFxuLy8gXHRzZWxmLnJlYWR5KCk7XG5cbi8vIFx0Ly8gdHVybiBvZmYgb2JzZXJ2ZSB3aGVuIGNsaWVudCB1bnN1YnNjcmliZXNcbi8vIFx0c2VsZi5vblN0b3AoZnVuY3Rpb24gKCkge1xuLy8gXHRcdGhhbmRsZS5zdG9wKCk7XG4vLyBcdH0pO1xuLy8gfSk7IiwiaW1wb3J0IHsgRmlsZXMgfSBmcm9tICcuLi9pbXBvcnRzL2FwaS9maWxlcy5qcyc7XG5cbi8vIFVwbG9hZCBmaWxlcyB3aXRoIHRvbWl0cmVzY2FrOm1ldGVvci11cGxvYWRzXG5cbk1ldGVvci5zdGFydHVwKGZ1bmN0aW9uICgpIHtcblxuXHRVcGxvYWRTZXJ2ZXIuaW5pdCh7XG5cdFx0dG1wRGlyOiBNZXRlb3Iuc2V0dGluZ3MudXBsb2FkRGlyKycvdG1wJyxcblx0XHR1cGxvYWREaXI6IE1ldGVvci5zZXR0aW5ncy51cGxvYWREaXIsXG5cdFx0Y2hlY2tDcmVhdGVEaXJlY3RvcmllczogdHJ1ZSxcblx0XHRnZXREaXJlY3Rvcnk6IGZ1bmN0aW9uKGZpbGVJbmZvLCBmb3JtRGF0YSkge1xuXG5cdFx0XHR2YXIgc3BhY2VJZCA9IGZvcm1EYXRhLnNwYWNlSWQ7XG5cdFx0XHRmaWxlSW5mby5zcGFjZUlkID0gc3BhY2VJZDtcblxuXHRcdFx0dmFyIG5ld0lEID0gbmV3IE1vbmdvLk9iamVjdElEKCk7IC8vIE1hbnVhbGx5IGdlbmVyYXRlIGEgbmV3IE1vbmdvIGlkXG5cdFx0XHR2YXIgZmlsZUlkID0gbmV3SUQuX3N0cjtcblx0XHRcdGZpbGVJbmZvLmZpbGVJZCA9IGZpbGVJZDtcblxuXHRcdFx0aWYgKGZvcm1EYXRhLnR5cGUgPT0gJ2xpdmVGZWVkJykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlVwbG9hZGluZyBhIGxpdmVGZWVkIGZpbGUuLi5cIik7XG5cdFx0XHRcdHJldHVybiAnLycrc3BhY2VJZCsnL2xpdmVGZWVkLyc7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChmb3JtRGF0YS50eXBlID09ICdyZXNvdXJjZScpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJVcGxvYWRpbmcgYSByZXNvdXJjZS4uLlwiKTtcblx0XHRcdFx0cmV0dXJuICcvJytzcGFjZUlkKycvcmVzb3VyY2UvJztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKGZvcm1EYXRhLnR5cGUgPT0gJ2xlc3NvbicpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJVcGxvYWRpbmcgbGVzc29uIGZpbGUuLi5cIik7XG5cdFx0XHRcdHJldHVybiAnLycrc3BhY2VJZCsnL2xlc3Nvbi8nK2ZpbGVJZDtcblx0XHRcdH1cblx0XHRcdC8vIFRPRE8gOiBhZGQgbW9yZSBzZWN1cml0eVxuXHRcdFx0ZWxzZSBpZiAoZm9ybURhdGEudHlwZSA9PSAndXBkYXRlJykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlVwbG9hZGluZyB1cGRhdGUgZmlsZVwiKTtcblx0XHRcdFx0cmV0dXJuICcvdXBkYXRlcyc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJy8nO1xuXHRcdFx0XG5cdFx0fSxcblx0XHRmaW5pc2hlZDogZnVuY3Rpb24oZmlsZUluZm8sIGZvcm1GaWVsZHMsIGZvcm1EYXRhKSB7XG5cblx0XHRcdHZhciBmaWxlTmFtZSA9IGZpbGVJbmZvLm5hbWUuc3Vic3RyKDAsIGZpbGVJbmZvLm5hbWUubGFzdEluZGV4T2YoJy4nKSkgfHwgZmlsZUluZm8ubmFtZTtcblx0XHRcdGZpbGVJbmZvLmZpbGVOYW1lID0gZmlsZU5hbWU7XG5cdFx0XHQvL2ZpbGVJbmZvLmZpbGVOYW1lID0gdW5lc2NhcGUoZmlsZU5hbWUpOyAvLyBDaGVjayB3aHkgd2UgdW5lc2NhcGUgZmlsZSBuYW1lIGluIGdldEZpbGVOYW1lIG1ldGhvZFxuXG5cdFx0XHR2YXIgZmlsZUV4dCA9IGZpbGVJbmZvLm5hbWUuc3Vic3RyKGZpbGVJbmZvLm5hbWUubGFzdEluZGV4T2YoJy4nKSsxKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0ZmlsZUluZm8uZmlsZUV4dCA9IGZpbGVFeHQ7XG5cblx0XHRcdGlmIChmb3JtRmllbGRzLnR5cGUgPT0gJ2xpdmVGZWVkJyB8fCBmb3JtRmllbGRzLnR5cGUgPT0gJ3Jlc291cmNlJykge1xuXHRcdFx0XHRpZiAoZmlsZUV4dCA9PSBcImpwZ1wiIHx8IGZpbGVFeHQgPT0gXCJqcGVnXCIgfHwgZmlsZUV4dCA9PSBcInBuZ1wiKSB7XG5cdFx0XHRcdFx0Ly8gUmVzaXplIGFuZCBhdXRvLW9yaWVudCB1cGxvYWRlZCBpbWFnZXMgd2l0aCBHcmFwaGljTWFnaWNrc1xuXHRcdFx0XHRcdGdtKE1ldGVvci5zZXR0aW5ncy51cGxvYWREaXIrZmlsZUluZm8ucGF0aCkuYXV0b09yaWVudCgpLnJlc2l6ZSgnMTIwMCcsJzEyMDAnKS53cml0ZShNZXRlb3Iuc2V0dGluZ3MudXBsb2FkRGlyK2ZpbGVJbmZvLnBhdGgsTWV0ZW9yLmJpbmRFbnZpcm9ubWVudChmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiByZXNpemluZyA6XCIrZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JNZXNzYWdlID0gXCJBbiBlcnJvciBoYXMgb2NjdXJlZC5cIlxuXHRcdFx0XHRcdFx0XHRGaWxlcy5pbnNlcnQoe19pZDogZmlsZUluZm8uZmlsZUlkLCBlcnJvcjplcnJvck1lc3NhZ2V9KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdEZpbGVzLmluc2VydCh7X2lkOiBmaWxlSW5mby5maWxlSWQsIGZpbGVOYW1lOmZpbGVJbmZvLmZpbGVOYW1lLCBmaWxlRXh0OmZpbGVFeHQsIGZpbGVQYXRoOiBmaWxlSW5mby5wYXRofSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdEZpbGVzLmluc2VydCh7X2lkOiBmaWxlSW5mby5maWxlSWQsIGZpbGVOYW1lOmZpbGVJbmZvLmZpbGVOYW1lLCBmaWxlRXh0OmZpbGVFeHQsIGZpbGVQYXRoOiBmaWxlSW5mby5wYXRofSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKGZvcm1GaWVsZHMudHlwZSA9PSAnbGVzc29uJykge1xuXHRcdFx0XHRjbWQgPSBNZXRlb3Iud3JhcEFzeW5jKGV4ZWMpO1xuXHRcdFx0XHRyZXMgPSBjbWQoXCJ1bnppcCAnXCIrTWV0ZW9yLnNldHRpbmdzLnVwbG9hZERpcitmaWxlSW5mby5wYXRoK1wiJyAtZCAnXCIrTWV0ZW9yLnNldHRpbmdzLnVwbG9hZERpcitcIi9cIitmaWxlSW5mby5zcGFjZUlkK1wiL2xlc3Nvbi9cIitmaWxlSW5mby5maWxlSWQrXCInXCIsIHttYXhCdWZmZXIgOiAxMDI0ICogMTAyNCAqIDY0fSwgZnVuY3Rpb24oZXJyb3IscmVzdWx0KXtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiB1cGxvYWRpbmcgYSBsZXNzb24gOiBcIitlcnJvcik7XG5cdFx0XHRcdFx0XHR2YXIgZXJyb3JNZXNzYWdlID0gXCJBbiBlcnJvciBoYXMgb2NjdXJlZC5cIlxuXHRcdFx0XHRcdFx0RmlsZXMuaW5zZXJ0KHtfaWQ6IGZpbGVJbmZvLmZpbGVJZCwgZXJyb3I6ZXJyb3JNZXNzYWdlfSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcdFx0XHRcdFxuXHRcdFx0XHRcdFx0RmlsZXMuaW5zZXJ0KHtfaWQ6IGZpbGVJbmZvLmZpbGVJZCwgZmlsZU5hbWU6ZmlsZUluZm8uZmlsZU5hbWUsIGZpbGVFeHQ6ZmlsZUV4dCwgZmlsZVBhdGg6IGZpbGVJbmZvLnBhdGh9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlczIgPSBjbWQoXCJybSAnXCIrTWV0ZW9yLnNldHRpbmdzLnVwbG9hZERpcitmaWxlSW5mby5wYXRoK1wiJ1wiKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKGZvcm1GaWVsZHMudHlwZSA9PSAndXBkYXRlJykge1xuXHRcdFx0XHRjbWQgPSBNZXRlb3Iud3JhcEFzeW5jKGV4ZWMpO1x0XG5cdFx0XHRcdHJlcyA9IGNtZChcInRhciB6eHZmICdcIitNZXRlb3Iuc2V0dGluZ3MudXBsb2FkRGlyK2ZpbGVJbmZvLnBhdGgrXCInIC1DIFwiK01ldGVvci5zZXR0aW5ncy51cGRhdGVEaXIsIHttYXhCdWZmZXIgOiAxMDI0ICogMTAyNCAqIDY0fSwgZnVuY3Rpb24oZXJyb3IscmVzdWx0KXtcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiB1cGxvYWRpbmcgYW4gdXBkYXRlIDogXCIrZXJyb3IpO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9yTWVzc2FnZSA9IFwiQW4gZXJyb3IgaGFzIG9jY3VyZWQuXCJcblx0XHRcdFx0XHRcdEZpbGVzLmluc2VydCh7X2lkOiBmaWxlSW5mby5maWxlSWQsIGVycm9yOmVycm9yTWVzc2FnZX0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XHRcdFx0XHRcblx0XHRcdFx0XHRcdEZpbGVzLmluc2VydCh7X2lkOiBmaWxlSW5mby5maWxlSWQsIGZpbGVOYW1lOmZpbGVJbmZvLmZpbGVOYW1lLCBmaWxlRXh0OmZpbGVFeHQsIGZpbGVQYXRoOiBmaWxlSW5mby5wYXRofSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXMyID0gY21kKFwicm0gJ1wiK01ldGVvci5zZXR0aW5ncy51cGxvYWREaXIrZmlsZUluZm8ucGF0aCtcIidcIiwge21heEJ1ZmZlciA6IDEwMjQgKiAxMDI0ICogNjR9LCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRnZXRGaWxlTmFtZTogZnVuY3Rpb24oZmlsZUluZm8sIGZvcm1GaWVsZHMsIGZvcm1EYXRhKSB7IFxuXG5cdFx0XHR2YXIgZmlsZU5hbWUgPSBmaWxlSW5mby5uYW1lO1x0XG5cblx0XHRcdC8vZmlsZU5hbWUgPSBlc2NhcGUoZmlsZU5hbWUpO1xuXHRcdFx0Ly8gVGhlIGZpbGUgbmFtZSBpcyB1c2VkIHRvIGdlbmVyYXRlIHRoZSBmaWxlIHBhdGgsIHNvIHdlIGVzY2FwZSB1bmljb2RlIGNoYXJhY3RlcnNcblx0XHRcdC8vIGFuZCB0aGVuIHdlIHVuZXNjYXBlIGl0IGluIGZpbmlzaGVkIG1ldGhvZCB0byBzYXZlIGl0IGluIGh1bWFuLXJlYWRhYmxlIHRleHRcblxuXHRcdFx0cmV0dXJuIGZpbGVOYW1lO1xuXHRcdFx0Ly8gdmFyIGZpbGVFeHQgPSBmaWxlSW5mby5uYW1lLnN1YnN0cihmaWxlSW5mby5uYW1lLmxhc3RJbmRleE9mKCcuJykrMSkudG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0Ly8gLy8gSWYgZmlsZSBpcyBhbiBpbWFnZSwgc2V0IGEgcmFuZG9tIG5hbWVcblx0XHRcdC8vIGlmIChmaWxlRXh0ID09IFwianBnXCIgfHwgZmlsZUV4dCA9PSBcImpwZWdcIiB8fCBmaWxlRXh0ID09IFwicG5nXCIpIHtcblx0XHRcdC8vIFx0dmFyIG5ld05hbWUgPSBSYW5kb20uaWQoKSArICcuJyArIGZpbGVFeHQ7XG5cdFx0XHQvLyBcdHJldHVybiBuZXdOYW1lO1xuXHRcdFx0Ly8gfVxuXHRcdFx0Ly8gZWxzZSB7XG5cdFx0XHQvLyBcdHZhciBmaWxlTmFtZSA9IGZpbGVJbmZvLm5hbWU7XHRcblxuXHRcdFx0Ly8gXHRmaWxlTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSk7XG5cblx0XHRcdC8vIFx0cmV0dXJuIGZpbGVOYW1lO1xuXHRcdFx0Ly8gfVxuXHRcdH0sXG5cdFx0Y2FjaGVUaW1lOiAwLFxuICBcdH0pO1xufSk7IiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbmltcG9ydCAnLi4vc2VydmVyL2ZpeHR1cmVzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL3B1YmxpY2F0aW9ucy5qcyc7XG5pbXBvcnQgJy4uL3NlcnZlci91cGxvYWRzLmpzJztcbmltcG9ydCAnLi4vc2VydmVyL3Blcm1pc3Npb25zLmpzJztcbmltcG9ydCAnLi4vbGliL2FwcF9sb2FkZXIuanMnO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS91c2Vycy5qcyc7XG5cblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuICAvLyBjb2RlIHRvIHJ1biBvbiBzZXJ2ZXIgYXQgc3RhcnR1cFxuXG5cdC8vIENvbm5lY3QgQWNjb3VudHMgdG8gcmVtb3RlIEFwcFxuXHQvL01ldGVvci5jb25uZWN0aW9uID0gRERQLmNvbm5lY3QoJ2h0dHA6Ly9iZWVrZWUuYm94OjgwJyk7XG5cdC8vIFJlbW90ZSA9IEREUC5jb25uZWN0KCdodHRwOi8vYmVla2VlLmJveDo4MCcpO1xuXHQvLyBBY2NvdW50cy5jb25uZWN0aW9uID0gUmVtb3RlO1xuXHQvLyBNZXRlb3IudXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigndXNlcnMnLCBSZW1vdGUpO1xuXHQvLyAgQWNjb3VudHMuY29ubmVjdGlvbi5zdWJzY3JpYmUoJ3VzZXJzJyk7XG4vLyBfX21ldGVvcl9ydW50aW1lX2NvbmZpZ19fLkFDQ09VTlRTX0NPTk5FQ1RJT05fVVJMID0gJ2h0dHA6Ly9iZWVrZWUuYm94OjgwJztcblxuLy8gdmFyIGNvbm5lY3Rpb24gPSBERFAuY29ubmVjdChcImh0dHA6Ly9iZWVrZWUuYm94OjgwXCIpO1xuLy8gQWNjb3VudHMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XG4vLyBNZXRlb3IudXNlcnMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcInVzZXJzXCIsIHtjb25uZWN0aW9uOiBjb25uZWN0aW9ufSk7XG5cbn0pO1xuIl19
