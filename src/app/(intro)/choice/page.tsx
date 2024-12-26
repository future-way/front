import Guide from '@/components/Guide'
import UserChoice from './userchoice'
import ButtonBar from '@/components/ButtonBar'
import ChoiceTitle from './choicetitle'

const page = () => {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <ChoiceTitle />
        <Guide
          text1="고민을 구체적으로 정해주시면"
          text2="더 정확하게 도와드릴 수 있어요"
        />
        <UserChoice />
      </main>
      <ButtonBar
        path="/type"
        text="다음으로"
        className="bg-black py-4 font-bold text-white"
      />
    </>
  )
}

export default page
