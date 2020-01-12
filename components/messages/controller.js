const store = require('./store')

// Se encarga de la logica del negocio
function addMessage(user, msg) {
    console.log(user, msg)
    // Logica


    // Promesas
    return new Promise((resolve, reject) => {
        if(!user || !msg) {
            console.error('[MessageController]NO HAY ERROR O MENSAJE')
            return reject('Los datos son incorrectos!');
        }
        const fullMessage =  {
            user,
            msg,
            data: new Date(),
        };
        // console.log(fullMessage);
        store.add(fullMessage)
        resolve(fullMessage)
    });
}

function getMessages() {
    return new Promise((resolve, reject) => {
        console.log(store.list)
        resolve(store.list())
    })
}
module.exports = {
    addMessage,
    getMessages,
}
