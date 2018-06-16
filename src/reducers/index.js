import { combineReducers } from 'redux';
import todos from './todos-reducers';
import user from './user-reducers';

const root = combineReducers({
  todos,
  user
});


export default root;