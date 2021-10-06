//Getting movielist from local storage
var movieDetails = JSON.parse(localStorage.getItem("movielist"));
console.log(movieDetails);
populateMovies(movieDetails); 
//Populate movies with movies details from movielist
function populateMovies(movieDetails) {
  for(var i=0;i<3;i++){
   $("#MoviePicBanner").append(`
    <div class="col s12 l3 center-align" id="Movie0" sytle="width:33%">
    <!-- Div to display content of the Movie.-->
    <div class="col s12 l8 left-align center" id="infoColumn">
      <img src ="https://image.tmdb.org/t/p/w300/${movieDetails[i].poster_path}"  class="responsive-img" id="movie0" alt="Coming Soon...!!!"/>
    <div class="description">
    <div class="description">
      <p  id="title" >Title: ${movieDetails[i].original_title} </p>
      <p  id="description"> About: ${movieDetails[i].overview} </p><br>
      <p  id="popularity"> Rating: ${movieDetails[i].vote_average} </p><br>
      <p  id="releaseDate"> Released On: ${movieDetails[i].release_date} </p><br>
    </div>
    </div>
    </div> `)
  }
}