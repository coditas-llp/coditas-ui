import React from 'react'
import './Card.scss'
import { useNavigate } from 'react-router-dom'

interface ICardProps {
  icon: string
  heading: string
  paragraph: string
  more_label: string
  buttonRoute: string
}

const Card = (props: ICardProps) => {
  const history = useNavigate()
  return (
    <div className='card'>
      <img src={props.icon} alt='service-icon' />
      <h3>{props.heading}</h3>
      <div>
        {props.paragraph.split('||').map((text) => (
          <p>{text}</p>
        ))}
      </div>
      <button onClick={() => history(`${props.buttonRoute}`)}>
        {props.more_label}
      </button>
    </div>
  )
}

export default Card
