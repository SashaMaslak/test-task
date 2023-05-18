import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation"
import SharedLayout from "./pages/SharedLayout"
import "./App.css"

const HomePage = lazy(() => import("./pages/HomePage"))
const TweetsPage = lazy(() => import("./pages/TweetsPage"))

export const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route path="/tweets" element={<TweetsPage />} />
				</Route>
			</Routes>
		</>
	)
}
