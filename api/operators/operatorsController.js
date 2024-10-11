// operatorsController.js
const express = require('express');
const { insertOperator, getAllOperators, getOperatorById, updateOperator, deleteOperator } = require('./operatorsDAO');

const initialize = (app) => {

    // Endpoint para adicionar um novo operador
    app.post('/operator', async (req, res) => {
        const { name, role } = req.body;
        try {
            await insertOperator({ name, role });
            res.status(201).send('Operador cadastrado com sucesso');
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao cadastrar operador');
        }
    });

    // Endpoint para obter todos os operadores
    app.get('/operators', async (req, res) => {
        try {
            const result = await getAllOperators();
            res.status(200).json(result.rows);
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar operadores');
        }
    });

    // Endpoint para obter um operador específico por ID
    app.get('/operator/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await getOperatorById(id);
            if (result.rows.length === 0) {
                return res.status(404).send('Operador não encontrado');
            }
            res.status(200).json(result.rows[0]);
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar operador');
        }
    });

    // Endpoint para atualizar um operador existente
    app.put('/operator/:id', async (req, res) => {
        const { id } = req.params;
        const { name, role } = req.body;
        try {
            const result = await updateOperator({ id, name, role });
            if (result.rowCount === 0) {
                return res.status(404).send('Operador não encontrado');
            }
            res.status(200).send('Operador atualizado com sucesso');
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao atualizar operador');
        }
    });

    // Endpoint para deletar um operador
    app.delete('/operator/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await deleteOperator(id);
            if (result.rowCount === 0) {
                return res.status(404).send('Operador não encontrado');
            }
            res.status(200).send('Operador deletado com sucesso');
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao deletar operador');
        }
    });
};

module.exports = {
    initialize
};