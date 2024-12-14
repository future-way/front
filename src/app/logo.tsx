'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Logo = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/home')
    }, 800)
  }, [])
  return (
    <div className="100dvh flex flex-col justify-center">
      <div className="m-auto h-auto w-[175px]">
        <img className="w-full" src="/images/img10.png" alt="내일찾기" />
      </div>
    </div>
  )
}

export default Logo
