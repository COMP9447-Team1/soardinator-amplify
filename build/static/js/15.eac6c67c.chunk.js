(this["webpackJsonpremediation-frontend"]=this["webpackJsonpremediation-frontend"]||[]).push([[15],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var i=n(49),r=new i.a("I18n"),o=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),r.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return"undefined"!==typeof t?t:e;var n=this._lang,i=this.getByLanguage(e,n);return i||(n.indexOf("-")>0&&(i=this.getByLanguage(e,n.split("-")[0])),i||("undefined"!==typeof t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var i=this._dict[t];return i?i[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map((function(n){t.putVocabulariesForLanguage(n,e[n])}))},e}(),a=n(29),u=new i.a("I18n"),E=null,s=null,_=function(){function e(){}return e.configure=function(t){return u.debug("configure I18n"),t?(E=Object.assign({},E,t.I18n||t),e.createInstance(),E):E},e.getModuleName=function(){return"I18n"},e.createInstance=function(){u.debug("create I18n instance"),s||(s=new o(E))},e.setLanguage=function(t){return e.checkConfig(),s.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?s.get(t,n):"undefined"===typeof n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),s.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),s.putVocabularies(t)},e.checkConfig=function(){return s||(s=new o(E)),!0},e}();a.a.register(_)},263:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_select_mfa_type",(function(){return A}));var i=n(12),r=n(49),o=n(236),a=n(328),u=n(109),E=n(327),s=n(326),_=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{E(i.next(e))}catch(t){o(t)}}function u(e){try{E(i.throw(e))}catch(t){o(t)}}function E(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}E((i=i.apply(e,t||[])).next())}))},c=function(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(u){o=[6,u],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},T=new r.a("SelectMFAType"),A=function(){function e(e){var t=this;Object(i.k)(this,e),this.handleSubmit=function(e){return t.verify(e)},this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1}return e.prototype.handleRadioButtonChange=function(e){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1;var t=e.target,n=t.value,i=t.type,r=t.checked,o=["radio","checkbox"].includes(i);n===a.c.SMS&&o&&(this.isSMS=r),n===a.c.TOTP&&o&&(this.isTOTP=r),n===a.c.NOMFA&&o&&(this.isNoMFA=r)},e.prototype.verify=function(e){return _(this,void 0,void 0,(function(){var t,n,i,r;return c(this,(function(_){switch(_.label){case 0:if(e&&e.preventDefault(),T.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=a.c.TOTP:this.isSMS?this.MFAMethod=a.c.SMS:this.isNoMFA&&(this.MFAMethod=a.c.NOMFA),t=this.authData,!u.a||"function"!==typeof u.a.setPreferredMFA)throw new Error(s.d);this.loading=!0,_.label=1;case 1:return _.trys.push([1,3,4,5]),[4,u.a.setPreferredMFA(t,this.MFAMethod)];case 2:return n=_.sent(),T.debug("Set Preferred MFA Succeeded",n),this.selectMessage=o.a.get(E.a.SUCCESS_MFA_TYPE)+" "+this.MFAMethod,[3,5];case 3:return i=_.sent(),(r=i.message)===s.o||r===s.p?(this.TOTPSetup=!0,this.selectMessage=o.a.get(E.a.SETUP_TOTP_REQUIRED)):(T.debug("Set Preferred MFA failed",i),this.selectMessage=o.a.get(E.a.UNABLE_TO_SETUP_MFA_AT_THIS_TIME)),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.contentBuilder=function(){var e=this;if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return T.debug(o.a.get(E.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)),Object(i.i)("div",null,Object(i.i)("a",null,o.a.get(E.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)));var t=this.MFATypes,n=t.SMS,r=t.TOTP,a=t.Optional;return Object(i.i)("amplify-form-section",{submitButtonText:o.a.get(E.a.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:o.a.get(E.a.SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:function(t){return e.handleSubmit(t)},loading:this.loading},n?Object(i.i)("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,r?Object(i.i)("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,a?Object(i.i)("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null)},e.prototype.render=function(){return Object(i.i)("div",null,this.contentBuilder(),this.TOTPSetup?Object(i.i)("amplify-totp-setup",{user:this.authData}):null)},e}()},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return A})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return P})),n.d(t,"i",(function(){return C})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return a})),n.d(t,"l",(function(){return T})),n.d(t,"m",(function(){return f})),n.d(t,"n",(function(){return d})),n.d(t,"o",(function(){return O})),n.d(t,"p",(function(){return L})),n.d(t,"q",(function(){return s})),n.d(t,"r",(function(){return h})),n.d(t,"s",(function(){return _})),n.d(t,"t",(function(){return o})),n.d(t,"u",(function(){return u})),n.d(t,"v",(function(){return i}));var i="username",r="email",o="code",a="phone",u="password",E="country-dial-code-select",s="+1",_="amplify-auth-source",c="amplify-redirected-from-hosted-ui",T="amplify-authenticator-authState",A="Phone number can not be empty",S="No Auth module found, please ensure @aws-amplify/auth is imported",d="No Storage module found, please ensure @aws-amplify/storage is imported",f="No Interactions module found, please ensure @aws-amplify/interactions is imported",l="SETUP_TOTP",O="User has not set up software token mfa",L="User has not verified software token mfa",h="SUCCESS",g="auth",C="UI Auth",P="ToastAuthError",p="AuthStateChange"},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i,r,o=n(25);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two MFA types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.USERNAME_REMOVE_WHITESPACE="Username cannot contain whitespace",e.PASSWORD_REMOVE_WHITESPACE="Password cannot start or end with whitespace",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancillary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(i||(i={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(r||(r={}));var a=Object.assign(Object.assign(Object.assign({},i),o.a),r)},328:function(e,t,n){"use strict";var i,r,o,a,u;n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return a})),function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(i||(i={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(r||(r={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(o||(o={})),function(e){e.Password="password"}(a||(a={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(u||(u={}))}}]);
//# sourceMappingURL=15.eac6c67c.chunk.js.map