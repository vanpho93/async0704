const fs = require('fs');

// const pr = new Promise((resolve, reject) => {
//     fs.readFile('data.txtaa', 'utf8', (err, data) => {
//         if (err) return reject(err);
//         resolve(data);
//     });
// });

function readPromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

readPromise('ten file')
.then(aaa => console.log(aaa))
.catch(bbb => console.log(bbb));

// console.log(pr)