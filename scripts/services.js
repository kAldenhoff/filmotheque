
  var pageNumber = 4;
  getNewMovies();
  getPopularMovies();

function getConfig(){
  var url = "https:///api.themoviedb.org/3/configuration?api_key=b1bf171c0c0b4c218bbfdc19490dead7";

  fetch(url)
  .then((resp) => resp.json())
    .then(function(data){

    })
}

  function getPopularMovies(){
    var moviesList = [];
    for(var i=1;i<=pageNumber;i++){
      var url = `https://api.themoviedb.org/3/movie/popular?api_key=b1bf171c0c0b4c218bbfdc19490dead7&language=en-US&page=${i}`;

      fetch(url)
      .then((resp) => resp.json())
        .then(function(data){
          data.results.forEach(function(movie){
            moviesList.push(movie);
          })
          moviesList.sort((a, b) => b.popularity - a.popularity);
          if(moviesList.length===(20*pageNumber)){
            addMovieHomePage(moviesList, "popularity");
          }
        })
    }

  }

  function getNewMovies(){
    var moviesList = [];
    for(var i=1;i<=pageNumber;i++){
      var url = `https://api.themoviedb.org/3/discover/movie?api_key=b1bf171c0c0b4c218bbfdc19490dead7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&primary_release_date.gte=2018-10-16&primary_release_date.lte=2018-11-16`;

      fetch(url)
      .then((resp) => resp.json())
        .then(function(data){
          data.results.forEach(function(movie){
            moviesList.push(movie);
          })
          moviesList.sort((a, b) => b.popularity - a.popularity);
          if(moviesList.length===(20*pageNumber)){
            addMovieHomePage(moviesList, "release_date");
          }
        })
      }
  }

  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function addMovieHomePage(list, idContainer){
  list.forEach(function(movie){
    var div = document.createElement("div");
    var img = document.createElement("img");
    var title = document.createElement("p");
    var text = document.createTextNode(movie.title);
    var figure = document.createElement("figure");
    title.appendChild(text);
    title.setAttribute("class","movieTitle");
    title.style.paddingBottom = "10px";

    if(movie.poster_path){
      img.src = "https://image.tmdb.org/t/p/w185/"+movie.poster_path;
    }else{
      img.src = "assets/images/noPoster.png";
    }

    img.style.width = "185px";
    // Ajout de l'image dans la page
    div.setAttribute("class","divMoviePoster");
    figure.appendChild(img);
    div.appendChild(figure);
    div.appendChild(title);

    div.addEventListener("mouseover",function(){
      div.style.borderBottom = "1px solid #004ffc";
    })

    div.addEventListener("mouseout",function(){
      div.style.borderBottom = "none";
    })

    document.getElementById(idContainer).appendChild(div);
  })
}
