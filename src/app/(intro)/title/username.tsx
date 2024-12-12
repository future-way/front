'use client'

import Input from '@/components/Input'
import { useNameStore } from '@/store/store'
import { ChangeEvent } from 'react'

const UserName = () => {
  const { name, setUserName } = useNameStore()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value.slice(0, 10))
  }

  return (
    <div className="mt-5 w-full px-9 text-left">
      <Input
        value={name}
        onTextChange={onChange}
        clasName="mb-2"
        type="text"
        placeholder="내 이름은.."
      />
      <p className="font-pretendardSemiBold text-gray1">
        <span className="text-gray4 font-pretendardMedium">{name.length} </span>
        / 10
      </p>
    </div>
  )
}

export default UserName
