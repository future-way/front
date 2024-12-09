'use client'

import { useState } from 'react'
import style from './usechoice.module.css'
import { choiceNumStore } from '@/store/store'

const steps = [
  '무슨 일을 해야 할지 모르겠어요',
  '이 길이 맞는지 확신이 안 서요',
  '이 길로 가려면 뭘 해야 하는지 잘 모르겠어요',
]

const imgList = [4, 13, 14]

const UseChoice = () => {
  const { num, setChoiceNum } = choiceNumStore()

  const onClickBtn = (num: number) => {
    setChoiceNum(num as 0 | 1 | 2)
  }

  return (
    <>
      <div className="mt-6 flex w-full flex-col justify-center px-5">
        <div className={`w-full ${style.chat_container}`}>
          {steps.map((step, idx) => {
            return (
              <button
                onClick={() => onClickBtn(idx)}
                key={idx}
                className={`w-full ${num === idx ? style.bubble : style.text}`}
              >
                <span className={`${num === idx ? '' : style.circle}`}>
                  {num === idx ? (
                    <img src={`/images/img${imgList[idx]}.png`} alt="" />
                  ) : (
                    ''
                  )}
                </span>
                <p
                  className={`w-full rounded-lg ${num === idx ? 'text-green' : 'text-gray1'}`}
                >
                  {step}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default UseChoice
