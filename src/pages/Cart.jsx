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
  import {products} from '../data/products.json'
  import CardContainer from '../components/CardContainer';
  import Card from '../components/Card';



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
            <CardContainer>
                {
                products.map(cat =>(
                       cat.items.map(item=>
                        <Card key={item.id} name={item.name} price= {item.price} desc={item.description} src={item.img} btnValue="x" />
                        )
                    )
                )
                }
            </CardContainer>
            <Footer goto= '/home' delivery= "Domicilio: $2000" total= "33.000" buttonValue ='finalizar'/>
        </>
     );
}
 
export default Cart;