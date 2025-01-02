'use client'

import { ChangeEvent } from 'react'
import { useNameStore } from '@/store/store'
import Input from '@/components/Input'

const UserName = () => {
  const { name, setUserName } = useNameStore()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(
      e.target.value
        .replace(/[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/ ]/gim, '')
        .replace(/\d+/g, '')
        .slice(0, 10),
    )
  }

  return (
    <section className="relative mt-8 w-full text-left">
      <Input
        value={name}
        onTextChange={onChange}
        clasName="border-gray2 p-[0.95rem] px-5 placeholder-gray4"
        type="text"
        placeholder="내 이름은.."
      />
      <p className="absolute right-5 top-[0.88rem] font-pretendardSemiBold text-gray1">
        <span className="font-pretendardMedium text-gray4">{name.length} </span>
        / 10
      </p>
    </section>
  )
}

export default UserName
