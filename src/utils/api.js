import axios from 'axios'
import { RAP_URL } from './constants'

export const getList = () => {
  axios.get(RAP_URL)
    .then(result => result.data)

} 

