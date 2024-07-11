import Menu from "./components/Menu"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Ajuda from "./pages/Ajuda"
import NotFound from "./pages/NotFound"
import Rodape from "./components/Rodape"
import NovaTarefa from "./pages/NovaTarefa"
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade"
import { HashRouter, Routes, Route } from "react-router-dom"

// BrowserRouter => componente essencial para consuzir o roteamento no navegador

const App = () => {

  return (
    <>
      <div>
        <HashRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />   
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/ajuda' element={<Ajuda />} />
            <Route path='/novatarefa' element={<NovaTarefa />} />
            <Route path='politicaprivacidade' element={<PoliticaPrivacidade />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Rodape />
        </HashRouter>
      </div>
    </>
  )
}

export default App
