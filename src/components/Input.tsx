'use client'

import { ChangeEvent } from 'react'

interface buttonType {
  placeholder: string
  type: string
  value?: string
  clasName?: string
  onTextChange?: (e: ChangeEvent<HTMLInputElement>) => {}
}

const Input = ({
  placeholder,
  type,
  value,
  onTextChange,
  clasName,
}: buttonType) => {
  return (
    <>
      <input
        type={type}
        value={value}
        className={`border-gray4 w-full rounded-lg border p-3.5 text-gray1 ${clasName}`}
        onChange={onTextChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
