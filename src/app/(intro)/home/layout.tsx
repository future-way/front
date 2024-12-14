import { ReactNode } from 'react'
import Header from '@/components/Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="fex-col flex h-screen text-center">
      <Header prevLink="" isShowBackBtn={false} width={25} />
      {children}
    </div>
  )
}
