import React from 'react';
import pSample from '../images/productSample.png';
import '../css/card.css'


const Card = () => {
    return ( 
        <div className="card">  
            <div class="photo">
                <img src={pSample} alt="product" className='pimg'/>
            </div>
            <div class="pName">
                <h3>paleta Tokio de Miis Cosmetics</h3>
            </div>
            <div class="pDescription">
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
            <div class="pCost"> 
                <h4>$40.000</h4>
            </div>
            <div class="pAdd">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <div class="btnAdd">
                <button className= 'smallBtn'>Agregar</button>
            </div>
        </div>
     );
}
 
export default Card;