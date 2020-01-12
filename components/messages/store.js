const list = [];
// Creamos un mock
function addMessage(msg) {
    list.push(msg)
}
function getMessages() {
    return list
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}
