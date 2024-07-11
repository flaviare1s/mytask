import { Tabs, Tab, Container } from 'react-bootstrap'
const PoliticaPrivacidade = () => {
  return (
    <section>
      <Container fluid>
        <Tabs defaultActiveKey="sobre" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="sobre" title="Sobre">
            <h3>Última atualização: 11 de julho de 2024</h3>

            <p>Bem-vindo ao MyTask, seu organizador de tarefas confiável. A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nosso site e serviços.</p>

            <ol>
              <li>Informações que Coletamos</li>

              <ol>
                <li>Informações Pessoais:</li>
                <p>Coletamos informações pessoais que você nos fornece diretamente quando cria uma conta, como nome, endereço de e-mail, número de telefone e outras informações de contato.</p>

                <li>Informações de Uso:</li>
                <p>Coletamos informações sobre como você usa nosso site e serviços, incluindo as tarefas que você cria, edita e completa, suas preferências de configuração e interações com nossa plataforma.</p>

                <li>Informações Técnicas:</li>
                <p>Coletamos informações técnicas automaticamente, como o endereço IP, tipo de navegador, sistema operacional, identificadores de dispositivos, dados de localização e outras informações semelhantes.</p>
              </ol>

              <li>Como Usamos Suas Informações</li>

              <ol>
                <li>Prestação de Serviços:</li>
                <p>Usamos suas informações para fornecer, operar e manter nossos serviços, personalizar sua experiência e responder às suas solicitações e perguntas.</p>

                <li>Comunicação:</li>
                <p>Podemos usar suas informações de contato para enviar comunicações importantes sobre sua conta, atualizações do serviço, notificações e outros materiais promocionais, se você tiver optado por recebê-los.</p>

                <li>Melhoria do Serviço:</li>
                <p>Usamos informações de uso e técnicas para analisar e melhorar nossos serviços, desenvolver novas funcionalidades e aprimorar a segurança do site.</p>
              </ol>
              <li>Compartilhamento de Informações</li>

              <ol>
                <li>Provedores de Serviço:</li>
                <p>Podemos compartilhar suas informações com provedores de serviço de terceiros que nos ajudam a operar nosso site e fornecer nossos serviços, como hospedagem de site, análise de dados, atendimento ao cliente e marketing.</p>

                <li>Conformidade Legal:</li>
                <p>
                  Podemos divulgar suas informações para cumprir obrigações legais, responder a solicitações governamentais e proteger nossos direitos, privacidade, segurança ou propriedade.

                </p>
                <li>Transferências de Negócios:</li>
                <p>Em caso de fusão, aquisição ou venda de ativos, suas informações podem ser transferidas como parte da transação.</p>
              </ol>
            </ol>
          </Tab>
          <Tab eventKey="seguranca" title="Segurança">
            <ol>
              <li>Segurança das Informações</li>

              <p>Adotamos medidas de segurança apropriadas para proteger suas informações contra acesso, alteração, divulgação ou destruição não autorizados. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.</p>

              <li>Retenção de Dados</li>

              <p>Reteremos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos para os quais foram coletadas, incluindo propósitos legais, contábeis ou de relatórios.</p>

              <li>Seus Direitos</li>

              <p>Você tem o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através das informações de contato fornecidas abaixo.</p>

              <li>Alterações a Esta Política de Privacidade</li>

              <p>Podemos atualizar esta Política de Privacidade de tempos em tempos. Publicaremos quaisquer alterações nesta página e atualizaremos a data da "Última atualização" acima. Recomendamos que você revise esta política periodicamente para se manter informado sobre como estamos protegendo suas informações.</p>
            </ol>
          </Tab>
          <Tab eventKey="contato" title="Contato">
            <h4>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:</h4>

            <h5>MyTask</h5>
            <p>Email: contato@mytask.com</p>
            <p>Endereço: Rua Exemplo, 123, Cidade, Estado, CEP 12345-678</p>
            <hr />

            <p>Obrigado por escolher o MyTask. Estamos comprometidos em proteger sua privacidade e fornecer um serviço seguro e confiável.</p>
          </Tab>
        </Tabs>
      </Container>

    </section>
  )
}

export default PoliticaPrivacidade
