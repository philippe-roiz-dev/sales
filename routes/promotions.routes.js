const express = require('express');
const promotionsController = require('../api/promotions/promotions.controller');
const router = express.Router();

// Rotas para Promoções
router.post('/promotion', promotionsController.addPromotion);
router.get('/promotions', promotionsController.getPromotions);
router.get('/promotion/:id', promotionsController.getPromotionById);
router.put('/promotion/:id', promotionsController.updatePromotion);
router.delete('/promotion/:id', promotionsController.deletePromotion);

module.exports = router;