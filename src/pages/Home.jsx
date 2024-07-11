import { Button, Card, Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <main>
      <h1 className='p-3'>Bem-vindo(a) ao MyTask, o seu organizador de tarefas!</h1>

      <Container>
        <Row className='gy-3'>
          <Col xs={12} sm={6} md={6} lg={3} className="d-flex">
            <Card border="primary" variant='dark' className='flex-fill'>
              <Card.Header className='text-primary fw-bold'>Organize Suas Tarefas com Facilidade</Card.Header>
              <Card.Body>
                <Card.Title>Maximize sua produtividade com o MyTask. Planeje, organize e gerencie suas tarefas diárias de forma simples e eficiente.</Card.Title>
                <Card.Text>
                  <Button variant="outline-primary" className='me-3'>Comece agora</Button>
                  <Button variant="primary">Saiba mais</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} className="d-flex">
            <Card border="danger" variant='dark' className='flex-fill'>
              <Card.Header className='text-danger fw-bold'>Funcionalidades Poderosas</Card.Header>
              <Card.Body>
                <Card.Title>Descubra as ferramentas que farão você alcançar seus objetivos.</Card.Title>
                <Card.Text>
                  <ul className='text-danger'>
                    <li>Listas Personalizadas</li>
                    <li>Lembretes</li>
                    <li>Calendário</li>
                    <li>Notificações</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} className="d-flex">
            <Card border="warning" variant='dark' className='flex-fill'>
              <Card.Header className='text-warning fw-bold'>Por Que Escolher o MyTask?</Card.Header>
              <Card.Body>
                <Card.Title>Veja como o MyTask pode transformar sua rotina.</Card.Title>
                <Card.Text>
                  <ul className='text-warning'>
                    <li>Organize suas tarefas com facilidade</li>
                    <li>Acessível em qualquer dispositivo</li>
                    <li>Suporte ao cliente</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} className="d-flex">
            <Card border="success" variant='dark' className='flex-fill'>
              <Card.Header className='text-success fw-bold'>Pronto para Começar?</Card.Header>
              <Card.Body>
                <Card.Title>Junte-se a milhares de usuários satisfeitos que já estão aproveitando ao máximo suas rotinas com o MyTask.</Card.Title>
                <Card.Text>
                  <Button variant="success" className='me-3'>Crie uma conta</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Home
