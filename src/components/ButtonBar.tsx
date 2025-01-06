'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { isBtnActive } from '@/utils/utils'
import useButtonBar from '@/hook/useButtonBar'

interface ButtonBarProps {
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
}: ButtonBarProps) => {
  const router = useRouter()
  const { btnActive, checkPath, onClickNextPage } = useButtonBar()

  checkPath(path)

  const onClickReSelectPage = () => {
    router.push('/choice')
  }

  return (
    <>
      <footer className="mb-8 px-5">
        {isShowReSelect && (
          <button
            onClick={onClickReSelectPage}
            className="mb-4 inline-flex items-center gap-1 text-[0.9375rem] font-medium text-gray1"
          >
            진로 고민 다시 선택하기
            <div className="w-4">
              <Image
                className="!static w-full"
                src="/images/img6.png"
                alt="진로 고민 다시 선택하기 아이콘"
                priority
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </button>
        )}
        <button
          onClick={() => onClickNextPage(path)}
          disabled={btnActive}
          className={`w-full rounded-2xl font-pretendardBold ${isBtnActive(path, btnActive) ? 'bg-black py-4 text-white' : className}`}
        >
          {text}
        </button>
      </footer>
    </>
  )
}

export default ButtonBar
