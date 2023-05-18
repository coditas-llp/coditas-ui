import React from 'react'
import { useState } from 'react'
import './Carousel.scss'
import NextArrow from 'NextArrow.png'

interface CarouselProps {
  length: number
  content: any[]
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    setIndex(index === props.length - 1 ? 0 : index + 1)
  }

  return (
    <div className='carousel'>
      {props.content.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
      <button onClick={nextImage}>
        <img src={NextArrow} alt='next-arrow' />
      </button>
    </div>
  )
}

export default Carousel
