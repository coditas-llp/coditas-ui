import React, { useState } from 'react'
import './Accordian.scss'
import Add from 'add.svg'
import Remove from 'remove.svg'
import AddW from 'addW.svg'
import RemoveW from 'removeW.svg'

interface IAccordionProps {
  index: number
  image: string
  title: string
  signColor: string
  content: React.ReactNode
}

const Accordion = (props: IAccordionProps) => {
  const [active, setActive] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    if (active === index) {
      setActive(null)
    } else {
      setActive(index)
    }
  }

  return (
    <div className='accordion-item'>
      <div className='accordion-head' onClick={() => handleOpen(props.index)}>
        <div className='accordion-icon-title'>
          <img src={props.image} alt='icons' />
          <p>{props.title}</p>
        </div>
        <div className='accordion-toggle'>
          {active === props.index ? (
            <img
              src={require(props.signColor === 'white' ? RemoveW : Remove)}
              alt='remove'
            />
          ) : (
            <img
              src={require(props.signColor === 'white' ? AddW : Add)}
              alt='add'
            />
          )}
        </div>
      </div>
      {active === props.index && (
        <div className='accordion-content'>{props.content}</div>
      )}
    </div>
  )
}

export default Accordion
