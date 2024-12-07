import { Link } from 'react-router-dom'
import './navBar.css'

function NavBar() {
    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body">
                <div className="container-fluid text-light">
                    <h1>
                        <Link to='/' className="nav-link active" aria-current="page">Super Select</Link>
                    </h1>
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
                                <Link to='/login' className="nav-link active btn_menu" aria-current="page">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/usuario' className="nav-link active btn_menu" aria-current="page">Cadastre-se</Link>
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