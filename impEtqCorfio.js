const express = require('express');
const http    = require('http');
const path    = require('path');
let morgan    = require('morgan');

const app  = express();
const port = process.env.PORT || 5201;
let count;

app.use(morgan(':method :url :response-time'));

app.use(express.static(__dirname + '/dist/etiquetas'));

app.get('*/', (req, res) => {
    res.sendFile(path.join(__dirname), count++),
    count = req.query.PORT
    
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log('Imp etiq running port: ' + port  );
});
