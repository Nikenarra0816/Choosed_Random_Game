import axios from 'axios';
import { BASE_URL, HOST, KEY } from '../constant';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': HOST,
  },
});
