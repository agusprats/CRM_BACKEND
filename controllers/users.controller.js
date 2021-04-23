const userCtrl = {};
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

userCtrl.signup = async (req, res) => { 
    const user = new User(req.body);
    user.password = await bcrypt.hash(req.body.password, 12);
        try{
            await user.save();
            res.json({message: 'User created !!!'})
        }catch(error){
            console.log(error);
            res.json({mensaje : 'Error'});
}};

userCtrl.signin = async (req, res, next) => { 
    const {mail, password} = req.body;
    const user = await User.findOne({mail});
    if(!user){
        await res.status(401).json({message: 'User not found'});
        next();
    }else{
        if(!bcrypt.compareSync(password, user.password)){
            await res.status(401).json({message: 'Wrong password'});
            next();
        }else{
            //pass correcto => firmar el token
            const token = jwt.sign({
                mail: user.mail,
                user: user.name,
                _id: user._id

            },
            'SECRETKEY',
            {
                expiresIn: '3h'
            });
            res.json({token})
        }
    }
};

module.exports = userCtrl;

