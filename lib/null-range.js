'use strict';


const nullRange = (num) => {
  return Array
    .apply(null, new Array(num))
    .map((_) => null);
}

module.exports = nullRange;
