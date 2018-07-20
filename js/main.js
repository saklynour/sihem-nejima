

var config = {
    apiKey: "AIzaSyA_DufF1mqConORHBHsR8MwL32QTxOWkzI",
    authDomain: "messages-a6a56.firebaseapp.com",
    databaseURL: "https://messages-a6a56.firebaseio.com",
    projectId: "messages-a6a56",
    storageBucket: "messages-a6a56.appspot.com",
    messagingSenderId: "789877258954"
  };
  firebase.initializeApp(config);

  var messagesRef = firebase.database().ref('messages');
  document.getElementById("form").addEventListener("submit",submitForm);
function saveMessage(name, email, mobile, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name: name,
    email: email,
    mobile: mobile,
    subject: subject,
    message: message
    });
}
function submitForm(e){
    e.preventDefault();
    console.log("hhh")
    var name = getInputVal('name');
    var email = getInputVal('email');
    var mobile = getInputVal('mobile');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
    
    saveMessage(name, email, mobile, subject, message);
    document.querySelector('.alert').style.display = 'block';
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    },3000);
    }
function getInputVal(id){
    return document.getElementById(id).value;
}

// Initialize Firebase



// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
