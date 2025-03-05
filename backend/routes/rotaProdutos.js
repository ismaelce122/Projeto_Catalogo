import express from 'express'
import pool from '../config/db.js'

const Rotas = express.Router()

// Rota para cadastrar Produtos
Rotas.post('/cadastrar', async (req, res) => {
    const { nome, descricao, categoria, preco, img_url } = req.body
    const sql = 'INSERT INTO produtos (nome, descricao, categoria, preco, img_url) VALUES (?, ?, ?, ?, ?)'
    try {
        const [result] = await pool.query(sql, [nome, descricao, categoria, preco, img_url])
        res.send('Produto Cadastrado com Sucesso!!!')
    } catch (err) {
        res.status(500).send('Erro ao Cadastrar Produto: ' + err.message)
    }
})

// Rota para Exibir os Produtos Cadastrados
Rotas.get('/catalogo', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM produtos')
        res.json(results)
    } catch (err) {
        res.status(500).send(err)
    }
})

// Rota para Excluir Produtos
Rotas.delete('/catalogo/:id', async (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM produtos WHERE id= ?'
    try {
        const [result] = await pool.query(sql, [id])
        if (result.affectedRows > 0) {
            res.status(200).send({ message: 'Produto Excluído com Sucesso!!!' })
        } else {
            res.status(404).send({message: 'Produto não Encontrado :-('})
        }

    } catch (err) {
        console.error('Erro ao Excluir Produto: ', err)
        res.status(500).send(err)
    }
})

export default Rotas