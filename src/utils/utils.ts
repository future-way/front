import { Message } from '@/app/(chat)/chat/chat'

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

export function checkUserOrApi(sender: Message['sender']) {
  if (sender === 'user') {
    return 'rounded-tl-[0.75rem] rounded-tr-[0.75rem] rounded-br-[0px] rounded-bl-[0.75rem]'
  } else {
    return 'rounded-tl-[0px] rounded-tr-[0.75rem] rounded-br-[0.75rem] rounded-bl-[0.75rem]'
  }
}
