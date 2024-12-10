'use client'

import { useRouter } from 'next/navigation'

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
  const onClickNextPage = () => {
    router.push(path)
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
            className="mb-4 inline-flex text-[0.9375rem] text-gray1"
          >
            진로 고민 다시 선택하기
            <img src="/images/img6.png" alt="진로 고민 다시 선택하기 아이콘" />
          </button>
        )}
        <button
          onClick={onClickNextPage}
          className={`w-full rounded-lg ${className}`}
        >
          {text}
        </button>
      </div>
    </>
  )
}

export default ButtonBar
