import axios from 'axios'
const baseUrl = '/api/jokes'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

export default { getAll }
