
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
  }


  function openDetails(id) {
      document.getElementById("movieDetails").style.height = "100%";
      getDetailsMovie(id);
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeDetails() {
      document.getElementById("movieDetails").style.height = "0%";
  }
