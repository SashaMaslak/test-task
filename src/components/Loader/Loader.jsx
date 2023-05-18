import { CirclesWithBar } from "react-loader-spinner"
import css from "./Loader.module.css"

export const Loader = () => {
	return (
		<>
			<div className={css.loaderContainer}>
				<CirclesWithBar
					type="Puff"
					color="#5736A3"
					height={200}
					width={200}
					timeout={3000}
				/>
			</div>
			<p className={css.loaderText}>...Loading</p>
		</>
	)
}
