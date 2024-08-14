import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dt-money-server-production.up.railway.app',
})
