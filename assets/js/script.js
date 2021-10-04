/*
-WHEN the page loads
-THEN the user is presented with a pulldown menu with different movie genres

-WHEN the user clicks the submit button
-THEN they are brought to a new HTML page with the movie recommendations

-At the bottom of the page the user has the option to choose a different genre and look for more movie recs.

-WHEN the page loads, and shows movie posters based on the genre (or just clickable names if we can't do that?), and user clicks a movie
-THEN information pops up on the screen about the movie

*/

// var subBtn = document.getElementById("emailBtn");
var button = document.createElement("button");
button.innerHTML = "Submit";


var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.style.marginTop = "40px";
button.style.padding = "3px";

var username;
var email;


button.addEventListener ("click", function(event) {
    location.href = "./index2.html";
    console.log(event);
});

// subBtn.addEventListener("click", function(e) {
//     email = document.querySelector("#email").value;
//     username = document.querySelector("#username").value;
//     e.preventDefault();
//     updateStorage();
// })

// function updateStorage(){
//     localStorage.setItem("email", email);
//     localStorage.setItem("username", username);
// }




const apiKey = "64dc8221474533792ea48b35c977b47c";
var genre = "27"
function getPopMovies(){
    var requestUrl = `https://api.themoviedb.org/3/discover/movie?&api_key=64dc8221474533792ea48b35c977b47c&with_genres=${genre}`
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    });
}
getPopMovies();

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