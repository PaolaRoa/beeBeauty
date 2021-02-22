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
            <Header />
            <Link to='/home'>
                <img src={back} alt="" className="rrss"/>
            </Link>
            <Footer link= '/wa' domi= "2000" total= "33.000" buttonValue='finalizar'/>
        </>
     );
}
 
export default Cart;