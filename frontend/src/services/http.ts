import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { useAuthStore } from '@/store'

const http: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor — inject token
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Response interceptor — handle errors
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    if (data.code !== 0 && data.code !== 200) {
      // Business error
      return Promise.reject(new Error(data.message || 'Request failed'))
    }
    return data
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired — logout
      useAuthStore.getState().logout()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)

// Typed request helpers
export async function get<T = unknown>(
  url: string,
  params?: Record<string, unknown>,
  config?: AxiosRequestConfig,
): Promise<T> {
  return http.get(url, { params, ...config }) as unknown as T
}

export async function post<T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> {
  return http.post(url, data, config) as unknown as T
}

export async function put<T = unknown>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> {
  return http.put(url, data, config) as unknown as T
}

export async function del<T = unknown>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  return http.delete(url, config) as unknown as T
}

export default http
