import { createContext, useState } from 'react';


const OrderContext = createContext({order:[],
    total:0,
    setTotal:()=>{}

});

//get the total


export default OrderContext;