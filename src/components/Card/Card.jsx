import { AvatarGenerator } from "random-avatar-generator"
import PropTypes from "prop-types"
import tweetLogo from "../../assets/tweetLogo.svg"
import logoGoIT from "../../assets/logoGoIT.svg"
import avatar from "../../assets/avatar62x62.png"
import css from "./Card.module.css"

const Card = ({ item }) => {
	const { tweets, followers } = item
	const generator = new AvatarGenerator()
	const ava = generator.generateRandomAvatar()
	const result = ava.replace("Circle", "Transparent")
	console.log("ava-->", ava)
	return (
		<li className={css.card}>
			<img src={tweetLogo} className={css.tweetLogo} alt="Tweet logo" />
			<img src={logoGoIT} className={css.logoGoIT} alt="Logo GOIT" />
			<span className={css.line}>
				<span
					className={css.circle}
					style={{
						backgroundImage: "url(" + result + ")",
						backgroundSize: "contain",
					}}
				>
					{/* <img
						src={result}
						className={css.avatar}
						alt="Avatar"
						width="66"
						style={{ backgroundColor: "green" }}
					/> */}
				</span>
			</span>

			<div>
				<div className={css.textContainer}>
					<p className={css.text}> {tweets} tweets</p>
					<p className={css.text}>{followers} Followers</p>
				</div>
				<button className={css.btn}>FOLLOW</button>
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
