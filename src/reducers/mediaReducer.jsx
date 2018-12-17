import * as c from './../constants';

const mediaReducer = (state = {}, action) => {
  let newState;
  switch (action.types) {
  case c.POPULATE_LIST:
    newState = Object.assign({}, state, action.responseArr);
    return newState;
  default:
    return state;
  }
}

export default mediaReducer;