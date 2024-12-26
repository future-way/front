import { ChatMessage } from '@/types'

export function isBtnActive(path: string, btnActive: boolean) {
  if (['/choice', '/disarray-type'].includes(path)) {
    return !btnActive
  }

  return btnActive
}

export function selectTypeOrCheckPage(num: number) {
  switch (num) {
    case 0:
      return '/check'

    case 1:
      return '/type?id=three'

    case 2:
      return '/type?id=four'

    default:
      return '/check'
  }
}

export function checkUserType(choiceType: number, yesOrNo: number) {
  if (choiceType !== 0) {
    return choiceType === 1 ? '망설임형' : '막막형'
  }
  return yesOrNo === 0 ? '혼란형-확신' : '혼란형-불확신'
}

export function getChatMessage(
  questionMessage: string,
  sender: 'user' | 'api',
  id?: number,
): ChatMessage {
  return {
    questionMessage,
    sender,
    timestamp: new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    }),
    id,
  }
}

export function removeDontUseResultText(text: string) {
  return text.split(/\n{2,}|\:\*\*/)
}

export function getFilteredArrayForResult(
  arr: Array<string>,
  title1: string,
  title2: string,
) {
  const recomm = '다음과 같은 진로를 추천합니다.'
  let filterResultToArray: Array<{
    [key: string]: string | Array<string>
  }> = []
  const isLastTitle = title1 === '추천 진로' || title2 === '조언 및 계획'
  let obj = { title: '', cont: [] as Array<string> }

  arr.forEach((item: string, idx) => {
    const txt = item.replace(/\*/g, '').trim()

    if (txt.length !== 0) {
      const isTitle = txt.includes(title1) || txt.includes(title2)

      if (isTitle && txt.length > 0) {
        if (obj.title.length > 0) {
          filterResultToArray.push(obj)
          obj = { title: '', cont: [] }
        }
        obj.title = txt
      } else {
        if ((isLastTitle && !txt.includes(recomm)) || !isLastTitle) {
          obj.cont.push(txt.trim() as string)
        }

        if (arr.length - 1 === idx && obj.title !== '') {
          filterResultToArray.push(obj)
        }
      }
    }
  })

  return filterResultToArray
}

export function checkUnUseFirstChildArr(arr: string[]) {
  return arr.length > 1 && arr[0].length > 30 ? arr.slice(1) : arr
}
