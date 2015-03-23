/*
 * uusgoos
 * https://github.com/arminhammer/uusgoos
 *
 * Copyright (c) 2015 Armin Graf
 * Licensed under the MIT license.
 */

'use strict';

function calculateRegex(string1, string2) {

}

module.exports = function(inputs, callback) {

  console.log('Arguments: ' + arguments.length);

  if(inputs.constructor === Array) {
    console.log('First arg is an array');
  }

  var pattern = null;

  if (callback && typeof(callback) === "function") {
    callback(pattern);
  }

};
