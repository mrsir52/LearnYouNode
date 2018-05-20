const fs = require('fs')

fs.readFile(process.argv[2], (err, buf) => {
    if (err) throw err;
    const count = buf.toString().split('\n').length -1;
    console.log(count);

})
