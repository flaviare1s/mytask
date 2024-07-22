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
import Tarefa from "./pages/Tarefa"
import { Toaster } from "react-hot-toast"
import EditarTarefa from "./pages/EditarTarefa"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/config"
import { UserContext } from "./contexts/UserContext"
import Loader from "./components/Loader"
import { Container } from "react-bootstrap"

// BrowserRouter => componente essencial para consuzir o roteamento no navegador

const App = () => {
  const [usuarioLogado, setUsuarioLogado] = useState(null)
  const [loading, setLoadind] = useState(true)

  useEffect(() => {
    // Verificar se o usuário está logado
    onAuthStateChanged(auth, (user) => {
    setUsuarioLogado(user)
    setLoadind(false)
    })
  }, [])

  if(loading) {
    return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Loader />
    </Container>
    )
  }

  return (
    <>
        <UserContext.Provider value={ usuarioLogado }>
          <HashRouter>
            <Menu />
            <div className="main">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/ajuda' element={<Ajuda />} />
                <Route path='/tarefas' element={<Tarefas />} />
                <Route path='/tarefas/adicionar' element={<NovaTarefa />} />
                <Route path='/tarefas/editar/:id' element={<EditarTarefa />} />
                <Route path='/tarefas/:id' element={<Tarefa />} />
                <Route path='/politicaprivacidade' element={<PoliticaPrivacidade />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
            <Rodape />
          </HashRouter>
          <Toaster position="bottom-right" />
        </UserContext.Provider>
    </>
  )
}

export default App
