import Button from '@/components/Button'
import Image from 'next/image'

interface HeaderProps {
  onGoPrevPage: () => void
  onCounselClose: () => void
}

const Header = ({ onGoPrevPage, onCounselClose }: HeaderProps) => {
  return (
    <header className="relative w-full">
      <Button
        onclick={onGoPrevPage}
        className="absolute inset-y-0 left-[10px] w-6"
        text={
          /*<img src="/images/icon-arrow-back.png" alt="뒤로가기" /> */
          <Image
            className="!static w-full"
            src="/images/icon-arrow-back.png"
            alt="뒤로가기"
            priority
            fill
            style={{ objectFit: 'contain' }}
          />
        }
      />
      <h1 className="py-3 text-center font-pretendardSemiBold text-base text-gray1">
        내일상담
      </h1>
      <Button
        onclick={onCounselClose}
        className="absolute inset-y-0 right-[10px] w-auto text-m text-gray1"
        text="상담종료"
      />
    </header>
  )
}

export default Header
