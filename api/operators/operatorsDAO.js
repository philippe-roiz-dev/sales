// operatorsDAO.js
const { query } = require('../../config/database');
const { v4: uuidv4 } = require('uuid');

// Função para inserir um novo operador
const insertOperator = (operator) => {
    return query('INSERT INTO operators (id, name, role) VALUES ($1, $2, $3)', [uuidv4(), operator.name, operator.role]);
};

// Função para obter todos os operadores
const getAllOperators = () => {
    return query('SELECT * FROM operators');
};

// Função para obter um operador por ID
const getOperatorById = (id) => {
    return query('SELECT * FROM operators WHERE id = $1', [id]);
};

// Função para atualizar um operador
const updateOperator = (operator) => {
    return query('UPDATE operators SET name = $1, role = $2 WHERE id = $3', [operator.name, operator.role, operator.id]);
};

// Função para deletar um operador
const deleteOperator = (id) => {
    return query('DELETE FROM operators WHERE id = $1', [id]);
};

module.exports = {
    insertOperator,
    getAllOperators,
    getOperatorById,
    updateOperator,
    deleteOperator
};