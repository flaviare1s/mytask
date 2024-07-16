import { Button } from "react-bootstrap"
import {useForm} from "react-hook-form"
import { entrarGoogle } from "../firebase/auth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const Login = () => {
  const { register, handleSubmit, formState: {errors} } = useForm()

  const navigate = useNavigate()

  function entrar(data) {
    // data é um objeto com os dados do formulário
    console.log(data)
  }

  function handleEntrarGoogle() {
    entrarGoogle().then(() => {
      toast.success('Bem-vindo(a) ao MyTask!')
      navigate('/tarefas')
    })
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(entrar)}>
        <h1>Login</h1>
        <hr />
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" className="form-control" {...register('email', {required: 'E-mail obrigatório', pattern: {value: /[\w.-]+@[\w-]+\.[\w-.]+/gi, message: 'E-mail inválido'}})} />
          {errors.email && <small className="invalid">{errors.email.message}</small>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" className="form-control" {...register('senha', {required: 'A senha é obrigatória', minLength: {value: 6, message: 'Minimo 6 caracteres'}})} />
          {errors.senha && <small className="invalid">{errors.senha.message}</small>}
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">Entrar</Button>
        <Button onClick={handleEntrarGoogle} variant="danger" className="mt-1 w-100" type="button">Entrar com o Google</Button>
      </form>
    </main>
  )
}

export default Login
