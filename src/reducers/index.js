import { combineReducers } from 'redux';
import todos from './todos-reducers'

const root = combineReducers({
  todos,
});


export default root;