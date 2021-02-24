import React, {useState}from 'react';
import '../css/card.css'
import useQuantity from './hooks/useQuantity';


const Card = (props) => {

    const [quantity, setQuantity] = useState(0)
    console.log(quantity)

    const addQ = ()=>{
        setQuantity(quantity+1)
    }
    const removeQ =()=>{
        if(!quantity===0)setQuantity(quantity-1);
        
    }

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
                <button onClick= {()=>removeQ}>-</button>
                <p>{quantity}</p>
                <button onClick={()=>addQ}>+</button>
            </div>
            <div className="btnAdd">
                <button className= 'smallBtn'>Agregar</button>
            </div>
        </div>
     );
}
 
export default Card;