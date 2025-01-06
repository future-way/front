import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { usePostUser, useUserType } from '@/lib/useQuery'
import { choiceNumStore, useNameStore, yesOrNoStore } from '@/store/store'

import { userCurrentType } from '@/constants'
import { useSelectType, useType } from '@/lib/api'
import { checkUserType, selectTypeOrCheckPage } from '@/utils/utils'

function useButtonBar() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const useInfo = queryClient.getQueryData(['userData']) as useType
  const userType = queryClient.getQueryData(['userType']) as useSelectType

  const { name } = useNameStore()
  const { yesOrNo } = yesOrNoStore()
  const { num } = choiceNumStore()
  const { mutate: postUserMutate } = usePostUser()
  const { mutate: postUserTypeMutate } = useUserType()

  const [btnActive, setBtnActive] = useState(false)
  const [isGoPrevPage, setIsGoPrevPage] = useState(false)

  function checkPath(path: string) {
    switch (path) {
      case '/choice':
        useEffect(() => {
          setBtnActive(true)
        }, [])

        useEffect(() => {
          setBtnActive(name.length === 0)
        }, [name])

        useEffect(() => {
          if (useInfo?.userId && isGoPrevPage) {
            router.push(path)
            setIsGoPrevPage(false)
          }
        }, [useInfo?.userId, isGoPrevPage])

        break
      case '/disarray-type':
        useEffect(() => {
          setBtnActive(true)
        }, [])

        useEffect(() => {
          if ([0, 1].includes(yesOrNo)) {
            setBtnActive(false)
          } else {
            setBtnActive(true)
          }
        }, [yesOrNo])
        break
      case '/chat':
        useEffect(() => {
          if (userType?.selectType) {
            router.push(path)
          }
        }, [userType?.selectType])
        break
      default:
        return null
    }
  }

  const onClickNextPage = async (path: string) => {
    if (path === '/type') {
      setBtnActive(false)
      router.push(selectTypeOrCheckPage(num))
    } else if (path === '/choice') {
      postUserMutate(name)
      setIsGoPrevPage(true)
    } else if (path === '/disarray-type') {
      setBtnActive(false)
      router.push(`/type?id=${yesOrNo === 0 ? 'one' : 'two'}`)
    } else if (path === '/chat') {
      postUserTypeMutate({
        userId: useInfo.userId as number,
        selectType: userCurrentType[num],
        question: `${name}님 어떤 진로 고민이 있나요? 고민을 구체적으로 정해주면 더 정확하게 도와줄 수 있어요.`,
        answer:
          num !== 0
            ? null
            : `현재관심있는분야가있나요?${yesOrNo === 0 ? '네,있어요' : '아니요,없어요'}`,
        userType: checkUserType(num, yesOrNo),
      })
    } else {
      router.push(path)
    }
  }

  return {
    btnActive,
    checkPath,
    onClickNextPage,
  }
}

export default useButtonBar
