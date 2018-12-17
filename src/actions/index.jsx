import * as c from './../constants';

export function getPopularShows() {
  console.log(process.env.moviedb_api_key);
  return function(dispatch) {
    return fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.moviedb_api_key}`).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(populateList(json.body.results))
    });
  }
}

export const populateList = (responseArr) => ({
  type: c.POPULATE_LIST,
  responseArr
})