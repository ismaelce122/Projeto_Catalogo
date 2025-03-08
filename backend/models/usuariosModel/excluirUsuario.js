import pool from "../../config/db.js"

// Função para Excluir Usuários
const ExcluirUsusario = async (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM usuarios WHERE id= ?'
    try {
        const [result] = await pool.query(sql, [id])
        if (result.affectedRows > 0) {
            res.status(200).send({ message: 'Usuário Excluído com Sucesso!!!' })
        } else {
            res.status(404).send({message: 'Erro ao Excluir Usuário :-('})
        }

    } catch (err) {
        console.error('Erro ao Excluir Usuário: ', err)
        res.status(500).send(err)
    }
}

export default ExcluirUsusario