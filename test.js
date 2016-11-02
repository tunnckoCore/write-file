/*!
 * write-file <https://github.com/tunnckoCore/write-file>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('mukla')
var rimraf = require('rimraf')
var exists = require('fs-exists-sync')
var writeFile = require('./index')

test('should throw TypeError if `fp` not a string or buffer', function (done) {
  function fixture () {
    writeFile({})
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `fp` to be buffer or string/)
  done()
})

test('should write file to disk', function (done) {
  rimraf.sync('foo')
  writeFile('foo/bar/baz/qux.txt', '...contents', {
    encoding: 'utf8'
  }, function (err) {
    test.strictEqual(err, null)
    test.strictEqual(exists('foo/bar/baz/qux.txt'), true)
    rimraf.sync('foo')
    done()
  })
})

test('should support writing json files', function (done) {
  rimraf.sync('tmp')
  writeFile('tmp/baz/qux.json', { foo: 'bar' }, function (err) {
    test.strictEqual(err, null)
    test.strictEqual(exists('tmp/baz/qux.json'), true)
    var data = JSON.parse(fs.readFileSync('tmp/baz/qux.json'))
    test.strictEqual(data.foo, 'bar')
    rimraf.sync('tmp')
    done()
  })
})

test('should write file if `fp` is number (fs.writeFile compat)', function (done) {
  rimraf.sync('123')
  writeFile(123, new Buffer('... some content ..'), function (err) {
    test.strictEqual(err, null)
    test.strictEqual(exists('123'), true)
    rimraf.sync('123')
    done()
  })
})

test('should write file if `fp` is buffer (fs.writeFile compat)', function (done) {
  var name = 'bar.txt'
  rimraf.sync(name)
  writeFile(new Buffer(name), 'abc', 'utf8', function (err) {
    test.ifError(err)
    test.ok(exists(name))
    rimraf.sync(name)
    done()
  })
})
