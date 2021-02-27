import styles from "./style.module.scss"

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.text}>Итоговый баланс</div>
			<div className={styles.balance}>1000.00 $</div>
		</div>
	)
}

export default Header