const express = require('express');

// Controlador
const controller = require('./controller')

// Responsea
const response = require('../../network/response');

const router = express.Router();

router.post('/', function (req, res) {
    const { body } = req
    try {
        controller.addUser(body.name).then(data => {
            response.success(req, res, (data, 201))
        }).catch(e => {
            response.error(req, res, 'Informacion Invalida', 400, e)
        })
    } catch(err) {
        response.error(req, res, 'Informacion Invalida', 400, err)
    }
})

// router.get('/', function (req, res) {
//     const filterMessage = req.query.user || null
//     controller.getMessages(filterMessage)
//         .then((messageList) => {
//             response.success(req, res, messageList, 200);
//         }).catch((e) => {
//             response.error(req, res, 'Unexpected Error', 500, e)
//         })
// })
// router.patch('/:id', function (req, res) {

//     const { id } = req.params
//     const { msg } = req.body

//     controller.updateMessage(id, msg)
//         .then((data) => {
//             response.success(req, res, data, 200)
//         })
//         .catch((e) => {
//             response.error(req, res, 'Error Interno', 500, e)
//         })
// });

// router.delete('/:id',function (req, res) {
//     const { id } = req.params
//     controller.deleteMessage(id)
//     .then(() => {
//         const msg = `Msg ${id} eliminado`
//         response.success(req, res, msg, 200)
//     })
//     .catch((e) => {
//         response.error(req, res, 'Error Interno', 500, e)
//     })
// })
module.exports = router;
