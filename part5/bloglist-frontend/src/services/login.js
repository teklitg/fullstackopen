import axios from 'axios'
const baseUrl = 'http://localhost:300/api/login'

const logIn = (Obj) => {
  const request = axios.post(baseUrl, Obj)
  return request.then(response => response.data)
}

//let token = null;

//const setToken = newToken => {
//  token = `Bearer ${newToken}`;
//};

export default { logIn }