import React from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = ({BottlesPromise}) => {
   
   // console.log(BottlesPromise)
    const bottles = use(BottlesPromise)

    console.log(bottles)
    return (
        <div>
           <h3>Bottle: {bottles.length}</h3>
             {
               bottles.map(bottle =><Bottle key={bottle.id} bottle={bottle} >  </Bottle>)      
             }
        </div>
    );
};

export default Bottles;