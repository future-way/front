'use client'
interface buttonType {
  text: string | React.ReactNode
  className?: string
  onclick: () => void
}

const Button = ({ text, className, onclick }: buttonType) => {
  return (
    <>
      <button onClick={onclick} className={`w-full rounded-lg ${className}`}>
        {text}
      </button>
    </>
  )
}

export default Button
