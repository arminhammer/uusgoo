/*
 * uusgoos
 * https://github.com/arminhammer/uusgoos
 *
 * Copyright (c) 2015 Armin Graf
 * Licensed under the MIT license.
 */

'use strict';

var digitRE = /\d/;
var lowerCaseLetterAsciiRE = /[a-z]/;
var upperCaseLetterAsciiRE = /[A-Z]/;
var letterAsciiRE = /[a-zA-Z]/;

function placeChar(base, newChar) {

  console.log('placing %s into %s', newChar, base);

  if (!base) {

    console.log('%s is empty, setting to %s', base, newChar);
    return newChar;

  } else if (base === newChar) {

    console.log('%s and %s are equal', newChar, base);
    return base;

  } else if ((base === '\\d' || digitRE.test(base)) && digitRE.test(newChar)) {

    console.log('%s and %s are digits', base, newChar);
    return '\\d';

  } else if ((base !== '[a-zA-Z]' && base !== '\\w') && ((base === '[a-z]' || lowerCaseLetterAsciiRE.test(base)) && lowerCaseLetterAsciiRE.test(newChar))) {

    console.log('%s and %s are lower case ascii', base, newChar);
    return '[a-z]';

  } else if (base !== '[a-zA-Z]' && ((base === '[A-Z]' || upperCaseLetterAsciiRE.test(base)) && upperCaseLetterAsciiRE.test(newChar))) {
    console.log('Test: ' + upperCaseLetterAsciiRE.test(base));
    console.log('%s and %s are upper case ascii', base, newChar);
    return '[A-Z]';

  } else if (
    (base === '[a-zA-Z]' && letterAsciiRE.test(newChar)) ||
    (base === '[a-z]' && upperCaseLetterAsciiRE.test(newChar)) ||
    (base === '[A-Z]' && lowerCaseLetterAsciiRE.test(newChar)) ||
    (lowerCaseLetterAsciiRE.test(base) && upperCaseLetterAsciiRE.test(newChar)) ||
    (upperCaseLetterAsciiRE.test(base) && lowerCaseLetterAsciiRE.test(newChar))
  ) {

    console.log('%s and %s are mixed-case ascii', base, newChar);
    return '[a-zA-Z]';

  } else if ((letterAsciiRE.test(base) && digitRE.test(newChar)) ||
    (digitRE.test(base) && letterAsciiRE.test(newChar))) {
    console.log('There was a match for \\w');
    return '\\w';
  } else {
    console.log('There was no match.  Returning %s', base);
    return base;
  }

}

function buildPattern(patternObj, callback) {

  var pattern = '';

  var y = 0;
  var matchCount = 1;

  while(y <= patternObj.maxLength) {

    console.log('Before:');
    console.log(patternObj);

    var z = y+1;

    if(patternObj[y] === patternObj[z]) {

      console.log(patternObj[y] + ' and ' + patternObj[z] + ' are the same.');
      matchCount++;

    }
    else {

      console.log(patternObj[y] + ' and ' + patternObj[z] + ' are different.');
      if(matchCount > 1) {
        pattern += patternObj[y]+ '{' + matchCount + '}';
      }
      else {
        pattern += patternObj[y];
      }

      matchCount = 1;
    }

    y++;

    console.log('After:');
    console.log(patternObj);

  }

  /*
  for (var y = 0; y <= patternObj.maxLength; y++) {

    pattern += patternObj[y];

  }
  */
  if (callback && typeof(callback) === 'function') {
    callback(pattern);
  }

}

module.exports = function(inputs, callback) {

  console.log('Arguments: ' + arguments.length);

  var patternObj = {
    maxLength: 0
  };

  if (inputs && (inputs.constructor === Array)) {

    console.log('First arg is an array');

    for (var i = 0; i < inputs.length; i++) {

      console.log('word: %s, i: %d', inputs[i], i);

      for (var x = 0; x < inputs[i].length; x++) {

        console.log(inputs[i][x]);

        patternObj[x] = placeChar(patternObj[x], inputs[i][x]);

        if (x > patternObj.maxLength) {
          patternObj.maxLength = x;
        }

      }

    }

  }

  console.log('patternObj:');
  console.log(patternObj);
  console.log('maxLength');
  console.log(patternObj.maxLength);

  buildPattern(patternObj, function(pattern) {

    if (callback && typeof(callback) === 'function') {

      callback(pattern);

    }

  });

};
