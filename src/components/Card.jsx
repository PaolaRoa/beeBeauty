import React, {useState}from 'react';
import '../css/card.css'



const Card = (props) => {

    let price = props.price.toString();
    return ( 
        <div className="card">
            <div className="photo">
                <img src={`${props.src}`} alt="product" className='pimg'/>
            </div>
            <div className="pName">
                <h3>{props.name}</h3><button>{props.btnValue}</button>
            </div>
            <div className="pDescription">
                <p>{props.desc}</p>
            </div>
            <div className="pCost"> 
                <h4>${price}</h4>
            </div>
            <div className="pAdd">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <div className="btnAdd">
                <button className= 'smallBtn'>Agregar</button>
            </div>
        </div>
     );
}
 
export default Card;