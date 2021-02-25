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
import Categories from './components/Categories';



function App() {

useQuantity()


 useQuantity().products.map(cat => cat.items.map
  (item=>(
    item.quantity= 0
    )));




  // const [quantity, setQuantity] = useState(0);

  // useQuantity().addOne= ()=> setQuantity(quantity+1);
  // useQuantity().subsOne= ()=> setQuantity(quantity-1);
  // useQuantity().quantity = quantity;

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
