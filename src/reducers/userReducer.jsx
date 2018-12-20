import constants from './../constants';
const { c } = constants;

const userReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
  case c.SET_USER: 
    console.log(action.authUser);
    newState.authUser = action.authUser;
    return newState;
  case c.LOG_ERROR:
    newState.loginError = action.error;
    return newState;
  default:
    return state;
  }
}

export default userReducer;