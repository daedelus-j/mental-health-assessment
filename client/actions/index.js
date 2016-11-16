'use strict'

import { actions } from '../constants';
import tryParse from '../../lib/try-parse';
import xhr from 'xhr';
import asyncTransition from '../general-libs/async-transition';


const {
  UPDATE_FORM,
  UPDATE_STEP,
  START_TRANSITION,
  END_TRANSITION,
  CREATING_ASSESSMENT,
  ERROR_CREATE_ASSESSMENT,
  SUCCESS_CREATE_ASSESSMENT,
} = actions;


function headers() {
  return {
    'Content-Type': 'application/json'
  };
}

function updateStepsForm(answer) {
  return dispatch => {
    dispatch({
      type: START_TRANSITION,
      data: { answer },
    });

    setTimeout(() => {
      dispatch({
        type: END_TRANSITION,
        data: { answer },
      });

      dispatch({
        type: UPDATE_STEP,
        data: { answer },
      });

    }, 600)
  };
}

function createAssessment(form_data) {
  return dispatch => {
    if (search_term === '') return;

    let url = `/assessments/${assessment_type}/`;
    dispatch({ type: CREATING_ASSESSMENT })
    xhr({
      uri: url,
      headers: headers()
    }, asyncTransition(function (err, resp, body) {

      body = tryParse(body);

      if (err || body === null) {
        return dispatch({
          type: ERROR_CREATE_ASSESSMENT,
          data: err
        });
      }

      dispatch({
        type: SUCCESS_CREATE_ASSESSMENT,
        data: {}
      });
    }))
  }
}


export {

  updateStepsForm,

};
