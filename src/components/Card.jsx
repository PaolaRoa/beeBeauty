import React from 'react';
import pSample from '../images/productSample.png';
import '../css/card.css'


const Card = (props) => {
    return ( 
        <div className="card">
            <div className="photo">
                <img src={pSample} alt="product" className='pimg'/>
            </div>
            <div className="pName">
                <h3>paleta Tokio de Miis Cosmetics</h3><button>{props.btnValue}</button>
            </div>
            <div className="pDescription">
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
            </div>
            <div className="pCost"> 
                <h4>$40.000</h4>
            </div>
            <div className="pAdd">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <div className="btnAdd">
                <button className= 'smallBtn'>Agregar</button>
            </div>
        </div>
     );
}
 
export default Card;