import pool from "../../config/db.js"

// Função para Exibir Usuários Cadastrados
const ExibirUsuario = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM usuarios')
        res.json(results)
    } catch (err) {
        res.status(500).send(err)
    }
}

export default ExibirUsuario