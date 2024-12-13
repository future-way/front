'use client'

import Button from '@/components/Button'
import Popup from '@/components/popup'
import { postFirstQuestion, postForAnswer } from '@/lib/api'
import { useNameStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

export interface Message {
  id?: number
  questionMessage: string
  sender: 'user' | 'api'
  timestamp?: string
}

let welcomeMessage: Message = {
  questionMessage: '안녕하세요! 채팅에 오신 것을 환영합니다.',
  sender: 'api',
  timestamp: new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  }),
}

const Chat = () => {
  const { name, userId } = useNameStore()
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([]) // 메시지 상태
  const [input, setInput] = useState<string>('') // 입력 상태
  const [isShowBtn, setIsShowForCloseBtn] = useState({
    close: false,
    result: false,
  })
  const [isPrev, setPrev] = useState(false)

  useEffect(() => {
    async function getFirstAnswer() {
      const firstQuestion = await postFirstQuestion(userId as number)
      if (firstQuestion?.questionMessage) {
        welcomeMessage.id = firstQuestion.aiConsultationHistoryId
        welcomeMessage.questionMessage = firstQuestion.questionMessage
        setMessages([welcomeMessage])
      }
    }
    getFirstAnswer()
  }, [])

  const textRef = useRef<HTMLTextAreaElement>(null)

  const handleResizeHeight = useCallback(() => {
    if (textRef.current !== null) {
      textRef.current.style.height = 'auto'
      const height = textRef.current.scrollHeight
      textRef.current.style.height = (height === 64 ? 56 : height) + 'px'
    }
  }, [])

  const handleSendMessage = async () => {
    if (input.trim()) {
      const id = messages[messages.length - 1].id
      const userMessage: Message = {
        id,
        questionMessage: input,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      }
      setMessages([...messages, userMessage])
      setInput('') // 입력 필드 초기화

      // API 응답 대기 중 로딩 메시지 추가
      const loadingMessage: Message = {
        questionMessage: '',
        sender: 'api',
      } // 텍스트 대신 이미지
      setMessages((prevMessages) => [...prevMessages, loadingMessage])

      const getAnswer = await postForAnswer({
        aiConsultationHistoryId: id as number,
        userId: userId as number,
        answer: input,
      })

      if (getAnswer.questionMessage) {
        const apiMessage: Message = {
          id: getAnswer.aiConsultationHistoryId,
          questionMessage: getAnswer.questionMessage,
          sender: 'api',
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        }

        // 로딩 메시지 제거하고 실제 API 메시지 추가
        setMessages((prevMessages) => {
          const newMessages = prevMessages.filter(
            (msg) => msg.questionMessage !== '',
          ) // 로딩 이미지 메시지 제거
          return [...newMessages, apiMessage] // API 응답 메시지 추가
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
    setIsShowForCloseBtn((prev) => {
      return { result: true, close: true }
    })

    const userMessage: Message = {
      questionMessage: '괜찮아, 종료해줘',
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }
    setMessages([...messages, userMessage])

    const apiMessage: Message = {
      questionMessage: `${name}님 오늘의 상담은 여기까지에요. 상담내용은 아래 ‘나만의 상담카드 보러가기' 버튼을 클릭하면 볼 수 있어요!`,
      sender: 'api',
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }

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
      <header className="relative w-full">
        <Button
          onclick={() => setPrev((prev) => !prev)}
          className="absolute inset-y-0 left-[10px] w-6"
          text={<img src="/images/icon-arrow-back.png" alt="뒤로가기" />}
        />
        <h1 className="py-3 text-center font-pretendardSemiBold text-base text-gray1">
          내일상담
        </h1>
        <Button
          onclick={onCounselClose}
          className="absolute inset-y-0 right-[10px] w-auto text-gray1"
          text="상담종료"
        />
      </header>
      <div className="m-auto flex h-screen max-w-[100%] flex-col">
        {/* 메시지 목록 표시 */}
        <div
          className="mb-3"
          style={{
            padding: '10px',
            flexGrow: 1,
            overflowY: 'auto',
          }}
        >
          {messages.map((msg, index) => (
            <div
              className={`mb-2 flex flex-col ${msg.sender === 'user' ? 'text-right' : 'text-left'} ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              key={index}
            >
              {msg.sender === 'api' && (
                <>
                  <div className="mb-1 inline-flex items-center gap-2">
                    <img
                      className="h-auto w-10"
                      src="/images/img22.png"
                      alt=""
                    />
                    <p className="font-pretendardSemiBold text-m text-black">
                      모모
                    </p>
                  </div>
                </>
              )}
              <div
                className={`w-auto max-w-[90%] px-4 py-2.5 ${msg.sender === 'user' ? 'rounded-right bg-orange1' : 'rounded-left bg-gray5'} `}
              >
                <p
                  className={`whitespace-pre-wrap text-slg font-medium ${msg.sender === 'user' ? 'text-white' : 'text-black'}`}
                >
                  {msg.sender === 'api' && msg.questionMessage === '' ? (
                    <img
                      className="w-12"
                      src="/images/img23.png"
                      alt="loading"
                    />
                  ) : (
                    msg.questionMessage
                  )}
                </p>
              </div>
              <p className="mt-1 text-xxs text-gray1">{msg.timestamp}</p>
            </div>
          ))}
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
              className="mb-3 w-full rounded-3xl bg-gray5 p-5 pr-10 text-gray1"
            ></textarea>
            <button
              onClick={handleSendMessage}
              className="absolute right-3"
              disabled={input.trim().length === 0}
              style={{
                padding: '10px',
                borderRadius: '20px',
              }}
            >
              <span
                className={`flex h-7 w-7 items-center rounded-full bg-${input.length === 0 ? 'gray2' : 'black'}`}
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
