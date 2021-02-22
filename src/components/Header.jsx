import React from 'react';
import wa from '../images/wa.png';
import ig from '../images/ig.png'
import bb from '../images/beeLogo.png'

const Header = () => {
    return ( 
        <header>
            <img src={bb} alt="logo beeBeauty" className="logoSmall"/>
            <div>
                <img src={wa} alt="logo whatsapp" className="rrss"/>
                <img src={ig} alt="logo instagram " className="rrss"/>

            </div>

        </header>
     );
}
 
export default Header;