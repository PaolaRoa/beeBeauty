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
     let total=0;
   isNaN(props.total)? total=0:total=props.total;

    return (
        <footer>
            <div>
                {/* shows the delivery value */}
                <p>{props.delivery}</p>
                {/* shows the total saved in order context*/}
      
                <h3 className='total'>Total: ${total}</h3>
            </div>
            {/* conditional because if the route isn't /cart means that the button is clicked 
            from cart component so the url is whatsapp url not a componnent  */}
            {props.goto ==='/cart'?
             <Link to={props.goto}>
             <button className= 'actionBtn'>{props.buttonValue}</button>
         </Link>
         :
        //  if its no cart then put the button in an a tag making ref to whatsapp url
         <a href={props.goto}>
         <button className= 'actionBtn'>{props.buttonValue}</button>
         </a>
        
            }
        </footer>
    );
}
 
export default Footer;