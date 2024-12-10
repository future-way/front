'use client'

import Button from './Button'

interface type {
  isShowBackBtn: boolean
  width: number
  onClick?: () => {}
}

const Header = ({ width, isShowBackBtn }: type) => {
  return (
    <header className="w-full">
      <img src="" alt="" />
      <h1 className="relative py-3 text-base text-gray1">
        {isShowBackBtn ? (
          <Button
            className="absolute inset-y-0 left-[10px]"
            text={<img src="/images/icon-arrow-back.png" alt="뒤로가기" />}
          />
        ) : (
          ''
        )}
        내일 찾기
      </h1>
      <div className="h-1 w-full bg-gray2">
        <div className="h-1 bg-green" style={{ width: `${width}%` }}></div>
      </div>
    </header>
  )
}

export default Header
