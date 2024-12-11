import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col bg-black text-center">
      <header>
        <h1 className="relative py-3 text-base text-white">상담카드</h1>
      </header>
      {children}
    </div>
  )
}
