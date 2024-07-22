import { useForm } from "react-hook-form"
import { resetarSenha } from "../firebase/auth"
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

const ResetarSenha = () => {
  const { register, handleSubmit, formState: {errors} } = useForm()

  const onSubmit = (data) => {
    resetarSenha(data.email)
  }

  return (
    <Form className='form-section' onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-5">Recuperar Senha</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="E-mail"
          {...register("email", { required: 'e-mail obrigatório' })}
        />
        { errors.email && <p className="text-danger">{errors.email.message}</p> }
      </Form.Group>

      <div className='container-buttons'>
        <Button className='btn-login' variant="dark" type="submit">
          Recuperar Senha
        </Button>

        <Link to="/login" className="btn btn-link">Voltar para o login</Link>
      </div>
    </Form>
  )
}

export default ResetarSenha
