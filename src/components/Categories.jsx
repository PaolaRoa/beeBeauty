import React from 'react';
import {products} from '../data/products.json';
import '../css/categories.css'


const Categories = () => {
   
    return ( 
        <>
        <h3 id="cat">Categorias</h3>
        <div className="catContainer">
            <ul>
                <li><button>Todo</button></li>
                {products.map(categorie =>(
                    <li key= {categorie.cname} ><button>{categorie.cname}</button></li>
                )
                )}
            </ul>
        </div>
        </>
     );
}
 
export default Categories;