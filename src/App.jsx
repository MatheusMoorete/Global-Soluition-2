import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Rotas e Hooks
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./paginas/Home";
import Infancia from './paginas/Infancia';
import Doenças from './paginas/Doenças';
import Prevencao from './paginas/Prevencao';
import Saude from './paginas/Saude';
//Componentes
import Header from "./components/Header/Header";
import GlobalStyles from './components/GlobalStyles';




function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header />
        <Routes>
          <Route path="https://gs2-kappa.vercel.app/Home" element={<Home />} /> 
          <Route path="/Home" element={<Home />} /> 
          <Route path="/Infancia" element={<Infancia />} />
          <Route path="/Doenças" element={<Doenças />} />
          <Route path="/Prevencao" element={<Prevencao />} />
          <Route path="/Saude" element={<Saude />} />
          <Route path="*" element={<div>Página não encontrada...</div>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
