const store = require('./store')

function addUser(name) {
    return new Promise((resolve, reject) => {
    if (!name) {
        return Promise.reject('Invalid name')
    }
    const user ={
        name,
    }

    // console.log(fullMessage);
    store.add(user);
    resolve(user)
    resolve(fullMessage)
    });

}

module.exports = {
    addUser,
}
