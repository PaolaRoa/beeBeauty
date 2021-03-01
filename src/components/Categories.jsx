import React from 'react';
import {products} from '../data/products.json';
import '../css/categories.css'


const Categories = (props) => {

    return ( 
        <>
        <h3 id="cat">Categorias</h3>
        <div className="catContainer">
            <ul>
                {/* this button shows all products setting the products state with products array */}
                <li><button type="button" className='catBtn' onClick = {(e)=>{props.catSelector(products)}}>Todo</button></li>
                {/* maps the products array and generates a button for every categorie */}
                {products.map(categorie =>(
                    <li key= {products.indexOf(categorie)} >
                        <button type="button" className='catBtn' onClick={(e)=>{props.catSelector(categorie.items);}}>{categorie.cname}</button>
                    </li>
                )
                )}
            </ul>
        </div>
        </>
     );
}
 
export default Categories;