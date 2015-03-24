/*
 * uusgoos
 * https://github.com/arminhammer/uusgoos
 *
 * Copyright (c) 2015 Armin Graf
 * Licensed under the MIT license.
 */

'use strict';

var digitRE = /\d/;
var lcAsciiRE = /[a-z]/;

function placeChar(base, newChar) {

  console.log('placing %s into %s', newChar, base);

  if (!base) {

    console.log('%s is empty, setting to %s', base, newChar);
    return newChar;

  }
  else if (base === newChar) {

    console.log('%s and %s are equal', newChar, base);
    return base;

  }
  else if ((base === '\\d' || digitRE.test(base)) && digitRE.test(newChar)) {
    console.log('%s and %s are digits', base, newChar);
    return '\\d';
  }
  else if ((base === '[a-z]' || lcAsciiRE.test(base)) && lcAsciiRE.test(newChar)) {
    console.log('%s and %s are lower case ascii', base, newChar);
    return '[a-z]';
  }
  else {
    console.log('There was no match.  Returning %s', base);
    return base;
  }

}

module.exports = function(inputs, callback) {

  console.log('Arguments: ' + arguments.length);

  var patternObj = {};
  var pattern = '';
  var maxLength = 0;

  if (inputs && (inputs.constructor === Array)) {

    console.log('First arg is an array');

    for (var i = 0; i < inputs.length; i++) {

      console.log('word: %s, i: %d', inputs[i], i);

      for (var x = 0; x < inputs[i].length; x++) {

        console.log(inputs[i][x]);

        patternObj[x] = placeChar(patternObj[x], inputs[i][x]);

        if (x > maxLength) {
          maxLength = x;
        }

      }

    }

  }

  console.log('patternObj:');
  console.log(patternObj);
  console.log('maxLength');
  console.log(maxLength);

  for (var y = 0; y <= maxLength; y++) {

    pattern += patternObj[y];

  }

  if (callback && typeof(callback) === 'function') {
    callback(pattern);
  }

};
