import { createContext, useState } from 'react';
import products from '../../data/products.json';


const QuantityContext = createContext({
    
    products:products.products,

});

export default QuantityContext;

