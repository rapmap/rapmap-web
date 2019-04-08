import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001',
  // withCredentials: true
});

http.interceptors.response.use(
  response => response,
  error => {
    // console.error(error);
    if (error.status === 403) {
      window.location = '/';
    } else {
      return Promise.reject(error);
    }
  }
)

export const getRappersList = async _ => {
  try {
    const { data } = await http.get()
    return data
  } catch(error) {
    // console.info('ERROR => ', error)
  }
}

export default http;