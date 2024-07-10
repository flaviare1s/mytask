import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

const Rodape = () => {
  return (
    <footer className="mt-3">
      <Container fluid className="text-center bg-dark">
        <p className="text-light">&copy; 2024. MyTask. Todos os direitos reservados.</p>
        <Link className="text-light" to='/politicaprivacidade'>Veja nossa política de privacidade clicando aqui!</Link>
      </Container>
    </footer>
  )
}

export default Rodape
