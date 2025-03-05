import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './formLogin.css'

const FormLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3001/usuarios/login', {email, senha})
      const { token, usuario } = response.data
      // Armazenar o Token no LocalStorage
      localStorage.setItem('token', token)
      localStorage.setItem('usuario', usuario)
      console.log('Login Efetuado com Sucesso!!!  Usuário:', usuario)
      alert('Login Efetuado com Sucesso :-)')
      setEmail('')
      setSenha('')
      navigate('/')
      window.location.reload()
    }
    catch(error) {
      console.error('Erro ao Fazer Login: ', error)
      setErro(error.response.data.message)
    }
  }

  return (
    <div className="form-container mt-2 fade_in">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
          <label>Senha:</label>
          <input type='password' name='senha' value={senha} onChange={(e) => setSenha(e.target.value)} required/>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <div style={{color: 'red'}}>{erro}</div>
    </div>
  )
}

export default FormLogin;