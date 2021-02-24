import React from 'react';
import Card from './Card';
import '../css/card.css'


const CardContainer = (props) => {
    return ( 
        <div className="cardContainer">
            <Card btnValue={props.btn}/>
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}

        </div>
     );
}
 
export default CardContainer;