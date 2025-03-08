import pool from "../../config/db.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

// Função para Login dos Usuários
const LoginUsuario = async (req, res) => {
    const { email, senha } = req.body
    const sqlEmail = 'SELECT * FROM usuarios WHERE email = ?'
    try {
        const [consulta] = await pool.query(sqlEmail, [email])
        if (!consulta[0]) {
            return res.status(400).json({ message: 'e-mail inválido' })
        }
        const user = consulta[0]
        const usuario = consulta[0].nome
        const senhaValida = await bcrypt.compare(senha, user.senha)
        if (!senhaValida) {
            return res.status(400).json({ message: 'senha inválida' })
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ token, usuario });
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default LoginUsuario