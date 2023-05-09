import React from 'react';
import "./Accordian.scss"
import Add from "../../images/add.svg"
import Remove from "../../images/remove.svg";
import AddW from "../../images/addW.svg"
import RemoveW from "../../images/removeW.svg";

 const Accordion = (props:any) => {
  const [active,setActive] = React.useState(null);
  const handleOpen=(index:any)=>{
      if(active===index)
      setActive(null);
      else
      setActive(index)
  }

  return (
    <div className="accordion-item">
      <div className="accordion-head" onClick={() => handleOpen(props.index)}>
        <div className='accordion-icon-title'> <img src={props.image} alt="icons"></img>
          <p>{props.title}</p>
        </div>
        <div className='accordion-toggle'>{active === props.index ? <img src={props.signColor === "white" ? RemoveW : Remove} alt="remove" /> : <img src={props.signColor === "white" ? AddW : Add} alt="add" />}</div>
      </div>
      {active === props.index && <div className="accordion-content">{props.content}</div>}
    </div>
  );
};
export default Accordion;