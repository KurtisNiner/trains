// Initialize Firebase
var config = {
    apiKey: "AIzaSyAGvX7O6l9Dt7OYecaxPueWyeLfE4k2-U4",
    authDomain: "trains-5432c.firebaseapp.com",
    databaseURL: "https://trains-5432c.firebaseio.com",
    projectId: "trains-5432c",
    storageBucket: "",
    messagingSenderId: "198411840912"
  };
  
firebase.initializeApp(config);

var database = firebase.database();

var trains = [];

//get user input when form is submitted to firebase

$("#submit").on("click", function(){
event.preventDefault();

var trainNameInput = $("#name").val().trim();
var destinationInput = $("#goingTo").val().trim();
var firstArrivalInput = $("#first").val().trim();
var frequencyInput = moment($("#frequency").val().trim()).format("X");

console.log(trainNameInput);
console.log(destinationInput);
console.log(firstArrivalInput);
console.log(frequencyInput);
});


