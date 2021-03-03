import styles from "./style.module.scss"


export interface AboutCoinProps {
	name?: string,
	abb?: string
}

export function AboutCoin({
	name,
	abb
}: AboutCoinProps) {
	return (
		<div className={styles.aboutCoin}>
			<div className={styles.abbreviation}>{abb}</div>
			<div className={styles.name}>{name}</div>
		</div>
	)
}

export default AboutCoin