import { BrowserRouter, Route } from "react-router-dom"
import styles from "./style.module.scss"
import Header from "../Header"
import Home from "../Home/Home"
import History from "../History/History"
import Deposit from "../Deposit/Deposit"
import Buy from "../Buy/Buy"

type coins ={
	name: string;
	abbreviation: string;
	amount: number
	price: number;
	percent: number;
	img: string;
}
export interface WalletProps {
  coins: coins[],
  balance: number
}

function Wallet({
  coins,
  balance
}: WalletProps) {
	return (
		<BrowserRouter>
			<div className={styles.card}>
        <Header balance={ balance }/>
				<div className={styles.content}>
					<Route path="/Home" render={() => <Home coins={coins} />} />
					<Route path="/Deposit" render={() => <Deposit />} />
					<Route path="/History" render={() => <History />} />
					<Route path="/Buy" render={() => <Buy />} />
				</div>
			</div>
		</BrowserRouter>	
	)
}

export default Wallet