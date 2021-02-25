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



const [order, setOrder] = useState([])

// setOrder(useOrder().order);


useOrder.setOrder = setOrder;
useOrder.order= order;

//creates a quantity property for every item
 useQuantity().products.map(cat => cat.items.map
  (item=>(
    item.quantity=0
    )));
  

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
