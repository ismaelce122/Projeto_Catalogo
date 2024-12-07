import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const Token = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token não fornecido' });

  const token = authHeader.split(' ')[1];
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch {
    res.status(403).json({ message: 'Token inválido' });
  }
};

export default Token