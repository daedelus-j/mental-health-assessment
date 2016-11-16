'use strict';

import {
  createStore, combineReducers,
  compose, applyMiddleware
} from 'redux';
import * as reducers from '../reducers/screener';
import thunk from 'redux-thunk';


export function factory(initialState={}) {
  const reducer = combineReducers({
    ...reducers,
  });

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension
        ? window.devToolsExtension()
        : f => f
    ),
  );

  return store
}
