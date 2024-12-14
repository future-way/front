'use client'

import Button from '@/components/Button'
import Card from './card'
import Summary from './summary'
import Loading from '@/components/loading/loading'
import { useEffect, useState } from 'react'
import { progressBarStore, useNameStore } from '@/store/store'
import Popup from '@/components/popup'
import { useRouter } from 'next/navigation'
import { API_URL, resultType } from '@/lib/api'
import progressAxios from '@/lib/progressAxios'

const hollandType = ['현실형', '탐구형', '예술형', '사회형', '진취형', '관습형']
const imgType: { [key: string]: number } = {
  '혼란형-불확신': 20,
  '혼란형-확신': 18,
  망설임형: 19,
  막막형: 5,
}

const ResultCont = () => {
  const { name, userId } = useNameStore()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [isRestart, setRestart] = useState(false)
  const [advice, setAdvice] = useState<Array<string>>([])
  const [way, setWay] = useState<Array<string>>([])
  const [holland, setHolland] = useState('')
  const [hollandDetail, setHollandDetail] = useState<Array<string>>([])
  const [summary, setSummary] = useState('')
  const [userImgType, setUserImgType] = useState(18)
  const { progressNum } = progressBarStore()

  const data = {
    userId: (userId as number) ?? 56,
  }

  const getData = async () => {
    try {
      const res = await progressAxios.post(
        `${API_URL}/api/gemini/summary`,
        data,
      )

      const resultSummary: resultType = res.data

      if (resultSummary) {
        const { userType, summary } = resultSummary
        const hollands = summary.match(/\{[^}]*\}/)

        if (userType) {
          setUserImgType(imgType[userType])
        }

        if (hollands) {
          setHolland(hollands[0])
        }
        const userResult = summary.replace(/\*/g, '').split(/\n\n|:/)
        let obj = { title: '', cont: [] as Array<string> }
        let filterResultToArray: Array<{
          [key: string]: string | Array<string>
        }> = []
        userResult.forEach((item: string) => {
          if (item.length !== 0) {
            const isTitle =
              item.includes('\n') ||
              item.includes('홀랜드 유형 3개') ||
              item.includes('추천 진로') ||
              item.includes('조언 및 계획') ||
              item.includes('상담 결과 요약 내용')

            if (isTitle && item.length > 0) {
              filterResultToArray.push(obj)
              obj = { title: '', cont: [] }
              obj.title = item
            } else {
              const txt = '다음과 같은 진로를 추천합니다.'
              if (!item.includes(txt)) {
                obj.cont.push(item.trim() as string)
              }
            }
          }
        })

        filterResultToArray.forEach((item) => {
          if (item['title'].includes('조언 및 계획')) {
            setAdvice(item.cont as Array<string>)
          } else if (item['title'].includes('추천 진로')) {
            setWay(item.cont as Array<string>)
          } else if (item['title'].includes('상담 결과 요약 내용')) {
            setSummary(item.cont as string)
          } else if (item['title'].includes('홀랜드 유형 3개')) {
            setHollandDetail(item.cont as Array<string>)

            if (hollands === null) {
              const filteredHolland = (item.cont as string[]).filter((item) =>
                hollandType.filter((item2) => item.includes(item2)),
              )
              setHolland(filteredHolland.join())
            }
          }
        })

        setLoading(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setLoading(true)
    getData()
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
                  className="bg-orange1 py-4 text-white"
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
