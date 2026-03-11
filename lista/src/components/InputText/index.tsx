import styles from "./styles.module.css"

type Props = React.ComponentProps<"input"> 

export function InputText({...rest}: Props) {
    return <input type="text" name="taskName" id="taskName" className={styles.container} placeholder="Digite uma tarefa" {...rest} />
}