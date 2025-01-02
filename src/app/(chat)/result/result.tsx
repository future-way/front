'use client'

import { useQueryClient } from '@tanstack/react-query'
import progressAxios from '@/lib/progressAxios'
import { useEffect } from 'react'
import { API_URL, resultType, useType } from '@/lib/api'
import { useRetart } from '@/hook/useResult'
import { resultStore } from '@/store/store'
import Content from './components/content'
import Popup from '@/components/popup'
import ErrorPage from '@/app/global-error'

const getResult = async (
  userId: number,
  setResult: (result: resultType, status: number) => void,
) => {
  const res = await progressAxios.post(`${API_URL}/api/gemini/summary`, {
    userId: userId as number,
  })

  setResult(res.data, res.status)

  if (res.status !== 200) {
    return <ErrorPage errorText={res.statusText} />
  }
}

const Result = () => {
  const queryClient = useQueryClient()
  const userInfo = queryClient.getQueryData(['userData']) as useType
  const userId = userInfo?.userId ?? 329
  const name = userInfo?.name ?? '김아무개'

  const { result, setResult } = resultStore()
  const { isRestart, onCancel, onReStart, onGoFirstStart } = useRetart()

  useEffect(() => {
    getResult(userId, setResult)
    sessionStorage.removeItem('hasRefreshed')
  }, [])

  useEffect(() => {
    document.body.style.overflowY = `${isRestart} ? hidden : ''`

    return () => {
      document.body.style.overflowY = ''
    }
  }, [isRestart])

  return (
    <>
      {isRestart && (
        <Popup
          title1="처음부터 다시하면"
          title2="모든 상담 내용이 사라져요"
          guide1="진로 성향부터 다시 알아볼까요?"
          buttonName1="취소"
          buttonName2="다시하기"
          onclick1={onCancel}
          onclick2={onReStart}
        />
      )}
      {result.summary && (
        <Content name={name} result={result} onGoFirstStart={onGoFirstStart} />
      )}
    </>
  )
}

export default Result
