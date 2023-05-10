import React from 'react'
import './HeroSection.scss'
import { useNavigate } from 'react-router-dom'
import mail from '../../images/mail.png'

interface HeroSectionProps {
  bgImg: string
  heading: string
  styleH1: React.CSSProperties
  paragraph?: string
  buttonStyle: React.CSSProperties
  buttonText?: string
  icons: string[]
}

const HeroSection: React.FC<HeroSectionProps> = ({
  bgImg,
  heading,
  styleH1,
  paragraph,
  buttonStyle,
  buttonText,
  icons
}) => {
  const history = useNavigate()

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
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
            <button
              style={buttonStyle}
              onClick={() => history('/contactus')}
              className='banner-contact_us_button'
            >
              {buttonText && <p>{buttonText}</p>}
              <img src={mail} alt='img' />
            </button>
            <div className='subIcons'>
              <p>Works with</p>
              {icons.map((icon: string) => (
                <img alt='cloud' src={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
