import React from 'react'
import IImageTextComponent from './index.types'
import './ImageTextComponent.scss'

const ImageTextComponent = ({
  firstImage = '',
  firstImageAlt = '',
  secondImage,
  secondImageAlt = '',
  heading,
  subtext,
  reverseCard = false
}: IImageTextComponent) => {
  return (
    <div
      className={['normal-card', reverseCard ? 'reverse-card' : ''].join(' ')}
    >
      <div className='main-Image'>
        <img src={firstImage} alt={firstImageAlt} />
      </div>
      <div className='content-Container'>
        {secondImage && (
          <div className='image'>
            <img src={secondImage} alt={secondImageAlt} />
          </div>
        )}
        {heading.split('||').map((heading: string) => (
          <h2>{heading}</h2>
        ))}
        {subtext.split('||').map((subText: string) => (
          <p>{subText}</p>
        ))}
      </div>
    </div>
  )
}

export default ImageTextComponent
