'use client'
interface buttonType {
  text: string | React.ReactNode
  className?: string
  onclick?: () => void
}

const Button = ({ text, className, onclick }: buttonType) => {
  const classNameArr = (className ?? '').split(' ')
  const isWidthAuto = classNameArr.includes('w-auto')
  return (
    <>
      <button
        onClick={onclick}
        className={`${isWidthAuto ? '' : 'w-full'} rounded-lg ${className}`}
      >
        {text}
      </button>
    </>
  )
}

export default Button
