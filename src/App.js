import React, {useState} from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Cart from './pages/Cart';
import useOrder from './components/hooks/useOrder';
import NotFound from './pages/NotFound';




function App() {
//states that keep the order 
const [order, setOrder] = useState([])
//inicialize the order
useOrder.setOrder = setOrder;
useOrder.order= order;
//get the total from context
//state to keep the total and inicializes with total from context
const [Stotal, setStotal] = useState(useOrder().setTotal())
//equals the total from context from total from state
useOrder().total =Stotal;
//defines t to store the total
let t = 0;
//function that sets total from context
useOrder.getTotal=()=>{
  //if order has items the for every item gets a subtotal and add it to t
       if(order!==undefined)
         { 
           order.forEach(
              item=> {
                let subtotal = item.quantity * item.price;
                t += subtotal
            }
        )
      }
      //set the total state with t that is the sum of subtotales
      setStotal(t)
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
