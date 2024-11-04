const promotionsDAO = require ('../../api/promotions/promotionsDAO');
const database = [];

// Inserir uma nova promoção
const insertPromotion = (id, name, promotion_date) => {
    const promotion = {id, name, promotion_date};
    database.push(promotion);
    return 1;
};

const insertPromotionMock = jest.fn().mockImplementation ((id, name, promotion_date) => {
    const promotion = {id, name, promotion_date};
    database.push(promotion);
    return 1;
});

// Obter todas as promoções
exports.getAllPromotions = () => {
    return 1;
};

// Obter uma promoção específica por ID
exports.getPromotionById = (id) => {
    return 1;
};

// Atualizar uma promoção
exports.updatePromotion = (id, name, promotion_date) => {
    return 1;
};

// Deletar uma promoção
exports.deletePromotion = (id) => {
    return 1;

};


exports.generateMock = () => {
    jest.mock('../../api/promotions/promotionsDAO', () => jest.fn());

    promotionsDAO.mockImplementation(() => ({
        insertPromotion: (id, name, promotion_date) => {
            const promotion = {id, name, promotion_date};
            database.push(promotion);
            return 1;
        }
    }))
}