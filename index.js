'use strict'

var partial = require('ap').partial
var isRegExp = require('is-regexp')

module.exports = Matcher

function Matcher (errors) {
  return function match (err) {
    return errors.some(partial(matches, err))
  }
}

function matches (err, data) {
  for (var key in data) {
    var value = data[key]

    if (typeof value === 'function') {
      if (!value(err[key])) return false
      continue
    }

    if (!isRegExp(value)) {
      if (value !== err[key]) return false
      continue
    }

    if (isRegExp(value)) {
      if (!value.test(err[key])) return false
      continue
    }
  }

  return true
}
