import mediaReducer from './mediaReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  media: mediaReducer,
  user: userReducer
})

export default rootReducer;