import Guide from '@/components/Guide'
import Title from '@/components/Title'
import ButtonBar from '@/components/ButtonBar'
import Image from 'next/image'

export interface SelectedTypeProps {
  badge: string
  title1: string
  title2: string
  guide1: string
  guide2: string
  imgNum: number
}

const SelectedType = ({
  badge,
  title1,
  title2,
  guide1,
  guide2,
  imgNum,
}: SelectedTypeProps) => {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="relative mx-4 mb-[2.4rem] mt-[3.79rem] flex h-full flex-col justify-end rounded-3xl bg-[linear-gradient(180deg,_#FFAA8E,_#FF765E)]">
          <div className="top-choice-text absolute w-full">
            <span className="inline-block rounded-full bg-orange1 px-5 py-2 font-pretendardSemiBold text-[1.0625rem] text-white">
              {badge}
            </span>
            <Title
              text1={title1}
              text2={title2}
              img=""
              className="color-white mb-6 !font-pretendardBold text-l font-bold text-white"
            />
            <Guide
              text1={guide1}
              text2={guide2}
              className="font-medium text-white"
            />
          </div>
          <div>
            <Image
              className="!static w-auto"
              src={`/images/img${imgNum}.png`}
              alt="막막함 마스코트"
              priority
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </main>
      <ButtonBar
        isShowReSelect
        path="/chat"
        text="상담 시작하기"
        className="bg-black py-4 text-white"
      />
    </>
  )
}

export default SelectedType
