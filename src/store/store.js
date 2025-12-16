import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reducers from './reducers';
import { thunk } from 'redux-thunk';

export const myStore = createStore(
    reducers,
    applyMiddleware(thunk)
);