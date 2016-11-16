'use strict';

import React from 'react';
import nullRange from '../../../lib/null-range';
import cx from 'classnames';


const AnswerDot = ({
  answer=4, transitioning,
  first_unanswered, index
}) => {
  const classNames = cx({
    'answer-dot': true,
    'answer-dot--transitioning': transitioning,
    'answer-dot--first-unanswered': first_unanswered,
    [`answer-dot--${answer}`]: true,
  });

  return (
    <div className={classNames}/>
  );
}

export default ({ step_answers, questions, transitioning }) => {
  const unanswered = step_answers.length;
  return (
    <div className='spacer--half'>
      {
        nullRange(questions.length)
          .map((_, i) => <AnswerDot
            key={i}
            first_unanswered={i === unanswered}
            transitioning={transitioning}
            index={i}
            answer={step_answers[i]} />
          )
      }
    </div>
  );
}
