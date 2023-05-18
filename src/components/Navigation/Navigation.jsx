import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { BiArrowBack, BiHomeSmile } from "react-icons/bi"
import { FaUsers } from "react-icons/fa"
import styled from "styled-components"
import css from "./Navigation.module.css"

const StyledLink = styled(NavLink)`
	display: flex;
	gap: 6px;
	font-size: 24px;
	color: #ebd8ff;
	&:not(:last-child) {
		margin-right: 32px;
	}
	&:hover {
		color: #5cd3a8;
	}
	&.active {
		border-bottom: 3px solid #ebd8ff;
		border-radius: 3px;
	}
`

const Navigation = () => {
	const { pathname } = useLocation()
	const [activePage, setActivePage] = useState("")
	console.log(activePage)

	useEffect(() => {
		switch (pathname) {
			case "/":
				setActivePage("home")
				break

			case "/tweets":
				setActivePage("tweets")
				break

			default:
				setActivePage("home")
		}
	}, [pathname])

	return (
		<header className={css.header}>
			<nav className={css.nav}>
				{activePage === "home" ? (
					<StyledLink to="/">
						<BiHomeSmile fontSize="1.5em" />
						Home
					</StyledLink>
				) : (
					<StyledLink to="/">
						<BiArrowBack fontSize="1.5em" />
						Back
					</StyledLink>
				)}
				<StyledLink to="/tweets">
					<FaUsers fontSize="1.5em" />
					Tweets
				</StyledLink>
			</nav>
		</header>
	)
}

export default Navigation
