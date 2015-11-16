'use strict'

var path = require('path')
var fs = require('fs')

var glob = require('glob')
var hogan = require('hogan.js')
var scrawlPackage = require('scrawl-package')

function indexBy (arr, key) {
  let indexed = {}

  arr.forEach((item) => {
    const itemKey = item[key]
    indexed[itemKey] = indexed[itemKey] || []
    indexed[itemKey].push(item)
  })

  return indexed
}

function transformFiles (files) {
  let indexedMethods = indexBy(files, 'group')
  return Object.keys(indexedMethods).map((groupName) => {
    return { groupName, methods: indexedMethods[groupName] }
  })
}

// Generate documentation
//
//    $ npm run-script docs
//
module.exports.docs = (patterns) => {
  const templateFiles = glob.sync(path.resolve(__dirname, './*.hogan'))
  const templates = templateFiles.reduce((ts, f) => {
    var name = path.basename(f, '.hogan')
    ts[name] = hogan.compile(fs.readFileSync(f, 'utf8'))
    return ts
  }, {})

  const template = templates['template']

  let content = scrawlPackage({
    match: patterns
  })

  content.groups = transformFiles(content.items)

  if (!fs.existsSync('./docs')) {
    fs.mkdirSync('./docs')
  }

  fs.createReadStream(__dirname + '/style.css')
    .pipe(fs.createWriteStream('./docs/style.css'))

  fs.writeFileSync('./docs/index.html', template.render(content, templates))
}

