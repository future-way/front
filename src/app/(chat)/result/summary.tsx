interface summaryType {
  advice: Array<string>
  way: Array<string>
  summary: string
  name: string
}

const Summary = ({ name, advice, way, summary }: summaryType) => {
  const filterWay = way.length > 1 && way[0].length > 30 ? way.slice(1) : way

  return (
    <div className="mx-5 mb-4 mt-2 rounded-[1.25rem] bg-white">
      <div className="px-6 py-7">
        <div className="text-left">
          <em className="text-slg not-italic text-black">
            {name}님의 결과 요약
          </em>
          <p className="my-3 text-m text-gray1">{summary}</p>
        </div>
        <hr className="bg-gray4" />
        <div className="mt-4 text-left">
          <em className="mb-3 block text-slg not-italic text-black">
            태그 상세 분석
          </em>
          <ul className="ml-4">
            <li className="marker-black list-disc">
              <em className="text-m not-italic text-black">탐구력</em>
              <p className="my-3 text-m text-gray1">
                끊임없이 학습하고 새로운 지식을 얻으려는 열정이 뛰어납니다. 특히
                논리적 사고와 분석적인 접근이 필요한 분야에서 강점을 발휘할 수
                있습니다.
              </p>
            </li>
            <li className="marker-black list-disc">
              <em className="text-m not-italic text-black">도전정신</em>
              <p className="my-3 text-m text-gray1">
                변화와 도전에 긍정적으로 반응하며, 어려움 속 에서도 창의적인
                해결책을 찾아냅니다. 실패를 두려워하지 않고 이를 학습의 기회로
                삼는 태도 가 돋보입니다.
              </p>
            </li>
            <li className="marker-black list-disc">
              <em className="text-m not-italic text-black">안정성 선호</em>
              <p className="my-3 text-m text-gray1">
                도전 속에서도 일정 수준의 안정감을 중요하게 생각하며, 계획적인
                실행을 통해 신뢰를 쌓는 스 타일입니다.
              </p>
            </li>
          </ul>
        </div>
        <hr className="bg-gray4" />
        <div className="mt-4 text-left">
          <em className="mb-3 block text-slg not-italic text-black">
            추천 진로
          </em>

          <ul>
            {filterWay.length > 1 ? (
              filterWay.map((item, idx) => {
                if (!filterWay[idx * 2]) {
                  return ''
                }
                return (
                  <li key={idx}>
                    <em className="text-m not-italic text-black">
                      {filterWay[idx * 2]}
                    </em>
                    <p className="my-3 text-m text-gray1">
                      {filterWay[idx * 2 + 1]}
                    </p>
                  </li>
                )
              })
            ) : filterWay.length === 1 ? (
              <li>
                <em className="text-m not-italic text-black"></em>
                <p className="my-3 text-m text-gray1">{filterWay[0]}</p>
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>
        <hr className="bg-gray4" />
        <div className="mt-4 text-left">
          <em className="mb-3 block text-slg not-italic text-black">
            조언 및 계획
          </em>

          <ul>
            {advice.map((item, idx) => {
              if (!advice[idx * 2]) {
                return ''
              }
              return (
                <li>
                  <em className="text-m not-italic text-black">
                    {advice[idx * 2]}
                  </em>
                  <p className="my-3 text-m text-gray1">
                    {advice[idx * 2 + 1]}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
        {/* <hr className="bg-gray4" />
        <div className="mt-4 text-left">
          <em className="mb-3 block text-slg not-italic text-black">
            추가 참고 자료
          </em>
          <ul className="ml-4">
            <li className="marker-black my-3 list-disc text-m text-gray1">
              자기계발 추천 도서: 성공하는 사람들의 7가지 습관
            </li>
            <li className="marker-black my-3 list-disc text-m text-gray1">
              추천 강의: "데이터 기반 문제 해결" (온라인 코스)
            </li>
            <li className="marker-black my-3 list-disc text-m text-gray1">
              추천 커뮤니티: 진로 탐구를 위한 대학생 네트워 킹 플랫폼
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default Summary
