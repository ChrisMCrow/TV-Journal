import * as c from './../constants';
const api_url = 'https://api.themoviedb.org/3';
const moviedb_api_key = '?api_key=4ecfbbe47d132ddcc6b98ce77d71b265';

export function getPopularShows() {
  return async function(dispatch) {
    try {
      const response = await fetch(`${api_url}/trending/tv/week${moviedb_api_key}`);
      const json = await response.json();
      dispatch({
        type: c.GET_TRENDING,
        data: json.results
      });
    }
    catch (error) {
      console.log('An error occurred.', error);
    }
  }
}

export function getGenres() {
  return async function(dispatch) {
    try {
      const response = await fetch(`${api_url}/genre/tv/list${moviedb_api_key}`);
      const json = await response.json();
      dispatch({
        type: c.GET_GENRES,
        data: json.genres
      });
    }
    catch (error) {
      console.log('An error occurred.', error);
    }
  }
}

export function discoverGenre(id) {
  return async function(dispatch) {
    try {
      const response = await fetch(`${api_url}/discover/tv${moviedb_api_key}&language=en-US&sort_by=popularity.desc&page=1,2,3&with_genres=${id}`);
      const json = await response.json();
      dispatch({
        type: c.DISCOVER_GENRE,
        data: json.results
      });
    }
    catch (error) {
      console.log('An error occurred', error);
    }
  }
}