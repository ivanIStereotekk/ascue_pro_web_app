import Image from "next/image"
export default function HeaderComponent(){
    return <>
    <header className=" flex flex-col justify-end px-20 pt-5 pb-0 bg-transparent">
    <div className="p-100 animate-bounce fixed top-20 left-20 right-20">
            <a href="#section-top"> 
            <Image 
                src="/home.svg" 
                alt="back"
                width="20"
                height="20"
                />
            </a>
        </div>
       
    </header></>
    
}