import { ReactNode } from 'react'
import Header from '@/components/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="100dvh flex flex-col text-center">
      <Header prevLink="" isShowBackBtn={false} width={60} />
      {children}
    </div>
  )
}
