const pool = require('../config/db');

const findUserByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const createUser = async (name, email, passwordHash) => {
  const [result] = await pool.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, passwordHash]
  );
  return result.insertId;
};

module.exports = { findUserByEmail, createUser };
