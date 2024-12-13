'use client'

import { steps } from '@/app/(intro)/choice/usechoice'
import { postUserName, useType } from '@/lib/api'
import { usePostUser, userKey, useUserType } from '@/lib/useQuery'
import { choiceNumStore, useNameStore, yesOrNoStore } from '@/store/store'
import { isBtnActive, selectTypeOrCheckPage } from '@/utils/utils'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface buttonBarType {
  isShowReSelect?: boolean
  path: string
  text: string
  className?: string
}

function checkUserType(choiceType: number, yesOrNo: number) {
  if (choiceType !== 0) {
    return choiceType === 1 ? '망설임형' : '막막형'
  }
  return yesOrNo === 0 ? '혼란형-확신' : '혼란형-불확신'
}

const ButtonBar = ({
  path,
  className,
  text,
  isShowReSelect = false,
}: buttonBarType) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { num } = choiceNumStore()
  const { name, userId, setuserId } = useNameStore()
  const { yesOrNo } = yesOrNoStore()
  const { mutate: postUserMutate } = usePostUser()
  const { mutate: postUserTypeMutate } = useUserType()

  const [btnActive, setBtnActive] = useState(false)

  if (path === '/choice') {
    useEffect(() => {
      setBtnActive(true)
    }, [])

    useEffect(() => {
      if (name.length > 0) {
        setBtnActive(false)
      } else {
        setBtnActive(true)
      }
    }, [name])

    useEffect(() => {
      const userInfo = queryClient.getQueryData(['userData'])
      if (userInfo) {
        setuserId((userInfo as useType).userId)
        router.push(path)
      }
    }, [queryClient.getQueryData(['userData'])])
  }

  if (path === '/disarray-type') {
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
  }

  const onClickNextPage = async () => {
    if (path === '/type') {
      setBtnActive(false)
      router.push(selectTypeOrCheckPage(num))
    } else if (path === '/choice') {
      postUserMutate(name)
    } else if (path === '/disarray-type') {
      setBtnActive(false)
      router.push(`/type?id=${yesOrNo === 0 ? 'one' : 'two'}`)
    } else if (path === '/chat') {
      postUserTypeMutate({
        userId: userId as number,
        selectType: steps[num],
        question: `${name}님 어떤 진로 고민이 있나요? 고민을 구체적으로 정해주면 더 정확하게 도와줄 수 있어요.`,
        answer:
          num !== 0
            ? null
            : `현재관심있는분야가있나요?${yesOrNo === 0 ? '네,있어요' : '아니요,없어요'}`,
        userType: checkUserType(num, yesOrNo),
      })
      router.push(path)
    } else {
      router.push(path)
    }
  }

  const onClickReSelectPage = () => {
    router.push('/choice')
  }

  return (
    <>
      <div className="mb-8 px-5">
        {isShowReSelect && (
          <button
            onClick={onClickReSelectPage}
            className="mb-4 inline-flex items-center gap-1 text-[0.9375rem] font-medium text-gray1"
          >
            진로 고민 다시 선택하기
            <div className="w-4">
              <img
                className="w-auto"
                src="/images/img6.png"
                alt="진로 고민 다시 선택하기 아이콘"
              />
            </div>
          </button>
        )}
        <button
          onClick={onClickNextPage}
          disabled={btnActive}
          className={`w-full rounded-2xl ${isBtnActive(path, btnActive) ? 'bg-black py-4 text-white' : className}`}
        >
          {text}
        </button>
      </div>
    </>
  )
}

export default ButtonBar
