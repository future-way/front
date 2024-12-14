import { ReactNode } from 'react'
import Header from '@/components/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-svh flex-col text-center">
      <Header prevLink="/choice" isShowBackBtn width={78} />
      {children}
    </div>
  )
}
