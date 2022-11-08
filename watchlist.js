document.addEventListener('DOMContentLoaded', function() {// code here will execute after the document is loaded
    const watchlistJSON = localStorage.getItem('watchlist');
    const watchlist = JSON.parse(watchlistJSON);
    document.getElementsByClassName("movie-container")[0].innerHTML = renderMovie(watchlist);// event listener code goes here
 });

 const renderMovie = (movieArray) => {
    const movieHtmlArray = movieArray.map(function(currentMovie) {
        return ` <div class="movie">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
        <div class="card-body">
          <h2 class="title">${currentMovie.Title}</h2>
          <p class="release date">${currentMovie.Year}</p>
          <a href="#" class="btn btn-primary add-button" data-imdbid=${currentMovie.imdbID}>Add movie</a>
        </div>
      </div>`
    })
    return movieHtmlArray.join('');
}





