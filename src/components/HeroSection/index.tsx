import React from 'react'
import './HeroSection.scss'
import { useNavigate } from 'react-router-dom'

interface HeroSectionProps {
  bgImg: string
  heading: string
  styleH1?: React.CSSProperties
  paragraph?: string
  buttonStyle?: React.CSSProperties
  buttonText?: string
  icons?: string[]
  buttonIcon?: string
  buttonRoute?: string
  overlay?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  bgImg,
  heading,
  styleH1,
  paragraph,
  buttonStyle,
  buttonText,
  icons,
  buttonIcon,
  buttonRoute = '/contact-us',
  overlay
}) => {
  const history = useNavigate()

  return (
    <div
      style={
        overlay
          ? {
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${overlay} 100%),url(${bgImg})`
            }
          : { backgroundImage: `url(${bgImg})` }
      }
      className='banner-container'
    >
      <div className='banner'>
        <div className='banner-content-container'>
          <div className='banner-content'>
            <div>
              {heading.split('||').map((text: string) => (
                <h1 style={styleH1}>{text}</h1>
              ))}
            </div>
            <div>
              {paragraph &&
                paragraph
                  .split('||')
                  .map((para: string) => <p className='subtext'>{para}</p>)}
            </div>
            {(buttonText || buttonIcon) && (
              <button
                style={buttonStyle ? buttonStyle : {}}
                onClick={() => history(buttonRoute)}
                className='banner-contact_us_button'
              >
                <p>{buttonText}</p>
                <img src={buttonIcon} alt='img' />
              </button>
            )}
            <div className='subIcons'>
              {icons && <p>Works with</p>}
              {icons &&
                icons.map((icon: string) => <img alt='cloud' src={icon} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
