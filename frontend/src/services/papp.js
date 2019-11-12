import axios from 'axios'
const baseUrl = '/api/papps'

const getAll = async() => {
  const res = await axios.get(baseUrl)
  return res.data
}

const vote = (id) => {
  const request = axios.put(`${ baseUrl }/${id}`, "VOTE")
  return request.then(response => response.data)
}

export default { getAll, vote }
