const express = require('express');
const router = express.Router();

// Controlador
const controller = require('./controller')

// Response
const response = require('../../network/response');


router.get('/', function (req, res) {
    // res.send('hola desde get')
    response.success(req, res, 'Lista de mensajes')
})
router.get('/messages', function (req, res) {
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
    const  { body } = req
controller.addMessage(body.user, body.msg)
.then((fullMessage) => {
    response.success(req, res, (fullMessage , 201)
})
.catch(() => {
    response.error(req, res, 'Informacion Invalida', 400,  "Es solo una simulación de los errores")
})


module.exports = router;
