const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: "Olá"
    });
});

app.get('/produtos', (req, res) => {
    res.json([{ nome: 'Celular' }, { nome: 'Notebook' }, { nome: 'Tablet' }])
});

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
    console.log('Estou rodando na porta ' + PORT)
});