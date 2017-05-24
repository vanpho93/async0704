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

function queryDB(sql, arrayData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done(errQuery);
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}

// Promise.reject(queryDB('SELECT * FROM "Product"'))
// .catch(e => console.log(e));

Promise.resolve(queryDB('SELECT * FROM "Product"'))
.then(a => console.log(a));
