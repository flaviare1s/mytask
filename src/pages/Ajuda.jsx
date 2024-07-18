import { Accordion, Alert, Button, Container } from "react-bootstrap"

const Ajuda = () => {
  return (
    <main className="mt-3 mb-5">
      <Container>
        <h1>Ajuda</h1>
        <hr />
        <Accordion defaultActiveKey='2'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Sobre o nosso sistema</Accordion.Header>
            <Accordion.Body>
              <h4>
                Bem-vindo ao MyTask!
              </h4>
              <p>MyTask é uma aplicação de gerenciamento de tarefas projetada para ajudar você a organizar suas atividades diárias de maneira eficiente e produtiva. Nosso objetivo é simplificar a maneira como você gerencia suas tarefas, permitindo que você foque no que realmente importa.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Nossa Missão</Accordion.Header>
            <Accordion.Body>
              <p>
                A missão do MyTask é proporcionar uma ferramenta intuitiva e poderosa que capacite os usuários a alcançar suas metas e manter o controle de suas responsabilidades diárias. Queremos tornar o gerenciamento de tarefas fácil e acessível para todos, independentemente de suas necessidades ou complexidade de suas tarefas.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Funcionalidades Principais</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Adição de Tarefas: Adicione novas tarefas de maneira rápida e fácil, garantindo que você nunca perca uma atividade importante.</li>
                <li>Edição de Tarefas: Atualize suas tarefas conforme necessário para refletir mudanças em suas prioridades ou detalhes.</li>
                <li>Exclusão de Tarefas: Remova tarefas concluídas ou que não são mais relevantes, mantendo sua lista de tarefas limpa e organizada</li>
                <li>Integração com Firebase: Armazene suas tarefas de maneira segura e acessível em qualquer lugar, a qualquer momento.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>Nossa História</Accordion.Header>
            <Accordion.Body>
              <p>
                O MyTask foi criado a partir de uma necessidade pessoal de uma solução eficaz para o gerenciamento de tarefas. Observamos que muitas ferramentas existentes eram complicadas e desnecessariamente difíceis de usar. Então, decidimos criar uma aplicação que combinasse simplicidade com funcionalidade, ajudando pessoas a serem mais produtivas sem complicações.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>Nossa Visão</Accordion.Header>
            <Accordion.Body>
              <p>
                Acreditamos que uma vida organizada é uma vida mais produtiva e satisfatória. Com o MyTask, queremos capacitar nossos usuários a alcançar um equilíbrio melhor entre suas responsabilidades profissionais e pessoais, proporcionando uma ferramenta que se adapta às suas necessidades individuais.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </main>
  )
}

export default Ajuda
