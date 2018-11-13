# matchy [![Build Status](https://travis-ci.org/bendrucker/matchy.svg?branch=master)](https://travis-ci.org/bendrucker/matchy) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/matchy.svg)](https://greenkeeper.io/)

> Match shallow objects


## Install

```
$ npm install --save matchy
```


## Usage

```js
var Match = require('matchy')

var match = Match([
  {type: 'FooType'},
  {name: /Bar$/},
  {message: (value) => value && value.split('').reverse().join('') === 'raBooF'}
])

match({type: 'FooType'})
//=> true

match({name: 'FooBar'})
//=> true

match({name: 'FooBaz'})
//=> false
```

## API

#### `Match(data)` -> `function`

##### data

*Required*  
Type: `object`

A shallow object where the keys are error data keys and the values are:

* Strings or numbers (checked for strict equality)
* Regular expressions
* Functions (called with the error value for that key)

## License

MIT © [Ben Drucker](http://bendrucker.me)
