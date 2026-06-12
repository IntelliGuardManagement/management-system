export interface UserInfo {
  id: number
  username: string
  nickname: string
  avatar?: string
  email?: string
  role: string
  permissions: string[]
}

export interface LoginParams {
  username: string
  password: string
}

export interface LoginResult {
  accessToken: string
  refreshToken: string
  user: UserInfo
}

export interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}

export interface PaginatedData<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
}
