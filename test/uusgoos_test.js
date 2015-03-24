'use strict';

var uusgoos = require('../');
var assert = require('should');

describe('uusgoos', function () {

  it('should return a specific word if all strings are equal', function () {

    uusgoos(['what', 'what', 'what'], function(pattern) {

      pattern.should.equal('what')

    });

  });

});
