import axios from 'axios'
const baseUrl = '/api/papps'

const getAll = async() => {
  const res = await axios.get(baseUrl)
  return res.data
}

const update = (id, newObject) => {
  const request = axios.put(`${ baseUrl }/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, update }
