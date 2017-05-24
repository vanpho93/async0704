const express = require('express');

const app = express();

app.use(express.static('public'));
app.use('/bai1', require('./controller/bai1'));

app.set('view engine', 'ejs');

app.listen(3000, () => console.log('START!!!'))