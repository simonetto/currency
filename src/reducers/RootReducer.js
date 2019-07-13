import { combineReducers } from 'redux';
import wizzard from './Wizzard';
import details from './Details';

const rootReducer = combineReducers({
  wizzard,
  details
});

export default rootReducer;
