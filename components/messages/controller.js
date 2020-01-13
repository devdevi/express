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

function getMessages(params) {
    return new Promise((resolve, reject) => {
        
        resolve(store.list(params))
    })
}
function updateMessage(id, msg ) {
    return new Promise(async (resolve, reject) => {
        console.log(id, msg);
        if (!id || !msg){
            reject('Invalid Data')
            return false
        }
        const result = await store.updateText(id, msg);
        resolve(result)
    })
}
module.exports = {
    addMessage,
    getMessages,
    updateMessage,
}
