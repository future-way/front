'use client'

import Button from '@/components/Button'
import { useEffect, useState } from 'react'

// 메시지 타입 정의
interface Message {
  text: string
  sender: 'user' | 'api' // 'user' 또는 'api'
  timestamp: string // 메시지가 보낸 시간
}

function checkUserOrApi(sender: Message['sender']) {
  if (sender === 'user') {
    return 'rounded-tl-[0.75rem] rounded-tr-[0.75rem] rounded-br-[0px] rounded-bl-[0.75rem]'
  } else {
    return 'rounded-tl-[0px] rounded-tr-[0.75rem] rounded-br-[0.75rem] rounded-bl-[0.75rem]'
  }
}

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]) // 메시지 상태
  const [input, setInput] = useState<string>('') // 입력 상태
  const [isLoading, setIsLoading] = useState<boolean>(false) // 로딩 상태

  // 첫 화면에 환영 메시지
  useEffect(() => {
    const welcomeMessage: Message = {
      text: '안녕하세요! 채팅에 오신 것을 환영합니다.',
      sender: 'api',
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }
    setMessages([welcomeMessage]) // 환영 메시지 추가
  }, [])

  // 메시지 전송 함수
  const handleSendMessage = async () => {
    if (input.trim()) {
      // 유저 메시지 추가
      const userMessage: Message = {
        text: input,
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
        text: '',
        sender: 'api',
        timestamp: '',
      } // 텍스트 대신 이미지
      setMessages((prevMessages) => [...prevMessages, loadingMessage])

      setIsLoading(true) // 로딩 시작

      // API 호출 시뮬레이션 (setTimeout으로 지연된 응답을 모방)
      setTimeout(async () => {
        const apiMessage: Message = {
          text: 'API 응답 내용입니다.',
          sender: 'api',
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        }

        // 로딩 메시지 제거하고 실제 API 메시지 추가
        setMessages((prevMessages) => {
          const newMessages = prevMessages.filter((msg) => msg.text !== '') // 로딩 이미지 메시지 제거
          return [...newMessages, apiMessage] // API 응답 메시지 추가
        })

        setIsLoading(false) // 로딩 종료
      }, 2000) // 2초 후 응답 시뮬레이션
    }
  }

  return (
    <>
      <header className="relative w-full">
        <Button
          className="absolute inset-y-0 left-[10px] w-auto"
          text={<img src="/images/icon-arrow-back.png" alt="뒤로가기" />}
        />
        <h1 className="py-3 text-center text-base text-gray1">내일 찾기</h1>
        <Button
          className="absolute inset-y-0 right-[10px] w-auto text-black"
          text="상담종료"
        />
      </header>
      <div className="m-auto flex h-screen max-w-[100%] flex-col">
        {/* 메시지 목록 표시 */}
        <div
          style={{
            padding: '10px',
            flexGrow: 1,
            overflowY: 'auto',
            marginBottom: '10px',
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
                    <img src="/images/img22.png" alt="" />
                    <p className="text-m font-pretendardSemiBold text-black">
                      모모
                    </p>
                  </div>
                </>
              )}
              <div
                className={`${msg.sender === 'user' ? 'bg-green' : 'bg-gray5'} ${checkUserOrApi(msg.sender)}`}
                style={{
                  padding: '8px 12px',
                }}
              >
                <p
                  className={`${msg.sender === 'user' ? 'text-white' : 'text-black'}`}
                >
                  {msg.sender === 'api' && msg.text === '' ? (
                    <img src="/images/img23.png" alt="loading" />
                  ) : (
                    msg.text
                  )}
                </p>
              </div>
              {/* 메시지 아래에 시간 표시 */}
              <p className="mt-1 text-xxs text-gray1">{msg.timestamp}</p>
            </div>
          ))}
        </div>

        <div className="relative px-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메시지를 입력하기"
            className="bg-gray5 mb-3 w-full rounded-3xl text-gray1"
            style={{
              padding: '10px',
            }}
          />
          <button
            onClick={handleSendMessage}
            className="absolute right-3"
            style={{
              padding: '10px',
              borderRadius: '20px',
            }}
          >
            <img src="/images/img24.png" alt="입력하기 버튼" />
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatComponent
