import React from 'react';
import {products} from '../data/products.json';
import '../css/categories.css'


const Categories = (props) => {

    return ( 
        <>
        <h3 id="cat">Categorias</h3>
        <div className="catContainer">
            <ul>
                <li><button onClick = {()=>props.catSelector(products)}>Todo</button></li>
                {products.map(categorie =>(
                    <li key= {products.indexOf(categorie)} >
                        <button onClick = {()=>props.catSelector(categorie.items)}>{categorie.cname}</button>
                    </li>
                )
                )}
            </ul>
        </div>
        </>
     );
}
 
export default Categories;