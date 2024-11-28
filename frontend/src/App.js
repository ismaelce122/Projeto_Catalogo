import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Cadastro from './pages/cadastro/cadastro';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cadastro' element={ <Cadastro /> } />
      </Routes>
    </Router>
  );
}


export default App;

