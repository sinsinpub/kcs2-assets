const { spawnSync } = require('child_process')
// const { inspect } = require('util')
const { get } = require('axios')
const { readFileSync, outputFileSync } = require('fs-extra')
const beautify = require('js-beautify').js

const file = path => readFileSync(path).toString()

const kcsConstUrl = `${process.env.GADGET_PROXY ? `${process.env.GADGET_PROXY}/` : ''}http://203.104.209.7/gadget_html5/js/kcs_const.js`
const kcsMainUrl = 'http://203.104.209.71/kcs2/js/main.js'

const decoderSource = file('src/decode-patched.js')
const patchSource = file('src/patch.js')

const createjsSource = file('node_modules/createjs/builds/1.0.0/createjs.js')
const createjsPatched = createjsSource.replace('this.createjs = this.createjs||{}', 'const createjs = {}; module.exports = createjs;')
outputFileSync('dist/createjs.js', createjsPatched)

!(async () => {
  // Manually downloaded main.js and version:
  scriptVesion = file('dist/version')

  const mainSource = file('dist/main.js')
  const [mainDecoder1, mainFormatted_] = beautify(mainSource, { indent_size: 2 }).split('), ! function')
  const [mainFormatted, mainDecoder2] = mainFormatted_.split(';\n\nfunction')
  const mainDecoder = mainDecoder2 ? `${mainDecoder1}))\n\nfunction${mainDecoder2}` : `${mainDecoder1}))`
  outputFileSync('dist/decode.js', `${mainDecoder}\n\n${decoderSource}`)
  outputFileSync('dist/main.patched.js', `! function${mainFormatted}`.slice(0, -1) + ';')

  const decoderStr = file('dist/decode.js')
  const decoderFunction = decoderStr.match(/\nfunction (.+?)\(.+ \{/)[1]

  console.info(spawnSync('node', ['dist/decode.js', decoderFunction, 9, process.argv[2] || '']).stdout.toString())

/*
  const version = (await get('https://kcwiki.github.io/cache/gadget_html5/js/kcs_const.js')).data.match(/scriptVesion\s*?=\s*?["'](.+?)["']/)[1]
  outputFileSync('dist/version', version)
*/
  const mainPatched = file('dist/main.patched.js')
    .replace(/require\('window'\)/g, 'window')
    .replace(/require\('axios'\)/g, 'axios')
    .replace(/Object\.defineProperty\((\S+?), '__esModule'/g, "defineModule($1); Object.defineProperty($1, '__esModule'")
    .replace(/module\.exports = (\S+?)\((.+?)\)/, 'module.exports = registerModules($1($2))')

  outputFileSync('dist/main.patched.js', `${patchSource.replace('scriptVesion', scriptVesion)}\n${mainPatched}`)
//  outputFileSync('dist/api', inspect(require('../dist/main.patched'), { maxArrayLength: 10000, depth: 10 }))
})()
