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
              막막형
            </span>
            <TItle
              text1="가고자 하는 길은 있는데"
              text2="준비가 막막하시군요"
              img=""
              className="color-white mb-6 text-white"
            />
            <Guide
              text1="원하는 꿈을 이룰 수 있도록"
              text2="제가 도와드릴게요!"
              className="text-white"
            />
          </div>
          <div>
            <img src="/images/img7.png" alt="막막함 마스코트" />
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
