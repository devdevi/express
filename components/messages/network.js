const express = require('express');

// Controlador
const controller = require('./controller')

// Response
const response = require('../../network/response');

const router = express.Router();

// router.get('/', function (req, res) {
//     // res.send('hola desde get')
//     response.success(req, res, 'Lista de mensajes')
// })
router.get('/', function (req, res) {
    // res.header({
    //     "custom-header": "Nuestro valor personalizado"
    // })
    // console.log(req.body)
    // res.send('Messages')
    // if (req.query.error == "ok") {
    //     response.error(req, res, 'ERROR SIMULADO', 400)
    // } else {
    //     response.success(req, res, 'Lista de mensajes', 200)
    // }
    const filterMessage = req.query.user || null
    controller.getMessages(filterMessage)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        }).catch((e) => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })

})
router.post('/', function (req, res) {
    const { body } = req
    controller.addMessage(body.user, body.msg).then((fullMessage) => {
        response.success(req, res, (fullMessage, 201))
    }).catch(() => {
        response.error(req, res, 'Informacion Invalida', 400, "Es solo una simulación de los errores")
    })
})

router.patch('/:id', function (req, res) {

    const { id } = req.params
    const { msg } = req.body

    controller.updateMessage(id, msg)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, 'Error Interno', 500, e)
        })
});

router.delete('/:id',function (req, res) {
    const { id } = req.params
    controller.deleteMessage(id)
    .then(() => {
        const msg = `Msg ${id} eliminado`
        response.success(req, res, msg, 200)
    })
    .catch((e) => {
        response.error(req, res, 'Error Interno', 500, e)
    })
})
module.exports = router;
