import React from 'react';
import './Bottle.css'
const Bottle = ({bottle}) => {

    const {img} = bottle; 

    //console.log(bottle);

    return (
        <div className='card'>
            <img src={bottle.img} alt=""></img>
        </div>
    );
};

export default Bottle;