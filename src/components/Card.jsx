import React, {useState, useEffect}from 'react';
import '../css/card.css'
import useOrder from './hooks/useOrder'




const Card = (props) => {

//using context order and function to set total
    let {order} = useOrder;
    const {getTotal} = useOrder;   
 //item prop coming from home or Cart
    const item=props.item;  

//updates list items and total in order when press the agregar button 
    const upOrder=()=>{
        //just allow to add item if quantity isn't o
        if(item.quantity !==0){
            if(order.includes(item)){
                let i = order.indexOf(item);
                order.splice(i,1)
            }
            order.push(item)
        }
        //after update order set total and compare quantity
        getTotal()
        setcompareQ(quantity)
    }
 //states tha keeps the quantiti on items 
    const [quantity, setQuantity] = useState(item.quantity);
    item.quantity = quantity;
//this state is to inactivate the agregar button if the quantity doesn't change
    const [compareQ, setcompareQ] = useState(quantity)
//fuctions to setquantities with the + and - buttons
    const subsOne = ()=> {
        if(quantity!==1)setQuantity(quantity-1);        
    }
    const addOne = ()=>{
        setQuantity(quantity+1);
    }
//makes the quantity begins in 1 and the button to add be activate at the first render
useEffect(() => {
    setQuantity(quantity=> quantity+1);
  },[]);
//function to remove the item and updates the total when button X is clicked 
    const removeItem=()=>{
       //sets item quantity on 0 and updates the total
        setQuantity(0);
        let i = order.indexOf(item);
        if(i!== -1){order.splice(i,1)};
        getTotal()
     }
//function to add a point on price
     let price = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0}).format(item.price));
    // makes point shows on 4 digits price
     if (price.length===6){
         let priceStr = price.toString();
        let firstStr = priceStr.substring(0,3);
        price = firstStr +"." +priceStr.substring(3)
    }   
    //  console.log(item.price.NumberFormat("de-DE", {style:"currency", currency:"EUR"}).format(Number) )
    
    return ( 
        <div className="card">
            <div className="photo">
                <img src={`${item.img}`} alt="product" className='pimg'/>
            </div>
            <div className="pName">
                <h3>{item.name}</h3><button type="button" onClick={()=>{removeItem()}}>{props.btnValue}</button>
            </div>
            <div className="pDescription">
                <p>{item.description}</p>
            </div>
            <div className="pCost"> 
                <h4>{price}</h4>
            </div>
            <div className="pAdd">
                <button type="button" onClick= {()=>subsOne()}>-</button>
                <p>{item.quantity}</p>
                <button type="button" onClick={()=>addOne()}>+</button>
            </div>
            
            <div className="btnAdd">
            {/* if quantiti hasn´t change renders a disabled button */}
            {compareQ === quantity? 
            <button type="button" onClick={()=>upOrder()}className= 'smallBtn' disabled >{props.action}  </button>
                :
            <button type="button" onClick={()=>upOrder()}className= 'smallBtn'>{props.action}</button>
            } 
            </div>
        </div>
     );
}

 
export default Card;