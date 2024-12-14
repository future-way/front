import TypeContent from './typecontent'
import { selectedType } from './selectedtype'
import Header from '@/components/Header'

const types = {
  one: {
    badge: '혼란형-확신',
    title1: '관심있는 분야가',
    title2: '확실하시군요',
    guide1: '그럼 저와 함께',
    guide2: '구체적인 직업을 골라봐요!',
    imgNum: 8,
  },
  two: {
    badge: '혼란형-불확신',
    title1: '관심있는 분야가',
    title2: '아직 못찾으셨군요',
    guide1: '어떤 쪽에 관심과 흥미가 있을지',
    guide2: '저와 함께 찾아봐요!',
    imgNum: 9,
  },
  three: {
    badge: '망설임형',
    title1: '가고자 하는 길은 있는데',
    title2: '확신이 안서서 고민이시군요',
    guide1: '저와 함께 왜 그 길을 선택하셨는지',
    guide2: '다시 되짚어 봐요!',
    imgNum: 5,
  },
  four: {
    badge: '막막형',
    title1: '가고자 하는 길은 있는데',
    title2: '준비가 막막하시군요',
    guide1: '원하는 꿈을 이룰 수 있도록',
    guide2: '제가 도와드릴게요!',
    imgNum: 7,
  },
}

type params = Promise<{ id: string }>
const page = async ({ searchParams }: { searchParams: params }) => {
  const { id } = await searchParams

  if (!id || !['one', 'two', 'three', 'four'].includes(id)) {
    return <div>잘못된 접근입니다.</div>
  }
  const seletedType: selectedType =
    types[id as 'one' | 'two' | 'three' | 'four']
  return (
    <>
      <TypeContent type={seletedType}></TypeContent>
    </>
  )
}

export default page
