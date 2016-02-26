
# event-constructors

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

A map of DOM event names to their constructors

## Installation

    $ npm install @f/event-constructors

## Usage

```js
var events = require('@f/event-constructors')

function createEvent (type, opts) {
  return new events[type](type, opts)
}
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/event-constructors.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/event-constructors
[git-image]: https://img.shields.io/github/tag/micro-js/event-constructors.svg?style=flat-square
[git-url]: https://github.com/micro-js/event-constructors
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/event-constructors.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/event-constructors
