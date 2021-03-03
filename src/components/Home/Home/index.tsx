import Coin from "../Coin"
import styles from "./style.module.scss"

type coins ={
	name: string;
	abbreviation: string;
	amount: number
	price: number;
	percent: number;
	img: string;
}
export interface HomeProps {
	coins: coins[]
}
function Home({
	coins
}: HomeProps) {
	return (
		<div className={styles.content}>
			{coins.map(coin => 
				<Coin
					name={coin.name}
					abb={coin.abbreviation}
					amount={coin.amount}
					price={coin.price}
					percent={coin.percent}
					img={coin.img}
				/>
			)}
		</div>
	)
}
export default Home