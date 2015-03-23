/*
 * uusgoos
 * https://github.com/arminhammer/uusgoos
 *
 * Copyright (c) 2015 Armin Graf
 * Licensed under the MIT license.
 */

'use strict';

var uusgoos = require('../');

uusgoos(['Test 1', 'Test 2'], function(pattern) {
  console.log('The pattern is: ' + pattern);
});

