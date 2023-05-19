import { useContext } from "react"
import { SelectTweetsContext } from "../hoc/SelectProvider"

export function useSelectTweets() {
	return useContext(SelectTweetsContext)
}
