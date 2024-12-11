import ButtonBar from '@/components/ButtonBar'
import Card from './card'
import Summary from './summary'

const page = () => {
  return (
    <div>
      <Card />
      <Summary />
      <ButtonBar
        path="/home"
        text="처음부터 다시하기"
        className="bg-green py-4 text-white"
      />
    </div>
  )
}

export default page
