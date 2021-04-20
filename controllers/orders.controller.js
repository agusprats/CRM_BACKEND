const orderCtrl = {};
const Order = require('../models/Order');

orderCtrl.newOrder = async (req, res, next) => {
    const order = new Order(req.body);   
    try {
        await order.save();
            res.json({message: "New order created"}) 
            console.log(order)
    }catch(error) {
        res.json(error);
        next()}
};

orderCtrl.getOrders = async (req, res, next) => { 
    try {
        const orders = await Order.find({})
        .populate('client')
        .populate({
            path: 'order.product',
            model: 'Product'
        })
        res.json(orders); 
    }
    catch(error) {
        console.log(error);
        next();
    }
};

orderCtrl.showOrder = async (req, res, next) => { 
    const order = await Order.findById(req.params.idOrder)
    .populate('client')
    .populate({
        path: 'order.product',
        model: 'Product'
    });
    if(!order) {
        res.json({message: "No order to show"}); 
        return next()
    }
    res.json(order);
};

orderCtrl.updateOrder = async (req, res, next) => {
    try{
        let order = await Order.findOneAndUpdate({_id: req.params.idOrder},
            req.body, {new:true})
            .populate('client')
            .populate({
            path: 'order.product',
            model: 'Product'
        });
        res.json(order)
    }catch(error){
        res.send(error);
        next();
    }
};

orderCtrl.deleteOrder = async (req, res, next) => {
    try{
        await Order.findOneAndDelete({_id: req.params.idOrder});
        res.json({message: 'Order deleted'});
    }catch(error){
        console.log(error);
        next();
    }
}

module.exports = orderCtrl;