import Guide from '@/components/Guide'
import TItle from '@/components/TItle'
import ButtonBar from '@/components/ButtonBar'

export default function Page() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <TItle
          text1="만나서 반가워요!"
          img="/images/img1.png"
          className="text-l mb-6 mt-0"
        />
        <Guide
          text1="저는 당신의 진로를 안내해줄 모모에요"
          text2="진로에 대해 같이 찾아볼까요"
        />
      </main>
      <ButtonBar
        path="/title"
        text="안녕 모모!"
        className="bg-orange1 py-4 text-base text-white"
      />
    </>
  )
}
