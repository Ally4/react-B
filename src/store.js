import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const middleware = applyMiddleware(thunk);

const store = createStore(allReducers, {}, composeWithDevTools(middleware));

export default store;