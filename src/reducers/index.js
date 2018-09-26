import { combineReducers } from 'redux';
import breweryFinderReducer from './breweryFinderReducer';

const rootReducer = combineReducers({
  breweryFinder: breweryFinderReducer
})

export default rootReducer
