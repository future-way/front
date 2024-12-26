'use client'

import Header from '@/components/Header'
import SelectedType, { SelectedTypeProps } from './selectedtype'
import Loading from '@/components/loading/loading'
import { useNameStore } from '@/store/store'
import { useEffect } from 'react'
import useType from '@/hook/useType'

const TypeContent = ({ type }: { type: SelectedTypeProps }) => {
  const { name } = useNameStore()
  const { calCount, active, count } = useType()

  useEffect(() => {
    const interval = setInterval(() => {
      calCount(interval)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {active ? (
        <div className="flex h-dvh flex-col text-center">
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
