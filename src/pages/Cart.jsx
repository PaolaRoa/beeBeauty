import React, {useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import back from '../images/back.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {products} from '../data/products.json'
  import CardContainer from '../components/CardContainer';
  import Card from '../components/Card';
  import useOrder from '../components/hooks/useOrder'



const Cart = () => {
    //keeps the order to render the cards on the cart page
    const [order, setorder] = useState(useOrder.order);
    useOrder.order= order;
    console.log(order)

    const btn = 
        <Link to='/home'>
            <button className= 'backBtn'>
                <img src={back} alt="" className="rrss"/>
            </button>                
        </Link>
    const btnWa = <p>finalizar</p>
    return ( 
        <>
            <Header title='Carrito' btn={btn}/>
            <CardContainer>
                {
                order.map((item=>
                        <Card key={item.id} item={item} btnValue="x" action="Actualizar"/>
                        )
                    )
                }
            </CardContainer>
            <Footer goto= '/home' delivery= "Domicilio: $2000" buttonValue ='finalizar'/>
        </>
     );
}
 
export default Cart;