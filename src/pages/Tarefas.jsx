import { Badge, Button, Card, Container } from "react-bootstrap"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { deleteTarefa, getTarefasUsuario } from "../firebase/tarefa"
import { useContext, useEffect, useState } from "react"
import Loader from "../components/Loader"
import toast from "react-hot-toast"
import { UserContext } from "../contexts/UserContext"

const Tarefas = () => {
  const [tarefas, setTarefas] = useState(null)
  const usuario = useContext(UserContext)
  const navigate = useNavigate()

  function carregarDados() {
    // O then devolve a lista de tarefas da coleção
    if(usuario) {
      getTarefasUsuario(usuario.uid).then((resultados) => {
        setTarefas(resultados)
      })
    }
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

  if(usuario === null) {
    return <Navigate to="/login" />
  }

  const categorias = {
    'Estudos': 'primary',
    'Trabalho': 'info',
    'Projetos': 'secondary',
    'Lazer': 'success',
    'Outros': 'danger'
  }

  return (
    <main>
      <Container className="mt-5 d-flex flex-column align-items-center justify-content-center">
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
                {tarefa.dataConclusao && <Card.Text>Data de conclusão: {new Date(tarefa.dataConclusao).toLocaleDateString()}</Card.Text>}
                <Badge bg={categorias[tarefa.categoria]}>{tarefa.categoria}</Badge>
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
        <Loader className="mt-5" />}
      </Container>
    </main>
  )
}

export default Tarefas
