import pool from '../config/db.js'

export const ProcurarEmail = async (email) => {
  const sql = 'SELECT * FROM usuarios WHERE email = ?'
  const [rows] = await pool.query(sql, [email])
  return rows[0]
};

export const CriarUsuario = async (nome, email, senhaHash) => {
  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)'
  const [result] = await pool.query(sql, [nome, email, senhaHash])
  return result.insertId
};