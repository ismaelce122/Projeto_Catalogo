import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import rotaProdutos from './routes/rotaProdutos.js'
import rotaUsuarios from './routes/rotaUsuarios.js'
import rotaComentarios from './routes/rotaComentarios.js'

const Porta = 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())

// Rota Raiz para os Produtos
app.use('/produtos', rotaProdutos)
// Rota Raiz para Usuários
app.use('/usuarios', rotaUsuarios )
// Rota Raiz para Comentários
app.use('/comentarios', rotaComentarios)

app.listen(Porta, () => {
    console.log(`Servidor Conectado...  Porta:${Porta}`)
})