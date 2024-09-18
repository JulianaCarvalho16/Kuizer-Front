const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const db = require('./config/db')
const mysql = require('mysql2')

const app = express();
app.use(cors());
app.use(bodyParser.json());

db.connect((err) => {
    if(err) throw err;
    console.log('Conectado ao Banco')
});

app.use('/', authRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
})