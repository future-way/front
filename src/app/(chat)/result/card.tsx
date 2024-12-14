interface cardType {
  name: string
  holland: string
  userImgType: number
}

const Card = ({ name, holland, userImgType }: cardType) => {
  const hollandType = holland.replace(/[{}]/g, '').split(',')
  return (
    <div className="mx-5 rounded-[1.25rem] bg-white py-8">
      <h2 className="text-2xl">
        <span className="text-orange1">{name}</span>님 상담카드
      </h2>
      <p className="text-m text-gray1">{new Date().toLocaleDateString()}</p>
      <div>
        <img className="m-auto" src={`/images/img${userImgType}.png`} alt="" />
      </div>
      <div className="my-6">
        <ul className="flex flex-wrap justify-center gap-2">
          {hollandType.map((item, idx) => {
            return (
              <li
                key={idx}
                className="inline-block rounded-full bg-orange3 px-3.5 py-1.5 font-pretendardSemiBold text-m text-orange1"
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
      {/* <div>
        <p className="mx-5 break-keep font-pretendardSemiBold text-slg text-black">
          차은우 님은 도전과 안정의 균형을 이루며 탐구와 노력으로 성장하는
          진취적인 모험가입니다.
        </p>
      </div> */}
    </div>
  )
}

export default Card
