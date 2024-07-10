import { Card, Tab, Tabs } from 'react-bootstrap'

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

      <h2 className='mt-3'>Tabs</h2>

      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Conteúdo da aba Home
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nemo repellendus, autem quidem esse quibusdam.</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Conteúdo da aba Profile
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores numquam facilis. Ratione illo, asperiores iusto rem consectetur, dignissimos animi voluptatibus sint illum, qui quasi perferendis fugiat! Error, accusamus laudantium!</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        Conteúdo da aba Contact
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, tempora.</p>
      </Tab>
    </Tabs>

    </main>
  )
}

export default Home
