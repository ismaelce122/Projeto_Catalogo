import express from 'express'
import pool from '../config/db.js'

const Rotas = express.Router()

// Rota para Criar o Comentário de um Usuário
Rotas.post('/comentar', async (req, res) => {
    const { nome, comentario } = req.body
    const sql = 'INSERT INTO comentarios (nome, comentario) VALUES (?, ?)'
    try {
        const [result] = await pool.query(sql, [nome, comentario])
        res.send('Comentário Enviado!!!')
    } catch (err) {
        res.status(500).send('Erro ao Enviar Comentário: ' + err.message)
    }
})

// Rota para Exibir os Comentários
Rotas.get('/lista_de_comentarios', async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM comentarios')
        res.json(results)
    } catch (err) {
        res.status(500).send(err)
    }
}) 

// Rota para Excluir um Comentário
Rotas.delete('/lista_de_comentarios/:id', async (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM comentarios WHERE id= ?'
    try {
        const [result] = await pool.query(sql, [id])
        if (result.affectedRows > 0) {
            res.status(200).send({ message: 'Comentário Excluído com Sucesso!!!' })
        } else {
            res.status(404).send({message: 'Erro ao Excluir Comentário :-('})
        }

    } catch (err) {
        console.error('Erro ao Excluir Comentário: ', err)
        res.status(500).send(err)
    }
})

export default Rotas