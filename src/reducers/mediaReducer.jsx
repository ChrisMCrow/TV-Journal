import constants from './../constants';
const { c } = constants;

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
    newState.selectedList = action.results;
    newState.filterQuery = action.id;
    newState.page = action.page;
    return newState;
  case c.SEARCH_TV:
    newState.selectedList = action.data;
    newState.filterQuery = action.query;
    newState.page = action.page;
    return newState;
  default:
    return state;
  }
}

export default mediaReducer;