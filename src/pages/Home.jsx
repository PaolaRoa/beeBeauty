import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import "../css/home.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Card from '../components/Card';
import CardContainer from '../components/CardContainer';


const Home = () => {
    return ( 
        <>
            <Header title='Inicio' btn=''/>
            <CardContainer />
            <Footer goto='/cart' total= "33.000" buttonValue='ver carrito'/>
        </>
     );
}
 
export default Home;

