'use client'

import Guide from '@/components/Guide'
import Title from '@/components/Title'
import ButtonBar from '@/components/ButtonBar'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    if (!sessionStorage.getItem('hasRefreshed')) {
      sessionStorage.setItem('hasRefreshed', 'true')
      window.location.reload()
    }
  }, [])

  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <Title
          text1="만나서 반가워요!"
          img="/images/img1.png"
          alt="돋보기를 들고 있는 마스코트 모모"
          className="mb-6 mt-0 text-l"
        />
        <Guide
          text1="저는 당신의 진로를 안내해줄 모모에요"
          text2="진로에 대해 같이 찾아볼까요"
        />
      </main>
      <ButtonBar
        path="/title"
        text="안녕 모모!"
        className="bg-orange1 py-4 text-base text-white"
      />
    </>
  )
}
