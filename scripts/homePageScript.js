
  function displayDetails(details){
     document.getElementById("detailsPoster").src = "https://image.tmdb.org/t/p/w342/"+details.poster_path;

     var movieTitle = document.getElementById("movieInfos").getElementsByTagName("h1")[0];
     movieTitle.innerText = details.title+" ";

     var releaseYear = new Date(details.release_date);
     releaseYear = releaseYear.getFullYear();
     movieTitle.appendChild(document.createElement("span"));
     movieTitle.getElementsByTagName("span")[0].innerText = "("+releaseYear+")";
  }


  function openDetails(id) {
      document.getElementById("movieDetails").style.height = "100%";
      getDetailsMovie(id);
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeDetails() {
      document.getElementById("movieDetails").style.height = "0%";
  }
