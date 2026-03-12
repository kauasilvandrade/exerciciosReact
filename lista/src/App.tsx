import "./global.css"

import { useState, useEffect } from "react"

import { InputText } from "./components/InputText"
import { Button } from "./components/Button"
import { Card } from "./components/Card"

import styles from "./app.module.css"

type Task = {
  id: number, 
  name: string,
}

export function App() {
  
  const [taskName, setTaskName] = useState("")

  const [tasks, setTasks] = useState<Task[]>(() => {
    const tasksStorage = localStorage.getItem("tasks")
    return tasksStorage ? (JSON.parse(tasksStorage) as Task[]) : []
  })

  function addNewTasks() {

    if (!taskName.trim()) return  

    const newTask = {
      id: Date.now(),
      name: taskName,
    }

    setTasks((prevState) => [...prevState, newTask])

    setTaskName("")
  }

  function removeTask(id: number) {
    setTasks((prevState) => prevState.filter(task => task.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className={styles.container}>

      <h1>Lista de Tarefas</h1>

      <div className={styles.container__createTask}>
        
        <InputText value={taskName} placeholder="Digite uma tarefa" onChange={(e) => setTaskName(e.target.value)} />

        <Button name="Adicionar" onClick={addNewTasks}/>

      </div>

      {
        tasks.map((task) => 
        <Card 
        key={task.id} 
        name={task.name}
        onRemove={() => removeTask(task.id)}
        />)
      }

    </div>
  )
}