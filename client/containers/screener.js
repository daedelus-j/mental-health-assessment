'use strict';

require('../less/screener/index.less');

import React from 'react';
import ReactDOM from 'react-dom';
import ready from 'domready';
import ext from 'jquery-extend';
import { Provider } from 'react-redux';
import ScreenerSteps from '../components/steps';
import { factory } from '../stores';
import tryParse from '../../lib/try-parse';

const serverDataAdaptor = (state) => {
  return ext(true, {}, state, {
    current_step: {
      step_index: 0,
      num_questions: state.questions.length - 1
    }
  });
}

ready(() => {
  const inlineJsonState = tryParse(window.__initial_state__);
  const initialState = inlineJsonState
    ? serverDataAdaptor(inlineJsonState)
    : {};
  const store = factory(initialState);
  ReactDOM.render(
    <Provider store={store}>
      <ScreenerSteps />
    </Provider>
    , document.getElementById('content')
  );
});
