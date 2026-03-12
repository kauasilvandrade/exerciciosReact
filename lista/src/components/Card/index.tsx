import styles from "./styles.module.css"

type Props = {
    name: string,
    onRemove: () => void   
}

export function Card({name, onRemove}: Props) {
    return (
        <div className={styles.container}>
            <strong>{name}</strong>
            <button onClick={onRemove}>Remover</button>
        </div>
    )
}