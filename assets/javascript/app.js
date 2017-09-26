// Initialize Firebase

var config = {
    apiKey: "AIzaSyAuYrWqniGIviMM1LsufSjFkuh6PSBGUh0",
    authDomain: "movies-d6628.firebaseapp.com",
    databaseURL: "https://movies-d6628.firebaseio.com",
    projectId: "movies-d6628",
    Bucket: "movies-d6628.appspot.com",
    messagingSenderId: "959648926177"
  };

firebase.initializeApp(config);

// Name a Variable to Reference the Database
var database = firebase.database();

// Database Directory
var movieRef = database.ref("/movies");

// Create Variables
var name = null;

// Listen for First Button Click
$("#user-add-movie").on("click", function() {
  event.preventDefault();
  var nameOfMovie = $("#user-input-name").val().trim();

  if (nameOfMovie === "") {
    return;
  } else {
  	console.log(nameOfMovie);
    var newMovie = {
    name: nameOfMovie
    }

    // Save to Firebase
    database.ref("/movies").push(newMovie);

    // Make Input Boxes Blank After Firebase Push
    $("#user-input-name").val(null);
  }
});

// Add New Movie to Firebase
database.ref("/movies").on("child_added", function( x, y) {

  // Store everything into a variable.
  var nameOfMovie = x.val().name;

  // Add New Movie to Table
  $("#my-movie-list").append("<tr><td>" + nameOfMovie + "</td><td>" + "</td><td class='col-xs-1'>" + "<input type='submit' value='X' class='remove-movie' btn btn-primary btn-sm'>" + "<td><br><br></td>" + "</tr>");


$("body").on("click", ".remove-movie", function(){
     $(this).closest ('tr').remove();
     movieRef.remove();
});



// Listen for Second Button Click ************************API BY SHARAD HERE
$("#user-search-plot").on("click", function() {
  event.preventDefault();
  var nameOfMoviePlot = $("#user-input-name").val().trim();

  if (nameOfMoviePlot === "") {
    return;
  } else {
  	console.log(nameOfMoviePlot);
    //window.open("https://www.w3schools.com");
    // Open New Tab
    // Pull Summary from OMDB
    // Display Movie Summary in New Tab
	$("#user-input-name").val(null);
  }
});



// Listen for Third Button Click ************************API BY BRIAN HERE
$("#user-search-clip").on("click", function() {
  event.preventDefault();
  var nameOfMovieClip = $("#user-input-name").val().trim();

  if (nameOfMovieClip === "") {
    return;
  } else {
  	console.log(nameOfMovieClip);

    //window.open("https://www.w3schools.com");
    // Open New Tab
    // Pull Clip from YouTube
    // Play Clip in New Tab
	$("#user-input-name").val(null);
  }
});

$("#user-clear").on("click", function() {
  event.preventDefault();
  $("#user-input-name").val(null);

});

});