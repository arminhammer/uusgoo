/*
 * uusgoos
 * https://github.com/arminhammer/uusgoos
 *
 * Copyright (c) 2015 Armin Graf
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(callback) {

  if (callback && typeof(callback) === "function") {
    callback();
  }

};
