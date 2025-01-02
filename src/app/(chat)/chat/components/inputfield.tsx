import Image from 'next/image'
import { ChangeEvent, RefObject } from 'react'

interface ResultBtnsProps {
  input: string
  onChangeInput: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  handleSendMessage: () => Promise<void>
  handleResizeHeight: (input: string) => void
  textRef: RefObject<HTMLTextAreaElement | null>
}

const InputField = ({
  input,
  onChangeInput,
  onKeyDown,
  handleSendMessage,
  handleResizeHeight,
  textRef,
}: ResultBtnsProps) => {
  return (
    <section className="mb-[1.125rem] px-3">
      <div className="relative flex">
        <textarea
          value={input}
          onChange={onChangeInput}
          onKeyDown={onKeyDown}
          onInput={() => handleResizeHeight(input)}
          ref={textRef}
          rows={1}
          placeholder="메시지를 입력하기"
          className="no_scrollbar w-full resize-none rounded-2xl bg-gray5 py-[0.875rem] pl-5 pr-11 text-slg text-gray1"
        />
        <button
          onClick={handleSendMessage}
          className="t-chat-btn absolute right-4 rounded-[1.25rem]"
          disabled={input.trim().length === 0}
        >
          <span
            className={`flex h-7 w-7 items-center rounded-full bg-${input.trim().length === 0 ? 'gray2' : 'black'}`}
          >
            <Image
              className="!static m-auto !w-3"
              src="/images/img24.png"
              alt="입력하기 버튼"
              priority
              fill
              style={{ objectFit: 'contain' }}
            />
          </span>
        </button>
      </div>
    </section>
  )
}

export default InputField
