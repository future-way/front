import Guide from '@/components/Guide'
import Title from '@/components/Title'
import ButtonBar from '@/components/ButtonBar'
import YesOrNo from './yesorno'

const page = () => {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <Title
          text1="현재 관심있는 분야가 있나요"
          text2="있나요?"
          img="/images/img2.png"
          className="mb-3 mt-0 font-black"
          imgClassName="w-[3.6rem]"
        />
        <Guide
          text1="아직 해당 분야에"
          text2=" 전문적인 지식이 없어도 괜찮아요."
        />
        <YesOrNo />
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
