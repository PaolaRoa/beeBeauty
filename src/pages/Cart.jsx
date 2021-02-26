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

    const [f, setf] = useState(false);
    const hf = ()=>{
        setf(!f)
    }
    //keeps the order to render the cards on the cart page
    const [order, setorder] = useState(useOrder.order);
    useOrder.order= order;
    console.log(order)
    let total = useOrder().total;
    // build whatsapp string
    let waMsj='';
    const waString=()=>{
        let str = '';
        order.forEach(item=>{
            //https://wa.me/5211234567890?text=Me%20interesa%20in%20el%20auto%20que%20vendes
            let subst=`${item.id}%20${item.name}%20(${item.quantity})%20${item.quantity*item.price}%20`;
            str+=subst;            
        }   
        )
        let waS = `https://wa.me/573214845851?text=${str}`
        waS=  waS.replace(/ /g, '%20');
       ;
        waMsj=`${waS}%20Total:%20${total}`
        return waMsj;
        
    }



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
            <div className="cardContainer">
                {
                order.map((item=>
                        <Card key={item.id} item={item} btnValue="x" action="Actualizar" hf={hf}/>
                        )
                    )
                }
            </div>
            <Footer f={f} goto= {waString()} delivery= "Domicilio: $2000" buttonValue ='finalizar' total= {total}/>
        </>
     );
}
 
export default Cart;