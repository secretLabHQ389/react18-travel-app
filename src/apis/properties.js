import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getUsers = async date => {
	const getUsersAPI = axios.get(`${baseUrl}/users`)
	return getUsersAPI
}