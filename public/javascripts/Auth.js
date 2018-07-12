// window.onload = function(){
//   window.alert('hello');
//   firebase.auth().onAuthStateChanged(function(user){
//     if(user){
//       var uid = user.uid;
//       var email = user.email;
//       var photourl = user.photoURL;
//       var phonenumber = user.phonenumber;
//       var displayName = user.displayName;
//     }
//     updateSignInButtonUI();
//     updateSignInFormUI();
//     updateSignOutButtonUI();

//     updateSignedInUserStatusUI();
//     updateVerificationCodeFormUI();

//   });
// document.getElementById('sign-out-button').addEventListener('click',onSignOutClick);
// document.getElementById('phone-number').addEventListener('keyup',updateSignInButtonUI);
// document.getElementById('phone-number').addEventListener('change',updateSignInButtonUI);
// document.getElementById('verification-code').addEventListener('keyup',updateVerificationCodeButtonUI);
// document.getElementById('verification-code').addEventListener('change',updateVerificationCodeButtonUI);
// document.getElementById('verification-code-form').addEventListener('submit',onVerifyCodeSubmit);
// document.getElementById('cancel-verify-code-button').addEventListener('click',cancelVerification);

// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//   'size': 'normal',
//   'callback': function(response) {
//     onSignInSubmit();
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     // ...
//   }
// });
//  recaptchaVerifier.render().then(function(widgetId) {
//   window.recaptchaWidgetId = widgetId;

//   updateSignInButtonUI();
// });

// };

//   function onSignInSubmit(){
   
//      if(isPhoneNumberValid()) {
//       window.signingIn = true;
//       updateSignInButtonUI();
        
//           var phoneNumber = getPhoneNumberFromUserInput();
//           var appVerifier = window.recaptchaVerifier;
//           firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//           .then(function (confirmationResult) {
         
//           window.confirmationResult = confirmationResult;
//           window.signingIn = false;
//           updateSignInButtonUI();
//           updateVerificationCodeFormUI();
//           updateVerificationCodeButtonUI();

//           updateSignInFormUI();
//           }).catch(function (error) {
          
//             console.log('error during signingIn', error);
//             window.alert('error in signIn');
//             window.signingIn = false;
//             updateSignInFormUI();
//             updateSignInButtonUI();
//     });

//     } 
// }

// function onVerifyCodeSubmit(e){
//   e.preventDefault();
//   if(!!getCodeFromUserinput()){
//     window.verifyingCode = true;
//     updateVerificationCodeButtonUI();
//     var code = getCodeFromUserInput();
//    confirmationResult.confirm(code).then(function (result) {
//   // User signed in successfully.
//   var user = result.user;
//   window.verifyingCode = false;
//   updateVerificationCodeFormUI();
//    }).catch(function (error) {
//    console.error('error while checking the verification code',error);
   
//    window.verifyingCode = false;
//    updateSignInButtonUI();
//    updateVerificationCodeButtonUI();
//   });
//   }
// }

// function cancelVerification(e){
//   e.preventDefault();
//   window.confirmationResult = null;

//   updateVerificationCodeButtonUI();
//   updateSignInFormUI();
// }
 
// function onSignOutClick(){
//   firebase.auth().signOut();
// }

// function getCodeFromUserinput(){
//   return document.getElementById('verification-code').value;
// }

// function getPhoneNumberFromUserInput(){
//   return document.getElementById('phone-number').value;
// }
// function isPhoneNumberValid(){
//   var pattern = /^\+[0-9\s\-\(\)]+$/;
//   var phoneNumber = getPhoneNumberFromUserInput();
//   return phoneNumber.search(pattern)!== -1;
// }

// function resetReCaptcha(){
//   if(typeof grecaptcha !== 'undefined' && typeof window.recaptchaWidgetId !== 'undefined'){
//     grecaptcha.reset(window.recaptchaWidgetId);
//   }
// }

// function updateSignInButtonUI(){
//   document.getElementById('sign-in-button').disabled = !isPhoneNumberValid() || !!window.signingIn;
// }

// function updateVerificationCodeButtonUI(){
//   document.getElementById('verify-code-button').disabled 
//   = !!window.verifyingCode || !! getCodeFromUserinput();
// }

// function updateSignInFormUI(){
//   if(firebase.auth().currentUser || window.confirmationResult){
//     document.getElementById('sign-in-form').style.display = 'none';

//   }
//   else{
//     resetReCaptcha();
//     document.getElementById('sign-in-form').style.display = 'block';
//   }
// }

// function updateVerificationCodeFormUI(){
//   if(!firebase.auth().currentUser && window.confirmationResult){
//     document.getElementById('verification-code-form').style.display = 'block';
//   }
//   else{
//     document.getElementById('verification-code-form').style.display = 'none';
//   }
// }
// function updateSignOutButtonUI(){
//   if(firebase.auth().currentUser){
//     document.getElementById('sign-out-button').style.display = 'block';
//   }
// }

// function signedInUserStatusUI(){
//   var user = firebase.auth().currentUser;
//   if(user){
//     document.getElementById('sign-in-status').style.display = 'signed In';
//   }
//   else{
//     document.getElementById('sign-in-status').style.display = 'Signed out';
//   }
// }