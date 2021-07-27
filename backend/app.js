'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos rutas


// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// rutas
app.get('/',(req, res) => {
    res.status(200).send(
        "<h1>Pagina de Inicio</h1>"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hola mundo desde mi API REST"
    });
});

// exportar
module.exports = app;