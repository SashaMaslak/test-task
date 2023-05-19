//import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TweetsPage from "./pages/TweetsPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import Layout from "./pages/Layout"
import "./App.css"

// const HomePage = lazy(() => import("./pages/HomePage"))
// const TweetsPage = lazy(() => import("./pages/TweetsPage"))

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="tweets" element={<TweetsPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	)
}
