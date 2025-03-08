import express from 'express'
import CadastrarProduto from '../models/produtosModel/cadastrarProduto.js'
import ExibirProduto from '../models/produtosModel/exibirProduto.js'
import BuscarPeloId from '../models/produtosModel/buscarPeloId.js'
import AtualizarProduto from '../models/produtosModel/atualizarProduto.js'
import ExcluirProduto from '../models/produtosModel/excluirProduto.js'

const Rotas = express.Router()

// Rota para Cadastrar Produtos
Rotas.post('/cadastrar', CadastrarProduto)
// Rota para Exibir os Produtos Cadastrados
Rotas.get('/catalogo', ExibirProduto)
// Rota para Buscar os dados de um Produto pelo Id
Rotas.get('/catalogo/:id', BuscarPeloId)
// Rota para Atualizar o cadastro de um Produto
Rotas.put('/catalogo/:id', AtualizarProduto)
// Rota para Excluir Produtos
Rotas.delete('/catalogo/:id', ExcluirProduto)

export default Rotas