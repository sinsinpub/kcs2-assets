// require min nodejs v12
const { inspect } = require('util')
const { outputFileSync } = require('fs-extra')

outputFileSync('dist/api', inspect(require('../dist/main.patched'), { maxArrayLength: 10000, depth: 10 }))
