import { CirclesWithBar } from "react-loader-spinner"
import css from "./Loader.module.css"

export const Loader = () => {
	return (
		<div className={css.loaderContainer}>
			<CirclesWithBar
				type="Puff"
				color="#34ebae"
				height={200}
				width={200}
				timeout={3000}
			/>
			<span className={css.loaderText}>Loading...</span>
		</div>
	)
}
