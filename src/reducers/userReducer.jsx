import constants from './../constants';
const { c } = constants;

const userReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
  case c.SET_USER: 
    newState.authUser = action.authUser;
    return newState;
  case c.LOG_ERROR:
    newState.loginError = action.error;
    return newState;
  case c.ADD_SHOW:
    console.log('user reducer activated');
    newState.authUser[action.list][action.newShow.id] = action.newShow;
    return newState;
  default:
    return state;
  }
}

export default userReducer;