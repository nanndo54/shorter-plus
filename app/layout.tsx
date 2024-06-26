import 'hint.css'
import './globals.css'
import './reset.css'

import { cormorant, inter } from '@/app/fonts'
import Navbar from '@/app/ui/Navbar/Navbar'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
