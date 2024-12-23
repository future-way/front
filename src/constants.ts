export const userTypes = {
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

export const btnCont = [
  {
    img: 11,
    imgAlt: '웃는 얼굴',
    content: '네, 있어요',
  },
  {
    img: 12,
    imgAlt: '슬픈 얼굴',
    content: '아니요, 없어요',
  },
]

export const resultImgType: { [key: string]: number } = {
  '혼란형-불확신': 20,
  '혼란형-확신': 18,
  망설임형: 19,
  막막형: 25,
}

export const userCurrentType = [
  '무슨일을 해야할지 모르겠어',
  '이 길이 맞는지 확신이 안서',
  '이 길로 가려면 뭘 해야하는지 잘 모르겠어',
]
