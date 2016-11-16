'use strict';

import React from 'react';
import pvd from '../../general-libs/preventer';
import cx from 'classnames';
import { vendorPrefixedTransitionDelay } from '../animation';


const AnswerBtn = ({
  answer, onClick,
  index, transitioning
}) => {
  const classNames = cx({
    'btn--primary': true,
    'answer-btn': true,
    [`answer-btn--${index}`]: true,
    'answer-btn--transitioning': transitioning,
  });
  onClick = transitioning
    ? () => {}
    : onClick;

  return (
    <span
      style={vendorPrefixedTransitionDelay(index * .99)}
      onClick={pvd(() => onClick(index))}
      className={classNames}>
      {answer}
    </span>
  );
};

export default ({ btn_answers, transitioning, onAnswer }) => {

  return (
    <div className='answer-btns spacer--half'>
      <p className='header--4 action-text spacer--quarter-bottom'>
        Choose one
      </p>
      {
        btn_answers.map((answer, i) => <AnswerBtn
          key={answer}
          index={i}
          transitioning={transitioning}
          answer={answer}
          onClick={onAnswer} />
        )
      }
    </div>
  );
}
