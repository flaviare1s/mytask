// o propósito desse arquivo é ter todas a funções necessárias para gerenciar as tarefas (CRUD):
// adicionar nova tarefa (CREATE)
// listar todas as tarefas (READ)
// atualizar tarefa (UPDATE)
// remover tarefa (DELETE)

import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";

// Criar uma referência para a coleção no Firestore
export const tarefasCol = collection(db, 'tarefas') // recebe como parâmetros o banco e a coleção

// Função assíncrona = o resultado não é obtido de imediato
// Haverá uma 'espera'

export async function addTarefa(data) {
  // Essa função se comunica com o firestore
  // Envia os dados (data) e salva na coleção indicada
  await addDoc(tarefasCol, data) // await é uma instrução para esperar o resultado de addDoc
}
