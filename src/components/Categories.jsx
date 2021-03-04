import React from 'react';
import {products} from '../data/products.json';
import '../css/categories.css'


const Categories = (props) => {
    
    const setBtn =(element)=>{
        let l = element.parentNode.parentNode.childNodes;
        l.forEach(
            list=> {list.classList.remove('active');
            // console.log(list)
            })
            console.log( element.parentNode)
            element.parentNode.classList.add('active')
    }
    return ( 
        <>
        <h3 id="cat">Categorias</h3>
        <div className="catContainer">
            <ul>
                {/* this button shows all products setting the products state with products array */}
                <li className = 'active'><button type="button" className='' onClick = {(e)=>{props.catSelector(products);setBtn(e.target)}}>Todo</button></li>
                {/* maps the products array and generates a button for every categorie */}
                {products.map(categorie =>(
                    <li key= {products.indexOf(categorie)} >
                        <button type="button" className='' onClick={(e)=>{props.catSelector(categorie.items);setBtn(e.target)}}>{categorie.cname}</button>
                    </li>
                )
                )}
            </ul>
        </div>
        </>
     );
}
 
export default Categories;