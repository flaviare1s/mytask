import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { cadastrarUsuario } from "../firebase/auth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Cadastro = () => {
  const { register, handleSubmit, formState: {errors} } = useForm()
   const navigate = useNavigate()

  function cadastrar(data) {
    cadastrarUsuario(data.nome, data.email, data.senha).then(() => {
      toast.success(`Bem-vindo(a) ${data.nome}!`)
      navigate('/tarefas')
    }).catch((error) => {
      toast.error(`Um erro aconteceu: ${error.code}`)
    })
  }

  function handleEntrarGoogle() {
    console.log("Entrar com o Google")
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
        <h1>Cadastro</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" className="form-control" {...register('nome', {required: 'Nome obrigatório', maxLength: {value: 100, message: 'Maximo 100 caracteres'}})} />
          {errors.nome && <small className="invalid">{errors.nome.message}</small>}
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" className="form-control" {...register('email', {required: 'E-mail obrigatório', pattern: {value: /[\w.-]+@[\w-]+\.[\w-.]+/gi, message: 'E-mail inválido'}})} />
          {errors.email && <small className="invalid">{errors.email.message}</small>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" className="form-control" {...register('senha', {required: 'Senha obrigatória', minLength: {value: 6, message: 'Minimo 6 caracteres'}})} />
          {errors.senha && <small className="invalid">{errors.senha.message}</small>}
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">Cadastrar</Button>
        <Button onClick={handleEntrarGoogle} variant="danger" className="mt-1 w-100" type="button">Cadastrar com o Google</Button>
      </form>
    </main>
  )
}

export default Cadastro
