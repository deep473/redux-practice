import React, { useState } from 'react'
import Login from './Login';

export default function Index() {
    
    const [isClicked, setIsClicked] = useState(false);
    function handleOnClick(){
        setIsClicked(true);
    }
    if(isClicked){
        return(
            <Login />
        )
    }
    return (
        <>
            <h2>Welcome to index page!</h2>
            <button onClick={handleOnClick}>Login</button>
        </>
    )
}
