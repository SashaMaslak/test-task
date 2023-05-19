import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { BiArrowBack, BiHomeSmile } from "react-icons/bi"
import { FaUsers } from "react-icons/fa"

import { Dropdown } from "../Dropdown/Dropdown"
import styled from "styled-components"
import css from "./TabBar.module.css"

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

const TabBar = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const [activePage, setActivePage] = useState("")
	const [selected, setSelected] = useState("")

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

	const goBack = () => {
		navigate(-1)
	}

	return (
		<header className={css.header}>
			<nav className={css.nav}>
				{activePage === "home" ? (
					<StyledLink to="/">
						<BiHomeSmile fontSize="1.5em" />
						Home
					</StyledLink>
				) : (
					<p className={css.text} onClick={goBack}>
						<BiArrowBack fontSize="1.5em" />
						Back
					</p>
				)}
				<div style={{ display: "flex", alignItems: "center" }}>
					<StyledLink to="/tweets">
						<FaUsers fontSize="1.5em" />
						Tweets
					</StyledLink>

					<Dropdown selected={selected} setSelected={setSelected} />
				</div>
			</nav>
		</header>
	)
}

export default TabBar
