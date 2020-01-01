const express = require('express')
const router = express.Router()
var app = express()

app.use(router)

router.get('/', function(req, res) {
    res.send('hola desde get')
})
router.get('/messages', function(req, res) {
    res.send('Messages')
})
router.post('/add', function(req, res) {
    res.send('hola desde post')
})
// app.use('/', function(req, res){
//     res.send('hola')
// });
app.listen(3000);
console.log('lA APP ESTA ESUCHANDO EN EL PUERTO 3000')
