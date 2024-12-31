interface firstMessageProps {
  message: string
}

const FirstMessage = ({ message }: firstMessageProps) => {
  return (
    <div
      className={`mb-2 flex w-auto max-w-[90%] flex-col items-start justify-start text-right`}
    >
      <div className={`w-auto max-w-[90%] rounded-left bg-gray5 px-4 py-2.5`}>
        <p
          className={`whitespace-pre-wrap text-left text-slg font-medium text-black`}
        >
          {message}
        </p>
      </div>
    </div>
  )
}

export default FirstMessage
