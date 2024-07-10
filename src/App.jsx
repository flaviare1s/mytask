import Menu from "./components/Menu"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Ajuda from "./pages/Ajuda"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// BrowserRouter => componente essencial para consuzir o roteamento no navegador

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />   
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/ajuda' element={<Ajuda />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
