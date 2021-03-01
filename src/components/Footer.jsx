import React from 'react';
import {
    Link
  } from "react-router-dom";




const Footer = (props) => {
    //set a variable total in 0
     let total=0;
     //if the total received from props is NaN sets total on 0 else total is total that receives from props
    isNaN(props.total)? total=0:total=props.total;

    let showTotal = (new Intl.NumberFormat("es-CO", {style: "currency", currency: "COP", maximumFractionDigits: 0}).format(total));
    // makes point shows on 4 digits price
     if (showTotal.length===6){
        let totalStr = showTotal.toString();
        let firstStr = totalStr.substring(0,3);
        showTotal= firstStr +"." +totalStr.substring(3)
    }   

    return (
        <footer>
            <div>
                {/* shows the delivery value */}
                <p>{props.delivery}</p>
                {/* shows the total saved in order context or 0 if total is NaN*/}
                <h3 className='total'>Total: {showTotal}</h3>
            </div>
            {/* conditional because if the route isn't /cart means that the button is clicked 
            from cart component so the url is whatsapp url not a componnent  */}
            {props.goto ==='/cart'?
             <Link to={props.goto}>
             <button type="button" className= 'actionBtn'>{props.buttonValue}</button>
         </Link>
         :
        //  if its no cart then put the button in an a tag making ref to whatsapp url
         <a href={props.goto}>
         <button type="button" className= 'actionBtn'>{props.buttonValue}</button>
         </a>
            }
        </footer>
    );
}
 
export default Footer;