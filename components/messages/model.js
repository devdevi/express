const mongosse = require('mongoose');

// Modelas los datos
const { Schema } = mongosse;

const mySchema  = new Schema({
    user: String,
    msg: {
        type: String,
        required: true,
    },
    date: Date,
});

const model = mongosse.model('Message', mySchema);
module.exports = model;
