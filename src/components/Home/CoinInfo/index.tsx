import styles from "./style.module.scss"
import AboutCoin from "../AboutCoin"
import Picture from "../Picture"
import { NavLink } from "react-router-dom"
import buy from "./icons/buy.png"

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
			<div className={styles.amount}>{amount} {abb}</div>
			<NavLink to="/Buy" className={styles.icon}>
				<img src={buy} alt="" />
			</NavLink>
		</div>
	)
}

export default CoinInfo