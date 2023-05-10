import React from "react";
import "./Card.scss"

interface ICardProps {
   icon: string;
   heading: string;
   paragraph: string;
   more_label: string;
}

const Card = (props: ICardProps) => {
   return (
      <div className="card">
         <img src={props.icon} alt="service-icon" />
         <h3>{props.heading}</h3>
         <p>{props.paragraph}</p>
         <button>{props.more_label}</button>
      </div>
   );
};

export default Card;
