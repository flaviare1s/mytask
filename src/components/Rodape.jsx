import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"

const Rodape = () => {
  return (
    <footer>
      <Container fluid className="text-center bg-dark py-3">
        <small className="text-secondary">&copy; 2024. MyTask. Todos os direitos reservados. </small>
        <Link className="text-secondary text-decoration-none small" to='/politicaprivacidade'>Veja nossa política de privacidade clicando aqui!</Link>
      </Container>
    </footer>
  )
}

export default Rodape
