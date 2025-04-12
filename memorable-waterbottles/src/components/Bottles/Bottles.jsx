import React, { useState } from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({BottlesPromise}) => {
    const [cart,setCart] = useState([])

   // console.log(BottlesPromise)
    const bottles = use(BottlesPromise)

    const handleAddToCart = (bottle) =>{

       console.log('bottle is added to the cart',bottle)
       const newCart = [...cart,bottle];
       setCart(newCart)
    }
    console.log(bottles)
    return (
        <div >
        <h3>Bottle: {bottles.length}</h3>
        <p>Added to cart: {cart.length} items</p>
        <div className='bottle-container'>
        {
        bottles.map(bottle =><Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle} >  </Bottle>)      
        }
        </div>
           
             
        </div>
    );
};

export default Bottles;