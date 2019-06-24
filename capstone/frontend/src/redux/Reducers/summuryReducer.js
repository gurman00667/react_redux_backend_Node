import { LOAD_SUMMURY } from '../Actions/summaryaction';

import axios from 'axios'

let initialState = {
    summuryArray: []
}

// let  data = axios.get(`http://localhost:8080/api/summary`).then(res=>{
//     console.log(res.data, 'lll');
//     return res.data[0]
// }).then(res=>{
    
//         initialState.summuryArray= res;
//     })



// const initialState = {
//     summuryArray : function getdata (){
//         axios.get(`http://localhost:8080/api/summary`).then(res=>{
//     console.log(res.data);
//     return res.data
//     })

// }}

export function summuryReducer(state = initialState, action){
    switch(action.type){
        case LOAD_SUMMURY:
            return{
                ...state,
                summuryArray: state.summuryArray.concat([action.summury])
            }
    }
    return state;
}
// export function productReducer(state = initialState, action){
//     switch(action.type){
//         case LOAD_PRODUCTS:
//             return{
//                 ...state,
//                 productArray: state.productArray.concat([action.summury])
//             }
//     }
//     return state;
// }
