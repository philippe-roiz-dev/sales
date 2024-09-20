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

// Endpoint para obter uma promoção específica por ID
app.get('/promotion/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await query('SELECT * FROM promotions WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Promoção não encontrada');
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar promoção');
    }
});

// Endpoint para atualizar uma promoção existente
app.put('/promotion/:id', async (req, res) => {
    const { id } = req.params;
    const { name, promotion_date } = req.body;
    try {
        const result = await query('UPDATE promotions SET name = $1, promotion_date = $2 WHERE id = $3', [name, promotion_date, id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Promoção não encontrada para atualizar');
        }
        res.status(200).send('Promoção atualizada com sucesso');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar promoção');
    }
});

// Endpoint para deletar uma promoção existente
app.delete('/promotion/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await query('DELETE FROM promotions WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Promoção não encontrada para deletar');
        }
        res.status(200).send('Promoção deletada com sucesso');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar promoção');
    }
});

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});