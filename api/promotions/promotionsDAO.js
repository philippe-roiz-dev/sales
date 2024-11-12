const { query, connectDb } = require('../../config/database');

// Inserir uma nova promoção
exports.insertPromotion = async (id, name, promotion_date) => {
    return query('INSERT INTO promotions (id, name, promotion_date) VALUES ($1, $2, $3)', [id, name, promotion_date]);
};

// Obter todas as promoções
exports.getAllPromotions = () => {
    return query('SELECT * FROM promotions');
};

// Obter uma promoção específica por ID
exports.getPromotionById = (id) => {
    return query('SELECT * FROM promotions WHERE id = $1', [id]);
};

// Atualizar uma promoção
exports.updatePromotion = (id, name, promotion_date) => {
    return query('UPDATE promotions SET name = $1, promotion_date = $2 WHERE id = $3', [name, promotion_date, id]);
};

// Deletar uma promoção
exports.deletePromotion = (id) => {
    return query('DELETE FROM promotions WHERE id = $1', [id]);
};