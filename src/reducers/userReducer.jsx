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
    let newShowObject = {
      [action.newShow.id]: Object.assign({},action.newShow, { onList: true })
    }
    if (!(newState[action.list])) {
      newState[action.list] = newShowObject;
    } else {
      newState[action.list] = Object.assign(newState[action.list], newShowObject);
    }
    return newState;
  case c.REMOVE_SHOW:
    console.log('REMOVE_SHOW action', newState[action.list][action.showId]);
    delete newState[action.list][action.showId];
    return newState;
  default:
    return state;
  }
}

export default userReducer;