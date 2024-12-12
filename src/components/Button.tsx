'use client'
interface buttonType {
  text: string | React.ReactNode
  className?: string
  onclick?: () => void
  isRounded?: boolean
}

const Button = ({
  text,
  className,
  onclick,
  isRounded = false,
}: buttonType) => {
  const classNameArr = (className ?? '').split(' ')
  const isWidthAuto = classNameArr.includes('w-auto')
  return (
    <>
      <button
        onClick={onclick}
        className={`${isWidthAuto ? '' : 'w-full'} ${!isRounded && 'rounded-lg'} ${className}`}
      >
        {text}
      </button>
    </>
  )
}

export default Button
