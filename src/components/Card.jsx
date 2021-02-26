import React, {useState}from 'react';
import '../css/card.css'
// import QuantityBtn from './QuantityBtn';
import useOrder from './hooks/useOrder'




const Card = (props) => {

    let {order} = useOrder;
    const {getTotal} = useOrder;
  
    console.log(order)
 //item prop coming from home or Cart
    const item=props.item;  
//updates list items and total in order when press the agregar button 
    const upOrder=()=>{
        if(item.quantity !==0){
            if(order.includes(item)){
                let i = order.indexOf(item);
                order.splice(i,1)
            }
            order.push(item)
        }
        getTotal()
        console.log(order) 
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
//function that calculates the total
    //state total equals to context 
    
    // const [Stotal, setStotal] = useState(useOrder().total)
    // useOrder().total =Stotal;
    //     //function that sets total
    // const getTotal=()=>{
    //     let t=0;
    //     //if are items in the order array define de total
    //     if(order.length > 0)
    //    {order.forEach(
    //         item=> {
                
    //             let subtotal = item.quantity * item.price;
    //             t += subtotal;
    //             setStotal(t)   
    //         }
    //     )}
    //     //if order array hasn't items the total is $0
    //     else{
    //         setStotal(0);
    //     }}
    // console.log(Stotal)

    //trying to handle footer from card


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