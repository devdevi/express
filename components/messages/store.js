// const list = [];
// // Creamos un mock
// function addMessage(msg) {
//     list.push(msg)
// }
// function getMessages() {
//     return list
// }

// module.exports = {
//     add: addMessage,
//     list: getMessages,
//     // get
//     // update
//     // delete
// }
//  MOCK ARRIBA

const db  = require('mongoose')
const Model = require('./model')
db.Promise = global.Promise;
db.connect('mongodb+srv://user:user1234@telegram-mn7sh.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  })

console.log('[db] success connection')

const list = [];
// Creamos un mock
function addMessage(msg) {
    // list.push(msg)
    const myMessage = new Model(msg)
    myMessage.save()
}
async function getMessages() {
    const messages = await  Model.find()
    return  messages
}
async function updateText(id, msg) {
    const message = await Model.findOne({
        _id: id
    })
    message.msg = msg;
    const newMessage = await message.save()
    return newMessage;
}


module.exports = {
    add: addMessage,
    list: getMessages,
    updateText,
    // get
    // update
    // delete
}
