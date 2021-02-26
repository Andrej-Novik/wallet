import "./style.scss"
import bitcoin from "./img/btc.png"

function Picture() {
	return (
		<div className="picture">
			<img src={bitcoin} alt="###" />
		</div>
	)
}

export default Picture