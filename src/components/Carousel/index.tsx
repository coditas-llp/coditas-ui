import React from 'react'
import { useState } from 'react'
import './Carousel.scss'
import NextArrow from '../../images/NextArrow.png'
const Carousel: React.FC = (props: any) => {
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    setIndex(index === props.length - 1 ? 0 : index + 1)
  }

  return (
    <div className='carousel'>
      {props.map((content: any) => ({ content }))}
      <button onClick={nextImage}>
        <img src={NextArrow} alt='next-arrow' />
      </button>
    </div>
  )
}
export default Carousel
