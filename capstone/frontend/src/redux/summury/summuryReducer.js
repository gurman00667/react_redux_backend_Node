import { ADD_SUMMURY } from './actions';

const initialState = {
    summuryArray:[]
}

export function summuryReducer(state = initialState, action){
    switch(action.type){
        case ADD_SUMMURY:
            return{
                summuryArray: state.summuryArray.concat([action.summury])
            }
    }
    return state;
}