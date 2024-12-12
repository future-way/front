import Guide from '@/components/Guide'
import TItle from '@/components/TItle'
import ButtonBar from '@/components/ButtonBar'

export default function Page() {
  // grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)]
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <TItle
          text1="만나서 반가워요!"
          img="/images/img1.png"
          className="mb-6 mt-0 text-[2rem] font-black"
        />
        <Guide
          text1="저는 당신의 진로를 안내해줄 모모에요"
          text2="진로에 대해 같이 찾아볼까요"
        />
      </main>
      <ButtonBar
        path="/title"
        text="다음으로"
        className="bg-black py-4 text-white"
      />
    </>
  )
}
