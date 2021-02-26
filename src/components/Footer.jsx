import React,{useState, useEffect} from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import useOrder from '../components/hooks/useOrder'
import useQuantity from './hooks/useQuantity';

const Footer = (props) => {

    console.log(props.goto)

    return (
        <footer>
            <div>
                <p>{props.delivery}</p>
                <h3>Total: ${useOrder().total}</h3>
            </div>
            {props.goto ==='/cart'?
             <Link to={props.goto}>
             <button className= 'actionBtn'>{props.buttonValue}</button>
         </Link>
         :
         <a href={props.goto}>
         <button className= 'actionBtn'>{props.buttonValue}</button>
         </a>
            }
            {/* <Link to={props.goto}>
                <button className= 'actionBtn'>{props.buttonValue}</button>
            </Link> */}
            


        </footer>
    );
}
 
export default Footer;