'use strict';

export default function asyncTransition(cb, time=800) {
  let doneCalled = false;
  let args = null;
  let done = () => {
    doneCalled = true;
    if (args === null) return;
    cb.apply(null, args)
  }

  setTimeout(done, time);

  return function() {
    if (doneCalled) return cb.apply(null, arguments);
    args = [].slice.call(arguments);
  }
}
