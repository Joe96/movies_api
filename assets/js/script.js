const apiKey = "64dc8221474533792ea48b35c977b47c";
var genre = "27"

function getPopMovies(){
    var requestUrl = `https://api.themoviedb.org/3/discover/movie?&api_key=64dc8221474533792ea48b35c977b47c&sort_by=vote_average.desc&with_genres=${genre}`

    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    });
}
getPopMovies();