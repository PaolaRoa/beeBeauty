import React, {useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import back from '../images/back.png'
import {
    Link
  } from "react-router-dom";
  import Card from '../components/Card';
  import useOrder from '../components/hooks/useOrder'



const Cart = () => {

    //keeps the order to render the cards on the cart page
    // const [order, setorder] = useState(useOrder.order);
    // useOrder.order= order;
    // console.log(order)
    let total = useOrder().total;
    // build whatsapp string
    const {order} = useOrder;
    let totalDom = total+6500;

    let waMsj='';
    const waString=()=>{
        let str = '';
        order.forEach(item=>{
            if(item.quantity!==0)
            {let subst=`ref:${item.id}%20${item.name}%20(${item.quantity})%20subtotal:$${item.quantity*item.price}%20`;
            str+=subst;            }
        }   
        )
        let waS = `https://wa.me/573214845851?text=${str}`
        waS=  waS.replace(/ /g, '%20');
       ;
      
        waMsj=`${waS}%20Total:%20$${totalDom}`
        console.log(order)
        return waMsj;
    
        
    }



    const btn = 
        <Link to='/home'>
            <button className= 'backBtn'>
                <img src={back} alt="" className="rrss"/>
            </button>                
        </Link>
    return ( 
        <>
            <Header title='Carrito' btn={btn}/>
            <div className="cardContainer">
                {
                order.map((item=>
                        <Card key={item.id} item={item} btnValue="x" action="Actualizar" />
                        )
                    )
                }
            </div>
            <Footer goto= {waString()} delivery= "Domicilio: $6500" buttonValue ='finalizar' total={totalDom}/>
        </>
     );
}
 
export default Cart;