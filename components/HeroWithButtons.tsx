
import Link from "next/link"

// https://nextjs.org/docs/app/api-reference/components/link


export default function HeroOnPage(){
    return <div className="pb-96 scroll-smooth" id='section-0'>



    <div className="absolute left-100 transform bottom-0 -z-1 " aria-hidden="true">
            <svg  width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="40%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#E3EDF8" offset="67.402%" />
                  <stop stopColor="#C8DCFB" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle className='animate-pulse' cx="652" cy="30" r="28" />
                <circle className="animate-pulse" cx="75" cy="143" r="64" />
                <circle className='animate-pulse' cx="875" cy="461" r="34" />
              </g>
            </svg>
          </div>
    
    
    
          <div className="z-1 max-w-5xl w-full items-left justify-between font-bold  lg:flex">
    
            <p className="fixed left-0 px-5 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-blue-10 pb-2 pt-8 backdrop-blur-2xl dark:border-neutral-300 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-slate-200 lg:p-4 lg:dark:bg-slate-200/30">
            ASCUE.PRO&nbsp;
              <code className=" px-1 font-thin text-sm"> - современный учет расхода энергии</code>
            </p>
            <div className='flex flex-row px-50 font-bold text-lg text-gray-700'>
    
            </div>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              
            </div>
          </div>
          
          <div className="relative flex place-items-center before:absolute before:h-[400px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <img className='flex bg-gray pt-10 pb-10' width="150" height="150" src="./meter.svg" alt="Power-Meter"/>
          
          {/* <h6>ASCUE.PRO</h6> */}
          <iframe className='' src="https://lottie.host/?file=6dadd9cf-5876-4dbb-b5ea-7112de27b2d1/LBwp1loWEI.json"></iframe>
    
          
    
          
          
    {/* <iframe className='flex h-12 w-12' src="https://lottie.host/?file=9ff9f2f9-e88f-412e-930b-b522467ae378/Z9MRM3stEa.json"></iframe> */}
    
    
    
          
       
          </div>
    
          <div className="mb-32 grid text-center lg:max-w-5xl gap-2 lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <Link
              href="#section-a"

              className="group rounded-lg border border-gray-100 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                системы{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              АСКУЭ -Автоматизированная система комерческого учёта электроэнергии. Читать...
              </p>
            </Link>
    
            <Link
              href="#section-b"
              scroll={true}
    
              className="group rounded-lg border border-gray-100 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                портфолио{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Ознакомится с выполненными проектами&nbsp;ASCUE.PRO!
              </p>
            </Link>
    
            <Link
              href="#section-c"
              className="rounded-lg border border-gray-100 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                оформить{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Оставить заявку, связаться с менеджером.
              </p>
            </Link>
    
            <Link
              href="#section-d"
              className="rounded-lg border border-gray-100 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                найти нас{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Наши офисы, и наши контакты...
              </p>
            </Link>
          </div>
    
    
    
          </div>
}