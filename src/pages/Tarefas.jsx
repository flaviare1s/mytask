import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { deleteTarefa, getTarefasUsuario } from "../firebase/tarefa";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { UserContext } from "../contexts/UserContext";
import '../styles/Tarefas.css';

const Tarefas = () => {
  const [tarefas, setTarefas] = useState(null);
  const usuario = useContext(UserContext);
  const navigate = useNavigate();

  function carregarDados() {
    if (usuario) {
      getTarefasUsuario(usuario.uid).then((resultados) => {
        setTarefas(resultados);
      });
    }
  }

  function deletarTarefa(id) {
    const deletar = window.confirm('Tem certeza?');
    if (deletar) {
      deleteTarefa(id).then(() => {
        toast.success('Tarefa removida!');
        carregarDados(); // atualizar a lista e renderizar novamente
      });
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

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
      <Container className="mt-3">
        <h1 className="text-center">Suas tarefas</h1>
        <hr />
        <Link className="btn btn-dark mb-3" to="/tarefas/adicionar">Nova Tarefa</Link>
        {tarefas ? 
          <Row xs={1} md={2} lg={3} className="g-4">
            {tarefas.map((tarefa) => (
              <Col key={tarefa.id}>
                <Card className="h-100 card-custom">
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
              </Col>
            ))}
          </Row>
          :
          <Loader className="mt-5" />
        }
      </Container>
    </main>
  );
}

export default Tarefas;
