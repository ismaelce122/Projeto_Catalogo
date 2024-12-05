const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await userModel.findUserByEmail(email);
    if (userExists) return res.status(400).json({ message: 'Email já cadastrado' });

    const passwordHash = await bcrypt.hash(password, 10);
    const userId = await userModel.createUser(name, email, passwordHash);

    res.status(201).json({ message: 'Usuário criado', userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findUserByEmail(email);
    if (!user) return res.status(400).json({ message: 'Usuário ou senha inválidos' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Usuário ou senha inválidos' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log(token) // analisar valores
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
