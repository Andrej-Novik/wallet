import "./style.scss"
import CoinInfo from "../CoinInfo/CoinInfo"
import CoinPrice from "../CoinPrice/CoinPrice"
function Coin() {
	return (
		<div className="coin">
			<div className="coin-content">
				<CoinInfo />
				<CoinPrice />
			</div>
		</div>	
	)
}

export default Coin