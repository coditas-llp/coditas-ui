import React, { useState, Fragment } from 'react'
import './VerticalCarousel.scss'
import whiteQuotes from 'whiteQuotes.png'

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
  const [active, setActive] = useState<any>({
    current: 0,
    next: null
  })
  return (
    <div className='vertical-carousel'>
      <div className='content'>
        <img
          src={whiteQuotes}
          alt='white-quotes'
          className='white-quotes'
        ></img>
        <p
          className='content__review'
          dangerouslySetInnerHTML={{
            __html: carouselContent[active.current]?.review
          }}
        ></p>
        <h4>{carouselContent[active.current].name}</h4>
        <p className='designation'>
          {carouselContent[active.current].designation}
        </p>
      </div>
      <div className='vertical-carousel__tabs'>
        {carouselContent.map((data: CarouselContent, index: number) => (
          <Fragment>
            {active.current === 0 && index === 0 && (
              <button
                onClick={() =>
                  setActive({
                    current: carouselContent.length - 1,
                    next: active.current
                  })
                }
              >
                <img
                  alt='client'
                  src={carouselContent[carouselContent.length - 1].image}
                ></img>
              </button>
            )}
            <button
              key={`index${index}`}
              className={
                active.current === index
                  ? 'active'
                  : index !== active.current - 1 && index !== active.current + 1
                  ? 'hide'
                  : ''
              }
              onClick={() =>
                setActive({ current: index, next: active.current })
              }
            >
              <img alt='client' src={data.image}></img>
            </button>
            {active.current === carouselContent.length - 1 &&
              index === carouselContent.length - 1 && (
                <button
                  className=''
                  onClick={() =>
                    setActive({ current: 0, next: active.current })
                  }
                >
                  <img alt='client' src={carouselContent[0].image}></img>
                </button>
              )}
          </Fragment>
        ))}
      </div>
      <div className='name-design'>
        <h4>{carouselContent[active.current].name}</h4>
        <p>{carouselContent[active.current].designation}</p>
      </div>
    </div>
  )
}

export default VerticalCarousel
