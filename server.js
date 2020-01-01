const express = require('express');
// body-parcer
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/', function(req, res) {
    res.send('hola desde get')
})
router.get('/messages', function(req, res) {
    // Cabeceras
    console.log(req.headers)
    res.header({
        "custom-header":"Nuestro valor personalizado"
    })
    console.log(req.body)
    res.send('Messages')
})
router.post('/add', function(req, res) {
    console.log(req.body)
    console.log(req.query)
    // res.send(`${req.body.text}`)
    res.status(201).send({
        error: '',
        message: 'Creado satisfactoria mente',
        query: `${Object.entries(req.query)}`
    })
})
// app.use('/', function(req, res){
//     res.send('hola')
// });
app.listen(3000);
console.log('lA APP ESTA ESUCHANDO EN EL PUERTO 3000')
