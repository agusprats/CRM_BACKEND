const { Schema, model} = require('mongoose');

const orderSchema = new Schema({
    client: {
        type: Schema.ObjectId,
        ref: 'Client'
    },
    order: [{
        product:{
            type: Schema.ObjectId,
            ref: 'Product'
        },
        quantity: Number
    }],
    total: {
        type: Number
    }
});

module.exports = model('Order', orderSchema);