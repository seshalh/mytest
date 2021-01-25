import axios from 'axios';
import router from '@/router'

const api = axios.create({
  baseURL: 'http://api.themoviedb.org/3/',
  timeout: 10000, // indicates 10000ms
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})

const responseInterceptor = response => {
  switch (response.status) {
    case 200:
      break
  }

  return response
}

export default api;