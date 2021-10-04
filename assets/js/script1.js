var movieDetails;

//getting data from local storage
$( document ).ready(function() {
    console.log( "ready!   I am in 2nd page" );
    movieDetails = JSON.parse(localStorage.getItem("movieList"));
    console.log(movieDetails);
    populateMovies(movieDetails);
});

//populating banners
var bannerImg = "https://image.tmdb.org/t/p/w300";
function populateMovies(movieList){
    console.log("movieList "+ movieList);
    for(var i=0; i<3; i++){
      console.log(bannerImg + movieList.results[i].poster_path);
      $('#mveImg'+i).attr('src', bannerImg+movieList.results[i].poster_path);
      $('#mveImg'+i).attr('alt', movieList.results[i].original_title);
    }

        $('#Title').append(movieList.results[0].original_title);
        $('#description').append(movieList.results[0].overview);
        $('#Popularity').append(movieList.results[0].popularity);
        $('#ReleaseDate').append(movieList.results[0].release_date);
    
  }

  //populating details of populated banners
  function populateDetails(idx){
   

    var idVal = idx.id.substring(idx.id.length,idx.id.length-1);

        $('#Title').append(movieDetails.results[idVal].original_title);
        $('#description').append(movieDetails.results[idVal].overview);
        $('#Popularity').append(movieDetails.results[idVal].popularity);
        $('#ReleaseDate').append(movieDetails.results[idVal].release_date);

  }