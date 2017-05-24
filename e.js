const { hash, compare } = require('bcrypt');

Promise.all([hash('123', 8), hash('acs', 8), hash(null, 8)])
.then(a => console.log(a))
.catch(err => console.log(err.toString()));
console.log(a);

// Promise.race([hash('123', 8), hash('acs', 30), hash('null', 30)])
// .then(a => console.log(a))
// .catch(err => console.log(err.toString()));

// compare('123', '$2a$08$STIOZoKruxFd.t1VCUKhXGuIK.bOaubATD2aOCeNJhWFHBjljUaymK')
// .then(same => console.log(same));