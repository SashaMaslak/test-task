import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Loader } from "../components/Loader/Loader"

const SharedLayout = () => {
	return (
		<div>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default SharedLayout
