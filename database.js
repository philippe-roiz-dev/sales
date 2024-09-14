const { Client } = require('pg');

// Configuração da conexão com o banco de dados
const client = new Client({
    user: 'postgres',       // substitua pelo seu usuário do PostgreSQL
    host: 'localhost',         // ou o endereço do servidor PostgreSQL
    database: 'sales',         // nome do banco de dados
    password: 'postgres',     // substitua pela sua senha do PostgreSQL
    port: 5432,                // porta padrão do PostgreSQL
});

client.connect();

const query = (text, params) => {
    return client.query(text, params);
};

module.exports = {
    query,
};
