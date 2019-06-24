import {LOAD_ADVANTAGE} from '../Actions/advantageaction'

const initialState = {
    advantageArray:[]
}

export function advantageReducer(state= initialState, action){
switch(action.type){
    case (LOAD_ADVANTAGE):{
        return {
            ...state,
            advantageArray: state.advantageArray.concat([action.advantage]) 
        }
    }
   
}
 return state;
}