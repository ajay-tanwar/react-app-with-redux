import { createStore, combineReducers } from 'redux';
import todoReducer from './modules/todo';
const reducers = {
  todo: todoReducer,
};

const rootReducer = combineReducers(reducers);

export default createStore(rootReducer);