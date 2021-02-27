import styles from "./style.module.scss"
import Header from "../Header"
import Content from "../Content"

function Wallet() {
	return (
		<div className={styles.card}>
			<Header />
			<Content />
		</div>
	)
}

export default Wallet