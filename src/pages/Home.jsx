import { Button, Card, Container } from 'react-bootstrap'

const Home = () => {
  return (
    <main>
      <h1 className='p-3'>Bem-vindo(a) ao MyTask, o seu organizador de tarefas!</h1>

      <Container className='d-flex gap-3'>
        <Card border="primary" variant='dark' style={{ width: '22rem' }}>
          <Card.Header className='text-primary fw-bold'>Organize Suas Tarefas com Facilidade</Card.Header>
          <Card.Body>
            <Card.Title>Maximize sua produtividade com o MyTask. Planeje, organize e gerencie suas tarefas diárias de forma simples e eficiente.</Card.Title>
            <Card.Text>
              <Button variant="outline-primary" className='me-3'>Comece agora</Button>
              <Button variant="primary">Saiba mais</Button>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="danger" variant='dark' style={{ width: '22rem' }}>
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

        <Card border="warning" variant='dark' style={{ width: '22rem' }}>
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

        <Card border="success" variant='dark' style={{ width: '22rem' }}>
          <Card.Header className='text-success fw-bold'>Pronto para Começar?</Card.Header>
          <Card.Body>
            <Card.Title>Junte-se a milhares de usuários satisfeitos que já estão aproveitando ao máximo suas rotinas com o MyTask.</Card.Title>
            <Card.Text>
              <Button variant="success" className='me-3'>Crie uma conta</Button>
            </Card.Text>
          </Card.Body>
        </Card>

      </Container>
    </main>
  )
}

export default Home
