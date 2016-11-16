'use strict';

import ext from 'jquery-extend';
import {
  actions,
} from '../../constants';

const {
  UPDATE_STEP,
  START_TRANSITION,
  END_TRANSITION,
  FETCHING_ARTISTS,
  SUCCESS_FETCH_ARTISTS,
} = actions;

export function step_answers(state=[], action) {

  switch(action.type){
    case UPDATE_STEP:
      return [...state, action.data.answer];
    default:
      return state;
  }

}

export function current_step(state={
  step_index: 0,
  num_questions: 0,
}, action) {
  switch(action.type){
    case UPDATE_STEP:
      let { step_index, num_questions, } = state;
      if (step_index === num_questions) return ext({}, state, { step_index: null });
      return ext({}, state, { step_index: ++step_index });
    default:
      return state;
  }

}

export function step_form(state={
  transitioning: false,
}, action) {
  switch(action.type){
    case START_TRANSITION:
      return { transitioning: true }
    case END_TRANSITION:
      return { transitioning: false }
    default:
      return state;
  }
}

export function main_question(state='', action) {
  return state;
}

export function answers(state=[], action) {
  return state;
}

export function questions(state=[], action) {
  return state;
}

export function recommended_doctors(state=[], action) {
  return state;
}
