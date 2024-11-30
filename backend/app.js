import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
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

app.get('/catalogo_de_produtos', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM produtos')
        res.json(results)
    } catch(err) {
        res.status(500).send(err)
    }
})

app.listen(Porta, () => {
    console.log(`Servidor Conectado...  Porta:${Porta}`)
})