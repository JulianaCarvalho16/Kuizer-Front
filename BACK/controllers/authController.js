const db = require('../config/db')
const bcrypt = require('bcrypt')

exports.register = (req, res) => {
    const { name, email, password } = req.body;

    // Verifica se todos os campos necessários foram enviados
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Nome, email e senha são obrigatórios' });
    }

    // Gerar o hash da senha
    const hash = bcrypt.hashSync(password, 10);

    // Inserir o usuário no banco de dados
    db.query('INSERT INTO cadastro (name, email, password) VALUES (?, ?, ?)', [name, email, hash], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao registrar usuário' });
        }
        res.status(200).json({ message: 'Usuário registrado com sucesso' });
    });
};



exports.login = (req, res) => {
    const { email, password } = req.body;

    // Verifica se email e senha foram enviados
    if (!email || !password) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    // Consultar o banco de dados pelo email
    db.query('SELECT * FROM cadastro WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao realizar login' });
        }

        // Verifica se o usuário foi encontrado
        if (results.length === 0) {
            return res.status(400).json({ message: 'Usuário não encontrado' });
        }

        const user = results[0];

        // Comparar a senha fornecida com a senha armazenada no banco
        const isMatch = bcrypt.compareSync(password, user.password); // Use "password" ao invés de "senha"

        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciais inválidas' });
        }

        res.status(200).json({ message: 'Login efetuado com sucesso' });
    });
};
