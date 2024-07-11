import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import error from "../assets/error.jpg"

const NotFound = () => {
  return (
    <main>
      <h1 className="text-center text-danger">Página não encontrada. 404.</h1>
      <hr />
      <Container fluid>
        <Container>
          <img  className="img-fluid" src={error} alt="" />
        </Container>
        <Link to='/'>
          <Button className="mt-3" variant="primary">Voltar para Home</Button>
        </Link>
      </Container>
    </main>
  )
}

export default NotFound
