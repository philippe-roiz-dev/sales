global.database = [];

exports.generateMock = () => {
    jest.mock('../../api/promotions/promotionsDAO', () => ({
        insertPromotion: jest.fn().mockImplementation((id, name, promotion_date) => {
            const promotion = {id, name, promotion_date};
            global.database.push(promotion);
            return 1;
        }),
        getAllPromotions: jest.fn().mockImplementation(() => {}),
        getPromotionById: jest.fn().mockImplementation(() => {}),
        updatePromotion: jest.fn().mockImplementation(() => {}),
        deletePromotion: jest.fn().mockImplementation(() => {})
    }));
}