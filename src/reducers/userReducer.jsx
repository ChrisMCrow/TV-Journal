import * as c from './../constants';

const userReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
  case c.SET_USER: 
    newState.authUser = action.user;
    return newState;
  case c.LOG_ERROR:
    newState.loginError = action.error;
    return newState;
  default:
    return state;
  }
}

export default userReducer;