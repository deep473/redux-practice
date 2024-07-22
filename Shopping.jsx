import React, { useState } from 'react'
import Cart from './Cart';

export default function Shopping() {
    const [isClicked, setIsClicked] = useState(false);
    function handleOnClick(){
        setIsClicked(true);
    }
    if(isClicked){
        return(
            <Cart />
        )
    }
  return (
    <>
        <h2>Shopping page</h2>
        <h4>Found what you were looking for?</h4>

        <button onClick={handleOnClick}>Add to cart</button>
    </>
  )
}
