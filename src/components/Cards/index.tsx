import React from "react";
import "./Cards.scss"
 const Cards: React.FC = (cardContent:any) => {

    return <div className="cards">

            <img src={cardContent.icon} alt="service-icon"></img>
   
   
<h3>{cardContent.heading}</h3>

      <p>{cardContent.paragraph}</p>
   <button>Learn More </button>
    </div>
};
export default Cards;
