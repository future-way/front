interface buttonType {
  text: string | React.ReactNode
  className?: string
}

const Button = ({ text, className }: buttonType) => {
  return (
    <>
      <button className={className}>{text}</button>
    </>
  )
}

export default Button
