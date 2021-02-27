import styles from "./style.module.scss"

function CoinPrice() {
	return (
		<div>
			<div className={styles.coinPrice}>
				<div className={styles.price}>52,234.22$</div>
				<div className={styles.changes}>
					<div className={styles.time}>1 мин</div>
					<div className={styles.percent}>8.06%</div>
				</div>
			</div>
		</div>
	)
}

export default CoinPrice