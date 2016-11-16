'use strict';

import React from 'react';
import cx from 'classnames';


export default ({ question, transitioning }) => {
  const classNames = cx({
    'header--3': true,
    'current-question': true,
    'current-question--transitioning': transitioning,
  });

  return (
    <div className={classNames}>
      {question}
    </div>
  );
}
