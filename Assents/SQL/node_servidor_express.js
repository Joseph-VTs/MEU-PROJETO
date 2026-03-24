const express = require('express');
// const bodyParser = require('body-parser');
const insertUser = require('./node_INSERT');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Rota para verificar se o servidor está rodando
app.get('/', (req, res) => {
  res.send('Servidor Express está rodando!');
});

// Rota para lidar com o cadastro de usuários
app.post('/cadastro', async (req, res) => {
    console.log('Dados recebidos:', req.body);
    await insertUser(req.body);
    res.send('Cadastro realizado com sucesso!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});