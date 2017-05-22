const request = require('then-request');

request('GET', 'http://vnexpress.netsss')
.then(a => console.log(a.getBody('utf8')))
.catch(err => console.log(err));