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

function saveText(filename, text) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, text, err => {
            if (err) return reject(err);
            resolve('THANH_CONG');
        });
    });
}

function queryAndSave(sql, arrayData, filename) {
    return queryDB(sql, arrayData)
    .then(result => saveText(filename, JSON.stringify(result.rows)))
}

// queryAndSave('SELECT * FROM "HotGirlaaa"', [], 'c.txt')
// .then(a => console.log(a))
// .catch(err => console.log(err.toString()));

const querySave = async (sql, arrayData, filename) => {
    try {
        const rows = await queryDB(sql, arrayData);
        const text = JSON.stringify(rows);
        const kq =  await saveText(filename, text);
        return Promise.resolve(kq);
    } catch (e) {
        return Promise.reject(e);
    }
}


const kqua = querySave('SELECT * FROM "HotGirlss"', [], 'c.txt');

kqua
.then(a => console.log('aaa: ' + a))
.catch(err => console.log(err + ''));