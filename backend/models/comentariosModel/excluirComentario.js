import pool from "../../config/db.js"

// Função para Excluir um Comentário
const ExcluirComentario = async (req, res) => {
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
}

export default ExcluirComentario