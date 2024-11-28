import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import pool from './config/db.js'

const Port = 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/api/cadastrar_produtos', async (req, res) => {
    const { nome, descricao, categoria, preco, validade } = req.body
    const sql = 'INSERT INTO produtos (nome, descricao, categoria, preco, validade) VALUES (?, ?, ?, ?, ? )' 
    try {
        const [result] = await pool.query(sql, [nome, descricao, categoria, preco, validade])
        res.send('Produto Cadastrado com Sucesso')
    } catch(err) {
        res.status(500).send('Erro ao Cadastrar Produto: ' + err.message)
    }
})

app.listen(Port, () => {
    console.log('Servidor Conectado...')
})