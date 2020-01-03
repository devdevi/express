const express = require('express');
// body-parcer
const bodyParser = require('body-parser');
const router = require('./components/messages/network')
// Response
const response = require('./network/response');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
// app.use(response);



app.use('/app', express.static('public'));
app.listen(3000);
console.log('lA APP ESTA ESUCHANDO EN EL PUERTO 3000')
