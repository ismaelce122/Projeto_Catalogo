import { Link } from 'react-router-dom'
import './navBar.css'

function NavBar() {
    return (
        <div>
            <nav class="navbar bg-dark border-bottom border-body">
                <div class="container-fluid text-light">
                    <h1>
                        <Link to='/' class="nav-link active" aria-current="page">Super Select</Link>
                    </h1>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active btn_menu" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/login' class="nav-link active btn_menu" aria-current="page">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/cadastrar_usuario' class="nav-link active btn_menu" aria-current="page">Cadastre-se</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/lista_de_usuarios' class="nav-link active btn_menu" aria-current="page">Usuários Cadastrados</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/catalogo_de_produtos' class="nav-link active btn_menu" aria-current="page">Catálogo de Produtos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/cadastro' class="nav-link active btn_menu" aria-current="page">Cadastrar Produtos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/comentarios' class="nav-link active btn_menu" aria-current="page">Comentários</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar