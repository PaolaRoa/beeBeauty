import React, {useState}from 'react';
import '../css/card.css'
// import QuantityBtn from './QuantityBtn';
import useOrder from './hooks/useOrder'




const Card = (props) => {

    let {order} = useOrder;
    const {getTotal} = useOrder;
  
    console.log(order, useOrder().total)
 //item prop coming from home or Cart
    const item=props.item;  
//updates list items and total in order when press the agregar button 
    const upOrder=()=>{
        // if(item.quantity !==0){
        //     if(order.includes(item)){
        //         let i = order.indexOf(item);
        //         order.splice(i,1)
        //     }
        //     order.push(item)
        // }
        if(order.lenght > 0){
            order.forEach(
            itemOrder=> { 
                if(itemOrder.id === item.id){
                    itemOrder.quantity = item.quantity;
                }
                else{
                    order.push(item)
                }
            }
        )
            
        }
        getTotal()
        // console.log(order, "total ", useOrder.total) 
    }
 //states tha keeps the quantiti on items 
    const [quantity, setQuantity] = useState(item.quantity);
    item.quantity = quantity;
//fuctions to setquantities with the + and - buttons
    const subsOne = ()=> {
        if(quantity!==0)setQuantity(quantity-1);        
    }
    const addOne = ()=>{
        setQuantity(quantity+1);
    }
//function to remove the item and updates the total when button X is clicked 
    const removeItem=()=>{
        setQuantity(0);
        let i = order.indexOf(item);

        if(i!== -1){order.splice(i,1)};

        getTotal()   
     }



    //price to string to add a point
    let price = item.price.toString();
    // console.log(Card.key)
    return ( 
        <div className="card">
            <div className="photo">
                <img src={`${item.img}`} alt="product" className='pimg'/>
            </div>
            <div className="pName">
                <h3>{item.name}</h3><button onClick={()=>{removeItem()}}>{props.btnValue}</button>
            </div>
            <div className="pDescription">
                <p>{item.description}</p>
            </div>
            <div className="pCost"> 
                <h4>${price}</h4>
            </div>
            <div className="pAdd">
                <button onClick= {()=>subsOne()}>-</button>
                <p>{item.quantity}</p>
                <button onClick={()=>addOne()}>+</button>
            </div>
            <div className="btnAdd">
                <button onClick={()=>{
                    upOrder();
                                    // props.hf()
                                }} 
                                    className= 'smallBtn'>{props.action}
                </button>
            </div>
        </div>
     );
}

 
export default Card;