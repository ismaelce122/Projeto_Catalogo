import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IconeUser from './user.png'
import IconeSair from './sair.png'
import IconeHome from './home.png'
import IconeUsuarios from './usuarios_cadastrados.png'
import IconeCatalogo from './catalogo_de_produtos.png'
import IconeCadastrar from './cadastrar_produto.png'
import IconeComentario from './comentarios.png'
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

    const menu_user = () => {
        const perfil = document.getElementById('perfil')
        if (perfil.style.display === 'flex') {
            perfil.style.display = 'none'
        } else {
            perfil.style.display = 'flex'
        }
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
                            <div className='d-flex user' aria-current="page">
                                <button type='button' className='btn_sair' onClick={menu_user}><img src={IconeUser} alt='Usuário' /></button>
                                <div className='perfil_user' id='perfil'>
                                    <Link to="#" className='menu_user mb-1'>Perfil</Link>
                                    <Link to="#" className='menu_user mb-1'>Favoritos</Link>
                                    <Link to="#" className='menu_user mb-1'>Mensagens</Link>
                                    <Link to="#" className='menu_user mb-1'>Notificações</Link>
                                </div>
                            </div>
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
                    <div className="navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active btn_menu gap-1 d-flex align-items-center" aria-current="page">
                                    <img src={IconeHome} alt='...' width='40' height='40' />
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/lista_de_usuarios' className="nav-link active btn_menu gap-2 d-flex align-items-center" aria-current="page">
                                    <img src={IconeUsuarios} alt='...' width='40' height='40' />
                                    Usuários
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/catalogo_de_produtos' className="nav-link active btn_menu gap-1 d-flex align-items-center" aria-current="page">
                                    <img src={IconeCatalogo} alt='...' width='40' height='40' />
                                    Catálogo de Produtos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cadastro' className="nav-link active btn_menu gap-1 d-flex align-items-center" aria-current="page">
                                    <img src={IconeCadastrar} alt='...' width='40' height='40' />
                                    Cadastrar Produtos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/comentarios' className="nav-link active btn_menu gap-1 d-flex align-items-center" aria-current="page">
                                    <img src={IconeComentario} alt='...' width='40' height='40' />
                                    Comentários
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar