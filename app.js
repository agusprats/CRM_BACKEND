const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

//Settings
app.set('port', process.env.PORT || 4001);

//Middlewares
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.use('/api/clients', require('./routes/clients'));
app.use('/api/products', require('./routes/products'));




module.exports = app;
