import Button from '@/components/Button'
import UserName from './username'
import TItle from '@/components/TItle'

const page = () => {
  // grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)]
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <TItle
          text1="어떻게 불러드리는게"
          text2="좋을까요"
          img="/images/img2.png"
        ></TItle>
        <UserName />
      </main>
      <div className="mb-8 px-5">
        <Button
          className="w-full rounded-lg bg-gray3 py-4 text-white"
          text="다음으로"
        />
      </div>
    </>
  )
}

export default page
