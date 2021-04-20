const { Schema, model} = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,  
    },
    cost: {
        type: Number
    },
    image: {
        type: String
    }
}
);


module.exports = model('Product', productSchema);