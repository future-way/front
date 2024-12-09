import { ChangeEvent } from 'react'

interface buttonType {
  placeholder: string
  type: string
  value: string
  onTextChange: (e: ChangeEvent<HTMLInputElement>) => {}
}

const Input = ({ placeholder, type, value, onTextChange }: buttonType) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onTextChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
