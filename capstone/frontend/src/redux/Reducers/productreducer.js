import axios from 'axios'; 
import {LOAD_PRODUCTS} from '../Actions/productactions'
 
const initialState = {
    productArray : []
}

export function productReducer(state = initialState, action){
    switch(action.type){
        case LOAD_PRODUCTS:
            return{
                ...state,
                productArray: state.productArray.concat([action.product])
            }
    }
    return state;
}