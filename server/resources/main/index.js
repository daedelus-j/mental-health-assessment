'use strict';

const constants = require('../../constants')

module.exports = { get, };

function get(req, res) {
  var time = req.params.time;
  res.statusCode = 200;
  res.render('base.pug', {
    initial_state: {
      answers: constants.answers,
      questions: constants.questions,
      recommended_doctors: constants.recommended_doctors,
      main_question: constants.main_question,
    },
    assets: {
      css: '/screener.css',
      js: '/screener.js'
    }
  });
}

