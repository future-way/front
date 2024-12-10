import Guide from '@/components/Guide'
import TItle from '@/components/TItle'
import ButtonBar from '@/components/ButtonBar'

const page = () => {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="relative mx-4 my-8 flex h-full flex-col justify-end rounded-3xl bg-[linear-gradient(180deg,_#FFAA8E,_#FF765E)]">
          <div className="top-choice-text absolute w-full">
            <span className="inline-block rounded-full bg-green px-5 py-2 font-pretendardSemiBold text-[1.0625rem] text-white">
              망설임형
            </span>
            <TItle
              text1="가고자 하는 길은 있는데"
              text2="확신이 안서서 고민이시군요"
              img=""
              className="color-white mb-6 text-white"
            />
            <Guide
              text1="저와 함께 왜 그 길을 선택하셨는지"
              text2="다시 되짚어 봐요!"
              className="text-white"
            />
          </div>
          <div>
            <img src="/images/img5.png" alt="망설임 마스코트" />
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

export default page
