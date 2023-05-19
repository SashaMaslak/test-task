import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import TabBar from "../components/Navigation/TabBar"
import { Loader } from "../components/Loader/Loader"

const Layout = () => {
	return (
		<Suspense fallback={<Loader />}>
			<TabBar />
			<Outlet />
		</Suspense>
	)
}

export default Layout
