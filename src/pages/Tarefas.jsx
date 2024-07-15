import { Badge, Button, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getTarefas } from "../firebase/tarefa"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"

const Tarefas = () => {
  const [tarefas, setTarefas] = useState(null)

  function carregarDados() {
    // O then devolve a lista de tarefas da coleção
    getTarefas().then((resultados) => {
      setTarefas(resultados)
    })
  }

  // Executar uma função apenas quando o componente é renderizado a primeira vez:
  useEffect(() => {
    carregarDados()
  }, [])

  return (
    <main>
      <Container className="mt-5">
        <h1>Suas tarefas</h1>
        <hr />
        <Link className="btn btn-dark" to="/tarefas/adicionar">Adicionar tarefa</Link>
        {tarefas ? 
        <section className="mt-2">
          {tarefas.map((tarefa) => {
            return <Card key={tarefa.id}>
              <Card.Body>
                <Card.Title>{tarefa.titulo}</Card.Title>
                <Card.Text>{tarefa.descricao}</Card.Text>
                <Badge bg="info">{tarefa.categoria}</Badge>
                <div className="mb-2">
                  {tarefa.concluido ? <Badge bg="success">Concluído</Badge> : <Badge bg="warning">Pendente</Badge>}
                </div>
                <Button variant="dark" className="me-2">Editar</Button>
                <Button variant="danger">Excluir</Button>
              </Card.Body>
            </Card>
          })}
        </section> 
        :
        <Loader />}
      </Container>
    </main>
  )
}

export default Tarefas
