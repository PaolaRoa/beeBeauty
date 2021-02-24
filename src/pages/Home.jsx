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
import {products} from '../data/products.json'
import CardContainer from '../components/CardContainer';
import Categories from '../components/Categories';
import Card from '../components/Card';


const Home = () => {
    return ( 
        <>
            <Header title='Inicio' btn=''/>
            <Categories />
            <CardContainer>
                {products.map(categorie =>(
                       categorie.items.map(item=>
                        <Card key={item.id} name={item.name} price= {item.price} desc={item.description} src={item.img} />
                        )
                    )
                )}
            </CardContainer>
            <Footer goto='/cart' total= "33.000" buttonValue='ver carrito'/>
        </>
     );
}
 
export default Home;

