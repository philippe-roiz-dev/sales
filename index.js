const express = require('express');
const app = express();
const { query } = require('./database.js'); // Conexão com o banco de dados
const port = 3000;
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

// Endpoint para adicionar uma nova promoção
app.post('/promotion', async (req, res) => {
    const { name, promotion_date } = req.body;
    console.log(req.body);
    try {
        await query('INSERT INTO promotions (id, name, promotion_date) VALUES ($1, $2, $3)', [uuidv4(), name, promotion_date]);
        res.status(201).send('Promoção cadastrada com sucesso');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar promoção');
    }
});

// Endpoint para obter todas as promoções
app.get('/promotions', async (req, res) => {
    try {
        const result = await query('SELECT * FROM promotions');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar promoções');
    }
});

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
