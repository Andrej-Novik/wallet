import styles from "./style.module.scss"

function AboutCoin() {
	return (
		<div className={styles.aboutCoin}>
			<div className={styles.abbreviation}>BTC</div>
			<div className={styles.name}>Bitcoin</div>
		</div>
	)
}

export default AboutCoin