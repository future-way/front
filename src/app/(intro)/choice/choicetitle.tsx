'use client'

import { useNameStore } from '@/store/store'
import Title from '@/components/Title'

const ChoiceTitle = () => {
  const { name } = useNameStore()
  return (
    <Title
      text1={`${name}님`}
      text2="어떤 진로 고민이 있나요?"
      img="/images/img2.png"
      className="mb-6 mt-0 font-black"
      imgClassName="w-[3.6rem]"
    />
  )
}

export default ChoiceTitle
