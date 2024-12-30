import UserName from './username'
import Title from '@/components/Title'
import ButtonBar from '@/components/ButtonBar'

const page = () => {
  return (
    <>
      <main className="m-11 mx-5 flex flex-1 flex-col items-center">
        <Title
          text1="뭐라고 부를까요?"
          img="/images/img2.png"
          alt="뭐라고 부를지 묻는 마스코트 모모"
          imgClassName="w-[3.6rem] m-auto"
        />
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
