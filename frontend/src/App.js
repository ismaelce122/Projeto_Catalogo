import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro/cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/cadastro' element={ <Cadastro /> } />
      </Routes>
    </Router>
  );
}

export default App;