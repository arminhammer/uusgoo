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

  it('should return a [a-z] if the strings are not the same, but are lower case ASCII letters', function () {

    uusgoos(['what', 'that', 'phat'], function(pattern) {

      pattern.should.equal('[a-z]hat');

    });

  });

   it('should return a [A-Z] if the characters are upper case ASCII', function () {

    uusgoos(['What', 'That', 'Phat'], function(pattern) {

      pattern.should.equal('[A-Z]hat');

    });

  });

  it('should return a [a-zA-Z] if the characters are non-digit letters', function () {


    uusgoos(['What', 'That', 'phat'], function(pattern) {

      pattern.should.equal('[a-zA-Z]hat');

    });

    uusgoos(['what', 'That', 'Phat'], function(pattern) {

      pattern.should.equal('[a-zA-Z]hat');

    });

    uusgoos(['What', 'that', 'phat'], function(pattern) {

      pattern.should.equal('[a-zA-Z]hat');

    });

  });

  it('should return a \\w if the strings are not the same, and are a mix of digits and letters', function () {

    uusgoos(['What', 'that', '1hat'], function(pattern) {

      pattern.should.equal('\\what');

    });

    uusgoos(['1hat', 'That', 'phat'], function(pattern) {

      pattern.should.equal('\\what');

    });

  });

  it('should consolidate bunched patterns', function () {

    uusgoos(['aaat', 'aaat', 'aaat'], function(pattern) {

      pattern.should.equal('a{3}t');

    });

    uusgoos(['aaataaaa', 'aaataaaa', 'aaataaaa'], function(pattern) {

      pattern.should.equal('a{3}ta{4}');

    });

  });


});
