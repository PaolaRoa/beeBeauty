import React, {useState}from 'react';
import '../css/card.css'
import useQuantity from './hooks/useQuantity';
import QuantityBtn from './QuantityBtn';
import useOrder from './hooks/useOrder'



const Card = (props) => {
    const item=props.item;
    useQuantity();
    console.log(useOrder.order);

    const upOrder=()=>{
        if(item.quantity !==0){
            useOrder.order.push(item)
        }
        console.log(useOrder.order)
    }
    


    let price = item.price.toString();
    // console.log(Card.key)
    return ( 
        <div className="card">
            <div className="photo">
                <img src={`${item.img}`} alt="product" className='pimg'/>
            </div>
            <div className="pName">
                <h3>{item.name}</h3><button>{props.btnValue}</button>
            </div>
            <div className="pDescription">
                <p>{item.description}</p>
            </div>
            <div className="pCost"> 
                <h4>${price}</h4>
            </div>
            <QuantityBtn item={props.item}/>
            {/* <div className="pAdd">
                <button onClick= {()=>props.subsOne()}>-</button>
                <p>{props.q}</p>
                <button onClick={()=>props.addOne()}>+</button>
            </div> */}
            <div className="btnAdd">
                <button onClick={()=>upOrder() } className= 'smallBtn'>Agregar</button>
            </div>
        </div>
     );
}

 
export default Card;