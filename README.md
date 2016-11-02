# [write-file][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Writing a file to disk, creates intermediate directories in the destination path if they dont already exist.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i write-file --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const writeFile = require('write-file')
```

## API

### [writeFile](index.js#L42)
> Writes a file to disk with support for creating intermediate directories and JSON files.

**Params**

* `<fp>` **{String|Buffer|Number}**: filepath to the new file    
* `data` **{String|Buffer|Object}**: if object, JSON.stringify and writes it    
* `[options]` **{Object|String}**: passed to [mkdirp][] too; if string, treats it as `opts.encoding`    
* `callback` **{Function}**: done callback    

**Example**

```js
var writeFile = require('write-file')

writeFile('foo/bar/baz/qux.txt', 'some contents', function (err) {
  if (err) return console.log(err)
  console.log('file is written')
})

// automatically writes a json files
writeFile('foo/qux/bar.json', { foo: 'bar' }, function (err) {
  // if not `err`, file is written
})
```

## Related
- [dest](https://www.npmjs.com/package/dest): Customized implementation of the dest method from vinyl. | [homepage](https://github.com/jonschlinkert/dest "Customized implementation of the dest method from vinyl.")
- [then-read-json](https://www.npmjs.com/package/then-read-json): Read JSON file using promises | [homepage](https://github.com/tunnckocore/then-read-json#readme "Read JSON file using promises")
- [then-write-json](https://www.npmjs.com/package/then-write-json): Write contents to JSON file using JSON.stringify and promises. Creating intermediate directories… [more](https://github.com/tunnckocore/then-write-json#readme) | [homepage](https://github.com/tunnckocore/then-write-json#readme "Write contents to JSON file using JSON.stringify and promises. Creating intermediate directories if they don't exist.")
- [try-read-json](https://www.npmjs.com/package/try-read-json): Fast, meaningful and correct try/catch flow for reading JSON with JSON.parse… [more](https://github.com/tunnckocore/try-read-json#readme) | [homepage](https://github.com/tunnckocore/try-read-json#readme "Fast, meaningful and correct try/catch flow for reading JSON with JSON.parse - support optional callback")
- [write-json](https://www.npmjs.com/package/write-json): Write a JSON file to disk, also creates intermediate directories in the… [more](https://github.com/jonschlinkert/write-json) | [homepage](https://github.com/jonschlinkert/write-json "Write a JSON file to disk, also creates intermediate directories in the destination path if they don't already exist.")
- [write](https://www.npmjs.com/package/write): Write files to disk, creating intermediate directories if they don't exist. | [homepage](https://github.com/jonschlinkert/write "Write files to disk, creating intermediate directories if they don't exist.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/write-file/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[npmjs-url]: https://www.npmjs.com/package/write-file
[npmjs-img]: https://img.shields.io/npm/v/write-file.svg?label=write-file

[license-url]: https://github.com/tunnckoCore/write-file/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/write-file.svg

[downloads-url]: https://www.npmjs.com/package/write-file
[downloads-img]: https://img.shields.io/npm/dm/write-file.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/write-file
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/write-file.svg

[travis-url]: https://travis-ci.org/tunnckoCore/write-file
[travis-img]: https://img.shields.io/travis/tunnckoCore/write-file/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/write-file
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/write-file.svg

[david-url]: https://david-dm.org/tunnckoCore/write-file
[david-img]: https://img.shields.io/david/tunnckoCore/write-file.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

[mkdirp]: https://github.com/substack/node-mkdirp