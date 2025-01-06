'use client'

import { useEffect } from 'react'
import { progressBarStore, resultStore } from '@/store/store'
import { useType } from '@/lib/api'
import { useQueryClient } from '@tanstack/react-query'
import ComponentLoading from '@/components/loading/loading'

const Loading = () => {
  const queryClient = useQueryClient()
  const userInfo = queryClient.getQueryData(['userData']) as useType
  const name = userInfo?.name ?? '김아무개'

  const { progressNum } = progressBarStore()
  const { setLoading, loading, result } = resultStore()

  useEffect(() => {
    if (result.summary) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [result])

  return loading ? (
    <ComponentLoading
      progress={progressNum}
      title1={`${name}님을 위한`}
      title2="상담카드를 만들고 있어요"
      guide1={`오늘 상담이 ${name}님의`}
      guide2="내일찾기에 도움이 됐길 바라요!"
    />
  ) : null
}

export default Loading
