import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IconeUser from './image/user.png'
import IconeSair from './image/sair.png'
import IconeHome from './image/home.png'
import IconeUsuarios from './image/usuarios_cadastrados.png'
import IconeCatalogo from './image/catalogo_de_produtos.png'
import IconeCadastrar from './image/cadastrar_produto.png'
import IconeComentario from './image/comentarios.png'
import IconePerfil from './image/perfil.png'
import IconeFavorito from './image/favorito.png'
import IconeMensagem from './image/mensagem.png'
import IconeNotificacao from './image/notificacao.png'
import IconeCarrinho from './image/carrinho.png'
import './navBar.css'
import ModalCarrinho from '../modalCarrinho/modalCarrinho'

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
    const Logout = () => {
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
                            <span className='text-light titulo'><strong>Olá, {usuario}</strong></span>
                            <div className='d-flex user' aria-current="page">
                                <button type='button' className='btn_sair' onClick={menu_user}><img src={IconeUser} alt='Usuário' /></button>
                                <button type='button' className='btn_sair' data-bs-toggle="modal" data-bs-target="#staticBackdrop" title='carrinho de compras'><img src={IconeCarrinho} alt='Carriho de Compras' /></button>
                                <ModalCarrinho />
                                <div className='perfil_user' id='perfil'>
                                    <Link to="#" className='menu_user mb-1 gap-1 d-flex align-items-center'>
                                        <img src={IconePerfil} alt='Logout' width='20' height='20' />
                                        Perfil
                                    </Link>
                                    <Link to="/teste" className='menu_user mb-1 gap-1 d-flex align-items-center'>
                                        <img src={IconeFavorito} alt='Logout' width='20' height='20' />
                                        Favoritos
                                    </Link>
                                    <Link to="#" className='menu_user mb-1 gap-1 d-flex align-items-center'>
                                        <img src={IconeMensagem} alt='Logout' width='20' height='20' />
                                        Mensagens
                                    </Link>
                                    <Link to="#" className='menu_user mb-1 gap-1 d-flex align-items-center'>
                                        <img src={IconeNotificacao} alt='Logout' width='20' height='20' />
                                        Notificações
                                    </Link>
                                    <button type='button' className='btn_sair menu_user gap-1 d-flex align-items-center' onClick={Logout}>
                                        <img src={IconeSair} alt='Logout' width='20' height='20' />
                                        Sair
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='d-flex align-items-center gap-3'>
                            <li className="nav-item d-flex">
                                <Link to='/usuario/login' className="d-flex justify-content-center btn_login" aria-current="page">Login</Link>
                            </li>
                            <li className="nav-item d-flex">
                                <Link to='/usuario/cadastrar' className="d-flex justify-content-center btn_login" aria-current="page">Cadastre-se</Link>
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
                                <Link to='/' className="nav-link active btn_menu gap-1 d-flex align-items-center justify-content-center" aria-current="page">
                                    <img src={IconeHome} alt='...' width='25' height='25' />
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/usuario/lista_de_usuarios' className="nav-link active btn_menu gap-1 d-flex align-items-center justify-content-center" aria-current="page">
                                    <img src={IconeUsuarios} alt='...' width='25' height='25' />
                                    Usuários
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/produtos/catalogo_de_produtos' className="nav-link active btn_menu gap-1 d-flex align-items-center justify-content-center" aria-current="page">
                                    <img src={IconeCatalogo} alt='...' width='25' height='25' />
                                    Catálogo de Produtos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/produtos/cadastrar' className="nav-link active btn_menu gap-1 d-flex align-items-center justify-content-center" aria-current="page">
                                    <img src={IconeCadastrar} alt='...' width='25' height='25' />
                                    Cadastrar Produtos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/comentarios/lista_de_comentarios' className="nav-link active btn_menu gap-1 d-flex align-items-center justify-content-center" aria-current="page">
                                    <img src={IconeComentario} alt='...' width='25' height='25' />
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