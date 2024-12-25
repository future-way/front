import { ReactNode } from 'react'
import Header from '@/components/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh flex-col text-center">
      <Header prevLink="/title" isShowBackBtn width={60} />
      {children}
    </div>
  )
}
