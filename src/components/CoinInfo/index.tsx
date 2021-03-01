import styles from "./style.module.scss"
import AboutCoin from "../AboutCoin"
import Picture from "../Picture"

export interface CoinInfoProps {
	name?: string,
	abb?: string,
	img?: string,
	amount?: number
}


export function CoinInfo({
	name,
	abb,
	img,
	amount
}: CoinInfoProps)  {
	return (
		<div className={styles.coinInfo}>
			<Picture img={ img }/>
			<AboutCoin name={name} abb={ abb }/>
			<div className={styles.amount}>{ amount } { abb }</div>
		</div>
	)
}

export default CoinInfo