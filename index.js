/*!
 * write-file <https://github.com/tunnckoCore/write-file>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var isBuffer = require('is-buffer')

module.exports = function writeFile (fp, data, options, callback) {
  var isBuff = isBuffer(fp)
  fp = typeof fp === 'number' ? fp.toString() : fp

  if (!isBuff && typeof fp !== 'string') {
    throw new TypeError('write-file: expect `fp` to be buffer or string')
  }
  if (typeof options === 'function') {
    callback = options
    options = null
  }

  options = typeof options === 'string' ? { encoding: options } : options
  fp = isBuff ? fp.toString() : fp
  data = typeof data === 'object' && !isBuffer(data)
    ? JSON.stringify(data, null, 2)
    : data

  mkdirp(path.dirname(fp), options, function cb (err, res) {
    /* istanbul ignore next */
    if (err) return callback(err)
    fs.writeFile(fp, data, options, callback)
  })
}
