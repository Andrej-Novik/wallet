import "./style.scss"
import AboutCoin from "../AboutCoin/AboutCoin"
import Picture from "../Picture/Picture"

function CoinInfo() {
	return (
		<div className="coin-info">
			<Picture />
			<AboutCoin />
			<div className="amount">0.2 BTC</div>
		</div>
	)
}

export default CoinInfo