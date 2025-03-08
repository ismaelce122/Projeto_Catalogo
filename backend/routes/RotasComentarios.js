import express from 'express'
import CriarComentario from '../models/comentariosModel/criarComentario.js'
import ExibirComentario from '../models/comentariosModel/exibirComentario.js'
import ExcluirComentario from '../models/comentariosModel/excluirComentario.js'

const Rotas = express.Router()

// Rota para Criar o Comentário de um Usuário
Rotas.post('/comentar', CriarComentario)
// Rota para Exibir os Comentários
Rotas.get('/lista_de_comentarios', ExibirComentario)
// Rota para Excluir um Comentário
Rotas.delete('/lista_de_comentarios/:id', ExcluirComentario)

export default Rotas