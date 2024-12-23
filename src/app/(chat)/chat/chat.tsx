'use client'

import Button from '@/components/Button'
import Popup from '@/components/popup'
import { postFirstQuestion, postForAnswer } from '@/lib/api'
import { useNameStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import Message from './message'
import { getChatMessage } from '@/utils/utils'
import Header from './header'
import { ChatMessage } from '@/types'

const Chat = () => {
  const { name, userId } = useNameStore()
  const router = useRouter()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState<string>('')
  const [isShowBtn, setIsShowForCloseBtn] = useState({
    close: false,
    result: false,
  })
  const [isPrev, setPrev] = useState(false)
  const textRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textRef.current !== null) {
      textRef.current.style.height = 56 + 'px'
    }

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
    getFirstAnswer()
  }, [])

  const handleResizeHeight = useCallback(() => {
    if (textRef.current !== null) {
      if (input.trim().length === 0) {
        textRef.current.style.height = '56px'
        return
      }

      textRef.current.style.height = '0px'
      const height = textRef.current.scrollHeight
      textRef.current.style.height = (height === 64 ? 56 : height) + 'px'
    }
  }, [textRef, input])

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

    setIsShowForCloseBtn((prev) => {
      return { result: true, close: true }
    })

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

  const onCancel = () => {
    setPrev(false)
  }

  const onPrev = () => {
    router.push('/choice')
  }

  const onGoPrevPage = () => {
    setPrev((prev) => !prev)
  }

  return (
    <>
      {isPrev && (
        <Popup
          title1="이전으로 돌아가면"
          title2="모든 상담 내용이 사라져요"
          guide1="진로 성향 결과 화면으로 돌아갈까요?"
          buttonName1="취소"
          buttonName2="이전으로"
          onclick1={onCancel}
          onclick2={onPrev}
        />
      )}
      <Header onGoPrevPage={onGoPrevPage} onCounselClose={onCounselClose} />
      <div className="height-chat m-auto flex max-w-[100%] flex-col">
        <div className="no_scrollbar mb-3 flex-grow overflow-y-auto p-[0.625rem]">
          {messages.map((msg, index) => {
            return <Message key={index} {...msg} index={index} />
          })}
        </div>

        {isShowBtn.close ? (
          <div className="flex justify-center gap-2">
            {isShowBtn.result ? (
              <Button
                className="w-auto rounded-3xl bg-black px-5 py-2.5 text-slg text-white"
                text="나만의 상담카드 보러가기 👀"
                onclick={onMoveCounselPage}
                isRounded
              />
            ) : (
              <>
                <Button
                  className="w-auto rounded-3xl bg-black px-5 py-2.5 text-slg text-white"
                  onclick={onShowIsCounselResultBtn}
                  text="괜찮아, 종료해줘"
                  isRounded
                />
                <Button
                  onclick={onOpenChat}
                  className="w-auto rounded-3xl bg-black px-5 py-2.5 text-slg text-white"
                  text="상담 계속할게"
                  isRounded
                />
              </>
            )}
          </div>
        ) : (
          <div className="relative px-3">
            <textarea
              value={input}
              onChange={onChangeInput}
              onKeyDown={onKeyDown}
              onInput={handleResizeHeight}
              ref={textRef}
              rows={1}
              placeholder="메시지를 입력하기"
              className="no_scrollbar mb-3 w-full resize-none rounded-3xl bg-gray5 p-5 pr-10 text-gray1"
            />
            <button
              onClick={handleSendMessage}
              className="absolute right-3 rounded-[1.25rem] p-[0.65rem]"
              disabled={input.trim().length === 0}
            >
              <span
                className={`flex h-7 w-7 items-center rounded-full bg-${input.trim().length === 0 ? 'gray2' : 'black'}`}
              >
                <img
                  className="m-auto w-3"
                  src="/images/img24.png"
                  alt="입력하기 버튼"
                />
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Chat
