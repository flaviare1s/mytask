import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteTarefa, getTarefasCategoria, getTarefasStatus, getTarefasUsuario } from "../firebase/tarefa";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { UserContext } from "../contexts/UserContext";
import '../styles/Tarefas.css';

const Tarefas = () => {
  const [tarefas, setTarefas] = useState(null);
  const usuario = useContext(UserContext);
  const navigate = useNavigate();
  const [statusConcluido, setStatusConcluido] = useState(false);
  const [statusPendente, setStatusPendente] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');

  function carregarDados() {
    if (usuario) {
      getTarefasUsuario(usuario.uid).then((resultados) => {
        setTarefas(resultados);
      });
    }
  }

  function filtrarStatus() {
    if (usuario) {
      if (statusConcluido && statusPendente) {
        carregarDados();
      } else if (statusConcluido) {
        getTarefasStatus(usuario.uid, true).then((resultados) => {
          setTarefas(resultados);
        });
      } else if (statusPendente) {
        getTarefasStatus(usuario.uid, false).then((resultados) => {
          setTarefas(resultados);
        });
      } else {
        carregarDados();
      }
    }
  }

  function filtrarCategoria(categoria) {
    setCategoriaSelecionada(categoria);
  }

  useEffect(() => {
    if(usuario) {
      if(categoriaSelecionada === 'Todas') {
        carregarDados()
    } else {
      getTarefasCategoria(usuario.uid, categoriaSelecionada).then(resultados => setTarefas(resultados))
    }
  }
 }, [categoriaSelecionada]);

  useEffect(() => {
    filtrarStatus();
  }, [statusConcluido, statusPendente]);

  function deletarTarefa(id) {
    const deletar = window.confirm('Tem certeza?');
    if (deletar) {
      deleteTarefa(id).then(() => {
        toast.success('Tarefa removida!');
        carregarDados(); // atualizar a lista e renderizar novamente
      });
    }
  }

  if (usuario === null) {
    return <Navigate to="/login" />;
  }

  const categorias = {
    'Estudos': 'primary',
    'Trabalho': 'info',
    'Projetos': 'secondary',
    'Lazer': 'success',
    'Outros': 'danger'
  };

  return (
    <main className="mb-5">
      <div className="m-3 d-flex justify-content-evenly align-items-center flex-wrap gap-3">
        <div className="d-flex align-items-center gap-2">
          <div>
            <input type="checkbox" id="concluidos" checked={statusConcluido} onChange={() => setStatusConcluido(prev => !prev)} className="form-check-input" />
            <label htmlFor="concluidos" className="form-check-label ms-2">Concluídas</label>
          </div>
          <div>
            <input type="checkbox" id="pendentes" checked={statusPendente} onChange={() => setStatusPendente(prev => !prev)} className="form-check-input" />
            <label htmlFor="pendentes" className="form-check-label ms-2">Pendentes</label>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-center gap-2'>
          <h6>Filtrar por Categoria:</h6>
          <select onChange={e => filtrarCategoria(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Projetos">Projetos</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
      </div>
      <Container className="mt-3">
        <h1 className="text-center">Suas tarefas</h1>
        <hr />
        {tarefas ? 
          <Row xs={1} md={2} lg={3} className="g-4">
            {tarefas.map((tarefa) => (
              <Col key={tarefa.id}>
                <Card className="h-100 card-custom">
                  <Card.Body>
                    <Card.Title>{tarefa.titulo}</Card.Title>
                    <Card.Text className="card-descricao"><strong>Descrição: </strong> {tarefa.descricao}</Card.Text>
                    {tarefa.dataConclusao && <Card.Text>Data de conclusão: {new Date(tarefa.dataConclusao).toLocaleDateString()}</Card.Text>}
                    <Badge bg={categorias[tarefa.categoria]}>{tarefa.categoria}</Badge>
                    {tarefa.concluido ? <Badge className="ms-2" bg="success">Concluído</Badge> : <Badge className="ms-2" bg="warning">Pendente</Badge>}
                    <div className="btn-group w-100 mt-3" role="group">
                      <Button className="d-flex align-items-center justify-content-center" variant="outline-dark" onClick={() => navigate(`/tarefas/editar/${tarefa.id}`)}>
                        <span className="material-symbols-outlined">edit_note</span>
                      </Button>
                      <Button className="d-flex align-items-center justify-content-center" variant="outline-danger" onClick={() => deletarTarefa(tarefa.id)}>
                        <span className="material-symbols-outlined">delete</span>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          :
          <Loader className="mt-5" />
        }
        <div className="d-flex justify-content-center">
          <Link className="btn btn-outline-light mt-3" to="/tarefas/adicionar">Nova Tarefa</Link>
        </div>
      </Container>
    </main>
  );
}

export default Tarefas;
