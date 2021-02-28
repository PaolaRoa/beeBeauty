import React, {useState} from 'react';
import '../css/card.css'
// import '../css/categories.css'


const CatBtn = (props) => {

    const [style, setstyle] = useState('');

    const setBtnStyle =()=>{
        style===''?setstyle('activBtn'):setstyle('')
    }

    return ( 

        <button onClick={()=>{props.cFunction(props.categorie); setBtnStyle()}} className= {`catBtn ${style}`} >{props.name}</button>
     );
}
 
export default CatBtn;