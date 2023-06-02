import React from "react";
import "./Leadership.scss";
import linkedIn from "./linkedIn.svg";
import linkedInMobile from "./linkedInMobile.svg";
import Quotes from "./quotes.png";
const Leadership: React.FC<any> = (props) => {
  return (
    <div className='leadership'>
      <div className='content-section'>
        <h1>{props.leadership.heading}</h1>
        <p>{props.leadership.intro}</p>

        <div className='content'>
          <img className='quotes' alt='quotes' src={Quotes}></img>
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
        <picture>
          <source
            media='(min-width:1049px)'
            srcSet={props.leadership.leaderImg}
          />
          <source
            media='(max-width:1048px)'
            srcSet={props.leadership.leaderImgMobile}
          />
          <img
            className='leaderImg'
            alt='leaderImg'
            src={props.leadership.leaderImg}
          ></img>
        </picture>

        <div className='details'>
          <img
            className='linkedinMobile'
            alt='linkedinMobile'
            src={linkedInMobile}
          ></img>
          <h3 className='leader-name'>{props.leadership.leaderName}</h3>
          <p className='designation'>{props.leadership.leaderDesignation}</p>
        </div>
      </div>
    </div>
  );
};
export default Leadership;
