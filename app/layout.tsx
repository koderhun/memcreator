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
      <body>
        <main>
          <Header />
        </main>
      </body>
    </html>
  )
}
