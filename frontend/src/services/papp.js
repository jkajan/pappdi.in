import axios from 'axios'
const baseUrl = '/api/papps'

const getAll = async() => {
  const res = await axios.get(baseUrl)
  return res.data
}

export default { getAll }
