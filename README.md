Node Boilerplate
===============================================================================

A boilerplate for node.js projects that includes:

  * a nearly-ready package.json
  * stubs for integrating with [travis-ci][travis] and [coveralls.io][coveralls]
  * a license, contributing guidelines, and this exquisite readme

...plus npm tasks for:

  * linting (via [jshint][jshint])
  * testing (via [mocha][mocha])
  * code coverage (via [istanbul][istanbul])
  * documentation (via [scrawl][scrawl] and [hogan.js][hoganjs])
  * micrositing (via [github pages][gh-pages])

Installation
-------------------------------------------------------------------------------

Clone this repository:

    $ git clone git@github.com:rjz/node-boilerplate.git

...and copy, fork, customize, and whatever you need to do.

Testing
-------------------------------------------------------------------------------

Lint:

    $ npm lint

Lint and run test suite:

    $ npm test

Generate code coverage report:

    $ npm run cover

To integrate coveralls.io and travis-ci, add this repo to your coveralls/travis
accounts and update .coveralls.yml to use the correct repo token (coverage data
is pushed by the `cover` task).

Documentation
-------------------------------------------------------------------------------

Parse comments into HTML documentation:

    $ npm run docs

Publish the documentation to github:

    $ npm run gh-pages

License
-------------------------------------------------------------------------------

MIT

[coveralls]: https://coveralls.io
[gh-pages]: https://pages.github.com
[hoganjs]: http://twitter.github.io/hogan.js
[istanbul]: https://github.com/gotwarlost/istanbul
[jshint]: http://www.jshint.com
[mocha]: https://github.com/visionmedia/mocha
[scrawl]: https://github.com/caolan/scrawl
[travis]: https://travis-ci.org

