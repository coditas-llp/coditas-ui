import React from 'react'
import Badge from 'ic_badge.png'
import './GPTW.scss'

const GPTWBadge: React.FC = () => {
  return (
    <div className='parent-div'>
      <div className='great-place'>
        <img className='greatPlaceImg' src={Badge} alt='GPTW' />
        <h3 className='badgeTitle'>Build your career</h3>
        <p className='badgeDescription'>
          Be a part of a certified Great Place to Work!
        </p>
      </div>
    </div>
  )
}

export default GPTWBadge
