/* ======
 variable
 ========= */
var SignInButton = document.getElementById('Sign-In');
var SignOutButton = document.getElementById('Sign-Out');

/* ======
 EventListener
 ========= */
SignInButton.addEventListener('click',SignIn);
SignOutButton.addEventListener('click',SignOut);
firebase.auth().onAuthStateChanged(handleAuthStateChanged);

/* ======
 Functions
 ========= */
 function SignIn(){
     firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
 }

 function handleAuthStateChanged(user){
    
    if(user){
        console.log(user);
        SignInButton.setAttribute("hidden","true");
        SignOutButton.removeAttribute("hidden");
    }
    else{
        console.log('no user');
        SignInButton.removeAttribute("hidden");
        SignOutButton.setAttribute("hidden","true");
    }

 }

 function SignOut(){
     firebase.auth().signOut();
 }
