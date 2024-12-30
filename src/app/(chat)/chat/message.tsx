import Image from 'next/image'
import { ChatMessage } from '@/types'
import FirstMessage from './firstmessage'
import AIProfile from './aiprofile'

interface Message extends ChatMessage {
  index: number
}

const Message = ({ questionMessage, sender, timestamp, index }: Message) => {
  if (index === 0) {
    return (
      <div key={index} className="items-left mb-1 gap-2">
        <AIProfile />
        {questionMessage
          .split('\n')
          .filter((text) => text.length > 0)
          .map((message, idx) => {
            return <FirstMessage key={idx} message={message} />
          })}
        <p className="mt-1 text-xxs text-gray1">{timestamp}</p>
      </div>
    )
  }

  const [align, justifyItem] =
    sender === 'user' ? ['right', 'end'] : ['left', 'start']

  return (
    <div
      className={`mb-2 flex flex-col text-${align} justify-${justifyItem} ${sender === 'user' ? 'items-end' : 'items-start'}`}
      key={index}
    >
      {sender === 'api' && <AIProfile className="mb-1" />}
      <div
        className={`w-auto max-w-[90%] px-4 py-2.5 ${sender === 'user' ? 'rounded-right bg-orange1' : 'rounded-left bg-gray5'} `}
      >
        <p
          className={`whitespace-pre-wrap text-left text-slg ${sender === 'api' && questionMessage === '' && 'h-11'} font-medium ${sender === 'user' ? 'text-white' : 'text-black'}`}
        >
          {sender === 'api' && questionMessage === '' ? (
            // <img
            //   className="animate-typing w-12 leading-[2.75rem]"
            //   src="/images/img23.png"
            //   alt="loading"
            // />
            <Image
              className="animate-typing !static !w-12 leading-[2.75rem]"
              src="/images/img23.png"
              alt="loading"
              priority
              fill
              style={{ objectFit: 'contain' }}
            />
          ) : (
            questionMessage
          )}
        </p>
      </div>
      <p className="mt-1 text-xxs text-gray1">{timestamp}</p>
    </div>
  )
}

export default Message
