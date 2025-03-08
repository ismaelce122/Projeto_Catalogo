import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import RotasProdutos from './routes/RotasProdutos.js'
import RotasUsuarios from './routes/RotasUsuarios.js'
import RotasComentarios from './routes/RotasComentarios.js'

const Porta = 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())

// Rota Raiz para os Produtos
app.use('/produtos', RotasProdutos)
// Rota Raiz para Usuários
app.use('/usuarios', RotasUsuarios )
// Rota Raiz para Comentários
app.use('/comentarios', RotasComentarios)

app.listen(Porta, () => {
    console.log(`Servidor Conectado...  Porta:${Porta}`)
})