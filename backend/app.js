import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import bcrypt from 'bcrypt'
import pool from './config/db.js'

const Porta = 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/api/cadastrar_produtos', async (req, res) => {
    const { nome, descricao, categoria, preco, img_url } = req.body
    const sql = 'INSERT INTO produtos (nome, descricao, categoria, preco, img_url) VALUES (?, ?, ?, ?, ?)' 
    try {
        const [result] = await pool.query(sql, [nome, descricao, categoria, preco, img_url])
        res.send('Produto Cadastrado com Sucesso!!!')
    } catch(err) {
        res.status(500).send('Erro ao Cadastrar Produto: ' + err.message)
    }
})

app.post('/api/cadastrar_usuario', async (req, res) => {
    const { nome, email, senha } = req.body
    const senhaHash = await bcrypt.hash(senha, 10)
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)' 
    try {
        const [result] = await pool.query(sql, [nome, email, senhaHash])
        res.send('Usuário Cadastrado com Sucesso!!!')
    } catch(err) {
        res.status(500).send('Erro ao Cadastrar Usuário: ' + err.message)
    }
})

app.get('/catalogo_de_produtos', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM produtos')
        res.json(results)
    } catch(err) {
        res.status(500).send(err)
    }
})

app.get('/lista_de_usuarios', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM usuarios')
        res.json(results)
    } catch(err) {
        res.status(500).send(err)
    }
})

app.listen(Porta, () => {
    console.log(`Servidor Conectado...  Porta:${Porta}`)
})