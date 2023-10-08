import HeroOnPage from '@/components/HeroWithButtons'
import Image from 'next/image'
import Link from 'next/link'
import MeterImage from '@/components/meterImage'
import SystemsTextViewer from '@/components/SystemsText'




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 scroll-smooth" id='section-top'>

      <HeroOnPage/>
{/*      
      HERE IS SPACE BENITH THE BUBLES AND START PAGE */}


{/* SYSTEMS SECTION TEXT        SECTION - A */}
<div className='pt-10' id='section-a'></div>
  <SystemsTextViewer/>

<div className="grid place-content-center min-h-screen  px-96 py-96 ">

        <div>Hello Red Zone</div>
        <div className='px-96' id='section-b'>Second section DIV </div>

      </div>

      <div className="grid place-content-center min-h-screen text-gray-50 px-96 py-96 ">
        
            <div>Hello Orange zone</div>
            <div className='px-96' id='section-c'>09</div>

      </div>

      <div className="grid place-content-center min-h-screen  text-gray-50 px-96 py-96 ">

        <div>Hello Green  Zone</div>
        <div className='px-96' id='section-d'>Second section DIV </div>

      </div>


    </main>
  )

}
