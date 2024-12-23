import { checkUnUseFirstChildArr } from '@/utils/utils'

interface summaryProps {
  advice: Array<string>
  way: Array<string>
  summary: string
  name: string
  holland: Array<string>
}

const Summary = ({ name, advice, way, summary, holland }: summaryProps) => {
  const filterWay = checkUnUseFirstChildArr(way)
  const filterAdvice = checkUnUseFirstChildArr(advice)
  const filterHolland = checkUnUseFirstChildArr(holland)
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
          <ul>
            {filterHolland.map((item, idx) => {
              if (!filterHolland[idx * 2]) {
                return ''
              }

              return (
                <li key={idx}>
                  <em className="text-m not-italic text-black">
                    {filterHolland[idx * 2]}
                  </em>
                  <p className="my-3 text-m text-gray1">
                    {filterHolland[idx * 2 + 1]}
                  </p>
                </li>
              )
            })}
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
            {filterAdvice.map((item, idx) => {
              if (!advice[idx * 2]) {
                return ''
              }
              return (
                <li key={idx}>
                  <em className="text-m not-italic text-black">
                    {filterAdvice[idx * 2]}
                  </em>
                  <p className="my-3 text-m text-gray1">
                    {filterAdvice[idx * 2 + 1]}
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
