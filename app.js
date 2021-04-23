const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('uploads'));
//Settings
app.set('port', process.env.PORT || 4001);
app.set('host', process.env.HOST || '0.0.0.0');


app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//Routes
app.use('/api/clients', require('./routes/clients'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/users', require('./routes/users'));



module.exports = app;


/*//Recibir peticiones desde dominio
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin:(origin, callback) => {
        console.log(origin);
        const exists = whitelist.some(dominio => dominio === origin);
        if(exists){
            callback(null, true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    }
}
//Middlewares
app.use(cors(corsOptions));*/