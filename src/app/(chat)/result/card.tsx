const Card = () => {
  return (
    <div className="mx-5 rounded-xl bg-white py-8">
      <h2 className="text-2xl">
        <span className="text-green">김내일</span>님 상담카드
      </h2>
      <p className="text-m text-gray1">{new Date().toLocaleDateString()}</p>
      <div>
        <img className="m-auto" src="/images/img18.png" alt="" />
      </div>
      <div className="my-6">
        <ul className="flex flex-wrap justify-center gap-2">
          <li className="bg-orange3 text-m inline-block rounded-full px-3.5 py-1.5 font-pretendardSemiBold text-green">
            진취적인 모험가
          </li>
          <li className="bg-orange3 text-m inline-block rounded-full px-3.5 py-1.5 font-pretendardSemiBold text-green">
            탐구형
          </li>
          <li className="bg-orange3 text-m inline-block rounded-full px-3.5 py-1.5 font-pretendardSemiBold text-green">
            노력형
          </li>
        </ul>
      </div>
      <div>
        <p className="mx-5 break-keep font-pretendardSemiBold text-slg text-black">
          차은우 님은 도전과 안정의 균형을 이루며 탐구와 노력으로 성장하는
          진취적인 모험가입니다.
        </p>
      </div>
    </div>
  )
}

export default Card
