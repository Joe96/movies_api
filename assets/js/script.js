/*
-WHEN the page loads
-THEN the user is presented with a pulldown menu with different movie genres

-WHEN the user clicks the submit button
-THEN they are brought to a new HTML page with the movie recommendations

-At the bottom of the page the user has the option to choose a different genre and look for more movie recs.

-WHEN the page loads, and shows movie posters based on the genre (or just clickable names if we can't do that?), and user clicks a movie
-THEN information pops up on the screen about the movie

*/



var button = document.createElement("button");
button.innerHTML = "Submit";


var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.style.marginTop = "40px";
button.style.padding = "3px";

button.addEventListener ("click", function(event) {
    location.href = "./index2.html";
    console.log(event);
});


var dropDown = document.getElementById("favoriteMovies");



var genres = ["Horror", "Comedy", "Rom Com"]

for(var i = 0; i < genres.length; i++) {
    dropDown.dropDown

}