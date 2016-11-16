'use strict';


module.exports = tryParse;

function tryParse(potentialJson) {

  try { return JSON.parse(potentialJson); }
  catch(e) { }

  return null;
}
