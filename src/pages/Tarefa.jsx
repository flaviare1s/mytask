import '../styles/Tarefa.css'
import { Badge, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import { getTarefa } from "../firebase/tarefa"
import { useEffect, useState } from "react"

const Tarefa = () => {
  const { id } = useParams()
  const [tarefa, setTarefa] = useState(null)

  useEffect(() => {
    getTarefa(id).then((resultados) => {
      setTarefa(resultados)
    }).catch(error => {
      console.log(error)
    })
  }, [id])

  if (!tarefa) {
    return <Loader />
  }

  const categorias = {
    'Estudos': 'primary',
    'Trabalho': 'info',
    'Projetos': 'secondary',
    'Lazer': 'success',
    'Outros': 'danger'
  };


  return (
    <section className="d-flex flex-column align-items-center mx-3">
      <div className="d-flex flex-column align-items-center">
        <h1 className="text-center mt-3">{tarefa.titulo}</h1>
        <div className='card-tarefa'>
          <p><strong>Descrição: </strong>{tarefa.descricao}</p>
          <p><strong>Data de Conclusão: </strong>{tarefa.dataConclusao}</p>
          <p>{tarefa.concluido}</p>
          <Badge bg={categorias[tarefa.categoria]}>{tarefa.categoria}</Badge>
          {tarefa.concluido ? <Badge className="ms-2" bg="success">Concluído</Badge> : <Badge className="ms-2" bg="warning">Pendente</Badge>}
        </div>
      </div>
      <Button variant="outline-light" className="mb-3" onClick={() => window.history.back()}>Voltar</Button>
    </section>
  )
}

export default Tarefa
