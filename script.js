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
var now = moment();
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

    var trainNameInput = $("#name").val().trim();
    var destinationInput = $("#goingTo").val().trim();
    var firstArrivalInput = $("#first").val().trim();
    var frequencyInput = $("#frequency").val().trim();

    // console.log(trainNameInput);
    // console.log(destinationInput);
    // console.log(firstArrivalInput);
    // console.log(frequencyInput);

    //calculate time differences 
    var firstArrival = moment(trainNameInput, "hh:mm A").subtract(1, "years");
    var difference = moment().diff(moment(firstArrivalInput, "minutes"));
    var timeRemaining = difference % frequencyInput;
    var timeUntilNextArrival = frequencyInput - timeRemaining;
    var nextTrain = moment().add(timeUntilNextArrival, "minutes").format("hh:mm A");

    // console.log(firstArrival);
    // console.log(difference);
    // console.log(timeUntilNextArrival);
    // console.log(timeUntilNextTrain);

    var trainSave = {
        trainName: trainNameInput,
        destination: destinationInput,
        firstArrive: firstArrivalInput,
        frequency: frequencyInput,
        timeUntil: timeUntilNextArrival,
        next: nextTrain
    }

    database.ref().push(trainSave);
});

database.ref().on("child_added", function (childSnapshot, prevChildKey) {
    console.log(childSnapshot.val()); //database info

//appends the information to the form
    var tr = $("<tr>");
    tr.text(childSnapshot.val().destination);
    $("#trainSchedule").append("<tr><td>" + childSnapshot.val().trainName +
        "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().firstArrive + "</td><td>"
        + childSnapshot.val().frequency + "</td></tr>");
    // + nextTrainArrival + "</td><td>"
    // + waitTime + "</td></tr>":;
})

