import * as c from './../constants';

const api_url = 'https://api.themoviedb.org/3';
const moviedb_api_key = '?api_key=4ecfbbe47d132ddcc6b98ce77d71b265';

export function getPopularShows() {
  return function(dispatch) {
    return fetch(`${api_url}/trending/tv/week${moviedb_api_key}`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch({
        type: c.GET_TRENDING,
        data: json.results
      })
    });
  }
}

export function getGenres() {
  return function(dispatch) {
    return fetch(`${api_url}/genre/tv/list${moviedb_api_key}`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch({
        type: c.GET_GENRES,
        data: json.genres
      })
    });
  }
}