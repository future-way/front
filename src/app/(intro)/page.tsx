import Button from '@/components/Button'
import Guide from '@/components/Guide'
import Header from '@/components/Header'

const page = () => {
  // grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)]
  return (
    <>
      <div className="flex h-screen flex-col text-center">
        <Header isShowBackBtn={false} width={25}></Header>
        <div className="flex flex-1 flex-col items-center justify-center">
          <div>
            <img src="/images/img.png" alt="" />
          </div>
          <h2 className="font-pretendardSemiBold text-[2rem]">
            만나서 반가워요!
          </h2>
          <Guide
            text1="저는 당신의 진로를 안내해줄 모모에요"
            text2="진로에 대해 같이 찾아볼까요"
          />
        </div>
        <div className="mb-8 px-5">
          <Button
            className="w-full rounded-lg bg-black py-4 text-white"
            text="안녕 모모!"
          />
        </div>
      </div>
    </>
  )
}

export default page
