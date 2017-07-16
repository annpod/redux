import { createStore, compose, applyMiddleware } from 'redux';
import counterApp from './reducers';
import thunk from 'redux-thunk';

const store = createStore(counterApp);
export default store;