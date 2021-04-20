const { Schema, model} = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const clientSchema = new Schema({
    name: {
        type: String,
        trim: true,  
        required: true,
    },
    lastname: {
        type: String,
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    mail: {
        type: String,
        trim: true,
        index: true,
        unique:true,
        sparse:true
    },
    phone: {
        type: String,
        trim: true,  
    },
    date: {
        type: Date,
        default: Date.now
    }
}
);

clientSchema.plugin(uniqueValidator);

module.exports = model('Client', clientSchema);




