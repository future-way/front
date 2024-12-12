const Summary = () => {
  return (
    <div className="mx-5 mb-4 mt-2 rounded-[1.25rem] bg-white">
      <div className="px-6 py-7">
        <div className="text-left">
          <em className="text-slg not-italic text-black">
            김내일님의 결과 요약
          </em>
          <p className="text-m my-3 text-gray1">
            김내일 님은 새로운 도전을 즐기고 탐구를 통해 성장하는 것을 선호하는
            성향을 가지고 있습니다. 동시에 안정적인 기반을 중요하게 여기며
            끈기와 성실함으로 목표를 이루는 타입입니다
          </p>
        </div>
        <hr className="bg-gray4" />
        <div className="mt-4 text-left">
          <em className="mb-3 block text-slg not-italic text-black">
            태그 상세 분석
          </em>
          <ul className="ml-4">
            <li className="marker-black list-disc">
              <em className="text-m not-italic text-black">탐구력</em>
              <p className="text-m my-3 text-gray1">
                끊임없이 학습하고 새로운 지식을 얻으려는 열정이 뛰어납니다. 특히
                논리적 사고와 분석적인 접근이 필요한 분야에서 강점을 발휘할 수
                있습니다.
              </p>
            </li>
            <li className="marker-black list-disc">
              <em className="text-m not-italic text-black">도전정신</em>
              <p className="text-m my-3 text-gray1">
                변화와 도전에 긍정적으로 반응하며, 어려움 속 에서도 창의적인
                해결책을 찾아냅니다. 실패를 두려워하지 않고 이를 학습의 기회로
                삼는 태도 가 돋보입니다.
              </p>
            </li>
            <li className="marker-black list-disc">
              <em className="text-m not-italic text-black">안정성 선호</em>
              <p className="text-m my-3 text-gray1">
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
          <ul className="ml-4">
            <li className="marker-black list-decimal">
              <em className="text-m not-italic text-black"> 탐구적 분야</em>
              <p className="text-m my-3 text-gray1">
                빅데이터 분석가, 연구원, 컨설턴트
              </p>
            </li>
            <li className="marker-black list-decimal">
              <em className="text-m not-italic text-black"> 창의적 분야</em>
              <p className="text-m my-3 text-gray1">
                UI/UX 디자이너, 마케팅 기획자, 콘텐츠 크리에이터
              </p>
            </li>
            <li className="marker-black list-decimal">
              <em className="text-m not-italic text-black">
                안정성을 중시하는 분야
              </em>
              <p className="text-m my-3 text-gray1">
                공공기관, 행정 전문가, 프로젝트 매니저
              </p>
            </li>
          </ul>
        </div>
        <hr className="bg-gray4" />
        <div className="mt-4 text-left">
          <em className="mb-3 block text-slg not-italic text-black">
            조언 및 계획
          </em>
          <ul className="ml-4">
            <li className="marker-black list-disc">
              <em className="text-m not-italic text-black">1년 차 목표</em>
              <p className="text-m my-3 text-gray1">
                흥미 있는 분야에 대해 구체적인 정 보를 수집하고 관련 네트워크를
                구축하세요.
              </p>
            </li>
            <li className="marker-black list-disc">
              <em className="text-m not-italic text-black">2년 차 목표</em>
              <p className="text-m my-3 text-gray1">
                변화와 도전에 긍정적으로 반응하며, 어려움 속 에서도 창의적인
                해결책을 찾아냅니다. 실패를 두려워하지 않고 이를 학습의 기회로
                삼는 태도 가 돋보입니다.
              </p>
            </li>
            <li className="marker-black list-disc">
              <em className="text-m not-italic text-black">장기 목표</em>
              <p className="text-m my-3 text-gray1">
                모험적인 선택과 안정적인 기반을 균 형 있게 조합하여 자신만의
                커리어를 만들어 나 가세요.
              </p>
            </li>
          </ul>
        </div>
        <hr className="bg-gray4" />
        <div className="mt-4 text-left">
          <em className="mb-3 block text-slg not-italic text-black">
            추가 참고 자료
          </em>
          <ul className="ml-4">
            <li className="marker-black text-m my-3 list-disc text-gray1">
              자기계발 추천 도서: 성공하는 사람들의 7가지 습관
            </li>
            <li className="marker-black text-m my-3 list-disc text-gray1">
              추천 강의: "데이터 기반 문제 해결" (온라인 코스)
            </li>
            <li className="marker-black text-m my-3 list-disc text-gray1">
              추천 커뮤니티: 진로 탐구를 위한 대학생 네트워 킹 플랫폼
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Summary
