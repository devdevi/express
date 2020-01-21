const express = require('express');
// body-parcer
const bodyParser = require('body-parser');

const db = require('./db')
const router = require('./network/routers')

db('mongodb://admin:admin@chat-shard-00-00-mn7sh.mongodb.net:27017,chat-shard-00-01-mn7sh.mongodb.net:27017,chat-shard-00-02-mn7sh.mongodb.net:27017/test?ssl=true&replicaSet=chat-shard-0&authSource=admin&retryWrites=true&w=majority')
db('mongodb+srv://admin:admin@chat-mn7sh.mongodb.net/test?retryWrites=true&w=majority')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);
// app.use(response);
// Antes usábamos el app.use ahora pasamos el servidor a las rutas para que se encargue que crear todas las rutas necesarias
router(app);


app.use('/app', express.static('public'));
app.listen(3000);
console.log('La APP ESTA Escuchando EN EL PUERTO 3000')
