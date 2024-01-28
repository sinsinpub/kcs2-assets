const { readFileSync, writeFileSync } = require('fs')

const vars = {}
let i = 0

const decoderFunction = process.argv[2]
const passes = process.argv[3] || 5

let main = readFileSync('dist/main.patched.js').toString()
let aliases = 0;

// fast 5 passes
for (let pass = 1; pass <= passes; pass++) {
    const decoderAliases = []
    const decoderRegex = new RegExp(`var ([_a-zA-Z][_a-zA-Z0-9]*?) = ${decoderFunction}[;,]`, 'g')
    let m = null
    while((m = decoderRegex.exec(main)) !== null) decoderAliases.push(m[1])
    aliases += decoderAliases.length;

    main = main.replace(new RegExp(`(?:${decoderAliases.join('|')})\\((.+?)\\)`, 'g'), x =>
        `'${eval(decoderFunction + '(' + x.split('(')[1])}'`.replace(/\n/g, '\\n'),
    ).replace(new RegExp(`var (${decoderAliases.join('|')}) = ${decoderFunction}([;,])`, 'g'), 'var $1 = null$2')

    if (pass < passes) {
        main = main.replace(new RegExp(`var ([_a-zA-Z][_a-zA-Z0-9]*?) = (?:${decoderAliases.join('|')})([;,])`, 'g'), `var $1 = ${decoderFunction}$2`)
    }
}
console.info('Decoded via ', decoderFunction, '(', aliases, 'aliases) in', passes, 'passes')

// slow workaround (30K+ loops)
/*
const decoderAliases = []
main = main.replace(new RegExp(`var (_.+?) = ${decoderFunction}[;,]?\n`, 'g'), (x, g) => (
    decoderAliases.push(g),
    x.replace(decoderFunction, 'global.$').replace(g, decoderFunction)
))
console.info('global decoder:', decoderFunction)
//console.info('local decoders:', decoderAliases.join(', '))
console.info('local decoders:', decoderAliases.length)

for (let i = 0; i < decoderAliases.length; i++) {
    const decoder = decoderAliases[i]
    main = main.replace(new RegExp(`var (_.+?) = ${decoder}[;,]?\n`, 'g'), (x, g) => (
        (!decoderAliases.includes(g) && decoderAliases.push(g)),
        x.replace(decoder, 'global.$').replace(g, decoderFunction)
    )).replace(new RegExp(`${decoder}\\((0x.+?)\\)`, 'g'), `${decoderFunction}($1)`)
}
console.info('nested decoers:', decoderAliases.length)
*/

writeFileSync(
  'dist/main.patched.js',
  main
//    .replace(new RegExp(`${decoderFunction}\\((0x.+?)\\)`, 'g'), x => `'${eval(x)}'`.replace(/\n/g, '\\n'))
    .replace(/([_a-zA-Z][_a-zA-Z0-9]*?)\['([_a-zA-Z][_a-zA-Z0-9]*?)'\]/g, '$1.$2')
    .replace(/\[\('([_a-zA-Z][_a-zA-Z0-9]*?)'\)\]/g, "['$1']")
    .replace(/_(0x[a-f0-9]{4,6})/g, (_, x) => `_${(vars[x] || (vars[x] = ++i)).toString(36)}`)
    .replace(/(0x[a-f0-9]+?)\.toString()/g, (_, x) => `(${+x}).toString()`)
    .replace(/(0x[a-f0-9]+)/g, (_, x) => `${+x}`)
    .replace(/\)\['([_a-zA-Z][_a-zA-Z0-9]*?)'\]/g, ').$1')
    .replace(/\]\['([_a-zA-Z][_a-zA-Z0-9]*?)'\]/g, '].$1')
    .replace(/([_a-zA-Z][_a-zA-Z0-9]*?)\['\$_\$'\]\['([_a-zA-Z][_a-zA-Z0-9]*?)'\]/g, '$1[$_$].$2')
    .replace(/([_a-zA-Z][_a-zA-Z0-9]*?)\['([_a-zA-Z][_a-zA-Z0-9]*?)'\]/g, '$1.$2')
    .replace(/\\u([\d\w]{4})/gi, (_, e) => String.fromCharCode(parseInt(e, 16)))
    .replace("`'symbol'`", '`symbol`')
)
