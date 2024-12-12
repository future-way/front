'use client'

import { choiceNumStore, useNameStore, yesOrNoStore } from '@/store/store'
import { isBtnActive, selectTypeOrCheckPage } from '@/utils/utils'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface buttonBarType {
  isShowReSelect?: boolean
  path: string
  text: string
  className?: string
}

const ButtonBar = ({
  path,
  className,
  text,
  isShowReSelect = false,
}: buttonBarType) => {
  const router = useRouter()
  const { num } = choiceNumStore()
  const { yesOrNo } = yesOrNoStore()
  const [btnActive, setBtnActive] = useState(false)

  if (path === '/choice') {
    const { name } = useNameStore()

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

  const onClickNextPage = () => {
    if (path === '/type') {
      router.push(selectTypeOrCheckPage(num))
      setBtnActive(false)
    } else if (path === '/disarray-type') {
      router.push(`/type?id=${yesOrNo === 0 ? 'one' : 'two'}`)
      setBtnActive(false)
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
            className="mb-4 inline-flex items-center gap-1 text-[0.9375rem] text-gray1"
          >
            진로 고민 다시 선택하기
            <img src="/images/img6.png" alt="진로 고민 다시 선택하기 아이콘" />
          </button>
        )}
        <button
          onClick={onClickNextPage}
          disabled={btnActive}
          className={`w-full rounded-lg ${isBtnActive(path, btnActive) ? 'bg-black py-4 text-white' : className}`}
        >
          {text}
        </button>
      </div>
    </>
  )
}

export default ButtonBar
