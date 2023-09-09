"use client"
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";


export default function Portfolio(){
    
    return <div className=" flext flex-col justify-center">
        <Carousel>
                <div>
                <Image
                    src="/pic1.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <Image
                    src="/pic2.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <Image
                    src="/pic3.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <Image
                    src="/pic4.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>

    </div>
}