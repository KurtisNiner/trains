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
// console.log(database);
//give an array of variables that allow train times to be saved 
// var timeNow = moment().format("hh:mm a");
var trains = [];
var trainNameInput = "";
var destinationInput = "";
var firstArrivalInput = 0;
var frequencyInput = 0;

//get user input when form is submitted to firebase

$("#submit").on("click", function () {
    event.preventDefault();

    trainNameInput = $("#name").val().trim();
    destinationInput = $("#goingTo").val().trim();
    firstArrivalInput = $("#first").val().trim();
    frequencyInput = $("#frequency").val().trim();

    // console.log(trainNameInput);
    // console.log(destinationInput);
    // console.log(firstArrivalInput);
    // console.log(frequencyInput);

    var trainSave = {
        trainName: trainNameInput,
        destination: destinationInput,
        firstArrive: firstArrivalInput,
        frequency: frequencyInput
    }

    database.ref().push(trainSave);
});

database.ref().on("child_added", function (childSnapshot, prevChildKey) {
console.log(childSnapshot.val()); //database info

var tr = $("<tr>");
tr.text(childSnapshot.val().destination);
$("#trainSchedule").append("<tr><td>" + childSnapshot.val().trainName + 
"</td><td>" +  childSnapshot.val().destination + "</td><td>" + childSnapshot.val().firstArrive + "</td><td>"
+ childSnapshot.val().frequency + "</td></tr>");


})
