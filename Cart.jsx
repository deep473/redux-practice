import React from 'react'
import { useState } from "react";
import Payment from './Payment';

export default function Cart({user}) {
    const [clicked, setClicked] = useState(false);
    function gotoPayment(){
        setClicked(true);
    }
    if(clicked){
        return (
        <Payment user = {user}/>
        )
    } 
    return (
        <>
            <h4>Shopping finalized?</h4>
            
            <button onClick={gotoPayment}>
                Proceed to Payment
            </button>
        </>
    )
}
