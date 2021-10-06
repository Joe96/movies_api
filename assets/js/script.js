const apiKey = "64dc8221474533792ea48b35c977b47c";
var genre = ""
//Fetching popular movies from Movieurl
function getPopMovies(){
    var requestUrl = `https://api.themoviedb.org/3/discover/movie?&api_key=64dc8221474533792ea48b35c977b47c&with_genres=${genre}`
    fetch(requestUrl)
    .then(function(response){
         response.json().then(function (data) {
         //Storing data in localstorage
         localStorage.setItem("movielist", JSON.stringify(data.results.slice(0,3)));
         window.location="./index1.html";
        })
    })
}
function getAllGenre() {
    var requestUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=64dc8221474533792ea48b35c977b47c&language=en-US`
    fetch(requestUrl)
    .then(function(response){
         response.json().then(function (data) {
         //Storing data in localstorage
          console.log(data)
          var selectGenre = document.getElementById("favoriteMovies");
          selectGenre.innerHTML =  `<option value=""> </option>`  
            for(var i=0; i<data.genres.length;i++) {
               selectGenre.innerHTML = selectGenre.innerHTML+  `<option value="${data.genres[i].id}">${ data.genres[i].name} </option>`  
            }
        })
    })
}
getAllGenre();
//Function for selecting dropdown movies type
$("#favoriteMovies").change(function() {
    //alert($("#favoriteMovies").val());
    genre = $("#favoriteMovies").val();
    console.log("Genre chosen:", genre);
    getPopMovies();
})
//user input field
var subBtn = document.getElementById("emailBtn");
//
subBtn.addEventListener("click", function(e) {
  email = document.querySelector("#email").value;
  username = document.querySelector("#username").value;
  e.preventDefault();
  updateStorage();
})
//storing user values in local storage
function updateStorage(){
  localStorage.setItem("email", email);
  localStorage.setItem("username", username);
}