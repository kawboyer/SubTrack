// VUE COMPONENTS

Vue.component('navbar', {
  template: `
  <nav>
    <div class="container">
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">SubTracked</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Log In</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
  `
});

Vue.component('login', {
  template: `
  <div>
    <input id="txtEmail" type="email" placeholder="Email">

    <input id="txtPassword" type="password" placeholder="Password">

    <button id="btnLogin" class="btn btn-action">
      Log in
    </button>

    <button id="btnSignup" class="btn btn-secondary">
      Sign Up
    </button>

    <button id="btnLogout" class="btn btn-action hide">
      Log out
    </button>
    <div>
      <p id="fbuser">Shee</p>
    </div>
    </div>
`
});

Vue.component('sidebar', {
  template: `
  <ul id="slide-out" class="sidenav sidenav-fixed">
    <li><a href="#!">Add Subscription</a></li>
    <li><a href="#!">Calendar</a></li>
    <li><a href="#!">About</a></li>
    <li><a href="#!">Log Out</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  <footer>&copy 2018</footer>
  `
});

Vue.component('pie-chart', {
  template: `
    var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: data,
    options: options
  });
  `
});

new Vue({
  el: '#app'
});


// FIREBASE AUTH

// Firebase User Authentication Protocol 
var firebaseUser = null;
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
  // All updates to UI for user
  //Create seperate functions to call
  //login fn() switches to logged in and displays information base on U_ID
  //logout fn() reset global to null and redisplay login

  //   fbUser = firebaseUser;
  // console.log(fbUser + "See here");
  if (firebaseUser) {
    console.log(firebaseUser);
    var fbUser = firebaseUser;
    console.log(fbUser + "Diff");
    //firebase user id 
    console.log(fbUser.uid);
    $("#fbuser").text(fbUser.uid);

    $.ajax({
      method: "POST",
      url: "/User/new",
      data: {
        FbId: fbUser.uid
      }
    })
      .then(function (data) {
        // Log the response
        console.log(data);
        // Empty the notes section
      })
      console.log("INBEEEEE")
    $.ajax({
      method: "GET",
      url: "/subscriptions/" + fbUser.uid,
    }).then(function (response) {
      //Data we want to input onto page here
      console.log(response);
    })

    // logIn(firebaseUser);
    btnLogout.classList.remove("hide");

  } else {
    console.log("not logged in");
    btnLogout.classList.add("hide");
  }
});

//Click event for logout

btnLogout.addEventListener("click", e => {
  firebase.auth().signOut();
  firebaseUser = null;

})

//Logic for everything with generating the page content

// function logIn() {
//   var fbUser = firebaseUser;
//   console.log(fbUser);
//Ajax call to post the fb user to mongodb
//Ajax call to get the fb users infomation from mongodb

//}


// TEST WITH VUE
// var one = new Vue({
//   el: '#vue-app-one',
//   data: {
//     title: "Header Test"
//   },
//   methods: {

//   },
//   computed: {

//     greet: function () {
//       return "Hello from app one"

//     }
//   }

// });

// var two = new Vue({
//   el: '#vue-app-two',
//   data: {
//     title: "Vue App Two",
//     title2: "Vue App Two Title 2"
//   },
//   methods: {
//     changeTitle: function () {
//       one.title = "I have changed title one!"
//     }

//   },
//   computed: {
//     greet: function () {
//       return "Hello from app two, not app one!"
//     }
//   }

// })

// // //Change title of either instance from outside

// // // two.title = "Changed from the outside!";

// // //Generation of components
// // //Component is a reusable part that we can use in any Vue instance we'd like

// // // Vue Component method takes two parameters: 1. The name(string) 2. an object
// // // We can pass various properties
// // // template is a rendering template of what shows up on dom
// // // data, which is always a function, returns what we want to render
// Vue.component('greeting', {
//   template: '<p>Hey there, I am a component that can be used over and over. This cat is named {{name}}. <button v-on:click="changeName">ChangeCatName</button></p>',
//   data: function () {
//     return {
//       name: "Pepper"
//     }
//   },
//   methods: {
//     changeName: function () {
//       this.name = "Pamina"
//     }
//   }
// });

// // // Can trick VUe to change internal components by assigning an external
// // // global variable as an object that matches the one we want to change
// // // and modifying it:
// // // var data = {
// // //   name: "Peanut"
// // // }

// // // Can then also pass through data into the component, just as we specified
// // // data object inside Vue instance
// new Vue({
//   el: '#vue-app-one'
// });

// new Vue({
//   el: '#vue-app-two'
// });