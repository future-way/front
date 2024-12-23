import { ChatMessage } from '@/types'

interface Message extends ChatMessage {
  index: number
}

const Message = ({ questionMessage, sender, timestamp, index }: Message) => {
  if (index === 0) {
    return (
      <div key={index} className="items-left mb-1 gap-2">
        <div className="inline-flex items-center gap-2">
          <img className="h-auto w-10" src="/images/img22.png" alt="" />
          <p className="font-pretendardSemiBold text-m text-black">모모</p>
        </div>
        {questionMessage
          .split('\n')
          .filter((text) => text.length > 0)
          .map((message, idx) => {
            return (
              <div
                className={`mb-2 flex w-auto max-w-[90%] flex-col items-start justify-start text-right`}
                key={idx}
              >
                <div
                  className={`rounded-left w-auto max-w-[90%] bg-gray5 px-4 py-2.5`}
                >
                  <p
                    className={`whitespace-pre-wrap text-left text-slg font-medium text-black`}
                  >
                    {message}
                  </p>
                </div>
              </div>
            )
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
      {sender === 'api' && (
        <>
          <div className="mb-1 inline-flex items-center gap-2">
            <img className="h-auto w-10" src="/images/img22.png" alt="" />
            <p className="font-pretendardSemiBold text-m text-black">모모</p>
          </div>
        </>
      )}
      <div
        className={`w-auto max-w-[90%] px-4 py-2.5 ${sender === 'user' ? 'rounded-right bg-orange1' : 'rounded-left bg-gray5'} `}
      >
        <p
          className={`whitespace-pre-wrap text-left text-slg ${sender === 'api' && questionMessage === '' && 'h-11'} font-medium ${sender === 'user' ? 'text-white' : 'text-black'}`}
        >
          {sender === 'api' && questionMessage === '' ? (
            <img
              className="animate-typing w-12 leading-[2.75rem]"
              src="/images/img23.png"
              alt="loading"
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
