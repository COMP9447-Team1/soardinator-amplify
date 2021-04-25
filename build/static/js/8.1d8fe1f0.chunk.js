(this["webpackJsonpremediation-frontend"]=this["webpackJsonpremediation-frontend"]||[]).push([[8],{155:function(e,t,n){"use strict";var a=n(109);n(24);t.a=a.a},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(49),r=new a.a("I18n"),i=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),r.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return"undefined"!==typeof t?t:e;var n=this._lang,a=this.getByLanguage(e,n);return a||(n.indexOf("-")>0&&(a=this.getByLanguage(e,n.split("-")[0])),a||("undefined"!==typeof t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var a=this._dict[t];return a?a[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map((function(n){t.putVocabulariesForLanguage(n,e[n])}))},e}(),o=n(29),u=new a.a("I18n"),E=null,c=null,s=function(){function e(){}return e.configure=function(t){return u.debug("configure I18n"),t?(E=Object.assign({},E,t.I18n||t),e.createInstance(),E):E},e.getModuleName=function(){return"I18n"},e.createInstance=function(){u.debug("create I18n instance"),c||(c=new i(E))},e.setLanguage=function(t){return e.checkConfig(),c.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?c.get(t,n):"undefined"===typeof n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),c.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),c.putVocabularies(t)},e.checkConfig=function(){return c||(c=new i(E)),!0},e}();o.a.register(s)},247:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_federated_buttons",(function(){return c})),n.d(t,"amplify_strike",(function(){return s}));var a=n(12),r=n(27),i=n(328),o=n(109),u=(n(327),n(326)),E=n(329),c=function(){function e(e){Object(a.k)(this,e),this.authState=i.a.SignIn,this.federated={},this.handleAuthStateChange=E.d}return e.prototype.componentWillLoad=function(){if(!o.a||"function"!==typeof o.a.configure)throw new Error(u.d);var e=o.a.configure().oauth,t=void 0===e?{}:e;t.domain?this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),t):t.awsCognito&&(this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),t.awsCognito)),t.auth0&&(this.federated.auth0Config=Object.assign(Object.assign({},this.federated.auth0Config),t.auth0))},e.prototype.render=function(){if(!Object.values(i.a).includes(this.authState))return null;if(Object(r.d)(this.federated))return null;var e=this.federated,t=e.amazonClientId,n=e.auth0Config,o=e.facebookAppId,u=e.googleClientId,E=e.oauthConfig;return Object(a.i)("div",null,u&&Object(a.i)("div",null,Object(a.i)("amplify-google-button",{clientId:u,handleAuthStateChange:this.handleAuthStateChange})),o&&Object(a.i)("div",null,Object(a.i)("amplify-facebook-button",{appId:o,handleAuthStateChange:this.handleAuthStateChange})),t&&Object(a.i)("div",null,Object(a.i)("amplify-amazon-button",{clientId:t,handleAuthStateChange:this.handleAuthStateChange})),E&&Object(a.i)("div",null,Object(a.i)("amplify-oauth-button",{config:E})),n&&Object(a.i)("div",null,Object(a.i)("amplify-auth0-button",{config:n,handleAuthStateChange:this.handleAuthStateChange})))},e}(),s=function(){function e(e){Object(a.k)(this,e)}return e.prototype.render=function(){return Object(a.i)("span",{class:"strike-content"},Object(a.i)("slot",null))},e}();s.style=".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}"},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return A})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return _})),n.d(t,"g",(function(){return g})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return S})),n.d(t,"j",(function(){return I})),n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return L})),n.d(t,"n",(function(){return f})),n.d(t,"o",(function(){return O})),n.d(t,"p",(function(){return h})),n.d(t,"q",(function(){return c})),n.d(t,"r",(function(){return T})),n.d(t,"s",(function(){return s})),n.d(t,"t",(function(){return i})),n.d(t,"u",(function(){return u})),n.d(t,"v",(function(){return a}));var a="username",r="email",i="code",o="phone",u="password",E="country-dial-code-select",c="+1",s="amplify-auth-source",_="amplify-redirected-from-hosted-ui",l="amplify-authenticator-authState",d="Phone number can not be empty",A="No Auth module found, please ensure @aws-amplify/auth is imported",f="No Storage module found, please ensure @aws-amplify/storage is imported",L="No Interactions module found, please ensure @aws-amplify/interactions is imported",g="SETUP_TOTP",O="User has not set up software token mfa",h="User has not verified software token mfa",T="SUCCESS",C="auth",S="UI Auth",p="ToastAuthError",I="AuthStateChange"},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a,r,i=n(25);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two MFA types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.USERNAME_REMOVE_WHITESPACE="Username cannot contain whitespace",e.PASSWORD_REMOVE_WHITESPACE="Password cannot start or end with whitespace",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancillary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(a||(a={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(r||(r={}));var o=Object.assign(Object.assign(Object.assign({},a),i.a),r)},328:function(e,t,n){"use strict";var a,r,i,o,u;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return o})),function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(a||(a={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(r||(r={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(i||(i={})),function(e){e.Password="password"}(o||(o={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(u||(u={}))},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return L})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return T})),n.d(t,"g",(function(){return C})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return O}));var a=n(49),r=n(191),i=n(236),o=n(328),u=n(155),E=n(327),c=n(326),s=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{E(a.next(e))}catch(t){i(t)}}function u(e){try{E(a.throw(e))}catch(t){i(t)}}function E(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}E((a=a.apply(e,t||[])).next())}))},_=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(u){i=[6,u],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},l=new a.a("helpers"),d=function(e){return!!e.shadowRoot&&!!e.attachShadow},A=function(e){r.a.dispatch(c.i,{event:c.h,message:i.a.get(e.message)})},f=function(e,t){r.a.dispatch(c.i,{event:c.j,message:e,data:t})},L=function(e){if(!e.phoneNumberValue)throw new Error(c.e);var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+t},g=function(e){if(!(e in o.d))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(o.d))},O=function(e){var t=function(t){return s(void 0,void 0,void 0,(function(){var n,a;return _(this,(function(r){switch(r.label){case 0:switch(n=t.payload,n.event){case c.j:return[3,1]}return[3,8];case 1:if(!n.message)return[3,7];if(n.message!==o.a.SignedIn)return[3,6];r.label=2;case 2:return r.trys.push([2,4,,5]),[4,u.a.currentAuthenticatedUser()];case 3:return a=r.sent(),e(n.message,a),[3,5];case 4:return r.sent(),l.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(n.message,n.data),r.label=7;case 7:return[3,8];case 8:return[2]}}))}))};return r.a.listen(c.i,t),function(){return r.a.remove(c.i,t)}},h=function(e){return!(null===e.hint||"string"===typeof e.hint)},T=function(){return{address:{label:i.a.get(E.a.ADDRESS_LABEL),placeholder:i.a.get(E.a.ADDRESS_PLACEHOLDER)},nickname:{label:i.a.get(E.a.NICKNAME_LABEL),placeholder:i.a.get(E.a.NICKNAME_PLACEHOLDER)},birthdate:{label:i.a.get(E.a.BIRTHDATE_LABEL),placeholder:i.a.get(E.a.BIRTHDATE_PLACEHOLDER)},phone_number:{label:i.a.get(E.a.PHONE_LABEL),placeholder:i.a.get(E.a.PHONE_PLACEHOLDER)},email:{lable:i.a.get(E.a.EMAIL_LABEL),placeholder:i.a.get(E.a.EMAIL_PLACEHOLDER)},picture:{label:i.a.get(E.a.PICTURE_LABEL),placeholder:i.a.get(E.a.PICTURE_PLACEHOLDER)},family_name:{label:i.a.get(E.a.FAMILY_NAME_LABEL),placeholder:i.a.get(E.a.FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:i.a.get(E.a.PREFERRED_USERNAME_LABEL),placeholder:i.a.get(E.a.PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:i.a.get(E.a.GENDER_LABEL),placeholder:i.a.get(E.a.GENDER_PLACEHOLDER)},profile:{label:i.a.get(E.a.PROFILE_LABEL),placeholder:i.a.get(E.a.PROFILE_PLACEHOLDER)},given_name:{label:i.a.get(E.a.GIVEN_NAME_LABEL),placeholder:i.a.get(E.a.GIVEN_NAME_PLACEHOLDER)},zoneinfo:{label:i.a.get(E.a.ZONEINFO_LABEL),placeholder:i.a.get(E.a.ZONEINFO_PLACEHOLDER)},locale:{label:i.a.get(E.a.LOCALE_LABEL),placeholder:i.a.get(E.a.LOCALE_PLACEHOLDER)},updated_at:{label:i.a.get(E.a.UPDATED_AT_LABEL),placeholder:i.a.get(E.a.UPDATED_AT_PLACEHOLDER)},middle_name:{label:i.a.get(E.a.MIDDLE_NAME_LABEL),placeholder:i.a.get(E.a.MIDDLE_NAME_PLACEHOLDER)},website:{label:i.a.get(E.a.WEBSITE_LABEL),placeholder:i.a.get(E.a.WEBSITE_PLACEHOLDER)},name:{label:i.a.get(E.a.NAME_LABEL),placeholder:i.a.get(E.a.NAME_PLACEHOLDER)}}};function C(e,t){var n=e.target.name,a=e.target.value;n===c.b&&(t.countryDialCodeValue=a),n===c.k&&(t.phoneNumberValue=a)}}}]);
//# sourceMappingURL=8.1d8fe1f0.chunk.js.map