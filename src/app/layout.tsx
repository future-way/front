import type { Metadata } from 'next'
import Providers from '../utils/providers'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://find-your-day.duckdns.org'),
  title: '내일 찾기',
  description: '미래를 고민하는 대학생을 위한 진로 상담 서비스',
  openGraph: {
    images: [
      {
        url: '/images/opengraph.jpg',
        alt: '미래를 고민하는 대학생을 위한 진로 상담 서비스',
      },
    ],
  },
  twitter: {
    images: [
      {
        url: '/images/opengraph.jpg',
        alt: '미래를 고민하는 대학생을 위한 진로 상담 서비스',
      },
    ],
  },
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <body className={`font-pretendardMedium antialiased`}>
        <Providers>
          <div className="m-auto min-w-[300px] max-w-[600px]">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
