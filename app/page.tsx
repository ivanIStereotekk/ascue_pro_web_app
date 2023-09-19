import HeroOnPage from '@/components/HeroWithButtons'
import Image from 'next/image'
import Link from 'next/link'


/// ABOUT SCROLL NAV   - https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 scroll-smooth">


      <HeroOnPage/>


      <div className="grid place-content-center min-h-screen bg-gray-900 text-gray-50 px-96 py-96">

            <div>Hello Gray zone</div>
            <div className='px-96' id='section-a'>09</div>
           


      </div>

      <div className="grid place-content-center min-h-screen bg-red-900 text-gray-50 px-96 py-96">

        <div>Hello Red Zone</div>
        <div className='px-96' id='section-b'>Second section DIV </div>

      </div>

      <div className="grid place-content-center min-h-screen bg-orange-400 text-gray-50 px-96 py-96">
        
            <div>Hello Orange zone</div>
            <div className='px-96' id='section-c'>09</div>

      </div>

      <div className="grid place-content-center min-h-screen bg-green-900 text-gray-50 px-96 py-96">

        <div>Hello Green  Zone</div>
        <div className='px-96' id='section-d'>Second section DIV </div>

      </div>


    </main>
  )

}
