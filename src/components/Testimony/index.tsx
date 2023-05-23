import React, { useState } from 'react'
import './Testimony.scss'
import comma from 'comma.svg'

import buttonLeft from 'buttonLeft.svg'
import buttonRight from 'buttonsRight.svg'

interface TestimonyProps {
  employeeTestimony: {
    theme: string
    heading: string
    content: {
      image: string
      review: string
      name: string
      designation: string
    }[]
  }
}

const Testimony: React.FC<TestimonyProps> = ({ employeeTestimony }) => {
  const [active, setActive] = useState<number>(0)

  const handleNext = () => {
    setActive(
      active === employeeTestimony?.content?.length - 1 ? 0 : active + 1
    )
  }

  const handlePrev = () => {
    setActive(
      active === 0 ? employeeTestimony?.content?.length - 1 : active - 1
    )
  }

  return (
    <div className={`testimonyWrapper ${employeeTestimony.theme}`}>
      <div className='heading'>{employeeTestimony?.heading}</div>
      {employeeTestimony?.content.map((data, index) => (
        <div className={index === active ? 'active' : 'inactive'} key={index}>
          <div className='image'>
            <img src={data.image} alt='testimony' className='person' />
          </div>
          <div className='comma'>
            <img src={comma} alt='comma' />
          </div>
          <div className='details'>
            <div className='subSection'>
              <span className='para'>{data.review}</span>
              <div className='separator' />
              <div className='testimonyDetails'>
                <span className='name'>{data.name}</span>
                <span className='designation'>{data.designation}</span>
              </div>
            </div>
            <img src={data.image} alt='testimony' className='personTestimony' />
          </div>
        </div>
      ))}
      <div className='slide-buttons'>
        <img src={buttonLeft} onClick={handlePrev} alt='left' />
        <img src={buttonRight} onClick={handleNext} alt='right' />
      </div>
    </div>
  )
}

export default Testimony
