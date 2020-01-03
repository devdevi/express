const express = require('express');
// body-parcer
const bodyParser = require('body-parser');
const router = require('./network/routers')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);
// app.use(response);
// Antes usábamos el app.use ahora pasamos el servidor a las rutas para que se encargue que crear todas las rutas necesarias
router(app);


app.use('/app', express.static('public'));
app.listen(3000);
console.log('lA APP ESTA ESUCHANDO EN EL PUERTO 3000')
