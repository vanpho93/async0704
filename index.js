const fs = require('fs');

function read(filename, cb) { 
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) return cb(err);
        cb(undefined, data);
    });
}

read('data.txt', (err, data) => {
    if (err) return console.log(err);
    console.log(data);
});
