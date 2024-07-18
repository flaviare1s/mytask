import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import imagem from "../assets/mytask.jpg"

const NotFound = () => {
  return (
    <main className="mt-3 mb-5">
      <h1 className="text-center text-danger">Página não encontrada. 404.</h1>
      <hr />
      <Container fluid className="text-center d-flex flex-column align-items-center justify-content-center">
        <Container>
        <img src={imagem} alt="Logo MyTask" className='img-fluid rounded' />
        </Container>
        <Link to='/'>
          <Button className="my-3" variant="primary">Voltar para Home</Button>
        </Link>
      </Container>
    </main>
  )
}

export default NotFound
