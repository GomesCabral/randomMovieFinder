const tmdbKey = '91c90a764e548536535a895992dc61cf';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');


const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  //url to send the fetch request
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

//try and catch to handle the errors
  try{
    const response = await fetch(urlToFetch);   //wait for a Promise to resolve
    if(response.ok){
      //capture the data to populate the dropdown menu and convert to json object
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  }catch(error){
    console.log(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre(); //from helper.js(user’s selected genre)
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try {
    const response = await fetch (urlToFetch);
    if(response.ok){
        const jsonResponse = await response.json();
        const movies = jsonResponse.results;
        return movies;
    }
  } catch (error) {
    console.log(error)
  }

};



const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    const movieEndpoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch);
        if(response.ok){
            const movieInfo = await response.json();
            return movieInfo;
        }
        
    } catch (error) {
        console.log(error);
    }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = await getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info)
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;