require('dotenv').config({path: './post-it/COFRE/DADOS.env'});
const {Client} = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect()
    .then(() => console.log('Conexão bem-sucedida com o banco de dados!'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = client;