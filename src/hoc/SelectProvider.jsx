import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const SelectTweetsContext = createContext("All tweets")

export const SelectTweetsProvider = ({ children }) => {
	const [option, setOption] = useState("All Tweets")

	const changeSelected = (selected) => {
		setOption(selected)
	}

	const value = { option, changeSelected }

	return (
		<SelectTweetsContext.Provider value={value}>
			{children}
		</SelectTweetsContext.Provider>
	)
}

SelectTweetsProvider.propTypes = {
	children: PropTypes.node,
}
