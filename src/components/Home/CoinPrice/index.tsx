import styles from "./style.module.scss"

export interface CoinPriceProps {
	price?: number,
	percent?: number
}

export function CoinPrice({
	price,
	percent
}: CoinPriceProps) {
	return (
		<div>
			<div className={styles.coinPrice}>
				<div className={styles.price}>{ price }$</div>
				<div className={styles.changes}>
					<div className={styles.time}>1 мин</div>
					<div className={styles.percent}>{ percent }%</div>
				</div>
			</div>
		</div>
	)
}

export default CoinPrice