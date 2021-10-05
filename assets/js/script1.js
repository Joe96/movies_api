//Getting movielist from local storage
var movieDetails = JSON.parse(localStorage.getItem("movielist"));
console.log(movieDetails);
populateMovies(movieDetails) 
//Populate movies from movielist
function populateMovies(movieDetails) {
  //  $("#MoviePicBanner").empty()
for(var i=0;i<3;i++){
   $("#MoviePicBanner").append(`
    <div class="col s12 l3 center-align" id="Movie0" sytle="width:33%">
          
   <!-- Div to display content of the Movie.-->
<div class="col s12 l8 left-align center" id="infoColumn">
<p  id="title" style="text-align: left;">Title :${movieDetails[i].original_title} </p>
<p  id="description" style="text-align: left;"> About :${movieDetails[i].overview} </p><br>
<p  id="popularity" style="text-align: left;"> Rating :${movieDetails[i].popularity} </p><br>
<p  id="releaseDate" style="text-align: left;"> Released On :${movieDetails[i].release_date} </p><br>

<img src ="https://image.tmdb.org/t/p/w300/${movieDetails[i].poster_path}"  class="responsive-img" id="movie0" alt="Coming Soon...!!!"/>
</div>
</div> `)
 
}

}