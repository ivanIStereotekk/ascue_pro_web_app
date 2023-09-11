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
        <div className=" flex flex-row pt-10 pb-10 p-10 justify-center bg-white-200">
        <section className=" p-20 ">
            <SystemsTextViewer/>
        </section>
        </div>
        
                            
            </div>
    
    

        


}