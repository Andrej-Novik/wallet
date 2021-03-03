import React from 'react';
import Wallet from "./components/Wallet";

type coins = {
	name: string;
	abbreviation: string;
	amount: number
	price: number;
	percent: number;
	img: string;
}

export interface AppProps {
	coins: coins[],
	balance: number
}

export function App({
	coins,
	balance
}: AppProps) {
	return (
		<Wallet
			coins={coins}
			balance={balance}
		/>
  );
}
export default App

