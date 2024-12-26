import { resultImgType } from '@/constants'
import { API_URL, resultType } from '@/lib/api'
import progressAxios from '@/lib/progressAxios'
import { choiceNumStore, useNameStore, yesOrNoStore } from '@/store/store'
import { objForKeyAny } from '@/types'
import {
  getFilteredArrayForResult,
  removeDontUseResultText,
} from '@/utils/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

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

function useResultData() {
  const [loading, setLoading] = useState(true)
  const [advice, setAdvice] = useState<Array<string>>([])
  const [way, setWay] = useState<Array<string>>([])
  const [holland, setHolland] = useState<Array<string>>([])
  const [hollandDetail, setHollandDetail] = useState<Array<string>>([])
  const [summary, setSummary] = useState('')
  const [userImgType, setUserImgType] = useState(18)

  const getData = async (userId: number) => {
    try {
      const res = await progressAxios.post(`${API_URL}/api/gemini/summary`, {
        userId: userId as number,
      })

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

  return {
    advice,
    way,
    holland,
    hollandDetail,
    summary,
    userImgType,
    loading,
    setLoading,
    getData,
  }
}

export function useRetart() {
  const { setUserName } = useNameStore()
  const { setChoiceNum } = choiceNumStore()
  const { setYesOrNo } = yesOrNoStore()
  const router = useRouter()
  const [isRestart, setRestart] = useState(false)

  const onCancel: () => void = () => {
    setRestart(false)
  }

  const onReStart = () => {
    router.push('/home')
    setUserName('')
    setChoiceNum(0)
    setYesOrNo(-1)
  }

  const onGoFirstStart = () => {
    setRestart((prev) => !prev)
  }

  return {
    isRestart,
    onCancel,
    onReStart,
    onGoFirstStart
  }
}

export default useResultData
