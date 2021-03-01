import styles from "./style.module.scss"

export interface HeaderProps {
	balance?: number
}

export function Header({
	balance
}: HeaderProps) {
	return (
		<div className={styles.header}>
			<div className={styles.text}>Итоговый баланс</div>
			<div className={styles.balance}>{ balance } $</div>
		</div>
	)
}

export default Header