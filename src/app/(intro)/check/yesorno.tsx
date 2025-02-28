'use client'

import Image from 'next/image'
import { yesOrNoStore } from '@/store/store'
import { btnCont } from '@/constants'

const YesOrNo = () => {
  const { yesOrNo, setYesOrNo } = yesOrNoStore()

  const onClickBtn = (num: 0 | 1) => {
    setYesOrNo(num)
  }

  return (
    <section className="mt-8 flex w-full gap-4 px-5">
      {btnCont.map((item, idx) => {
        return (
          <button
            key={idx}
            onClick={() => onClickBtn(idx as 0 | 1)}
            className={`${yesOrNo === idx ? 'border bg-orange4 bg-opacity-5' : 'bg-gray5'} w-full rounded-2xl border-orange4 py-12`}
          >
            <div className="m-auto mb-3 w-[4.7rem]">
              <Image
                className="!static w-full"
                src={`/images/img${item.img}.png`}
                alt={item.imgAlt}
                priority
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <span
              className={`${yesOrNo === idx ? 'text-orange1' : 'text-gray1'} font-pretendardSemiBold text-slg`}
            >
              {item.content}
            </span>
          </button>
        )
      })}
    </section>
  )
}

export default YesOrNo
