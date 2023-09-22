import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const requst= axios.get(baseUrl)
  return requst
}

const create = newOb => {
  const requst= axios.post(baseUrl, newOb)
  return requst
}

const update = (id, newOb) => {
  const requst= axios.put(`${baseUrl}/${id}`, newOb)
  return requst
}

const remove =(id)=>{
  const requst= axios.delete(`${baseUrl}/${id}`)
  return requst
}

export default ({getAll, create, update, remove})