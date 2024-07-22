import { createStore } from "redux"

const initialState = {
    user : {
        username : 'deep',
        wallet : 25000
    }
}

//action type
const UPDATE_WALLET = 'UPDATE_WALLET';

//action creation
export const updateWallet = (amount) => (
    {
        type: UPDATE_WALLET,
        payload : amount
    }
);

function reducer(state = initialState,action){
    switch(action.type){
        case UPDATE_WALLET:{
            return{
                user:{
                    username : state.user.username,
                    wallet : state.user.wallet - action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
}

const store = createStore(reducer);
export default store;