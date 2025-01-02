'use client'

import Image from 'next/image'

export interface ErrorProps {
  errorText?: string
}

const GlobalError = ({ errorText = '' }: ErrorProps) => {
  return (
    <div className="flex h-dvh flex-col text-center">
      <header className="h-10">
        <h1 className="text-base leading-10 text-gray1">내일찾기</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="m-auto">
          <div className="m-auto w-20">
            <Image
              className="!static m-auto !w-auto"
              src="/images/img2.png"
              alt="마스코트"
              priority
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className={`mt-5 text-center text-slg text-gray1`}>
            현재 페이지에 에러가 있습니다.
            {errorText && <span className="block">{errorText}</span>}
          </p>
        </div>
      </main>
    </div>
  )
}

export default GlobalError
