import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { BiDownArrow } from "react-icons/bi"
import css from "./Dropdown.module.css"

export const Dropdown = ({ selected, setSelected }) => {
	const myRef = useRef()
	const [isActive, setIsActive] = useState(false)
	const options = ["Followings", "Follow"]

	const handleClickOutside = (e) => {
		if (!myRef.current.contains(e.target)) {
			setIsActive(false)
		}
	}

	useEffect(() => {
		const handleEsc = (event) => {
			if (event.keyCode === 27) {
				setIsActive(false)
			}
		}
		if (isActive) window.addEventListener("keydown", handleEsc)

		return () => {
			window.removeEventListener("keydown", handleEsc)
		}
	}, [isActive])

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	})

	return (
		<div className={css.dropdown} ref={myRef}>
			<div className={css.dropdownBtn} onClick={() => setIsActive(!isActive)}>
				<p className={css.dropdownText}>{selected || "All Tweets"}</p>

				<p>
					<BiDownArrow fontSize="2em" className="dropdownIcon" />
				</p>
			</div>
			{isActive && (
				<div className={css.dropdownContent}>
					{options.map((option) => (
						<>
							<div
								className={css.dropdownItem}
								onClick={() => {
									setSelected(option)
									setIsActive(false)
								}}
							>
								{option}
							</div>
						</>
					))}
				</div>
			)}
		</div>
	)
}

Dropdown.propTypes = {
	selected: PropTypes.string.isRequired,
	setSelected: PropTypes.func.isRequired,
}
