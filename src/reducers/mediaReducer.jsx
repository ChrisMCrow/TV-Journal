import * as c from './../constants';

const mediaReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
  case c.POPULATE_LIST:
    console.log('reducer activated')
    newState = Object.assign({}, state);
    newState.trending = action.responseArr;
    return newState;
  default:
    return state;
  }
}

export default mediaReducer;