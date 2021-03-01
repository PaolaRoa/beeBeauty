import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useOrder from '../components/hooks/useOrder';



const NotFound = () => {
//this doesn´t work because to get this page the url must be manipulate from direction bar and that makes the app restart
    let total = useOrder.total;
  return ( 
        <>
            <Header title='Inicio' btn=''/>
            <div>
                <h1>¡ups!</h1>
                <h2>lo sentimos, pero eso que intentaste hacer, no se pudo :(</h2>
            </div>
           
            <Footer goto='/home' buttonValue='tienda' total={total}/>
        </>
     );
}
export default NotFound;

