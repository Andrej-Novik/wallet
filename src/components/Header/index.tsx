import {NavLink} from "react-router-dom"
import styles from "./style.module.scss"
import home from "./icons/home.png"
import card from "./icons/card.png"
import history from "./icons/history.png"

export interface HeaderProps {
	balance: number
}

export function Header({
	balance
 }: HeaderProps) {
	return (
		<div className={styles.header}>
			<div className={styles.headerInfo}>
				<div className={styles.text}>Итоговый баланс</div>
				<div className={styles.balance}>{balance} $</div>
			</div>
			<nav className={styles.headerMenu}>
				<NavLink to="/Home" className={styles.link}>
					<img src={home} alt="icon" />
					<span>Home</span>
				</NavLink>
				<NavLink to="/Deposit" className={styles.link}>
					<img src={card} alt="icon" />
					<span>Deposit</span>
				</NavLink>
				<NavLink to="/History" className={styles.link}>
					<img src={history} alt="icon" />
					<span>History</span>
				</NavLink>
			</nav>
		</div>
	)
}

export default Header