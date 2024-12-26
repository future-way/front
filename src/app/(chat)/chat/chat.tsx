'use client'

import Button from '@/components/Button'
import Popup from '@/components/popup'
import { useType } from '@/lib/api'
import { useEffect } from 'react'
import Message from './message'
import Header from './header'
import { useQueryClient } from '@tanstack/react-query'
import useChat, { useGoPrevPage, useResizeHeight } from '@/hook/useChat'
import ResultBtns from './resultbtns'
import InputField from './inputfield'

const Chat = () => {
  const queryClient = useQueryClient()
  const userInfo = queryClient.getQueryData(['userData']) as useType
  const userId = userInfo?.userId ?? 0
  const name = userInfo?.name ?? '김아무개'

  const {
    input,
    messages,
    isShowBtn,
    getFirstAnswer,
    handleSendMessage,
    onChangeInput,
    onKeyDown,
    onCounselClose,
    onOpenChat,
    onShowIsCounselResultBtn,
    onMoveCounselPage,
  } = useChat(userId, name)
  const { textRef, handleResizeHeight } = useResizeHeight()
  const { isPrev, onCancel, onPrev, onGoPrevPage } = useGoPrevPage()

  useEffect(() => {
    if (textRef.current !== null) {
      textRef.current.style.height = 56 + 'px'
    }

    getFirstAnswer()
  }, [])

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
      <main className="height-chat m-auto flex max-w-[100%] flex-col">
        <section className="no_scrollbar mb-3 flex-grow overflow-y-auto p-[0.625rem]">
          {messages.map((msg, index) => {
            return <Message key={index} {...msg} index={index} />
          })}
        </section>

        {isShowBtn.close ? (
          <ResultBtns
            isShowBtn={isShowBtn}
            onOpenChat={onOpenChat}
            onShowIsCounselResultBtn={onShowIsCounselResultBtn}
            onMoveCounselPage={onMoveCounselPage}
          />
        ) : (
          <InputField
            input={input}
            onChangeInput={onChangeInput}
            onKeyDown={onKeyDown}
            handleSendMessage={handleSendMessage}
            handleResizeHeight={handleResizeHeight}
            textRef={textRef}
          />
        )}
      </main>
    </>
  )
}

export default Chat
