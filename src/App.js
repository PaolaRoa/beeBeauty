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

function App() {

  const [quantity, setQuantity] = useState(0)
  console.log(quantity)

  const addQ = ()=>{
      setQuantity(quantity+1)
  }
  const removeQ =()=>{
      if(!quantity===0)setQuantity(quantity-1);
      
  }
  
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
