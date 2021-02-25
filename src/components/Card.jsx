import React, {useState}from 'react';
import '../css/card.css'
import useQuantity from './hooks/useQuantity';
// import QuantityBtn from './QuantityBtn';
import useOrder from './hooks/useOrder'



const Card = (props) => {
    useQuantity();
    //item prop coming from home or Cart
    const item=props.item;

    // const setOrder = useOrder.setOrder();

//updates list items in order when press the agregar button
//pasar a app
    
    const upOrder=()=>{
        if(item.quantity !==0){
            if(useOrder.order.includes(item)){
                let i = useOrder.order.indexOf(item);
                useOrder.order.splice(i,1)
            }
            useOrder.order.push(item)
        }
        console.log(useOrder.order)
    }

    const [quantity, setQuantity] = useState(item.quantity);
    item.quantity = quantity;
    
    
    // //make the item quantity persitent
    // useQuantity().products.map(categorie=>
    //     categorie.items.map(itemO=>(
    //       itemO === item? itemO.quantity = quantity :
    //       itemO.quantity = itemO.quantity
    //     )))
    //pasar a App
    const subsOne = ()=> {
        if(quantity!==0)setQuantity(quantity-1);
        
    }
    const addOne = ()=>{
        setQuantity(quantity+1);
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
                <button onClick={()=>upOrder() } className= 'smallBtn'>Agregar</button>
            </div>
        </div>
     );
}

 
export default Card;