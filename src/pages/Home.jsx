import { Card } from 'react-bootstrap'

const Home = () => {
  return (
    <main>
      <h1>Vamos estudar alguns elementos do Bootstrap</h1>

      <h2>Cards</h2>

      <Card border="primary" variant='dark' style={{ width: '18rem' }}>
        <Card.Header>Esse é o header do card</Card.Header>
        <Card.Body>
          <Card.Title>Esse é o title do card</Card.Title>
          <Card.Text>
            Esse card tem a borda primary.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='mt-3' border="danger" variant='dark' style={{ width: '18rem' }}>
        <Card.Header>Esse é o header do card</Card.Header>
        <Card.Body>
          <Card.Title>Esse é o title do card</Card.Title>
          <Card.Text>
            Esse card tem a borda danger.
          </Card.Text>
        </Card.Body>
      </Card>
    </main>
  )
}

export default Home
