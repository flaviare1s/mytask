import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { cadastrarUsuario, entrarGoogle } from "../firebase/auth"
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
    entrarGoogle().then(() => {
      toast.success('Bem-vindo(a) ao MyTask!')
      navigate('/tarefas')
    })
  }

  return (
    <main className="mt-3 mb-5">
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
        <h1>Cadastro</h1>
        <hr />
        <div className="mb-2">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" className="form-control" {...register('nome', {required: 'Nome obrigatório', maxLength: {value: 100, message: 'Maximo 100 caracteres'}})} />
          {errors.nome && <small className="text-danger">{errors.nome.message}</small>}
        </div>
        <div className="mb-2">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" className="form-control" {...register('email', {required: 'E-mail obrigatório', pattern: {value: /[\w.-]+@[\w-]+\.[\w-.]+/gi, message: 'E-mail inválido'}})} />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </div>
        <div className="mb-2">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" className="form-control" {...register('senha', {required: 'Senha obrigatória', minLength: {value: 6, message: 'Minimo 6 caracteres'}})} />
          {errors.senha && <small className="text-danger">{errors.senha.message}</small>}
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">Cadastrar</Button>
        <Button onClick={handleEntrarGoogle} variant="danger" className="mt-1 w-100" type="button">Cadastrar com o Google</Button>
      </form>
    </main>
  )
}

export default Cadastro
