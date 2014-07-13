var assert = require('assert');

var add = require('../index');

describe('Project', function () {
  it('adds two numbers', function () {
    assert.equal(4, add(2, 2));
  });
});

