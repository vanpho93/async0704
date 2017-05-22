// queryDB('sql').then()
const pg = require('pg');

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
.then(result => console.log(result.rows))
.catch(err => console.log(err));
