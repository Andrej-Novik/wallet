import styles from "./style.module.scss"
import AboutCoin from "../AboutCoin"
import Picture from "../Picture"

function CoinInfo() {
	return (
		<div className={styles.coinInfo}>
			<Picture />
			<AboutCoin />
			<div className={styles.amount}>0.2 BTC</div>
		</div>
	)
}

export default CoinInfo