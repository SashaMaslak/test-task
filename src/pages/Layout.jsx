import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation/Navigation"
import { Loader } from "../components/Loader/Loader"

const Layout = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Navigation />
			<Outlet />
		</Suspense>
	)
}

export default Layout
