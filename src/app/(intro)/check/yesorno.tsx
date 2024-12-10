'use client'

import { useState } from 'react'

const btnCont = [
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

const YesOrNo = () => {
  const [active, setActive] = useState(-1)

  const onClickBtn = (num: number) => {
    setActive(num)
  }

  return (
    <div className="mt-8 flex w-full gap-4 px-5">
      {btnCont.map((item, idx) => {
        return (
          <button
            key={idx}
            onClick={() => onClickBtn(idx)}
            className={`${active === idx ? 'bg-orange2 border border-green bg-opacity-50' : 'bg-gray5'} w-full rounded-2xl py-9`}
          >
            <img
              className="m-auto mb-3"
              src={`/images/img${item.img}.png`}
              alt={item.imgAlt}
            />
            <span
              className={`${active === idx ? 'text-green' : 'text-gray1'} font-pretendardSemiBold text-slg`}
            >
              {item.content}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default YesOrNo
