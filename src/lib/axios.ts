import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://dt-money-server-production.up.railway.app',
})
