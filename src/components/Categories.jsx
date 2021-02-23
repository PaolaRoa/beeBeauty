import React from 'react';
import {products} from '../data/products.json';
import '../css/categories.css'


const Categories = () => {
    return ( 
        <>
        <h3 id="cat">Categorias</h3>
        <div className="catContainer">
            <ul>
                {products.map(categorie =>(
                    <li key= {products.indexOf(categorie)}> <button>{categorie.name}</button> </li>
                    
                )

                )}
            </ul>
        </div>
        </>
     );
}
 
export default Categories;