# MyTask

[![Deploy](https://img.shields.io/badge/Deploy-Firebase-orange)](https://my-task-9a967.web.app/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.x-yellow)](https://firebase.google.com/)

[English Version](README_EN.md) | Versão em Português

## 📋 Sobre o Projeto

MyTask é um gerenciador de tarefas pessoais moderno e intuitivo, desenvolvido com React e Firebase. O aplicativo permite que usuários organizem suas atividades diárias de forma eficiente e segura.

🚀 **[Acesse o aplicativo](https://my-task-9a967.web.app/)**

## ✨ Funcionalidades

- ✅ **CRUD Completo de Tarefas**

  - Criar novas tarefas com validação de formulário
  - Visualizar lista de tarefas cadastradas
  - Editar informações das tarefas existentes
  - Excluir tarefas com confirmação

- 🔐 **Autenticação de Usuários**

  - Cadastro de novos usuários
  - Login seguro
  - Recuperação de senha via e-mail
  - Verificação de e-mail do usuário

- 🔍 **Filtros e Busca**
  - Filtros básicos para facilitar a localização de tarefas
  - Interface responsiva e intuitiva

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server
- **Firebase Authentication** - Autenticação de usuários
- **Firebase Firestore** - Banco de dados NoSQL em tempo real
- **Bootstrap** - Framework CSS para estilização

## 📦 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Conta no Firebase

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/flaviare1s/mytask.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd mytask
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente do Firebase:

   - Crie um arquivo de configuração com suas credenciais do Firebase
   - Configure o Authentication e o Firestore no console do Firebase

5. Execute o projeto em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Acesse `http://localhost:5173` no seu navegador

## 🚀 Deploy

O projeto está hospedado no Firebase Hosting e pode ser acessado em:
**https://my-task-9a967.web.app/**

Para fazer deploy:

```bash
npm run build
firebase deploy
```

## 📁 Estrutura do Projeto

```
mytask/
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── contexts/       # Contextos do React
│   ├── firebase/       # Configuração e funções do Firebase
│   ├── styles/         # Arquivos de estilo
│   └── assets/         # Imagens e recursos estáticos
├── public/             # Arquivos públicos
└── package.json        # Dependências do projeto
```

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Flavia Reis**

- GitHub: [@flaviare1s](https://github.com/flaviare1s)

---

Desenvolvido por [Flavia Reis](https://github.com/flaviare1s)
