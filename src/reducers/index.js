import { combineReducers } from 'redux';
import VerbsReducer from './verbs';

const rootReducer = combineReducers({
  verbs: VerbsReducer,
});

export default rootReducer;
