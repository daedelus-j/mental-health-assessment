'use strict';

import React from 'react';
import {
  vendorPrefixedAnimationDelay,
} from '../animation';


const Loader = ({ loading }) => {
  if (!loading) return <div className='loading-cont'/>;
  let textList = 'Loading...'.split('').map((char, index) => {
    return <span
      style={vendorPrefixedAnimationDelay(index)}
      className='up-down-animation'>{char}</span>
  })

  return (
    <div className='loading-cont'>
      {textList}
    </div>
  );
}

export default Loader;
