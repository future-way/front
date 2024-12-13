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
  const isWidth =
    classNameArr.includes('w-auto') || classNameArr.includes('w-6')
  return (
    <>
      <button
        onClick={onclick}
        className={`${isWidth ? '' : 'w-full'} ${!isRounded && 'rounded-lg'} ${className}`}
      >
        {text}
      </button>
    </>
  )
}

export default Button
