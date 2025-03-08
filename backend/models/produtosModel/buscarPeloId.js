import pool from "../../config/db.js"

// Função para Buscar os Dados de um Produto pelo Id
const BuscarPeloId = async (req, res) => {
    const { id } = req.params
    const sql = 'SELECT * FROM produtos WHERE id = ?'
    console.log(req.params)
    try {
        const [result] = await pool.query(sql, [id])
        if(result.length > 0) {
            res.status(200).json(result[0])
        } else {
            res.status(404).json({ message: 'Produto não Encontrado!!!' })
        }
    } catch(error) {
        console.error('Erro ao Buscar Produto: ', error)
        res.status(500).json({ message: 'Produto não Encontrado' })
    }
}

export default BuscarPeloId