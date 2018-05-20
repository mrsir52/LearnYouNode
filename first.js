const fs = require('fs')
const path = process.argv[2]

const buf = fs.readFileSync(path)
const str = buf.toString()
const arr = str.split('\n')
const count = arr.length-1
console.log(count)