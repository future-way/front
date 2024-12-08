import axios from 'axios'

export const API_URL =
  'https://66815b9a04acc3545a067662.mockapi.io/api/v1/server'

// 임시 데이터 타입 지정 -  react query 사용을 위함임
// 나중에 실제로 데이터 지정을 위해서 mock 타입임

export interface ThemeType {
  id: string
  name: string
}

export interface CategoriesType {
  id: string
  name: string
}

export interface ServerType {
  serverName: string
  userId: string
  theme: ThemeType | null
  categories: CategoriesType[] | null
}

export interface FetchedServerType {
  data: ServerType[]
}

// 서버 목록 조회
export const fetchServers = async (
  token: string,
): Promise<FetchedServerType> => {
  try {
    const response = await axios.get<FetchedServerType>(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const createServer = async (
  token: string,
  newServer: ServerType,
): Promise<ServerType> => {
  // 반환되는 데이터 타입
  const response = await axios.post(API_URL, newServer, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
