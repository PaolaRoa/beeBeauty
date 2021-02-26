import React, {useState} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import "../css/home.css"
// import {products} from '../data/products.json';
// import CardContainer from '../components/CardContainer';
import Categories from '../components/Categories';
import Card from '../components/Card';
import useQuantity from '../components/hooks/useQuantity';
import useOrder from '../components/hooks/useOrder';



const Home = () => {
    //asign the products object that is saved in quantity context
    const products = useQuantity().products
    //create state to manipulate the selected categorie with an object
    const [categorie, setcategorie] = useState(products)
    //function that handles the categorie state, recives the items that is the products 
    //complete or the categorie items array and set the categorie states with that array
    const catSelector = (items)=>{
        // console.log(items)
        setcategorie(items);
    }
    

    return ( 
        <>
            <Header title='Inicio' btn=''/>
            {/* pass the function that sets the categorie  */}
            <Categories catSelector= {catSelector}/>
            <div className="cardContainer">
                {/* if categorie is products object map products and map categorie .items to get the cards */}
                {categorie===products?
                categorie.map(cat =>(
                       cat.items.map(item=>
                        <Card key={item.id} 
                        btnValue="" action="Agregar"
                        item={item}
                        />

                        )
                    )
                )
                :
                // if categoris isn't products then is a categorie so maps categorie.items directly 
                // and creates a card for each item in that categorie
                categorie.map(item=>
                    <Card key={item.id} 
                        btnValue=""
                        item={item} action="Agregar"
                        />
                    )
                }
            </div>
            {/* renders footer passing like route cart and value ver carrito */}
            <Footer goto='/cart' buttonValue='ver carrito' />
        </>
     );
}
 
export default Home;

