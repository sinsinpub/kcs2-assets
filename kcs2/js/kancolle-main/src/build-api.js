// require min nodejs v12
const [major, minor] = process.versions.node.split('.').map(Number)
if (major < 12) {
    console.error('NodeJS version ^12 required')
    return
}
const { inspect } = require('util')
const { outputFileSync } = require('fs-extra')

outputFileSync('dist/api', inspect(require('../dist/main.patched'), { maxArrayLength: 10000, depth: 10 }))
