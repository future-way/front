import { ChatMessage } from '@/app/(chat)/chat/chat'

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
