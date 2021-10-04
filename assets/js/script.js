const apiKey = "64dc8221474533792ea48b35c977b47c";
function getPopMovies(genre){
 
//fetching url 
    var requestUrl = `https://api.themoviedb.org/3/discover/movie?&api_key=64dc8221474533792ea48b35c977b47c&with_genres=${genre}`
    fetch(requestUrl)
    .then(function(response){
        response.json().then(function (data) {
          console.log(data);
          if(data != ""){
            localStorage.clear();

            localStorage.setItem("movieList",JSON.stringify(data));
  
            window.location="./index1.html";
          }else{
             alert("Please ")
          }
         
        
        });
    })

    
  }

  $("#favoriteMovies").change(function(){
    //alert($("#favoriteMovies").val());
      getPopMovies($("#favoriteMovies").val());
  });

subBtn.addEventListener("click", function(e) {
    email = document.querySelector("#email").value;
    username = document.querySelector("#username").value;
    e.preventDefault();
    updateStorage();
})

function updateStorage(){
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
}
