import axios from 'axios'
import { progressBarStore } from '@/store/store'

const progressAxios = axios.create()
progressAxios.defaults.timeout = 80000

let progress = 0 // 0 ~ 100, request percent
let timerId: NodeJS.Timeout | null = null // timer id

export const progressSpeed = 500

const store = progressBarStore.getState()

const setProgress = (value: number): void => {
  progress = value
  store.setProgressBar(value)
}

const timer = (): void => {
  if (progress < 100) {
    const diff = 100 - progress
    const inc = diff / (10 + progress * (1 + progress / 100)) // increment
    setProgress(progress + inc)
  }
  timerId = setTimeout(timer, 50) // 50 ms
}

progressAxios.interceptors.request.use(
  (config) => {
    setProgress(0)
    timer()
    return config
  },
  (error) => {
    setProgress(0)
    return Promise.reject(error)
  },
)

progressAxios.interceptors.response.use(
  (response) => {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }
    setProgress(100)
    return response
  },
  (error) => {
    setProgress(0)
    return Promise.reject(error)
  },
)
export default progressAxios
