'use client'

import Button from '@/components/Button'
import Card from './card'
import Summary from './summary'
import Loading from '@/components/loading/loading'
import { useEffect } from 'react'
import { progressBarStore } from '@/store/store'
import Popup from '@/components/popup'
import { useType } from '@/lib/api'
import { useQueryClient } from '@tanstack/react-query'
import useResultData, { useRetart } from '@/hook/useResult'
import Header from './header'

const ResultCont = () => {
  const queryClient = useQueryClient()
  const userInfo = queryClient.getQueryData(['userData']) as useType
  const userId = userInfo?.userId ?? 0
  const name = userInfo?.name ?? '김아무개'

  const { isRestart, onCancel, onReStart, onGoFirstStart } = useRetart()
  const { progressNum } = progressBarStore()
  const {
    loading,
    setLoading,
    advice,
    way,
    holland,
    hollandDetail,
    summary,
    userImgType,
    getData,
  } = useResultData()

  useEffect(() => {
    setLoading(true)
    getData(userId)
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
      {loading ? (
        <Loading
          progress={progressNum}
          title1={`${name}님을 위한`}
          title2="상담카드를 만들고 있어요"
          guide1={`오늘 상담이 ${name}님의`}
          guide2="내일찾기에 도움이 됐길 바라요!"
        />
      ) : (
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
          <div className="flex flex-col bg-black text-center">
            <Header />
            <div>
              <Card userImgType={userImgType} holland={holland} name={name} />
              <Summary
                name={name}
                summary={summary}
                advice={advice}
                holland={hollandDetail}
                way={way}
              />
              <section className="mb-8 px-5">
                <Button
                  text="처음부터 다시하기"
                  onclick={onGoFirstStart}
                  className="!rounded-2xl bg-orange1 py-4 text-white"
                />
              </section>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ResultCont
