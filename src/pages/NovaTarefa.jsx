import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { addTarefa } from "../firebase/tarefa"
import toast from "react-hot-toast"
import { Navigate, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const NovaTarefa = () => {
  const { register, handleSubmit, formState: {errors} } = useForm()

  const usuario = useContext(UserContext)

  const navigate = useNavigate()

  // os dados são passados para a função de inserir:
  function salvarTarefa(data) {
    // Associa o ID do usuário à tarefa criada:
    data.idUsuario = usuario.uid
    
    addTarefa(data)
    .then(() => { // then: aguarda a inserção da tarefa para então exibir o toast
      toast.success('Tarefa adicionada com sucesso!') // Funcionalidade da biblioteca React Hot Toast
      // Redirecionar o usuário para /tarefas:
      navigate('/tarefas')
    }).catch(() => { // catch é executado caso haja algum erro na inserção da tarefa
      toast.error('Erro ao adicionar tarefa!')
    })
  }

  if (usuario === null) {
    return <Navigate to='/login' />
  }

  return (
    <main className="mt-3 mb-5">
      <form className="form-section" onSubmit={handleSubmit(salvarTarefa)}>
        <h1>Adicionar Nova Tarefa</h1>
        <hr />
        <div className="mb-2">
          <label htmlFor="titulo">Título</label>
          <input type="text" id="titulo" className="form-control" {...register('titulo', { required: true, maxLength: 200 })} />
          {errors.titulo && <small className="text-danger">O título é inválido</small>}
        </div>
        <div className="mb-2">
          <label htmlFor="descricao">Descrição</label>
          <textarea id="descricao" className="form-control" {...register('descricao', { required: true })} />
          {errors.descricao && <small className="text-danger">Você precisa adicionar uma descrição</small>}
        </div>
        <div className="mb-2">
          <label htmlFor="dataConclusao">Data de Conclusão</label>
          <input type="date" id="dataConclusao" className="form-control" {...register('dataConclusao', { required: true })} />
          {errors.dataConclusao && <small className="text-danger">Data de conclusão é obrigatória</small>}
        </div>
        <div className="form-check mb-2">
          <input type="checkbox" id="concluido" className="form-check-input" {...register('concluido')} />
          <label htmlFor="concluido" className="form-check-label">Concluído?</label>
        </div>
        <div className="mb-2">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" className="form-select" {...register('categoria')}>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Projetos">Projetos</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <Button variant="outline-light" className="mt-1 w-100" type="submit">Salvar Tarefa</Button>
      </form>
    </main>
  )
}

export default NovaTarefa
