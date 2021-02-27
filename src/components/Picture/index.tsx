import styles from "./style.module.scss"
import bitcoin from "./img/btc.png"

function Picture() {
	return (
		<div className={styles.picture}>
			<img src={bitcoin} alt="img" />
		</div>
	)
}

export default Picture