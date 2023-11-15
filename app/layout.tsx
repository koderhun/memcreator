import type {Metadata} from 'next'
import './globals.scss'
import {Header} from '@/components'

export const metadata: Metadata = {
  title: 'MemCreator',
  description: 'Generate mem in this app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
