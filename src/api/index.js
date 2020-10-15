import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL|| "https://treinta-api.herokuapp.com",
  timeout: 20000
});

const API = {
  login: async (data) => api.post('/auth/local',data),
  signUp: async (data)=> api.post('/auth/local/register',data)
}

export default API;



