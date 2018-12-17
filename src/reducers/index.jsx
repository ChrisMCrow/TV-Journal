import mediaReducer from './mediaReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  media: mediaReducer
})

export default rootReducer;