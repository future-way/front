import axios from 'axios'

export const API_URL =
  process.env.NEXT_PUBLIC_API_SEVER_URL ?? 'http://211.188.53.120:18080/future'

// 임시 데이터 타입 지정 -  react query 사용을 위함임
// 나중에 실제로 데이터 지정을 위해서 mock 타입임

export interface useType {
  userId: number
  name: string
}

// 서버 목록 조회
export const postUserName = async (name: string): Promise<useType> => {
  try {
    const data = {
      name,
    }
    const response = await axios.put<useType>(`${API_URL}/api/user/save`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

export interface useSelectType {
  userId: number
  question: string
  selectType: string
  answer: string | null
  userType: string
}

export const postUserType = async (
  userType: useSelectType,
): Promise<useSelectType> => {
  try {
    const data = userType
    const response = await axios.post<useSelectType>(
      `${API_URL}/api/gemini/type`,
      data,
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export interface questionType {
  aiConsultationHistoryId: number
  userId: number
  questionNumber: number
  questionMessage: string
  answer: null | string
}

export const postFirstQuestion = async (
  userId: number,
): Promise<questionType> => {
  try {
    const data = { userId }
    const response = await axios.post<questionType>(
      `${API_URL}/api/gemini`,
      data,
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export interface answerType {
  aiConsultationHistoryId: number
  userId: number
  answer: null | string
}

export const postForAnswer = async (
  answerType: answerType,
): Promise<questionType> => {
  try {
    const data = answerType
    const response = await axios.post<questionType>(
      `${API_URL}/api/gemini/answer`,
      data,
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export interface resultType {
  userId: number
  summary: string
  createdDate: string
}

export const postForResult = async (userId: number): Promise<resultType> => {
  try {
    const data = { userId }
    const response = await axios.post<resultType>(
      `${API_URL}/api/gemini/summary`,
      data,
    )
    return response.data
  } catch (error) {
    throw error
  }
}
