// queryDB('sql').then()
const pg = require('pg');
const fs = require('fs');

const config = {
    user: 'postgres',
    database: 'NODE0704',
    password: 'khoapham',
    host: 'localhost',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 1000
};

const pool = new pg.Pool(config);

function readPromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

function queryDB(sql, arrayData) {
    //todo here
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done(errQuery);
                if (errQuery) return reject(err);
                resolve(result);
            });
        });
    });
}

queryDB('SELECT * FROM "HotGirl"', [])
.then(result => saveText('b.txt', JSON.stringify(result.rows)))
.then(a => 'AAAAAAA')
.then(b => console.log(b))
.then(c => console.log(c))
.then(() => 10)
.then(d => console.log(d))
.catch(err => 1000)
.then(a => console.log(a));


function saveText(filename, text) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, text, err => {
            if (err) return reject(err);
            resolve('THANH_CONG');
        });
    });
}
