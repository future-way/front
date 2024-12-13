'use client'

import CircularProgressBar from './circularprogressbar'

export interface loadingTextType {
  title1: string
  title2: string
  guide1: string
  guide2: string
  progress?: number
}

const Loading = ({
  title1,
  title2,
  guide1,
  guide2,
  progress,
}: loadingTextType) => {
  return (
    <div className="flex h-screen flex-col text-center">
      <header className="h-10">
        <h1 className="text-base leading-10 text-gray1">내일찾기</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center">
        <div>
          <CircularProgressBar
            sqSize={114}
            strokeWidth={9}
            percentage={progress as number}
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
      </main>
    </div>
  )
}

export default Loading
