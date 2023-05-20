import { useNavigate } from "react-router-dom"

export const NotFound = () => {
	const navigate = useNavigate()

	const handleSubmit = async () => {
		navigate("/profile", { replace: true })
	}

	return <div>Сторінка не знайдена</div>
}
