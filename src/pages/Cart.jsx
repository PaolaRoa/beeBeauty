import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import back from '../images/back.png'
import {
    Link
  } from "react-router-dom";
  import Card from '../components/Card';
  import useOrder from '../components/hooks/useOrder'



const Cart = () => {

    // assigns total from context on a variable
    let total = useOrder().total;
    //get order from context
    const {order} = useOrder;
    console.log(order);
    //sets the total initially on total
    let totalDom =total;
    //if total is 0 then don't add the delivery value
    total>0?totalDom = total+6500:totalDom = total;
   //sets the variable to save the string to add to whatsapp url
    let whatsappMessage='';
    //function tha builds the whatsapp url
    const waString=()=>{
        if(total=== undefined || total=== 0){
            return 'https://wa.me/573052946927?'
        }
        let str = '';
        //for every item in the order creates a string and adds thas string to str
        order.forEach(item=>{
            if(item.quantity!==0)
            {let subst=`ref:${item.id}%20${item.name}%20(${item.quantity})%20subtotal:$${item.quantity*item.price}%20`;
            str+=subst;            }
        }   
        )
        //add the string to whatsapp url
        let waRawUrl = `https://wa.me/573229779341?text=${str}`
        //replaces all spaces for %20 that is a space in 
        waRawUrl=  waRawUrl.replace(/ /g, '%20');
       ;
        //set the url with the total
        whatsappMessage=`${waRawUrl}%20Total%20con%20domicilio:%20$${totalDom}`
        //returns the url 
        return whatsappMessage;   
    }
    //creates the button to go back home, this btn is sended by props to footer component
    const btn = 
        <Link to='/home'>
            <button  type="button" className= 'backBtn'>
                <img src={back} alt="" className="rrss"/>
            </button>                
        </Link>
    return ( 
        <>
            {/* pass to header the title */}
            <Header title='Carrito' btn={btn}/>
            {/* if order isn't empty then renders a msj */}
            {order.length>0?<p className="msj">Al finalizar te enviaremos a la aplicación de whatsapp para acordar la entrega y pago de tu pedido</p>
            :
            null
            }
            <div className="cardContainer">
                {/* if order is empty shows a msj and button to go back home else maps the order and generates a card for every item*/}
                {order.length===0?
                   <div className="emptyCart">
                       <h3>Tu carrito esta vacio</h3>
                       <p>Vuelve a la tienda y escoge algunos productos, o escríbenos si no encuentras lo que buscabas</p>
                       <Link to='/home'>
                             <button type="button" className= 'actionBtn'>ir a la tienda</button>                
                        </Link>
                   </div>
                :
                    order.map((item=>
                        // the action is the value of button in card actualizar and no agregar
                            <Card key={item.id} item={item} btnValue="x" action="Actualizar" />
                            )
                        )         
                }         
            </div>
            {/* pass the url to whatsapp to dfooter and the value o domicilio button and the total */}
            <Footer goto= {waString()} delivery= "Domicilio en Bogotá: $6.500" buttonValue ='finalizar' total={totalDom}/>
        </>
     );
}
 
export default Cart;
