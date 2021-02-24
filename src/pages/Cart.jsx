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
  import waW from '../images/wawhite.png'
import CardContainer from '../components/CardContainer';



const Cart = () => {

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
            <CardContainer btn='x'/>
            <Footer goto= '/home' delivery= "Domicilio: $2000" total= "33.000" buttonValue ='finalizar'/>
        </>
     );
}
 
export default Cart;