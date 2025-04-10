import React from 'react';
import { use } from 'react';

const Bottles = ({BottlesPromise}) => {

    const bottles = use(BottlesPromise)
    console.log(bottles)
    return (
        <div>
            
        </div>
    );
};

export default Bottles;