import { createContext, useState } from 'react';


const OrderContext = createContext({order:[],
    total:0,
    setTotal:()=>{},
    delItem:()=>{}

});

//get the total


export default OrderContext;