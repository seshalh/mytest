import api from '.'

const API_KEY='5f06309cc18831b80e03d9373f655ae2';

const API_URL = 'movie/top_rated'+'?'+'api_key='+ API_KEY + '&sort_by=popularity.desc'

const getShows = () => api.get(API_URL);

export {getShows} 