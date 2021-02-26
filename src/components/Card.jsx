import React, {useState}from 'react';
import '../css/card.css'
// import QuantityBtn from './QuantityBtn';
import useOrder from './hooks/useOrder'




const Card = (props) => {

 //item prop coming from home or Cart
    const item=props.item;  
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
        let i = useOrder.order.indexOf(item);

        if(i!== -1){useOrder.order.splice(i,1)};

        getTotal()    }
//function that calculates the total
    //state total equals to context total
    const [total, settotal] = useState(useOrder().total)
    useOrder().total =total;
        //function that sets total
    const getTotal=()=>{
        let t=0;
        //if are items in the order array define de total
        if(useOrder.order.length > 0)
       {useOrder.order.forEach(
            item=> {
                
                let subtotal = item.quantity * item.price;
                t += subtotal;
                console.log(t)
                settotal(t)   
            }
        )}
        //if order array hasn't items the total is $0
        else{
            settotal(0);
        }}
    console.log(total)
    //asigns the function gettotal to context settotal value
    useOrder.settotal=()=>getTotal()

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
                <button onClick={()=>upOrder() } className= 'smallBtn'>{props.action}</button>
            </div>
        </div>
     );
}

 
export default Card;