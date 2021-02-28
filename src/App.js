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
import NotFound from './pages/NotFound';




function App() {


//states that keep the order 
const [order, setOrder] = useState([])

// setOrder(useOrder().order);

//inicialize the order
useOrder.setOrder = setOrder;
useOrder.order= order;

//////////////prueba----------------------------------------------------

let {total}= useOrder()
const [Stotal, setStotal] = useState(useOrder().setTotal())
useOrder().total =Stotal;
        //function that sets total
let t = 0;
useOrder.getTotal=()=>{
       if(order!==undefined)
         { 
           order.forEach(
              item=> {
                let subtotal = item.quantity * item.price;
                t += subtotal
            }
        )
        console.log(Stotal, total, t, order)
      }
      setStotal(t)
        //if order array hasn't items the total is $0
        // else{
        //     setStotal(0);
        // }
      }



  







  return (
      <Router>
        <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route>
          <NotFound />
        </Route>
        </Switch>
      </Router>
  )
}

export default App;
