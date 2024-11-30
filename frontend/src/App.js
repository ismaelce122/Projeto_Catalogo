import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro/cadastro';
import Catalogo from './pages/CatalogoDeProdutos/catalogo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/cadastro' element={ <Cadastro /> } />
        <Route path='/catalogo_de_produtos' element={ <Catalogo /> } />
      </Routes>
    </Router>
  );
}

export default App;