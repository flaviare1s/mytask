// o propósito desse arquivo é ter todas a funções necessárias para gerenciar as tarefas (CRUD):
// adicionar nova tarefa (CREATE)
// listar todas as tarefas (READ)
// atualizar tarefa (UPDATE)
// remover tarefa (DELETE)

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./config";

// Criar uma referência para a coleção no Firestore
export const tarefasCol = collection(db, 'tarefas') // recebe como parâmetros o banco e a coleção

// Função assíncrona = o resultado não é obtido de imediato
// Haverá uma 'espera'

// CREATE:
export async function addTarefa(data) {
  // Essa função se comunica com o firestore
  // Envia os dados (data) e salva na coleção indicada
  await addDoc(tarefasCol, data) // await é uma instrução para esperar o resultado de addDoc
}

// READ:
//Listar todas as tarefas
export async function getTarefas() {
  // Snapshot é o resultado da busca na coleção de tarefas
  const snapshot = await getDocs(tarefasCol)
  const tarefas = []

  // Percorremos cada documento da coleção e inserimos no array de tarefas:
  snapshot.forEach(doc => {
    tarefas.push({...doc.data(), id: doc.id})
  })

  return tarefas
}


// Listar uma tarefa
export async function getTarefa(id) {
  // Cria uma referência para um documento da coleção
  const tarefaDoc = doc(tarefasCol, id)
  // Trazer as informacões do documento
  const tarefa = await getDoc(tarefaDoc)

  // Retorna os dados dentro do resultado
  return tarefa.data()
}

// UPDATE:
export async function updateTarefa(id, data) {
  // Cria uma referência para um documento da coleção
  const tarefaDoc = doc(tarefasCol, id)
  await updateDoc(tarefaDoc, data)
}

// DELETE:
export async function deleteTarefa(id) {
  // Cria uma referência para um documento da coleção
  const tarefaDoc = doc(tarefasCol, id)
  await deleteDoc(tarefaDoc)
}
