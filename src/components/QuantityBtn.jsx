import { useContext } from "react"
import React, { useState} from 'react';
import useQuantity from './hooks/useQuantity';


const QuantityBtn = (props) => {
    useQuantity()
    
    const item = props.item;
    const [quantity, setQuantity] = useState(0);
    item.quantity = quantity;
    

    const subsOne = ()=> {
        if(quantity!==0)setQuantity(quantity-1);
        
    }
    const addOne = ()=>{
        setQuantity(quantity+1);
    }

    console.log(item.name ,item.quantity)

    return ( 
        <div className="pAdd">
                <button onClick= {()=>subsOne()}>-</button>
                <p>{item.quantity}</p>
                <button onClick={()=>addOne()}>+</button>
        </div>
     );
     
}
 
export default QuantityBtn;