import pool from "../../config/db.js"

// Função para Criar o Comentário de um Usuário
const CriarComentario = async (req, res) => {
    const { nome, comentario } = req.body
    const sql = 'INSERT INTO comentarios (nome, comentario) VALUES (?, ?)'
    try {
        const [result] = await pool.query(sql, [nome, comentario])
        res.send('Comentário Enviado!!!')
    } catch (err) {
        res.status(500).send('Erro ao Enviar Comentário: ' + err.message)
    }
}

export default CriarComentario