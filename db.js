const db  = require('mongoose')

// 'mongodb+srv://user:user1234@telegram-mn7sh.mongodb.net/test?retryWrites=true&w=majority'
db.Promise = global.Promise;
async function connect(url) {
    await db.connect(url, { keepAlive: 1,
        useUnifiedTopology: true,
        useNewUrlParser: true, })
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));
}


module.exports = connect;
