import { Button } from "react-bootstrap"

const Login = () => {
  return (
    <main>
      <form className="form-section">
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" className="form-control" />
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">Entrar</Button>
        <Button variant="danger" className="mt-1 w-100" type="button">Entrar com o Google</Button>
      </form>
    </main>
  )
}

export default Login
