import UserName from './username'
import TItle from '@/components/TItle'
import ButtonBar from '@/components/ButtonBar'

const page = () => {
  // grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)]
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <TItle text1="뭐라고 부를까요?" img="/images/img2.png" />
        <UserName />
      </main>
      <ButtonBar
        path="/choice"
        text="다음으로"
        className="bg-gray7 py-4 font-bold text-white"
      />
    </>
  )
}

export default page
