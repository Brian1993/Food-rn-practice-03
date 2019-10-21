import axios from 'axios'
import KEYS from '../../Keys'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${KEYS.API_KEY}`
  }
});
