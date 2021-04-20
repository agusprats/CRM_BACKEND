const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
            ? process.env.MONGODB_URI 
            : 'mongodb://localhost/databasetest';
            
mongoose.Promise = global.Promise
mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('==> DB is connected <==')
});
