import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://cp-tinder-clone.herokuapp.com'
})

export default instance