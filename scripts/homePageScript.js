
  function displayDetails(details){

    document.getElementsByClassName("overlay")[0].style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)),url('https://image.tmdb.org/t/p/w1280/${details.backdrop_path}')`;

    document.getElementById("detailsPoster").src = "https://image.tmdb.org/t/p/w342/"+details.poster_path;

    var movieTitle = document.getElementById("movieInfos").getElementsByTagName("h1")[0];
    movieTitle.innerText = details.title+" ";

    var releaseYear = new Date(details.release_date);
    releaseYear = releaseYear.getFullYear();
    movieTitle.appendChild(document.createElement("span"));
    movieTitle.getElementsByTagName("span")[0].innerText = "("+releaseYear+")";

    document.getElementById("synopsis").innerText = details.overview;
    if(details.videos.results.length>0){
      document.getElementById("overlayTrailer").getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/"+details.videos.results[details.videos.results.length-1].key;
    }else{
      document.getElementById("overlayTrailer").getElementsByTagName("iframe")[0].src = "";
    }


  }

  function displayCast(cast){
    while (document.getElementById("castContainer").firstChild) {
        document.getElementById("castContainer").removeChild(document.getElementById("castContainer").firstChild);
    }

    for(var i = 0; cast.length>6 ? i <6 : i<cast.length;i++){
      var div = document.createElement("div");
      div.setAttribute("class","castContent");
      var profile = document.createElement('img');
      if(cast[i].profile_path){
        profile.src = `https://image.tmdb.org/t/p/w185/${cast[i].profile_path}`;
      }else{
          profile.src = "assets/images/noPoster.png";
      }

      var actorName = document.createElement("p");
      actorName.setAttribute("class","actorName");
      actorName.innerText = cast[i].name;

      var characterName = document.createElement("p");
      characterName.setAttribute("class","characterName");
      characterName.innerText = cast[i].character;

      div.appendChild(profile);
      div.appendChild(actorName);
      div.appendChild(characterName);

      document.getElementById("castContainer").appendChild(div);

    }

    /*
    var i=0;
    document.querySelectorAll(".castContent").forEach(function(actor){
      actor.getElementsByTagName("img")[0].src = `https://image.tmdb.org/t/p/w185/${cast[i].profile_path}`;
      i++;
    })
    */
  }


  function openDetails(id) {
      document.getElementById("movieDetails").style.height = "100%";
      getDetailsMovie(id);
      getCast(id);
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeDetails() {
      document.getElementById("movieDetails").style.height = "0%";
  }
