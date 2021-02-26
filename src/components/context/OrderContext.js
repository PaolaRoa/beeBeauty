import { createContext, useState } from 'react';


const OrderContext = createContext({order:[],
    total:0,
    setTotal:()=>{},
    reload:false,
    setreload: ()=>{}

});

//get the total


export default OrderContext;