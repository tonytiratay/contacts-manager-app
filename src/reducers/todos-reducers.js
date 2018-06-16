import {  ADD_TODO } from '../actions/todos-actions';

export default function todos(state=[], action){
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, action.payload ];
    break;
    default:
      return state
  }
}