const clientCtrl = {};
const Client = require('../models/Client');

clientCtrl.getClients = async (req, res, next) => { 
    try {
        const clients = await Client.find({})
        res.json(clients); 
    }
    catch(error) {
        console.log(error);
        next();
    }
};

clientCtrl.createClient = async (req, res, next) => {
    const { name, lastname, company, mail, phone, date } = req.body;
    const newClient = new Client({ name, lastname, company, mail, phone, date});
    try {
        const client = await newClient.save();
            res.json({
            message: "New user added",
            id: newUser.id,
            createdAt: newUser.date
            }) 
            console.log(client)
    } catch(errmsg) {
        res.json(errmsg);
        next()}
};


clientCtrl.updateClient = async (req, res, next) => {
    try{
        const client = await Client.findOneAndUpdate({_id: req.params.idClient},
            req.body, {
                new:true
            });
        res.json(client)
    }catch(error){
        res.send(error);
        next();
    }
}

clientCtrl.showClient = async (req, res, next) => { 
    const client = await Client.findById(req.params.idClient);
    if(!client) {
        res.json({message: "No client to show"}); 
        next()
    }
    res.json(client)
};

clientCtrl.deleteClient = async (req, res, next) => {
    try{
        await Client.findOneAndDelete({_id: req.params.idClient});
        res.json({message: 'Client deleted'});
    }catch(error){
        console.log(error);
        next();
    }
}
    
module.exports = clientCtrl;
