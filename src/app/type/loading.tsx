'use client'

import CompontLoading from '@/components/loading/loading'
import { useNameStore } from '@/store/store'

interface LoadingProps {
  count: number
}

const Loading = ({ count }: LoadingProps) => {
  const { name } = useNameStore()

  return (
    <CompontLoading
      title1={`${name}님의`}
      title2="진로 성향을 분석중이에요!"
      guide1="내일찾기만의 진로 성향 분석으로"
      guide2="더욱 정확한 상담이 가능해요"
      progress={count}
    />
  )
}

export default Loading
