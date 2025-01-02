'use client'

import Header from '@/components/Header'
import SelectedType, { SelectedTypeProps } from './selectedtype'
import { useEffect } from 'react'
import useType from '@/hook/useType'
import Loading from './loading'

const TypeContent = ({ type }: { type: SelectedTypeProps }) => {
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
        <Loading count={count} />
      )}
    </>
  )
}

export default TypeContent
