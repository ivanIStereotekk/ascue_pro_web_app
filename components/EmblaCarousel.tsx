import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import imageByindex, { images } from '@/components/imageByIndex'

import Image from 'next/image'
import imageByIndex from '@/components/imageByIndex'



const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Image

                src={imageByIndex(index)}
                alt="Your alt text"
                width={800}
                height={800}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
