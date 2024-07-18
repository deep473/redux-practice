import React from 'react'
import { useState } from "react";
import Cart from '../Cart';

export default function Shopping({user}) {

    const [clicked, setClicked] = useState(false);
    function gotoCart(){
        setClicked(true);
    }
    if(clicked){
        return (
        <Cart user = {user}/>
        )
    } 
    return (
        <>
            <h4>Got what you were looking for?</h4>
            
            <button onClick={gotoCart}>
                Add to cart
            </button>
        </>
    )
}
