// database.js
const { Client } = require('pg');

// Configuração da conexão com o banco de dados
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'sales',
    password: 'postgres',
    port: 5432
});

client.connect();

// Função para executar queries
const query = (text, params) => {
    return client.query(text, params);
};

module.exports = {
    query,
};