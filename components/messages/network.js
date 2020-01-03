const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    // res.send('hola desde get')
    response.success(req, res, 'Lista de mensajes')
})
router.get('/messages', function (req, res) {
    // Cabeceras
    // console.log(req.headers)
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    // console.log(req.body)
    // res.send('Messages')
    if (req.query.error == "ok") {
        response.error(req, res, 'ERROR SIMULADO', 400)
    } else {
    response.success(req, res, 'Lista de mensajes', 200)
    }
})
router.post('/add', function (req, res) {
    console.log(req.body)
    console.log(req.query)
    // res.send(`${req.body.text}`)
    // res.status(201).send({
    //     error: '',
    //     message: 'Creado satisfactoria mente',
    //     query: `${Object.entries(req.query)}`
    // })
    // response.success(req, res, 'Creado correctamente', 201)

    if (req.query.error == "ok") {
        response.error(req, res, 'ERROR SIMULADO', 500,  "Es solo una simulación de los errores")
    } else {
        response.success(req, res, 'Creado correctamente', 201)
    }
})


module.exports = router;
