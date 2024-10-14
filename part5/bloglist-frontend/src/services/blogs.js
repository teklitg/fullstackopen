import axios from 'axios';

const baseUrl = 'http://localhost:300/api/blogs';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = async ({ datas, token }) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await axios.post(baseUrl, datas, config);
  return response.data; // Make sure to return the created blog
};

export default { getAll, create };
