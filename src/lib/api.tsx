import axios from 'axios'

export const API_URL =
  process.env.NEXT_PUBLIC_API_SEVER_URL ??
  'https://api.find-your-day.duckdns.org/future'

export interface useType {
  userId: number
  name: string
}

export const postUserName = async (name: string): Promise<useType> => {
  try {
    const data = { name }
    const response = await axios.post<useType>(`${API_URL}/api/users`, data)
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
    const { userId, ...body } = userType
    const response = await axios.put<useSelectType>(
      `${API_URL}/api/users/${userId}/type`,
      body,
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
    const response = await axios.post<questionType>(
      `${API_URL}/api/consults/users/${userId}`,
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export interface answerType {
  questionId: number
  userId: number
  answer: null | string
}

export const postForAnswer = async (
  answerType: answerType,
): Promise<questionType> => {
  try {
    const { questionId, userId, answer } = answerType
    const response = await axios.post<questionType>(
      `${API_URL}/api/consults/${questionId}/answers`,
      { userId, answer },
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export interface resultType {
  userId: number
  summary: string
  recommend: string
  userType: string
  hollandTypes: Array<string>
  createdDate: string
}

export const postForResult = async (userId: number): Promise<resultType> => {
  try {
    const response = await axios.post<resultType>(
      `${API_URL}/api/consults/users/${userId}/summary`,
    )
    return response.data
  } catch (error) {
    throw error
  }
}
