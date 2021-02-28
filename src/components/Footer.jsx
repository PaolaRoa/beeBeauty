import React from 'react';
import {
    Link
  } from "react-router-dom";




const Footer = (props) => {
    //set a variable total in 0
     let total=0;
     //if the total received from props is NaN sets total on 0 else total is total that receives from props
    isNaN(props.total)? total=0:total=props.total;

    return (
        <footer>
            <div>
                {/* shows the delivery value */}
                <p>{props.delivery}</p>
                {/* shows the total saved in order context or 0 if total is NaN*/}
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