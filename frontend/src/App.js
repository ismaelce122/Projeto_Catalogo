import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import CadastroProduto from './pages/cadastroProdutos/cadastroProduto'
import CatalogoProdutos from './pages/catalogoProdutos/catalogoProdutos'
import ListaUsuarios from './pages/listaUsuarios/listaUsuarios'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import ComentarioUsuarios from './pages/comentarioUsuarios/comentarioUsuarios'
import LoginUsuarios from './pages/loginUsuarios/loginUsuarios'
import CadastroUsuario from './pages/cadastroUsuario/cadastroUsuario'
import Teste from './pages/teste/teste'

function App() {
  return (
    <Router>
      <NavBar/ >
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/teste' element={ <Teste /> } />
        <Route path='/produtos/cadastrar' element={<CadastroProduto />} />
        <Route path='/produtos/catalogo_de_produtos' element={<CatalogoProdutos />} />
        <Route path='/usuario/login' element={ <LoginUsuarios /> } />
        <Route path='/usuario/cadastrar' element={ <CadastroUsuario /> } />
        <Route path='/usuario/lista_de_usuarios' element={<ListaUsuarios />} />
        <Route path='/comentarios/lista_de_comentarios' element={<ComentarioUsuarios />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App