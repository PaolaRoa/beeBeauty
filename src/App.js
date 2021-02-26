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

const [total, setTotal] = useState(0);
useOrder.total = total;
useOrder.setTotal = setTotal;

//creates a quantity property for every item
 useQuantity().products.map(cat => cat.items.map
  (item=>(
    item.quantity=0
    )));
//function to get total
// const [total, setTotal] = useState(useOrder().total)
// useOrder().total= total;



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
