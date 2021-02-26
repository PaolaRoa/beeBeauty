import React,{useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import useOrder from '../components/hooks/useOrder'

const Footer = (props) => {
    
    const [total, settotal] = useState(0);


    return (
        <footer>
            <div>
                <p>{props.delivery}</p>
                <h3>Total: ${useOrder().total}</h3>
            </div>
            <Link to={props.goto}>
                <button className= 'actionBtn'>{props.buttonValue}</button>
            </Link>
            


        </footer>
    );
}
 
export default Footer;