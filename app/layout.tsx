import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ASCUE.PRO - Сайт Компании ',
  description: 'Системы комерческого учета и сбора данных воды, тепла, газа и электроэнергии. Разработка, монтаж, обработка данных, и все что связано с сокращением издержек энергии',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
