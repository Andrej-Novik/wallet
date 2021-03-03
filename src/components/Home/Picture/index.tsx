import styles from "./style.module.scss"

export interface PictureProps {
	img?: string
}

export function Picture({
	img
}: PictureProps) {
	return (
		<div className={styles.picture}>
			<img src={img} alt="img" />
		</div>
	)
}

export default Picture