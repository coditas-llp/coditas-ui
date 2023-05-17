import React from 'react'
import './Leadership.scss'
import linkedIn from 'linkedIn.png'
import Quotes from 'quotes.png'
const Leadership: React.FC<any> = (props) => {
  return (
    <div className='leadership'>
      <div className='content-section'>
        <h1>{props.leadership.heading}</h1>
        <p>{props.leadership.intro}</p>
        <img className='quotes' alt='quotes' src={Quotes}></img>
        <div className='content'>
          <div>
            <p>{props.leadership.content}</p>
            <hr></hr>
            <br></br>
            <div className='linkedIn'>
              <a href={props.linkedInURL} target='_blank' rel='noreferrer'>
                <img src={linkedIn} alt='linkedin'></img>
              </a>
              <div>
                <h3 className='leader-name'>{props.leadership.leaderName}</h3>
                <p className='designation'>
                  {props.leadership.leaderDesignation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='leaderInfo'>
        <img
          className='leaderImg'
          alt='leaderImg'
          src={
            props.screenWidth > 1048
              ? props.leadership.leaderImg
              : props.leadership.leaderImgMobile
          }
        ></img>
        <div className='details'>
          <h3 className='leader-name'>{props.leadership.leaderName}</h3>
          <p className='designation'>{props.leadership.leaderDesignation}</p>
        </div>
      </div>
    </div>
  )
}
export default Leadership
