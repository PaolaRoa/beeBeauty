import React, {useState} from 'react';
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
    //create state to manipulate the selected categorie with an object
    const [categorie, setcategorie] = useState(products)
    //function tha handles the categorie state
    const catSelector = (items)=>{
        // console.log(items)
        setcategorie(items);
    }

    return ( 
        <>
            <Header title='Inicio' btn=''/>
            
            <Categories catSelector= {catSelector}/>
            <CardContainer>
                {categorie===products?
                categorie.map(cat =>(
                       cat.items.map(item=>
                        <Card key={item.id} name={item.name} price= {item.price} desc={item.description} src={item.img} btnValue="" />
                        )
                    )
                )
                :
                categorie.map(item=>
                    <Card key={item.id} name={item.name} price= {item.price} desc={item.description} src={item.img} btnValue="" />
                    )
                }
            </CardContainer>
            <Footer goto='/cart' total= "33.000" buttonValue='ver carrito'/>
        </>
     );
}
 
export default Home;

