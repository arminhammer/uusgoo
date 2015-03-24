'use strict';

var uusgoos = require('../');
var assert = require('should');

describe('uusgoos', function () {

  it('should return a specific word if all strings are equal', function () {

    uusgoos(['what', 'what', 'what'], function(pattern) {

      pattern.should.equal('what');

    });

  });

   it('should return a \d if there is a digit', function () {

   uusgoos(['what1', 'what2', 'what3'], function(pattern) {

   pattern.should.equal('what\\d');

   });

   });

  /*
  it('should return a \w if the strings are not the same, but are letters', function () {

    uusgoos(['what', 'that'], function(pattern) {

      pattern.should.equal('\\what');

    });

  });
  */

});
