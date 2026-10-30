// require min nodejs v14
const [major, minor] = process.versions.node.split('.').map(Number)
if (major < 14) {
    console.error('NodeJS version ^14 required')
    return
}
const { inspect } = require('util')
const { outputFileSync } = require('fs-extra')

outputFileSync('dist/api', inspect(require('../dist/main.patched'), { maxArrayLength: 10000, depth: 10 }))
