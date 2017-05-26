'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bp = require('body-parser');
const port = 8000;

app.use(bp.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './client')));
app.set('views', path.join(__dirname, './client/templates'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log(`Server is running on port: ${port}`);
})