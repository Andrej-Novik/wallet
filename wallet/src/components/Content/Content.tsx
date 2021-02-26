import "./style.scss"
import Coin from "../Coin/Coin"

function Content() {
	//const coins = [
	//	{
	//	  id: 1,
	//	  name: "Bitcoin",
	//	  abbreviation: "BTC",
	//	  amount: 0.2,
	//	  price: 52000.33,
	//	  percent: 9.88
	//	},
	//	{
	//	  id: 2,
	//	  name: "Ethereum",
	//	  abbreviation: "ETH",
	//	  amount: 2,
	//	  price: 1500.33,
	//	  percent: 7.48
	//	}
	//]
	
	return (
		<div className="content">
			<Coin />
		</div>
	)
}

export default Content