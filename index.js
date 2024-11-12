// index.js
const { app } = require('./app');
const port = 3000;

function initializeServer() {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
}

initializeServer();
