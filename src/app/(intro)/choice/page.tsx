import Guide from '@/components/Guide'
import TItle from '@/components/TItle'
import UseChoice from './usechoice'
import ButtonBar from '@/components/ButtonBar'

const page = () => {
  // grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)]
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <TItle
          text1="진로에 대해"
          text2="어떤 고민이 있으신가요"
          img="/images/img2.png"
          className="mb-6 mt-0 font-black"
        />
        <Guide
          text1="고민을 구체적으로 정해주시면"
          text2="더 정확하게 도와드릴 수 있어요"
        />
        <UseChoice />
      </main>
      <ButtonBar
        path="/type"
        text="다음으로"
        className="bg-black py-4 text-white"
      />
    </>
  )
}

export default page