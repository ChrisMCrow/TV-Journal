import * as c from './../constants';

const moviedb_api_key = '4ecfbbe47d132ddcc6b98ce77d71b265';

export function getPopularShows() {
  return function(dispatch) {
    return fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${moviedb_api_key}`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(populateList(json.results))
    });
  }
}

export const populateList = (responseArr) => ({
  type: c.POPULATE_LIST,
  responseArr
})