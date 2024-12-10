import { ReactNode } from 'react'
import Header from '@/components/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col text-center">
      <Header isShowBackBtn width={60} />
      {children}
    </div>
  )
}
