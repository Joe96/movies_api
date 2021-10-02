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

var genreId = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37]

var genres = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"]

for(var i = 0; i < genres.length; i++) {
    var opt = genres[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    dropDown.appendChild(el);

}

console.log(genreId.length);
console.log(genres.length);




// MOVIE
// name: Action          id: 28
// name: Adventure       id: 12
// name: Animation       id: 16
// name: Comedy          id: 35
// name: Crime           id: 80
// name: Documentary     id:  99
// name: Drama           id: 18
// name: Family          id: 10751
// name: Fantasy         id: 14
// name: History         id: 36
// name: Horror          id: 27
// name: Music           id: 10402
// name: Mystery         id: 9648
// name: Romance         id: 10749
// name: Science Fiction id: 878
// name: TV Movie        id: 10770
// name: Thriller        id: 53
// name: War             id: 10752
// name: Western         id: 37