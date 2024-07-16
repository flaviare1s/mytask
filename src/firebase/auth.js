// O objetivo desse arquivo é conter todas as funções de autenticação do firebase:
  // Criar usuário com e-mail e senha
  // Entrar com o Google
  // LOGIN - entrar com e-mail e senha
  // LOGOUT

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

  // Cadastrar usuário com e-mail e senha:
  export async function cadastrarUsuario(nome, email, senha) {
    await createUserWithEmailAndPassword(auth, email, senha)
  }
