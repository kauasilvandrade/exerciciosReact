import styles from "./styles.module.css"

type Props = {
    name: string
}

export function Card({name}: Props) {
    return (
        <div className={styles.container}>
            <strong>{name}</strong>
        </div>
    )
}