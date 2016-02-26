/**
 * Imports
 */

var events = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(events.keydown, KeyboardEvent)
  t.equal(events.dblclick, MouseEvent)
  t.equal(events.resize, UIEvent)

  t.end()
})
