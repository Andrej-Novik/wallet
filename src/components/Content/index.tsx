import Coin from "../Coin"
import styles from "./style.module.scss"


function Content() {
	const coins = [
		{
		  id: 1,
		  name: "Bitcoin",
		  abbreviation: "BTC",
		  amount: 0.2,
		  price: 52000.33,
			percent: 9.88,
		  img: "./img/btc.png"
		},
		{
		  id: 2,
		  name: "Ethereum",
		  abbreviation: "ETH",
		  amount: 2,
		  price: 1500.33,
      percent: 7.48,
      img: "./img/eth.png"
    },
    {
		  id: 3,
		  name: "Litecoin",
		  abbreviation: "LIT",
		  amount: 8,
		  price: 178.57,
      percent: 5.46,
      img: "./img/lit.png"
    },
    {
		  id: 4,
		  name: "Ripple",
		  abbreviation: "XRP",
		  amount: 90,
		  price: 0.53,
      percent: 10.28,
      img: "./img/xrp.jpg"
    },
    {
		  id: 5,
		  name: "Bitcoin Cash",
		  abbreviation: "BCH",
		  amount: 4,
		  price: 670.39,
      percent: 4.87,
      img: "./img/bch.jpg"
		}
	]
	
	return (
		<div className={styles.content}>
      <Coin
        name={coins[0].name}
        abb={coins[0].abbreviation}
        amount={coins[0].amount}
        img={coins[0].img}
        price={coins[0].price}
        percent={coins[0].percent}
      />
      <Coin
        name={coins[1].name}
        abb={coins[1].abbreviation}
        amount={coins[1].amount}
        img={coins[1].img}
        price={coins[1].price}
        percent={coins[1].percent}
      />
      <Coin
        name={coins[2].name}
        abb={coins[2].abbreviation}
        amount={coins[2].amount}
        img={coins[2].img}
        price={coins[2].price}
        percent={coins[2].percent}
      />
      <Coin
        name={coins[3].name}
        abb={coins[3].abbreviation}
        amount={coins[3].amount}
        img={coins[3].img}
        price={coins[3].price}
        percent={coins[3].percent}
      />
      <Coin
        name={coins[4].name}
        abb={coins[4].abbreviation}
        amount={coins[4].amount}
        img={coins[4].img}
        price={coins[4].price}
        percent={coins[4].percent}
      />
		</div>
	)
}

export default Content