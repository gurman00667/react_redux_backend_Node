import axios from 'axios';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export function LoadProductAction(product) {
    return {
        product: product,
        type: LOAD_PRODUCTS
    }
}

export  function LoadProductActionThunk() {
    return (dispatch)=>{
            axios.get(`http://localhost:8080/api/product`).then(res=>{
                console.log(res);
                dispatch(LoadProductAction(res.data[0]))
            })
    }
}