// O objetivo desse arquivo é conter todas as funções de autenticação do firebase:
  // Criar usuário com e-mail e senha
  // Entrar com o Google
  // LOGIN - entrar com e-mail e senha
  // LOGOUT

import { createUserWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, signInWithEmailAndPassword, signOut, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./config";
import toast from "react-hot-toast";

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

  // LOGIN - entrar com e-mail e senha
  export async function loginUsuario(email, senha) {
    await signInWithEmailAndPassword(auth, email, senha)
  }

  // LOGOUT
  export async function logout() {
    await signOut(auth)
  }

  // E-mail de verificação
  export async function verificarEmail() {
    const user = auth.currentUser

    sendEmailVerification(user).then(() => {
      toast.success('E-mail de verificação enviado!')
    })
  }

  // Resetar a senha
  export async function resetarSenha(email) {
    sendPasswordResetEmail(auth, email).then(() => {
      toast.success('E-mail de redefinição de senha enviado!')
    }).catch((error) => {
      toast.error(`Um erro aconteceu: ${error.code}`)
    })
  }
  