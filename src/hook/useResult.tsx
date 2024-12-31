import { resultImgType } from '@/constants'
import { resultType } from '@/lib/api'
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

interface UserResult {
  userImgType: number
  hollandTypes: Array<string>
  summary: string
  way: Array<string>
  hollandDetail: Array<string>
  advice: Array<string>
}

export function getResultData(result: resultType) {
  let userResult: UserResult = {
    userImgType: 18,
    hollandTypes: [],
    summary: '',
    way: [],
    hollandDetail: [],
    advice: [],
  }

  if (result) {
    const { userType, summary, hollandTypes, recommend } = result

    if (userType) {
      userResult.userImgType = resultImgType[userType]
    }

    if (hollandTypes) {
      userResult.hollandTypes = hollandTypes
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

    userResult = {
      ...userResult,
      summary: tmpSummary as string,
      way: tmpWay as Array<string>,
      hollandDetail: tmpHollandDetail as Array<string>,
      advice: tmpAdvice as Array<string>,
    }
  }

  return userResult
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
    onGoFirstStart,
  }
}

export default useRetart
