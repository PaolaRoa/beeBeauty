import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import back from '../images/back.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Cart = () => {
    return ( 
        <>
            <Header title='Carrito'/>
            <div className='cartTitle'>
                <Link to='/home'>
                    <button className= 'backBtn'>
                        <img src={back} alt="" className="rrss"/>
                    </button>                
                </Link>
                <h3>Pedido</h3>
            </div>
          
            <Footer link= '/wa' domi= "2000" total= "33.000" buttonValue='finalizar'/>
        </>
     );
}
 
export default Cart;