const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const authHeader = req.get('Authorization');
    
    if(!authHeader){
        const error = new Error('Authentication failed, there is not a JWT');
        error.statusCode = 401;
        throw error;
    }

    // obtener el token y verificarlo
    const token = authHeader.split(' ')[1];
    let revisarToken;
    try {
        revisarToken = jwt.verify(token, 'SECRETKEY');
    } catch (error) {
        error.statusCode = 500;
        throw error;
    }

    // Si es un token valido, pero hay algun error
    if(!revisarToken) {
        const error = new Error('No Authentication');
        error.statusCode = 401;
        throw error;
    }
    next();
}
