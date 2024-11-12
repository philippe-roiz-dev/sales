// database.js
const { Client } = require('pg');

const connectDb = () => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'sales',
        password: 'postgres',
        port: 5432
    });
    client.connect();
    return client;
}

const closeDb = (client) => {
    client.end();
}

// Função para executar queries
const query = async (text, params) => {
    const clientDb = await connectDb();
    try {
        return client.query(text, params);
    }
    finally {
        await closeDb(clientDb);
    }
};

module.exports = {
    query
};