/* globals describe: true, it: true */

'use strict'

var assert = require('assert')
var add = require('../index')

describe('Project', () => {
  it('adds two numbers', () => {
    assert.equal(4, add(2, 2))
  })
})

