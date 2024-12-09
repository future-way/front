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
      <h1 className="text-gray1 relative py-3 text-base">
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
      <div className="bg-gray2 h-1 w-full">
        <div className="bg-green h-1" style={{ width: `${width}%` }}></div>
      </div>
    </header>
  )
}

export default Header
