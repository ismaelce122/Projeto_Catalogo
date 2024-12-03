import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro/cadastro';
import Catalogo from './pages/CatalogoDeProdutos/catalogo';
import FormUsuario from './components/cadastroUsuario/FormUsuario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/cadastro' element={ <Cadastro /> } />
        <Route path='/catalogo_de_produtos' element={ <Catalogo /> } />
        <Route path='/login' element={ <FormUsuario /> } />
      </Routes>
    </Router>
  );
}

export default App;