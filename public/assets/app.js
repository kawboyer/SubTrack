// Firebase User Authentication Protocol 

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCT-cxaeL9QVljaDNXrDY1KhEdSCYDZ_Po",
    authDomain: "subtrack-fb-db.firebaseapp.com",
    databaseURL: "https://subtrack-fb-db.firebaseio.com",
    projectId: "subtrack-fb-db",
    storageBucket: "subtrack-fb-db.appspot.com",
    messagingSenderId: "1044549477444"
  };

  firebase.initializeApp(config);

  // DOM elements for FB Auth
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignup");
  const btnLogout = document.getElementById("btnLogout");

// Add login event listeners
btnLogin.addEventListener("click", e => {
  // get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);

  promise.catch(e => console.log(e.message));
});

// Click event for sign up
btnSignUp.addEventListener("click", e => {
    // get email and password
    // TODO CHECK 4 REAL EMAIL WITH VALIDATION!
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // ign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
  
    promise.catch(e => console.log(e.message));

});

// A realtime listener for user status
// Monitor Authentication, login state. Fires every time a user logs in or out
// Triggers callback function.  If user logs in, param populated with user info. 
// If logged out, parameter is Null

// set up logic inside of this. Don't use global variables. 
// THIS IS GOD Only thing that knows if users logged in or not app defers to this
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove("hide");
  } else {
    console.log("not logged in");
    btnLogout.classList.add("hide");
  }
});

//Click event for logout

btnLogout.addEventListener("click", e => {
  firebase.auth().singOut();
})


