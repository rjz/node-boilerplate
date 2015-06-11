Node Boilerplate
===============================================================================

[![Build
Status](https://travis-ci.org/rjz/node-boilerplate.svg?branch=master)](https://travis-ci.org/rjz/node-boilerplate)
[![Coverage
Status](https://coveralls.io/repos/rjz/node-boilerplate/badge.svg?branch=master)](https://coveralls.io/r/rjz/node-boilerplate?branch=master)

A boilerplate for node.js projects that includes:

  * a nearly-ready package.json
  * stubs for continuous integration with [nodesecurity.io][nodesecurity],
    [travis-ci][travis] and [coveralls.io][coveralls]
  * contributing guidelines, this exquisite readme, and a copy of the [MIT
    License](LICENSE.md)

...plus npm tasks for:

  * linting (via [jshint][jshint])
  * testing (via [mocha][mocha])
  * documentation (via [scrawl][scrawl] and [hogan.js][hoganjs])
  * micrositing (via [github pages][gh-pages])

Installation
-------------------------------------------------------------------------------

Clone this repository:

    $ git clone git@github.com:rjz/node-boilerplate.git

...and copy, fork, customize, and whatever you need to do.


Continuous Integration
-------------------------------------------------------------------------------

The included [travis.yml][travis] file sets up continuous integration by:

  1. auditing dependencies
  2. running tests
  3. running code coverage (and shipping results to [coveralls][coveralls])
  4. rebuilding documentation microsite for [github pages][gh-pages])

Testing
-------------------------------------------------------------------------------

Lint and run test suite:

    $ npm test

To integrate coveralls.io and travis-ci, add this repo to your coveralls/travis
accounts and update .coveralls.yml to use the correct repo token.

Additional Tasks
-------------------------------------------------------------------------------

The following tasks will be run as part of the included, travis-based continuous
integration flow. However, they're also available manually using `npm run
<task>`.

Task       | Description
---------- | -------------------------
`lint`     | Lint source without running full tests
`audit`    | Audit dependencies using [nodesecurity.io][nodesecurity]
`docs`     | Parse comments into HTML documentation
`pages`    | Publish the documentation to [github pages][gh-pages]

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
[nodesecurity]: https://nodesecurity.io/

