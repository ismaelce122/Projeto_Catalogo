import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IconeUser from './user.png'
import IconeSair from './sair.png'
import './navBar.css'

function NavBar() {
    const navigate = useNavigate()
    const [logado, setLogado] = useState(false)
    const [usuario, setUsuario] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        const storedUsuario = localStorage.getItem('usuario')
        if (token && storedUsuario) {
            setLogado(true)
            setUsuario(storedUsuario)
        }
    }, [])
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('usuario')
        setLogado(false)
        setUsuario('')
        navigate('/login')
    }

    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body d-flex justify-content-between">
                <div className='container-fluid'>
                    <div className="text-light">
                        <h1>
                            <Link to='/' className="nav-link active" aria-current="page">Super Select</Link>
                        </h1>
                    </div>
                    {logado ? (
                        <div className='d-flex align-items-center gap-2'>
                            <span className='text-light titulo'><strong>{usuario}</strong></span>
                            <Link to='#' className='d-flex' aria-current="page">
                                <img src={IconeUser} alt='Usuário' />
                            </Link>
                            <button className='btn_sair d-flex' onClick={handleLogout}><img src={IconeSair} alt='Logout' title='Sair' /></button>
                        </div>
                    ) : (
                        <div className='d-flex align-items-center gap-3'>
                            <li className="nav-item d-flex">
                                <Link to='/usuario' className="d-flex justify-content-center btn_login" aria-current="page">Cadastre-se</Link>
                            </li>
                            <li className="nav-item d-flex">
                                <Link to='/login' className="d-flex justify-content-center btn_login" aria-current="page">Login</Link>
                            </li>
                        </div>
                    )}
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active btn_menu" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/lista_de_usuarios' className="nav-link active btn_menu" aria-current="page">Usuários Cadastrados</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/catalogo_de_produtos' className="nav-link active btn_menu" aria-current="page">Catálogo de Produtos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cadastro' className="nav-link active btn_menu" aria-current="page">Cadastrar Produtos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/comentarios' className="nav-link active btn_menu" aria-current="page">Comentários</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar