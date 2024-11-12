// index.js
const express = require('express');
const app = express();

const { initializePromotionsRoutes } = require('./api/promotions/promotionsController');
const { initialize: operatorsRoutes } = require('./api/operators/operatorsController');


function initializeRoutes() {
    initializePromotionsRoutes(app);
    operatorsRoutes(app);
}

function initializeApp() {
    app.use(express.json()); // Middleware para parsing de JSON
    initializeRoutes();
}

initializeApp();

exports.app = app;