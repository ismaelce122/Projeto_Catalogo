import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel'

export const Registrar = async (req, res) => {
  const { nome, email, senha } = req.body;aa
  try {
    const userExists = await userModel.ProcurarEmail(email);
    if (userExists) return res.status(400).json({ message: 'Email já cadastrado' });

    const senhaHash = await bcrypt.hash(senha, 10);
    const userId = await userModel.CriarUsuario(nome, email, senhaHash);

    res.status(201).json({ message: 'Usuário criado', userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const Logar = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const emailValido = await userModel.ProcurarEmail(email);
    if (!emailValido) return res.status(400).json({ message: 'E-mail Inválido!!!' });

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) return res.status(400).json({ message: 'Usuário Inválido!!!' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log(token) // analisar valores
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};