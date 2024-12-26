import { postFirstQuestion, postForAnswer } from '@/lib/api'
import { ChatMessage } from '@/types'
import { getChatMessage } from '@/utils/utils'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useCallback, useRef, useState } from 'react'

function useChat(userId: number, name: string) {
  const router = useRouter()
  const [input, setInput] = useState<string>('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isShowBtn, setIsShowForCloseBtn] = useState({
    close: false,
    result: false,
  })

  async function getFirstAnswer() {
    const firstQuestion = await postFirstQuestion(userId ?? (125 as number))
    if (firstQuestion?.questionMessage) {
      const { aiConsultationHistoryId, questionMessage } = firstQuestion
      const welcomeMessage = getChatMessage(
        questionMessage,
        'api',
        aiConsultationHistoryId,
      )

      setMessages([welcomeMessage])
    }
  }

  const handleSendMessage = async () => {
    if (input.trim()) {
      const id = messages[messages.length - 1].id

      if (!id) {
        setInput('')
        return
      }

      const userMessage = getChatMessage(input, 'user', id)

      setMessages([...messages, userMessage])
      setInput('')

      const loadingMessage: ChatMessage = {
        questionMessage: '',
        sender: 'api',
      }

      setMessages((prevMessages) => [...prevMessages, loadingMessage])

      const getAnswer = await postForAnswer({
        aiConsultationHistoryId: id as number,
        userId: userId as number,
        answer: input,
      })

      if (getAnswer.questionMessage) {
        const apiMessage = getChatMessage(
          getAnswer.questionMessage,
          'api',
          getAnswer.aiConsultationHistoryId,
        )

        setMessages((prevMessages) => {
          const newMessages = prevMessages.filter(
            (msg) => msg.questionMessage !== '',
          )
          return [...newMessages, apiMessage]
        })
      }
    }
  }

  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const onCounselClose = () => {
    setIsShowForCloseBtn((prev) => {
      return { ...prev, close: true }
    })
  }

  const onOpenChat = () => {
    setIsShowForCloseBtn((prev) => {
      return { ...prev, close: false }
    })
  }

  const onShowIsCounselResultBtn = () => {
    const userMessage = getChatMessage('괜찮아, 종료해줘', 'user')

    setIsShowForCloseBtn({ result: true, close: true })

    setMessages([...messages, userMessage])

    const apiMessage = getChatMessage(
      `${name}님 오늘의 상담은 여기까지에요. 상담내용은 아래 ‘나만의 상담카드 보러가기' 버튼을 클릭하면 볼 수 있어요!`,
      'api',
    )

    setMessages((prevMessages) => [...prevMessages, apiMessage])
  }

  const onMoveCounselPage = () => {
    router.push('/result')
  }

  return {
    getFirstAnswer,
    input,
    onChangeInput,
    onKeyDown,
    messages,
    handleSendMessage,
    isShowBtn,
    onCounselClose,
    onOpenChat,
    onShowIsCounselResultBtn,
    onMoveCounselPage,
  }
}

export function useResizeHeight() {
  const textRef = useRef<HTMLTextAreaElement>(null)

  const handleResizeHeight = useCallback(
    (input: string) => {
      if (textRef.current !== null) {
        if (input.trim().length === 0) {
          textRef.current.setSelectionRange(input.length, input.length)
          return
        }

        const { scrollHeight, clientHeight } = textRef.current

        textRef.current.style.height = 'auto'
        textRef.current.style.height =
          (scrollHeight !== clientHeight ? clientHeight : scrollHeight) + 'px'
      }
    },
    [textRef],
  )

  return {
    textRef,
    handleResizeHeight,
  }
}

export function useGoPrevPage() {
  const router = useRouter()
  const [isPrev, setPrev] = useState(false)

  const onCancel = () => {
    setPrev(false)
  }

  const onPrev = () => {
    router.push('/choice')
  }

  const onGoPrevPage = () => {
    setPrev((prev) => !prev)
  }

  return {
    isPrev,
    onCancel,
    onPrev,
    onGoPrevPage,
  }
}

export default useChat
