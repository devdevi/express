// Se encarga de la logica del negocio
function addMessage(user, msg) {
    console.log(user, msg)
    // Logica


    // Promesas
    return new Promise((resolve, reject) => {
        if(!user || !msg) {
            console.error('[NO HAY ERROR O MENSAJE]')
            reject('Los datos son incorrectos!')
            return false;
        }
    });
    const fullMessage =  {
        user,
        msg,
        data: new Date(),
    };
    console.log(fullMessage);
    resolve(fullMessage)
}
module.exports = {
    addMessage,
}
