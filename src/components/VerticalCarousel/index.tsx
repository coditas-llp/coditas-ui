import React, { useState } from 'react'
import './VerticalCarousel.scss'

interface CarouselContent {
  review: string
  name: string
  designation: string
  image: string
}

interface VerticalCarouselProps {
  carouselContent: CarouselContent[]
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({
  carouselContent
}) => {
  const handleActive = (index: number): void => {
    setActive(index)
  }

  const [active, setActive] = useState<number>(1)

  return (
    <div className='vertical-carousel'>
      <div className='content'>
        <p
          className='content__review'
          dangerouslySetInnerHTML={{ __html: carouselContent[active]?.review }}
        ></p>
        <h4>{carouselContent[active].name}</h4>
        <p className='designation'>{carouselContent[active].designation}</p>
      </div>
      <div className='vertical-carousel__tabs'>
        {carouselContent.map((data: CarouselContent, index: number) => (
          <button
            key={`index${index}`}
            className={active === index ? 'active' : ''}
            onClick={() => handleActive(index)}
          >
            <img alt='client' src={data.image}></img>
          </button>
        ))}
      </div>
    </div>
  )
}

export default VerticalCarousel
