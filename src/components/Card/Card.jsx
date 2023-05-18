import { useState, useEffect } from "react"
import { AvatarGenerator } from "random-avatar-generator"
import PropTypes from "prop-types"
import tweetLogo from "../../assets/tweetLogo.svg"
import logoGoIT from "../../assets/logoGoIT.svg"
import css from "./Card.module.css"

const initialLS = {
	isFollowLS: null,
	counterFollowersLS: null,
	avaLS: null,
}

const Card = ({ item }) => {
	const generator = new AvatarGenerator()
	const dataLS =
		JSON.parse(window.localStorage.getItem(`${item.id}`)) ?? initialLS
	const { isFollowLS, counterFollowersLS, avaLS } = dataLS

	const [user, setUser] = useState({ ...item, isFollow: isFollowLS })
	const avatar =
		avaLS ?? generator.generateRandomAvatar().replace("Circle", "Transparent")

	const [counterFollowers, setCounterFollowers] = useState(
		counterFollowersLS ?? 100500
	)

	const { tweets, isFollow, id } = user

	useEffect(() => {
		window.localStorage.setItem(
			`${id}`,
			JSON.stringify({
				isFollowLS: isFollow,
				counterFollowersLS: counterFollowers,
				avaLS: avatar,
			})
		)
	}, [isFollow, id, counterFollowers, avatar])

	const handleChangeFollow = () => {
		setUser((prevState) => ({ ...prevState, isFollow: !isFollow }))
		setCounterFollowers((prevState) => {
			if (!isFollow) return prevState + 1
			else {
				return prevState - 1
			}
		})
	}

	const editorCounterFollowers = (counter) => {
		if (counter) {
			const startStr = counter.toString().slice(0, 3)
			const endStr = counter.toString().slice(3)
			return `${startStr},${endStr}`
		} else {
			return
		}
	}

	return (
		<li className={css.card}>
			<img src={tweetLogo} className={css.tweetLogo} alt="Tweet logo" />
			<img src={logoGoIT} className={css.logoGoIT} alt="Logo GOIT" />
			<span className={css.line}>
				<span
					className={css.circle}
					style={{
						backgroundImage: "url(" + avatar + ")",
						backgroundSize: "contain",
					}}
				></span>
			</span>

			<div>
				<div className={css.textContainer}>
					<p className={css.text}> {tweets} tweets</p>
					<p className={css.text}>
						{editorCounterFollowers(counterFollowers)} Followers
					</p>
				</div>
				<button
					className={isFollow ? css.btnActive : css.btn}
					onClick={handleChangeFollow}
				>
					FOLLOW
				</button>
			</div>
		</li>
	)
}

export default Card

Card.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		user: PropTypes.string.isRequired,
		tweets: PropTypes.number,
		followers: PropTypes.number,
	}).isRequired,
}
