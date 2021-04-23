require('dotenv').config({path: 'variables.env'});
const app = require('./app');
require('./database');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4001;

async function main(){
    await app.listen(port, host, () => {
        console.log('Server running')
    })
}
main();

/*async function main(){
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}
main();*/
