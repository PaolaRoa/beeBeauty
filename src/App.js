import React, {createContext, useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Cart from './pages/Cart';
import useQuantity from './components/hooks/useQuantity';
import useOrder from './components/hooks/useOrder';
import Categories from './components/Categories';



function App() {


//states that keep the order 
const [order, setOrder] = useState([])

// setOrder(useOrder().order);

//inicialize the order
useOrder.setOrder = setOrder;
useOrder.order= order;

//////////////prueba----------------------------------------------------


const [Stotal, setStotal] = useState(useOrder.total)
    useOrder().total =Stotal;
        //function that sets total
        useOrder.getTotal=(orderUp)=>{
        let t=0;
        //if are items in the order array define de total
      if(orderUp.length > 0)
       {orderUp.forEach(
            item=> {
                
                let subtotal = item.quantity * item.price;
                t += subtotal;
                // setStotal(Stotal+subtotal)   
            }
        )
        setStotal(t)
      }
        //if order array hasn't items the total is $0
        // else{
        //     setStotal(0);
        // }
      }



  
//fin prueba---------------------------------------------------------------------------------------------



//creates a quantity property for every item
 useQuantity().products.map(cat => cat.items.map
  (item=>(
    item.quantity=0
    )));
//PRUEBA FOOTER RECARGUE






  return (
      <Router>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Router>
  )
}

export default App;
