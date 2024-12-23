export type objForKeyAny = {
  [key: string]: string | string[]
}

export interface ChatMessage {
  id?: number
  questionMessage: string
  sender: 'user' | 'api'
  timestamp?: string
}
