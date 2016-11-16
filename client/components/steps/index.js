'use strict';

import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import {
  updateStepsForm,
} from '../../actions'
import Loader from '../loading-cont/index';
import AnswerBtns from './answer-btns';
import AnswerDots from './answer-dots';
import CurrentQuestion from './current-question';
import RecommendedDoctors from './recommended-doctors';
import Logo from './logo';



const QuestionsForm = (props) => {

  const {
    main_question,
    questions,
    step_answers,
    current_step,
    step_form,
    btn_answers,
    onAnswer,
  } = props;

  return (
    <div className='spacer'>
      <h2 className='header--2 main-question spacer--half-bottom'>
        {main_question}
      </h2>
      <div className='spacer--half-top container--raised'>
        <CurrentQuestion 
          transitioning={step_form.transitioning}
          question={questions[current_step]} />
        <AnswerBtns
          transitioning={step_form.transitioning}
          onAnswer={onAnswer}
          btn_answers={btn_answers} />
      </div>
    </div>
  )
}

const ScreenerSteps = React.createClass({

  onChange(props) {
    const {
      updateStepsForm,
      dispatch
    } = this.props;
  },

  onAnswer(choice) {
    const {
      updateStepsForm,
      dispatch
    } = this.props;
    dispatch(
      updateStepsForm(choice)
    );
  },

  render()  {
    const {
      main_question,
      questions,
      step_answers,
      current_step,
      step_form,
      btn_answers,
      recommended_doctors
    } = this.props;

    const body = current_step === null
      ? <RecommendedDoctors doctors={recommended_doctors} />
      : <QuestionsForm
          onAnswer={this.onAnswer}
          {...this.props} />;

    return (
      <div className='container'>
        <div className='logo-cont center'>
          <div className='container__inner'>
            <Logo />
            <AnswerDots
              questions={questions}
              transitioning={step_form.transitioning}
              step_answers={step_answers} />
          </div>
        </div>
        <div className='container__inner'>
          {body}
        </div>
      </div>
    );
  }
});


const mapStateToProps = ({
  step_answers,
  current_step,
  step_form,
  questions,
  answers,
  recommended_doctors,
  main_question,
}) => ({
  // reducers
  step_answers,
  current_step: current_step.step_index,
  step_form,
  questions,
  answers,
  recommended_doctors,
  main_question,
  btn_answers: answers,

  // actions
  updateStepsForm,
});


export default connect(mapStateToProps)(ScreenerSteps);
