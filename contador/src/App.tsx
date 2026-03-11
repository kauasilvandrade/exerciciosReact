import "./global.css"

import { useState } from "react"

import styles from "./app.module.css"

import { Button } from "./components/Button"

export function App() {

  let [count, setCount] = useState(0)

  function handleAdd() {
    setCount((prevState) => prevState + 1)
  }

  function handleRemover() {
    setCount((prevState) => prevState - 1)
  }

  function handleReset() {
    setCount(0)
  }

  const countClass = count > 0 ? styles.positive : count < 0 ? styles.negative : styles.zero

  return (
    <div className={styles.container}>

      <div>

        <div className={styles.buttons}>
          <Button name="Adicionar" onClick={handleAdd} />
          <Button name="Remover" onClick={handleRemover} />
          <Button name="Resetar" onClick={handleReset} />
        </div>

        <div className={styles.resultCount}>
          <span className={countClass}>{count}</span>
        </div>

      </div>

    </div>
  )
}