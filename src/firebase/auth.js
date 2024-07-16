// O objetivo desse arquivo é conter todas as funções de autenticação do firebase:
  // Criar usuário com e-mail e senha
  // Entrar com o Google
  // LOGIN - entrar com e-mail e senha
  // LOGOUT

import { createUserWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./config";

  // Cadastrar usuário com e-mail e senha:
  // user é um objeto com os dados do usuário autenticado
  export async function cadastrarUsuario(nome, email, senha) {
    const { user } = await createUserWithEmailAndPassword(auth, email, senha)
    // Define o nome de exibição com o nome vindo do formulário de cadastro
    await updateProfile(user, {displayName: nome})
  } 

  // Entrar com o Google
  export async function entrarGoogle() {
    // Indicar o provedor de login que deseja utilizar
    const provider = new GoogleAuthProvider()
    // Abre um pop-up na tela com o login do Google
    await signInWithPopup(auth, provider)
  }
