import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FooterComponent from '@/components/Footer'
import HeaderComponent from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.MAIN_PAGE_TITLE,
  description: process.env.MAIN_PAGE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en">
      
      
      <div className={inter.className}>


      <HeaderComponent/> 
        <div className=" justify-left flex-row border border-hidden border-white"></div>
          <div>{children}</div>
        <div className=" justify-left flex-row border border-hidden border-white"></div>
      <FooterComponent/>

      </div>
      
    </html>
  )
}
