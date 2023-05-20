import { lazy } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./pages/Layout"
import { NotFound } from "./pages/NotFound"
import "./App.css"

const HomePage = lazy(() => import("./pages/HomePage"))
const TweetsPage = lazy(() => import("./pages/TweetsPage"))

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="tweets" element={<TweetsPage />} />
				<Route path="*" element={<NotFound />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
