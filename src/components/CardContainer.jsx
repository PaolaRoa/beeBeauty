import React from 'react';
import '../css/card.css'


const CardContainer = (props) => {
    return ( 
        <div className="cardContainer">
           {props.children}
        </div>
     );
}
 
export default CardContainer;