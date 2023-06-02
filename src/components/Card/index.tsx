import './Card.scss'
import { useNavigate } from 'react-router-dom'
import star_bullet_icon from './star_bullet_icon.png';

interface ICardProps {
  icon?: string
  heading?: string
  paragraph?: string
  more_label?: string
  buttonRoute?: string
}

const Card = (props: ICardProps) => {
  const history = useNavigate();
  return (
    <div className='card'>
      <div className='image-container'>
        <img src={props.icon} alt='service-icon' />
      </div>
      <h3>{props.heading}</h3>
      <div className='description'>
        {props.paragraph && props.paragraph.split('||').map((text) => (
          <div className='single-description'>
            <img src={star_bullet_icon} alt='start bullet icon' className='bullet-point' />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
