import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getTarefa, updateTarefa } from "../firebase/tarefa";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

function EditarTarefa() {
  const { id } = useParams()
  
  const usuario = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const navigate = useNavigate()

  function carregarTarefa() {
    getTarefa(id).then((tarefa) => {
      if(tarefa) {
        reset(tarefa)
      } else {
        navigate('/tarefas')
      }
    })
  }

  function atualizarTarefa(data) {
    updateTarefa(id, data).then(() => {
      toast.success('Tarefa atualizada!')
      navigate('/tarefas')
    })
  }

  useEffect(() => {
    carregarTarefa()
  }, [])

  if (usuario === null) {
    return <Navigate to='/login' /> 
  }

  return (
    <main className="mt-3 mb-5">
      <form className="form-section" onSubmit={handleSubmit(atualizarTarefa)}>
        <h1>Editar tarefa</h1>
        <hr />
        <div className="mb-2">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            {...register("titulo", { required: true, maxLength: 200 })}
          />
          {errors.titulo && (
            <small className="text-danger">O título é inválido!</small>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            className="form-control"
            {...register("descricao", { required: true })}
          ></textarea>
          {errors.descricao && (
            <small className="text-danger">A descrição é inválida!</small>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="dataConclusao">Data de Conclusão</label>
          <input
            type="date"
            id="dataConclusao"
            className="form-control"
            {...register("dataConclusao")}
          />
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            id="concluido"
            className="form-check-input"
            {...register("concluido")}
          />
          <label htmlFor="concluido" className="form-check-label">
            Concluído?
          </label>
        </div>
        <div className="mb-2">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            className="form-select"
            {...register("categoria")}
          >
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Projetos">Projetos</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <Button variant="dark" className="w-100 mt-1" type="submit">
          Atualizar Tarefa
        </Button>
      </form>
    </main>
  )
}

export default EditarTarefa
