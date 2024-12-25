'use client'

import Button from '@/components/Button'
import Card from './card'
import Summary from './summary'
import Loading from '@/components/loading/loading'
import { useEffect, useState } from 'react'
import {
  choiceNumStore,
  progressBarStore,
  useNameStore,
  yesOrNoStore,
} from '@/store/store'
import Popup from '@/components/popup'
import { useRouter } from 'next/navigation'
import { API_URL, resultType, useType } from '@/lib/api'
import progressAxios from '@/lib/progressAxios'
import { resultImgType } from '@/constants'
import {
  getFilteredArrayForResult,
  removeDontUseResultText,
} from '@/utils/utils'
import { objForKeyAny } from '@/types'
import { useQueryClient } from '@tanstack/react-query'

function getFilterResultToArray(arr: objForKeyAny[]) {
  let [tmp1, tmp2, tmp4] = [[], [], []] as Array<Array<string>>
  let tmp3 = ''

  arr.forEach((item) => {
    if (item['title'].includes('조언 및 계획')) {
      tmp1 = item.cont as Array<string>
    } else if (item['title'].includes('추천 진로')) {
      tmp2 = item.cont as Array<string>
    } else if (item['title'].includes('상담 결과 요약 내용')) {
      tmp3 = item.cont as string
    } else if (item['title'].includes('홀랜드 유형 3개')) {
      tmp4 = item.cont as Array<string>
    }
  })

  return [tmp1, tmp2, tmp3, tmp4]
}

const ResultCont = () => {
  const queryClient = useQueryClient()
  const userInfo = queryClient.getQueryData(['userData']) as useType
  const userId = userInfo?.userId ?? 0
  const name = userInfo?.name ?? '김아무개'
  const { setUserName } = useNameStore()
  const { setChoiceNum } = choiceNumStore()
  const router = useRouter()
  const { setYesOrNo } = yesOrNoStore()

  const [loading, setLoading] = useState(true)
  const [isRestart, setRestart] = useState(false)
  const [advice, setAdvice] = useState<Array<string>>([])
  const [way, setWay] = useState<Array<string>>([])
  const [holland, setHolland] = useState<Array<string>>([])
  const [hollandDetail, setHollandDetail] = useState<Array<string>>([])
  const [summary, setSummary] = useState('')
  const [userImgType, setUserImgType] = useState(18)
  const { progressNum } = progressBarStore()

  const data = {
    userId: userId as number,
  }

  const getData = async () => {
    try {
      const res = await progressAxios.post(
        `${API_URL}/api/gemini/summary`,
        data,
      )

      const resultSummary: resultType = res.data

      if (resultSummary) {
        const { userType, summary, hollandTypes, recommend } = resultSummary

        if (userType) {
          setUserImgType(resultImgType[userType])
        }

        if (hollandTypes) {
          setHolland(hollandTypes)
        }

        const userSummary = removeDontUseResultText(summary)
        const useRecommend = removeDontUseResultText(recommend)
        const filterResultToArray: Array<objForKeyAny> = [
          ...[userSummary, useRecommend]
            .map((item, index) => {
              const [title1, title2] =
                index === 0
                  ? ['홀랜드 유형 3개', '상담 결과 요약 내용']
                  : ['추천 진로', '조언 및 계획']

              return getFilteredArrayForResult(item, title1, title2)
            })
            .flat(),
        ]

        let [tmpAdvice, tmpWay, tmpSummary, tmpHollandDetail] =
          getFilterResultToArray(filterResultToArray)

        setAdvice(tmpAdvice as string[])
        setWay(tmpWay as string[])
        setSummary(tmpSummary as string)
        setHollandDetail(tmpHollandDetail as string[])

        setLoading(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setLoading(true)
    getData()
    sessionStorage.removeItem('hasRefreshed')
  }, [])

  useEffect(() => {
    if (isRestart) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = ''
    }

    return () => {
      document.body.style.overflowY = ''
    }
  }, [isRestart])

  const onCancel: () => void = () => {
    setRestart(false)
  }

  const onReStart = () => {
    router.push('/home')
    setUserName('')
    setChoiceNum(0)
    setYesOrNo(-1)
  }

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
            <header>
              <h1 className="relative py-3 text-base text-white">상담카드</h1>
            </header>
            <div>
              <Card userImgType={userImgType} holland={holland} name={name} />
              <Summary
                name={name}
                summary={summary}
                advice={advice}
                holland={hollandDetail}
                way={way}
              />
              <div className="mb-8 px-5">
                <Button
                  text="처음부터 다시하기"
                  onclick={() => setRestart((prev) => !prev)}
                  className="!rounded-2xl bg-orange1 py-4 text-white"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ResultCont
