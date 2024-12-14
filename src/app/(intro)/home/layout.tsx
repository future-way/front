import { ReactNode } from 'react'
import Header from '@/components/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-home flex h-dvh flex-col text-center">
      <Header prevLink="" isShowBackBtn={false} width={25} />
      {children}
    </div>
  )
}
