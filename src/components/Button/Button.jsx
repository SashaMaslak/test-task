import css from "./Button.module.css"
import PropTypes from "prop-types"

export const Button = ({ handleLoadMore }) => {
	return (
		<div className={css.btnContainer}>
			<button className={css.btn} onClick={handleLoadMore}>
				LOAD MORE
			</button>
		</div>
	)
}

Button.propTypes = {
	handleLoadMore: PropTypes.func.isRequired,
}
