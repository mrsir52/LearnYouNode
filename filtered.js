const fs = require('fs')
const path = require('path')
const content = process.argv[2]


fs.readdir(content, (err, files) => {
    if (err){return err}
    let file = files.length;
    for ( i = 0; i < file; i++)
})