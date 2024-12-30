'use client'

import Image from 'next/image'
import { userCurrentType } from '@/constants'
import { choiceNumStore } from '@/store/store'
import { useEffect } from 'react'

const imgList = [4, 13, 14]

const UserChoice = () => {
  useEffect(() => {
    const container = document.querySelector('.desktop_width') as HTMLElement

    if (container) {
      container.style.overflowY = 'visible'
    }
  }, [])

  const { num, setChoiceNum } = choiceNumStore()

  const onClickBtn = (num: number) => {
    setChoiceNum(num as 0 | 1 | 2)
  }

  return (
    <>
      <section className="mt-6 flex w-full flex-col justify-center px-5">
        <div className="bg-pos-size-auto w-full bg-[url('/images/line.png')] bg-no-repeat">
          {userCurrentType.map((step, idx) => {
            return (
              <button
                onClick={() => onClickBtn(idx)}
                key={idx}
                className={`w-full ${num === idx ? 'bubble' : 'text'}`}
              >
                <span
                  className={`${num === idx ? 'h-9 w-9' : 'h-4 w-4 rounded-full bg-gray5'}`}
                >
                  {num === idx ? (
                    // <img src={`/images/img${imgList[idx]}.png`} alt="" />
                    <Image
                      className="!static w-3"
                      src={`/images/img${imgList[idx]}.png`}
                      alt=""
                      priority
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    ''
                  )}
                </span>
                <p
                  className={`w-full rounded-lg ${num === idx ? 'text-orange1' : 'pl-2 text-gray1'}`}
                >
                  {step}
                </p>
              </button>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default UserChoice
