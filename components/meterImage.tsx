import Image from 'next/image';

export default function MeterImage(){
    return <div>
    <Image 
                src="/counter.jpeg" 
                alt="meter"
                width="420"
                height="420"
                />
    </div>
}