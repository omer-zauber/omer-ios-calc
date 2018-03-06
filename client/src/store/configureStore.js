import { createStore /*, combineReducers */ } from 'redux';
import calcReducer from '../reducers/calcReducer';

export default () => {
  const store = createStore(calcReducer);
  
  return store;
};
