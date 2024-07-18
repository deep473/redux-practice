import React from 'react'

export default function Payment({user}) {
    return (
        <>
            <h2>Thank your for your purchase!</h2>
            <h3>Billing details:</h3>
            <p>Customer name : {user.username}</p>
            <p>Customer wallet : {user.wallet - 5000}</p>
        </>
    )
}
