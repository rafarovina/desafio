import { createStore } from 'redux';
import battleReducers from './reducers/battleReducer';

const store = createStore(battleReducers);

export default store;
