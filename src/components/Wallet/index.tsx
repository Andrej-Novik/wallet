import styles from "./style.module.scss"
import Header from "../Header"
import Content from "../Content"

let balance = 10000;

function Wallet() {
	return (
		<div className={styles.card}>
			<Header balance={ balance }/>
			<Content />
		</div>
	)
}

export default Wallet