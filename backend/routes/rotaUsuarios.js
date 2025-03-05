import express from 'express'
import pool from '../config/db.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const Rotas = express.Router()
dotenv.config()

// Rota para Cadastrar Usuários
Rotas.post('/cadastrar', async (req, res) => {
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
})

// Rota para Exibir Usuários Cadastrados
Rotas.get('/lista_de_usuarios', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM usuarios')
        res.json(results)
    } catch (err) {
        res.status(500).send(err)
    }
})

// Rota para Login dos Usuários
Rotas.post('/login', async (req, res) => {
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
})

// Rota para Excluir Usuários
Rotas.delete('/lista_de_usuarios/:id', async (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM usuarios WHERE id= ?'
    try {
        const [result] = await pool.query(sql, [id])
        if (result.affectedRows > 0) {
            res.status(200).send({ message: 'Usuário Excluído com Sucesso!!!' })
        } else {
            res.status(404).send({message: 'Erro ao Excluir Usuário :-('})
        }

    } catch (err) {
        console.error('Erro ao Excluir Usuário: ', err)
        res.status(500).send(err)
    }
})

export default Rotas