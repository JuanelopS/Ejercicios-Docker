// Server
const express = require('express');
const app = require('./app.js');

app.use(express.static('public'));

app.listen(4000, () => console.log('Server running. Port 4000...'));

