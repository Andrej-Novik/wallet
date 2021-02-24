import React from "react"
import CoinInfo from "./CoinInfo"
import CoinPrice from "./CoinPrice"

export default function Coin() {
	return (
		<div className="coin">
			<div className="coin-content">
				<CoinInfo />	
				<CoinPrice />
			</div>
		</div>	
	)
}