import { Container, Spinner } from "react-bootstrap"

const Loader = () => {
  return (
    <Container className="d-flex flex-column align-items-center">
      <Spinner variant="dark"></Spinner>
      <span className="ms-1">Carregando...</span>
    </Container>
  )
}

export default Loader
