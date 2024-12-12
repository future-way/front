import Guide from '@/components/Guide'
import TItle from '@/components/TItle'
import ButtonBar from '@/components/ButtonBar'
import YesOrNo from './yesorno'

const page = () => {
  // grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)]
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <TItle
          text1="현재 관심있는 분야가 있나요"
          text2="있나요?"
          img="/images/img2.png"
          className="mb-6 mt-0 font-black"
        />
        <Guide
          text1="아직 해당 분야에"
          text2=" 전문적인 지식이 없어도 괜찮아요."
        />
        <YesOrNo></YesOrNo>
      </main>
      <ButtonBar
        path="/disarray-type"
        text="다음으로"
        className="bg-gray3 py-4 text-white"
      />
    </>
  )
}

export default page
