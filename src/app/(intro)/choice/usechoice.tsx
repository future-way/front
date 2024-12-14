'use client'

import { choiceNumStore } from '@/store/store'

export const steps = [
  '무슨일을 해야할지 모르겠어',
  '이 길이 맞는지 확신이 안서',
  '이 길로 가려면 뭘 해야하는지 잘 모르겠어',
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
        <div className="bg-pos-size-auto w-full bg-[url('/images/line.png')] bg-no-repeat">
          {steps.map((step, idx) => {
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
                    <img src={`/images/img${imgList[idx]}.png`} alt="" />
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
      </div>
    </>
  )
}

export default UseChoice
