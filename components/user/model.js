const mongosse = require('mongoose');

// Modelas los datos
const { Schema } = mongosse;

const mySchema  = new Schema({
    name: String,
});

const model = mongosse.model('User', mySchema);
module.exports = model;
