import { useContext, useEffect } from 'react'
import '../styles/Home.css'
import { Container } from 'react-bootstrap'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const userLogged = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (userLogged) {
      navigate('/tarefas')
    }
  }, [userLogged, navigate])

  return (
    <main>
      <Container>
        <h1 className='animated-title d-flex justify-content-center align-items-center vh-100 text-center'>Bem-vindo(a) ao MyTask, o seu organizador de tarefas!</h1>
      </Container>
    </main>
  )
}

export default Home
