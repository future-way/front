'use client'

import Header from '@/components/Header'
import SelectedType, { selectedType } from './selectedtype'
import Loading from '@/components/loading/loading'
import { useNameStore } from '@/store/store'
import { useEffect, useState } from 'react'

const TypeContent = ({ type }: { type: selectedType }) => {
  const { name } = useNameStore()
  const [active, setActive] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => {
        const newCount = old + 10
        if (newCount > 100) {
          clearInterval(interval)
          setActive(true)
        }
        return newCount
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {active ? (
        <div className="flex h-screen flex-col text-center">
          <Header prevLink="/choice" isShowBackBtn width={100} />
          <SelectedType {...type} />
        </div>
      ) : (
        <Loading
          title1={`${name}님의`}
          title2="진로 성향을 분석중이에요!"
          guide1="내일찾기만의 진로 성향 분석으로"
          guide2="더욱 정확한 상담이 가능해요"
          progress={count}
        />
      )}
    </>
  )
}

export default TypeContent
