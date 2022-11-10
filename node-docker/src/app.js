// ? Aquí tendremos la lógica y la configuración
const express = require('express');
const morgan = require('morgan');
const router = require('./routes/route.js');

const app = express();
app.use(morgan('dev'));
app.use(router);


module.exports = app;