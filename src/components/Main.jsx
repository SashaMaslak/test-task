import { useState, useEffect, Suspense } from "react"
import CardsList from "./CardsList/CardsList"
import { fetchUsers } from "../services/usersAPI"
import { Loader } from "../components/Loader/Loader"
import { Button } from "../components/Button/Button"

const Main = () => {
	const [users, setUsers] = useState([])
	const [page, setPage] = useState(1)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const getUsers = () => {
			setIsLoading(true)
			fetchUsers()
				.then((res) => {
					setUsers(res)
				})
				.catch((error) => console.log(error))
				.finally(() => setIsLoading(false))
		}
		getUsers()
	}, [])

	const handleLoadMore = () => {
		setPage((prev) => prev + 1)
	}

	return (
		<>
			{isLoading && <Loader />}
			<Suspense fallback={null}>
				{!!users.length && <CardsList users={users} page={page} />}
				{!!users.length && !isLoading && (
					<Button handleLoadMore={handleLoadMore} />
				)}
			</Suspense>
		</>
	)
}

export default Main
