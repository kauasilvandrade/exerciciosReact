import "./global.css"

import { useState } from "react"

import { InputText } from "./components/InputText"
import { Button } from "./components/Button"
import { Card } from "./components/Card"

import styles from "./app.module.css"

export function App() {
  type Task = {
    id: number
    name: string
  }

  const [taskName, setTaskName] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask() {
    const newTask = {
      name: taskName,
      id: Date.now()
    }

    setTasks((prevState) => [...prevState, newTask])

    setTaskName("")

  }

  return (
    <div className={styles.container}>

      <h1>Lista de Tarefas</h1>

      <div className={styles.container__createTask}>
        
        <InputText value={taskName} onChange={(e) => setTaskName(e.target.value)} />

        <Button name="Adicionar" onClick={addTask} />

      </div>

      {tasks.map(task => (
          <Card 
            key={task.id}
            name={task.name}
          />
      ))}
    </div>
  )
}