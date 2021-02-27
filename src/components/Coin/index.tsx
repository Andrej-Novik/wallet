import styles from "./style.module.scss"
import CoinInfo from "../CoinInfo"
import CoinPrice from "../CoinPrice"

function Coin() {
	return (
		<div className={styles.coin}>
			<div className={styles.coinContent}>
				<CoinInfo />
				<CoinPrice />
			</div>
		</div>	
	)
}

export default Coin