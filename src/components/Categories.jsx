import React, {useState} from 'react';
import {products} from '../data/products.json';
import '../css/categories.css'
import CatBtn from './CatBtn';


const Categories = (props) => {

    // const [classBtn, setclassBtn] = useState(true)

    // const changeBtn = (e)=>{
        
    //    let parent = (e.target.parentNode.parentNode);
    //    let btns =(parent.childNodes);
    //    removeClass(btns);
    //    e.target.classList.add("active")
    //     setclassBtn(!classBtn);
    //     console.log(e.target);
    // }

    // const removeClass=(childs)=>{
    //     childs.forEach(panel => panel.classList.remove("active"));
       
    // }

    return ( 
        <>
        <h3 id="cat">Categorias</h3>
        <div className="catContainer">
            <ul>
                {/* this button shows all products setting the products state with products array */}
                <li><button className='catBtn' onClick = {(e)=>{props.catSelector(products)}}>Todo</button></li>
                {/* maps the products array and generates a button for every categorie */}
                {products.map(categorie =>(
                    <li key= {products.indexOf(categorie)} >
                        {/* <CatBtn cFunction={props.catSelector} categorie={categorie.items} name={categorie.cname} /> */}
                        <button className='catBtn' onClick={(e)=>{props.catSelector(categorie.items);}}>{categorie.cname}</button>
                    </li>
                )
                )}
            </ul>
        </div>
        </>
     );
}
 
export default Categories;