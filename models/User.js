const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    mail: {
        type: String, 
        unique: true,
        lowercase: true,
        trim : true, 
    },
    name : {
        type: String, 
        required: 'Agrega tu Nombre'
    }, 
    password: {
        type: String, 
        required: true
    }
});


module.exports = model('User', userSchema);