import * as c from './../constants';

const mediaReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
  case c.GET_TRENDING:
    newState.trending = action.data;
    return newState;
  case c.GET_GENRES:
    newState.genres = action.data;
    return newState;
  case c.DISCOVER_GENRE:
    newState.selectedGenre = action.results;
    newState.selectedGenreId = action.id;
    newState.selectedGenrePage = action.page;
    return newState;
  default:
    return state;
  }
}

export default mediaReducer;