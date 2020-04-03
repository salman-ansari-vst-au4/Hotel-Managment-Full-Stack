import { combineReducers } from "redux";
import data from './reducer';
const rootReducer = combineReducers({
  restaurant: data,
});

export default rootReducer;