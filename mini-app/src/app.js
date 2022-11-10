// ? Aquí tendremos la lógica y la configuración
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

module.exports = app;