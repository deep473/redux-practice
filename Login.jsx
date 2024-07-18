import React from 'react'
import { useState } from "react";
import Shopping from './Shopping';

export default function Login({user}) {

    const [clicked, setClicked] = useState(false);
    function gotoShopping(){
        setClicked(true);
    }
    if(clicked){
        return (
        <Shopping user = {user}/>
        )
    } 
    return (
        <>
            <h4>Username : {user.username}</h4>
            <h4>Wallet balance : {user.wallet}</h4>
            
            <button onClick={gotoShopping}>
                Continue shopping
            </button>
        </>
    )
}
