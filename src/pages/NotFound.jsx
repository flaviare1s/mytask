import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main>
      <h1>Página não encontrada. 404.</h1>
      <hr />
      <Link to='/'>
        <Button variant="primary">Voltar para Home</Button>
      </Link>
    </main>
  )
}

export default NotFound
