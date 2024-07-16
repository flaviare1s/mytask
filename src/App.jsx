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
import Tarefas from "./pages/Tarefas"
import { Toaster } from "react-hot-toast"
import EditarTarefa from "./pages/EditarTarefa"

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
            <Route path='/tarefas' element={<Tarefas />} />
            <Route path='/tarefas/adicionar' element={<NovaTarefa />} />
            <Route path='/tarefas/editar/:id' element={<EditarTarefa />} />
            <Route path='politicaprivacidade' element={<PoliticaPrivacidade />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Rodape />
        </HashRouter>
        <Toaster position="bottom-right" />
      </div>
    </>
  )
}

export default App
