import express from 'express'
import CadastrarUsuario from '../models/usuariosModel/cadastrarUsuario.js'
import ExibirUsuario from '../models/usuariosModel/exibirUsuario.js'
import LoginUsuario from '../models/usuariosModel/loginUsuario.js'
import ExcluirUsusario from '../models/usuariosModel/excluirUsuario.js'

const Rotas = express.Router()

// Rota para Cadastrar Usuários
Rotas.post('/cadastrar', CadastrarUsuario)
// Rota para Exibir Usuários Cadastrados
Rotas.get('/lista_de_usuarios', ExibirUsuario)
// Rota para Login dos Usuários
Rotas.post('/login', LoginUsuario)
// Rota para Excluir Usuários
Rotas.delete('/lista_de_usuarios/:id', ExcluirUsusario)

export default Rotas