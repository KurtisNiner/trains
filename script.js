// Initialize Firebase
var config = {
    apiKey: "AIzaSyAGvX7O6l9Dt7OYecaxPueWyeLfE4k2-U4",
    authDomain: "trains-5432c.firebaseapp.com",
    databaseURL: "https://trains-5432c.firebaseio.com",
    projectId: "trains-5432c",
    storageBucket: "",
    messagingSenderId: "198411840912"
};
//configures firebase
firebase.initializeApp(config);

//give a variable to the firebase in order to refrence it
var database = firebase.database();

//give an array of variables that allow train times to be saved 
var trains = [];
var trainNameInput = "";
var destinationInput ="";
var firstArrivalInput = 0;
var frequencyInput = 0;

//get user input when form is submitted to firebase

$("#submit").on("click", function () {
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


