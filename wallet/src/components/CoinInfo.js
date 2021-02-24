import React from "react"
import AboutCoin from "./AboutCoin"
import Picture from "./Picture"

export default function CoinInfo() {
	return (
		<div className="coin-info">
			<Picture />
			<AboutCoin />
			<div className="amount">0.2 BTC</div>
		</div>
	)
}