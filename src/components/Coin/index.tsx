import styles from "./style.module.scss"
import CoinInfo from "../CoinInfo"
import CoinPrice from "../CoinPrice"

export interface CoinProps{
	name?: string,
	abb?: string,
	img?: string,
	amount?: number,
	price?: number,
	percent?: number
}

export function Coin({
	name,
	abb,
	img,
	amount,
	price,
	percent
}: CoinProps) {
	return (
		<div className={styles.coin}>
			<div className={styles.coinContent}>
				<CoinInfo name={name} abb={abb} amount={amount} img={img}/>
				<CoinPrice price={price} percent={ percent }/>
			</div>
		</div>	
	)
}

export default Coin