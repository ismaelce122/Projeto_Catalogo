import pool from "../../config/db.js"
import bcrypt from 'bcrypt'

// Função para Cadastrar Usuários
const CadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body
    try {
        // Verificando se Usuário já existe no Banco de Dados
        const sqlEmail = 'SELECT * FROM usuarios WHERE email = ?'
        const [consulta] = await pool.query(sqlEmail, [email])
        if (consulta.length > 0) {
            return res.status(400).send('usuário já cadastrado')
        }
        const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)'
        // Cripitografando Senha
        const senhaHash = await bcrypt.hash(senha, 10)

        const [result] = await pool.query(sql, [nome, email, senhaHash])
        res.send('Usuário Cadastrado com Sucesso!!!')
    } catch (err) {
        res.status(500).send('Erro ao Cadastrar Usuário: ' + err.message)
    }
}

export default CadastrarUsuario