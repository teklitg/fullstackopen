import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newOb => {
  return axios.post(baseUrl, newOb)
}

const update = (id, newOb) => {
  return axios.put(`${baseUrl}/${id}`, newOb)
}

export default ({getAll, create, update})