import { Accordion, Alert, Button, Container } from "react-bootstrap"

const Ajuda = () => {
  return (
    <main className="mt-3">
      <Container>
        <h1>Ajuda</h1>
        <hr />
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Sobre o nosso sistema</Accordion.Header>
            <Accordion.Body>
              <p>
                MyTask é um sitema para gerenciamento de tarefas pessoais. Nessa aplicação, você pode gerenciar todos os seus afazeres.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Sobre a empresa</Accordion.Header>
            <Accordion.Body>
              <p>
                Essa empresa desenvolve soluções focadas em produtividade e bem-estar.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button className="mt-1 me-1">Entre em contato</Button>
        <Button className="mt-1" variant="outline-danger">Denunciar</Button>
        <Alert className="mt-1" variant="warning">Atenção! Estamos em manutenção!</Alert>
      </Container>
    </main>
  )
}

export default Ajuda
