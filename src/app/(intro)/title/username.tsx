'use client'

import Input from '@/components/Input'

const UserName = () => {
  // grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)]
  return (
    <div className="mt-5 w-full px-9 text-left">
      <Input clasName="mb-2" type="text" placeholder="내 이름은.." />
      <p className="font-pretendardSemiBold text-gray1">
        <span className="text-gray4 font-pretendardMedium">0</span>/10
      </p>
    </div>
  )
}

export default UserName
