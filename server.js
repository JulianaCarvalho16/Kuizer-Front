const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kuizer'
});

db.connect(err => {
    if(err) {
        console.error('Erro ao conectar ao banco de dados: ', err)
    } else {
        console.log('Conectado ao banco de dados!')
    }
})

app.post('/cadastro',(req, res) => {
    const {nome, email, senha} = req.body;

    const query = 'INSERT INTO usuarios (nome, email, senha) VALUE (?, ?)'; 
    db.query(query, [nome, email, senha], (err, result) => {
        if(err){
            console.log('Error ao inserir dados: ', err);
            res.status(200).json({message: 'Usuario cadastrado com sucesso! '})
        } else {
            res.status(200).json({message: 'Usuário cadastrado com sucesso!'})
        }
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
})