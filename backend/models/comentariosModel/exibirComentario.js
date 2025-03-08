import pool from "../../config/db.js"

// Função para Exibir os Comentários
const ExibirComentario = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM comentarios')
        res.json(results)
    } catch (err) {
        res.status(500).send(err)
    }
}

export default ExibirComentario