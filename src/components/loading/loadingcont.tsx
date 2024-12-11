'use client'
import CircularProgressBar from './circularprogressbar'
import { useState } from 'react'
import { loadingTextType } from './loading'

const LoadingCont = ({ title1, title2, guide1, guide2 }: loadingTextType) => {
  const [progress, setProgress] = useState(0)

  // const onChangeProgress = () => {
  //   setProgress((prev: number) => prev + 20)
  // }

  return (
    <div>
      <CircularProgressBar
        sqSize={114}
        strokeWidth={9}
        percentage={progress}
        img="images/img2.png"
      />

      <h2 className={`mt-5 font-pretendardSemiBold text-2xl text-black`}>
        {title1}
        <span className="block">{title2}</span>
      </h2>
      <p className={`mt-5 text-center text-slg text-gray1`}>
        {guide1}
        <span className="block">{guide2}</span>
      </p>
    </div>
  )
}

export default LoadingCont
