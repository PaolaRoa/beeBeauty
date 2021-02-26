import React, {useState}from 'react';
import '../css/card.css'
import useQuantity from './hooks/useQuantity';
// import QuantityBtn from './QuantityBtn';
import useOrder from './hooks/useOrder'



const Card = (props) => {
    useQuantity();
    //item prop coming from home or Cart
    const item=props.item;

    // obtener el total;
        
//updates list items and total in order when press the agregar button 
    const upOrder=()=>{
        if(item.quantity !==0){
            if(useOrder.order.includes(item)){
                let i = useOrder.order.indexOf(item);
                useOrder.order.splice(i,1)
            }
            useOrder.order.push(item)

        }
        getTotal()
        console.log(useOrder.order)
    
    }
    //states tha keeps the quantiti on items 
    const [quantity, setQuantity] = useState(item.quantity);
    item.quantity = quantity;


// useOrder().getTotal=getTotal;
//fuctions to setquantities with the + and - buttons
    const subsOne = ()=> {
        if(quantity!==0)setQuantity(quantity-1);
        
    }
    const addOne = ()=>{
        setQuantity(quantity+1);
    }

//function to remove the item when button X is clicked 
    const removeItem=()=>{
        setQuantity(0);
        let i = useOrder.order.indexOf(item);
        if(i!== -1){useOrder.order.splice(i,1)}

    }
//calculates the total

    const [total, settotal] = useState(useOrder().total)
    useOrder().total =total;

    const getTotal=()=>{
        let t=0;
        useOrder.order.forEach(
            item=> {
                
                let subtotal = item.quantity * item.price;
                t += subtotal;
                console.log(t)
                settotal(t)   
            }
        )}
    console.log(total)

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
            {/* <QuantityBtn item={props.item}/> */}
            {/* <div className="pAdd">
                <button onClick= {()=>props.subsOne()}>-</button>
                <p>{props.q}</p>
                <button onClick={()=>props.addOne()}>+</button>
            </div> */}
            <div className="btnAdd">
                <button onClick={()=>upOrder() } className= 'smallBtn'>{props.action}</button>
            </div>
        </div>
     );
}

 
export default Card;