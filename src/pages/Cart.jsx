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

    const btn = 
        <Link to='/home'>
            <button className= 'backBtn'>
                <img src={back} alt="" className="rrss"/>
            </button>                
        </Link>

    return ( 
        <>
            <Header title='Carrito' btn={btn}/>
            <Footer link= '/wa' domi= "2000" total= "33.000" buttonValue='finalizar'/>
        </>
     );
}
 
export default Cart;