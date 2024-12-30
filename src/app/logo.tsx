'use client'

import Image from 'next/image'
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
    <div className="flex h-dvh flex-col justify-center bg-white">
      <div className="next_image_container m-auto h-auto w-[175px]">
        <Image
          className="!static w-full"
          src="/images/img10.png"
          alt="로고"
          priority
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}

export default Logo
