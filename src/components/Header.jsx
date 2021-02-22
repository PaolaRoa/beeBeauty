import React from 'react';
import wa from '../images/wa.png';
import ig from '../images/ig.png';
import bb from '../images/beeLogo.png';
import fb from '../images/fb.png';


const Header = () => {
    return ( 
        <header>
            <img src={bb} alt="logo beeBeauty" className="logoSmall"/>
           
            <div>

                <a href=" https://wa.link/b5oq4r" target='blank'>
                    <img src={wa} alt="logo whatsapp" className="rrss"/>
                </a> 
                <a href="https://www.instagram.com/bee_beautybta/?hl=es-la" target='blank'>
                    <img src={ig} alt="logo instagram " className="rrss"/>
                </a>
                <a href="https://www.facebook.com/Bee-Beauty-103959284688615/" target='blank'>
                    <img src={fb} alt="logo instagram " className="rrss"/>
                </a>

            </div>

        </header>
     );
}
 
export default Header;