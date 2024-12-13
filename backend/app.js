import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import pool from './config/db.js'

const Porta = 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())
dotenv.config()

app.post('/api/cadastrar_produtos', async (req, res) => {
    const { nome, descricao, categoria, preco, img_url } = req.body
    const sql = 'INSERT INTO produtos (nome, descricao, categoria, preco, img_url) VALUES (?, ?, ?, ?, ?)'
    try {
        const [result] = await pool.query(sql, [nome, descricao, categoria, preco, img_url])
        res.send('Produto Cadastrado com Sucesso!!!')
    } catch (err) {
        res.status(500).send('Erro ao Cadastrar Produto: ' + err.message)
    }
})

app.post('/api/cadastrar_usuario', async (req, res) => {
    const { nome, email, senha } = req.body
    try {
        // Verificando se Usuário já existe no Banco de Dados
        const sqlEmail = 'SELECT * FROM usuarios WHERE email = ?'
        const [consulta] = await pool.query(sqlEmail, [email])
        if(consulta.length > 0) {
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

app.post('/logar', async (req, res) => {
    const { email, senha } = req.body
    const sqlEmail = 'SELECT * FROM usuarios WHERE email = ?'
    try {
        const [consulta] = await pool.query(sqlEmail, [email])
        if(!consulta[0]) {
            return res.status(400).json({ message: 'e-mail inválido' })
        }
        const user = consulta[0]
        const usuario = consulta[0].nome
        const senhaValida = await bcrypt.compare(senha, user.senha)
        if(!senhaValida) {
            return res.status(400).json({ message: 'senha inválida' })
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ token, usuario });
    } 
    catch(error) {
        res.status(500).json({ error: error.message })
    }
})

app.get('/catalogo_de_produtos', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM produtos')
        res.json(results)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.get('/lista_de_usuarios', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM usuarios')
        res.json(results)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.listen(Porta, () => {
    console.log(`Servidor Conectado...  Porta:${Porta}`)
})