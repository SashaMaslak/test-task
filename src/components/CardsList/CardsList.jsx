import Card from "../Card/Card"
import PropTypes from "prop-types"
import css from "./CardsList.module.css"
import { useState, useEffect } from "react"

const CardsList = ({ users, page }) => {
	const [filteredUsers, setFilteredUsers] = useState([])
	useEffect(() => {
		const filteredUsers = users.filter((_, idx) => idx < page * 3)
		setFilteredUsers(filteredUsers)
	}, [page, users])

	return (
		<ul className={css.cardsList}>
			{filteredUsers.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</ul>
	)
}

export default CardsList

CardsList.propTypes = {
	page: PropTypes.number.isRequired,
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			user: PropTypes.string.isRequired,
			tweets: PropTypes.number,
			followers: PropTypes.number,
		}).isRequired
	),
}
