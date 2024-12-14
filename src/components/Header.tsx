'use client'

import { useRouter } from 'next/navigation'
import Button from './Button'

interface type {
  isShowBackBtn: boolean
  width: number
  onClick?: () => {}
  prevLink?: string
}

const Header = ({ width, isShowBackBtn, prevLink }: type) => {
  const router = useRouter()

  const onBackPage = () => {
    if (prevLink) {
      router.push(prevLink)
    }
  }
  return (
    <header className="w-full">
      <h1 className="relative py-3 text-base text-gray1">
        {isShowBackBtn ? (
          <Button
            onclick={onBackPage}
            className="absolute inset-y-0 left-[10px] w-6"
            text={
              <img
                className="w-auto"
                src="/images/icon-arrow-back.png"
                alt="뒤로가기"
              />
            }
          />
        ) : (
          ''
        )}
        내일 찾기
      </h1>
      <div className="h-1 w-full bg-gray2">
        <div className="h-1 bg-orange1" style={{ width: `${width}%` }}></div>
      </div>
    </header>
  )
}

export default Header
