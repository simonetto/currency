import { combineReducers } from 'redux';
import wizzard from './Wizzard';
import details from './Details';
import identification from './Identification';

const rootReducer = combineReducers({
  wizzard,
  details,
  identification
});

export default rootReducer;
