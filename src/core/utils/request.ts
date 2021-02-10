import axios from 'axios';
import {BASE_API_URL, API_KEY} from '../../configs/network';

class Request {
  generateUrl(endpoint: string): string {
    const url = `${BASE_API_URL}${endpoint}?api_key=${API_KEY}`;
    return url;
  }
  async get(endpoint: string) {
    const url = this.generateUrl(endpoint);
    return axios.get(url);
  }
}

export default Request;
