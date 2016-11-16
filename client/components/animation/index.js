'use strict';

import React from 'react';


const { log } = Math;

export const delay = (
  index=0,
  delayStutter=.01,
  percentage=.04
) => delayStutter + log(index) * percentage;

export const vendorPrefixedTransitionDelay = (delayLength) => {
  return {
    transitionDelay: `${delay(delayLength, .01, .04)}s`,
    WebkitTransitionDelay: `${delay(delayLength, .01, .04)}s`,
    msTransitionDelay: `${delay(delayLength, .01, .04)}s`,
  };
}


export const vendorPrefixedAnimationDelay = (delayLength) => {
  return {
    animationDelay: `${delay(delayLength, .01, .04)}s`,
    WebkitAnimationDelay: `${delay(delayLength, .01, .04)}s`,
    msAnimationDelay: `${delay(delayLength, .01, .04)}s`,
  };
}

