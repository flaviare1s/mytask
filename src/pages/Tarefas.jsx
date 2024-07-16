import { Badge, Button, Card, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { deleteTarefa, getTarefas } from "../firebase/tarefa"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import toast from "react-hot-toast"

const Tarefas = () => {
  const [tarefas, setTarefas] = useState(null)
  const navigate = useNavigate()

  function carregarDados() {
    // O then devolve a lista de tarefas da coleção
    getTarefas().then((resultados) => {
      setTarefas(resultados)
    })
  }

  function deletarTarefa(id) {
    const deletar = confirm('Tem certeza?')
    if(deletar) {
      deleteTarefa(id).then(() => {
        toast.success('Tarefa removida!')
        carregarDados() // atualizar a lista e renderizar novamente
      })
    }
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
                <Card.Text>
                  {tarefa.dataConclusao && <p>Data de conclusão: {new Date(tarefa.dataConclusao).toLocaleDateString()}</p>}
                </Card.Text>
                <Badge bg="info">{tarefa.categoria}</Badge>
                <div className="mb-2">
                  {tarefa.concluido ? <Badge bg="success">Concluído</Badge> : <Badge bg="warning">Pendente</Badge>}
                </div>
                <div className="btn-group" role="group">
                  <Button className="d-flex align-items-center justify-content-center" variant="outline-dark" onClick={() => navigate(`/tarefas/editar/${tarefa.id}`)}>
                    <span className="material-symbols-outlined">edit_note</span>
                  </Button>
                  <Button className="d-flex align-items-center justify-content-center" variant="outline-danger" onClick={() => deletarTarefa(tarefa.id)}>
                  <span className="material-symbols-outlined">delete</span>
                  </Button>
                </div>
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
