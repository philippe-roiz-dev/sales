const { v4: uuidv4 } = require('uuid');
const PromotionsDAO = require('./promotionsDAO');

// Função para adicionar uma nova promoção
const addPromotion = async (req, res) => {
    const { name, promotion_date } = req.body;
    try {
        await PromotionsDAO.insertPromotion(uuidv4(), name, promotion_date);
        res.status(201).send('Promoção cadastrada com sucesso');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao cadastrar promoção');
    }
};

// Função para obter todas as promoções
const getPromotions = async (req, res) => {
    try {
        const result = await PromotionsDAO.getAllPromotions();
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar promoções');
    }
};

// Função para obter uma promoção específica por ID
const getPromotionById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await PromotionsDAO.getPromotionById(id);
        if (result.rows.length === 0) {
            return res.status(404).send('Promoção não encontrada');
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar promoção');
    }
};

// Função para atualizar uma promoção existente
const updatePromotion = async (req, res) => {
    const { id } = req.params;
    const { name, promotion_date } = req.body;
    try {
        const result = await PromotionsDAO.updatePromotion(id, name, promotion_date);
        if (result.rowCount === 0) {
            return res.status(404).send('Promoção não encontrada');
        }
        res.status(200).send('Promoção atualizada com sucesso');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao atualizar promoção');
    }
};

// Função para deletar uma promoção
const deletePromotion = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await PromotionsDAO.deletePromotion(id);
        if (result.rowCount === 0) {
            return res.status(404).send('Promoção não encontrada');
        }
        res.status(200).send('Promoção deletada com sucesso');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar promoção');
    }
};

exports.initializePromotionsRoutes = (app) => {
    app.post('/promotion', addPromotion);
    app.get('/promotions', getPromotions);
    app.get('/promotion', getPromotionById);
    app.patch('/promotion', updatePromotion);
    app.delete('/promotion', deletePromotion);
};