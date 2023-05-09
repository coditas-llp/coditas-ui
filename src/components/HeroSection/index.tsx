import React from 'react';
import './HeroSection.scss';
import { useNavigate } from 'react-router-dom';
import mail from "../../images/mail.png"
const HeroSection = (props:any) => {
  const history = useNavigate();
  return (
    <div style={{backgroundImage:`url(${props.bgImg})`}} className='banner-container' >
      <div className="banner">
        <div className="banner-content-container">
          <div className='banner-content' >
            <div>
        {props.heading.split("||").map((text:string)=><h1 style={{...props.styleH1}}>{text}</h1>)}
         </div>
         <div>
          {props?.paragraph  && props?.paragraph.split("||").map((para:string)=> <p className='subtext'>{para}</p>)    }
          </div>
            <button style={{...props.buttonStyle}}
              onClick={() => history('/contactus')}
              className="banner-contact_us_button"
            >

{props?.buttonText &&  <p>{props.buttonText}</p>}
<img src={mail} alt="img" />
            </button>

            <div className='subIcons'>
              <p>Works with</p> 
              {props.icons.map((icon:string)=> <img alt="cloud" src={icon}></img>)}
             
             

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default  HeroSection;