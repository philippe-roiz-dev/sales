// index.js
const express = require('express');
const app = express();
const port = 3000;

const { initializePromotionsRoutes } = require('./api/promotions/promotionsController');
const { initialize: operatorsRoutes } = require('./api/operators/operatorsController');


function initializeRoutes() {
    initializePromotionsRoutes(app);
    operatorsRoutes(app);
}

function initializeServer() {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
}

function initializeApp() {
    app.use(express.json()); // Middleware para parsing de JSON
    initializeRoutes();
    initializeServer();
}

initializeApp();