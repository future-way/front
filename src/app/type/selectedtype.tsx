import Guide from '@/components/Guide'
import TItle from '@/components/TItle'
import ButtonBar from '@/components/ButtonBar'

export interface selectedType {
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
}: selectedType) => {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="relative mx-4 my-8 flex h-full flex-col justify-end rounded-3xl bg-[linear-gradient(180deg,_#FFAA8E,_#FF765E)]">
          <div className="top-choice-text absolute w-full">
            <span className="inline-block rounded-full bg-green px-5 py-2 font-pretendardSemiBold text-[1.0625rem] text-white">
              {badge}
            </span>
            <TItle
              text1={title1}
              text2={title2}
              img=""
              className="color-white mb-6 text-white"
            />
            <Guide text1={guide1} text2={guide2} className="text-white" />
          </div>
          <div>
            <img src={`/images/img${imgNum}.png`} alt="막막함 마스코트" />
          </div>
        </div>
      </main>
      <ButtonBar
        isShowReSelect
        path="/type"
        text="상담 시작하기"
        className="bg-black py-4 text-white"
      />
    </>
  )
}

export default SelectedType
