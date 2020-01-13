const db  = require('mongoose')

// 'mongodb+srv://user:user1234@telegram-mn7sh.mongodb.net/test?retryWrites=true&w=majority'
db.Promise = global.Promise;
async function connect(url) {
    await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  })
    console.log('[db] success connection')
}
module.exports = connect;
