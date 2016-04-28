'use strict'

var test = require('tape')
var Match = require('./')

test(function (t) {
  var match = Match([
    {type: 'FooType'},
    {name: /Bar$/},
    {message: (value) => value && value.split('').reverse().join('') === 'raBooF'}
  ])

  t.ok(match({type: 'FooType'}), 'match exact types')
  t.notOk(match({type: 'BarType'}))

  t.ok(match({name: 'FooBar'}), 'matches regexp')
  t.notOk(match({name: 'FooBarBaz'}))

  t.ok(match({message: 'FooBar'}), 'matches on function')
  t.notOk(match({message: 'Foo'}))

  t.end()
})
