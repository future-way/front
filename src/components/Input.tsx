'use client'

import { ChangeEvent } from 'react'

interface ButtonProps {
  placeholder: string
  type: string
  value?: string
  clasName?: string
  onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  placeholder,
  type,
  value,
  onTextChange,
  clasName,
}: ButtonProps) => {
  return (
    <>
      <input
        type={type}
        value={value}
        className={`w-full rounded-lg border border-gray7 p-3.5 text-gray1 ${clasName}`}
        onChange={onTextChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
