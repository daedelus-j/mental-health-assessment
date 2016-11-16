'use strict';

import mirror from 'keymirror';


function createRequestCycle(name) {
  return mirror({
    [`CREATING_${name}`]: null,
    [`SUCCESS_CREATE_${name}`]: null,
    [`ERROR_CREATE_${name}`]: null,
  });
}

export const actions = mirror({
  UPDATE_FORM: null,
  UPDATE_STEP: null,
  START_TRANSITION: null,
  END_TRANSITION: null,
  ...createRequestCycle('ASSESSMENT'),
});
