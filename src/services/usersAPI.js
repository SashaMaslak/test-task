import axios from "axios"

axios.defaults.baseURL = "https://633157bccff0e7bf70ead1ca.mockapi.io"

export const fetchUsers = async () => {
	try {
		const response = await axios.get("/users")
		console.log(response)
		return response.data
	} catch (e) {
		console.log(e)
	}
}
