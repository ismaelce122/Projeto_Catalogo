import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Cadastro from './pages/cadastro/cadastro';
import Catalogo from './pages/CatalogoDeProdutos/catalogo';
import FormUsuario from './components/cadastroUsuario/FormUsuario';
import ListaDeUsuario from './components/listaDeUsuario/ListaDeUsuario';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <NavBar/ >
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/catalogo_de_produtos' element={<Catalogo />} />
        <Route path='/cadastrar_usuario' element={<FormUsuario />} />
        <Route path='/lista_de_usuarios' element={<ListaDeUsuario />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;