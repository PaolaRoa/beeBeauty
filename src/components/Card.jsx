import React from 'react';
import pSample from '../images/productSample.png';


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
            <div class="pCost"> asdfasdf</div>
            <div class="pAdd"> asdfasdf</div>
            <div class="btnAdd">
                <button>Agregar</button>
            </div>
        </div>
     );
}
 
export default Card;