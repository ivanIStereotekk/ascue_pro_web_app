"use client"
import Image from "next/image"
import EmblaCarousel from "@/components/EmblaCarousel"
import { EmblaOptionsType } from 'embla-carousel-react'
import SystemsTextViewer from "@/components/SystemsText"

const OPTIONS = { axis: 'y', align: 'start', containScroll: 'trimSnaps' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



export default function SystemsPage(){
    return <div className="flex flex-col flex-nowrap py-10 px-10">
        <div className=" flex flex-row pb-20 float-left justify-end">
                <Image src="/money.jpeg" alt="money" width={800} height={300}/>
                <div className="px-10"></div>
        </div>

        <div className=" flex flex-auto justify-center ">
            <button className=" h-35 w-152 rounded-md p-1 bg-orange-400 hover:bg-orange-500 outline outline-offset-2 outline-blue-500 ">
                <a className=" font-semibold" href="/order" > 🌀 Я все понял, мне нужно с вами связаться ! </a>
            </button>
        </div>
        
        <div className=" flex flex-row pt-10 pb-10 p-10 justify-center bg-white-200">
        <section className=" p-20 ">
        
            <SystemsTextViewer/>
        </section>

        <div className=" flex flex-col pb-20 float-left justify-center">
                <Image src="/ascue_schedule.png" alt="ascue" width={800} height={300}/>
                <div className="px-10"></div>
        </div>
        </div>
        
                            
            </div>
    
    

        


}