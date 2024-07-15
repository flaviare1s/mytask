import { Container, Spinner } from "react-bootstrap"

const Loader = () => {
  return (
    <Container>
      <Spinner variant="dark"></Spinner>
      <span className="ms-1">Carregando...</span>
    </Container>
  )
}

export default Loader
